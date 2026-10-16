import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { qualityPageCopy } from '../src/data/quality-page.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1281, 1280, 800, 441, 440, 390, 360, 320]) {
    test(`quality ${locale} is complete at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/quality/`);
      await page.evaluate(() => document.fonts.ready);
      const copy = qualityPageCopy[locale];
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveText(copy.qualityHeroTitle + copy.qualityHeroEmphasis);
      await expect(page.locator('.quality-main > section')).toHaveCount(6);
      await expect(page.locator('.standard-card')).toHaveCount(3);
      await expect(page.locator('.quality-proof-list article')).toHaveCount(4);
      await expect(page.locator('.quality-document-grid article')).toHaveCount(4);
      await expect(page.locator('footer')).toHaveCount(1);
      await expect(page.locator('.quality-hero-copy > p')).toHaveText(copy.qualityHeroText);
      await expect(page.locator('.quality-cta-copy > p')).toHaveText(copy.certPreviewText);
      const images = await page.locator('.quality-main img').evaluateAll(async (images) => {
        images.forEach((image) => {
          image.loading = 'eager';
        });
        await Promise.all(images.map((image) => image.decode()));
        return images.map((image) => ({
          src: image.currentSrc,
          width: image.naturalWidth,
          height: image.getBoundingClientRect().height
        }));
      });
      expect(images).toHaveLength(23);
      for (const image of images) {
        expect(image.src).toContain('/quality/');
        expect(image.width).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
      }
      const clipped = await page
        .locator('main')
        .evaluate((main) =>
          [...main.querySelectorAll('h1,h2,h3,p,b')]
            .filter(
              (element) => element.clientWidth && element.scrollWidth > element.clientWidth + 1
            )
            .map((element) => element.textContent)
        );
      expect(clipped).toEqual([]);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
      ).toBeLessThanOrEqual(1);
      if (width <= 800) {
        const hero = await page.locator('.quality-hero-copy').boundingBox();
        const photo = await page.locator('.quality-hero-card').boundingBox();
        expect(photo.y).toBeGreaterThanOrEqual(hero.y + hero.height);
        for (const selector of [
          '.standard-card',
          '.quality-proof-list article',
          '.quality-document-grid article'
        ]) {
          for (const item of await page.locator(selector).all()) {
            await item.scrollIntoViewIfNeeded();
            await expect(item.locator('h3')).toBeVisible();
            await expect(item.locator('p')).toBeVisible();
          }
        }
        await page.locator('.menu-toggle').click();
        await expect(page.locator('#mobile-nav')).toBeVisible();
        await page.locator('.mobile-nav-close').click();
        await expect(page.locator('#mobile-nav')).toBeHidden();
      }
      if (width <= 440) {
        const cards = await page.locator('.quality-document-grid article').all();
        for (let index = 1; index < cards.length; index++) {
          const previous = await cards[index - 1].boundingBox();
          const current = await cards[index].boundingBox();
          expect(current.y).toBeGreaterThanOrEqual(previous.y + previous.height);
        }
      }
      await page.locator('.cookie-action').click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: testInfo.outputPath('quality.png'),
        fullPage: true,
        style: '.skip { visibility: hidden; }'
      });
      if (width === 390) {
        await page.locator('.quality-hero').screenshot({ path: testInfo.outputPath('hero.png') });
        await page
          .locator('.quality-standards')
          .screenshot({ path: testInfo.outputPath('certifications.png') });
        await page.locator('.quality-proof').screenshot({ path: testInfo.outputPath('proof.png') });
        await page
          .locator('.standards-grid')
          .screenshot({ path: testInfo.outputPath('standards.png') });
      }
      const result = await new AxeBuilder({ page }).include('main').analyze();
      expect(
        result.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
      ).toEqual([]);
      const other = locale === 'ru' ? 'en' : 'ru';
      await page.locator('.language-switch').click();
      await page.locator(`.language-menu a[href="${base}/${other}/quality/"]`).click();
      await expect(page).toHaveURL(new RegExp(`/${other}/quality/$`));
      await expect(page.locator('html')).toHaveAttribute('lang', other);
    });
  }
}
