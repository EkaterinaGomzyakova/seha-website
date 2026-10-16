import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { productionPageCopy } from '../src/data/production-page.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1281, 1280, 800, 441, 440, 390, 360, 320]) {
    test(`production ${locale} is complete at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/production/`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveCSS(
        'font-size',
        width > 1280 ? '72px' : width > 440 ? '52px' : '32px'
      );
      await expect(page.locator('.production-main > section')).toHaveCount(8);
      await expect(page.locator('.branch-card')).toHaveCount(2);
      await expect(page.locator('.process-item')).toHaveCount(6);
      await expect(page.locator('.facility-units > div')).toHaveCount(4);
      await expect(page.locator('.assurance-grid > article')).toHaveCount(3);
      await expect(page.locator('.russia-list > li')).toHaveCount(4);
      await expect(page.locator('footer')).toHaveCount(1);
      await expect(page.locator('.production-hero-copy > p')).toHaveText(
        productionPageCopy[locale].productionHeroText
      );
      await expect(page.locator('.cert-copy > p')).toHaveText(
        productionPageCopy[locale].certPreviewText
      );
      await expect(page.locator('.production-quality-action')).toHaveAttribute(
        'href',
        `${base}/${locale}/quality/`
      );
      const images = await page.locator('.production-main img').evaluateAll(async (images) => {
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
      expect(images).toHaveLength(17);
      for (const image of images) {
        expect(image.src).toContain('/production/');
        expect(image.width).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
      }
      for (let index = 0; index < 6; index++) {
        const step = page.locator('.process-item').nth(index);
        await step.scrollIntoViewIfNeeded();
        await expect(step.locator('h3')).toBeVisible();
        await expect(step.locator('p')).toBeVisible();
        await expect(step.locator('figure')).toBeVisible();
        await expect(step.locator('figcaption')).toBeVisible();
        await expect(step.locator('.process-media__photo')).toHaveAttribute(
          'alt',
          productionPageCopy[locale][
            index === 0 ? 'processSectionAlt' : `processSectionAlt${index + 1}`
          ]
        );
        if (width <= 800) {
          const description = await step.locator('p').boundingBox();
          const photo = await step.locator('figure').boundingBox();
          expect(photo.y).toBeGreaterThanOrEqual(description.y + description.height);
        }
      }
      await expect(page.locator('.process-sticky')).toHaveCSS(
        'position',
        width <= 1280 ? 'static' : 'sticky'
      );
      const clipped = await page
        .locator('.production-main')
        .evaluate((main) =>
          [...main.querySelectorAll('h1,h2,h3,p,li,figcaption')]
            .filter((element) => element.scrollWidth > element.clientWidth + 1)
            .map((element) => element.textContent)
        );
      expect(clipped).toEqual([]);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
      ).toBeLessThanOrEqual(1);
      if (width <= 800) {
        await page.locator('.menu-toggle').click();
        await expect(page.locator('#mobile-nav')).toBeVisible();
        await page.locator('.mobile-nav-close').click();
        await expect(page.locator('#mobile-nav')).toBeHidden();
      }
      await page.locator('.cookie-action').click();
      if (width === 390) {
        for (const [name, selector] of [
          ['branches', '.production-branches'],
          ['first-step', '.process-item:first-child'],
          ['facility', '.facility-showcase'],
          ['documents', '.cert-preview']
        ]) {
          await page.locator(selector).screenshot({
            path: testInfo.outputPath(`${name}.png`),
            style: '.skip { visibility: hidden; }'
          });
        }
      }
      // Full-page captures must start at the top so the desktop sticky intro
      // is captured beside the first step, not at the last scrolled position.
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: testInfo.outputPath('production.png'),
        fullPage: true,
        style: '.skip { visibility: hidden; }'
      });
      const result = await new AxeBuilder({ page }).include('main').analyze();
      expect(
        result.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
      ).toEqual([]);
      const other = locale === 'ru' ? 'en' : 'ru';
      await page.locator('.language-switch').click();
      await page.locator(`.language-menu a[href="${base}/${other}/production/"]`).click();
      await expect(page).toHaveURL(new RegExp(`/${other}/production/$`));
      await expect(page.locator('html')).toHaveAttribute('lang', other);
    });
  }
}
