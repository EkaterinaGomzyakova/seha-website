import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { aboutPageCopy } from '../src/data/about-page.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1281, 1280, 800, 441, 440, 390, 360, 320]) {
    test(`about ${locale} is complete at ${width}px`, async ({ page, isMobile }, testInfo) => {
      test.skip(
        isMobile && ![390, 360, 320].includes(width),
        'Touch checks focus on mobile widths.'
      );
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/about/`);
      await page.evaluate(() => document.fonts.ready);
      const copy = aboutPageCopy[locale];
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveText(copy.aboutHeroTitle);
      await expect(page.locator('h1')).toHaveCSS(
        'font-size',
        width > 1280 ? '72px' : width > 440 ? '52px' : '32px'
      );
      await expect(page.locator('.breadcrumbs [aria-current="page"]')).toHaveText(copy.pageLabel);
      await expect(page.locator('.about-main > section')).toHaveCount(8);
      await expect(page.locator('.about-hero img')).toHaveCount(0);
      await expect(page.locator('.about-numbers > div')).toHaveCount(4);
      await expect(page.locator('.about-principle')).toHaveCount(4);
      await expect(page.locator('.about-timeline-grid article')).toHaveCount(4);
      await expect(page.locator('.about-client-list li')).toHaveCount(8);
      await expect(page.locator('footer')).toHaveCount(1);
      await expect(page.locator('.about-hero > p')).toHaveText(copy.aboutHeroText);
      await expect(page.locator('.about-intro-copy > p').first()).toHaveText(copy.aboutIntroText);
      await expect(page.locator('.about-intro-copy > p').last()).toHaveText(copy.aboutIntroText2);
      await expect(page.locator('.about-principle').last().locator('h3')).toHaveText(
        copy.aboutApproachCardTitle4
      );
      await expect(page.locator('.about-cta-copy > p')).toHaveText(copy.certPreviewText);
      await expect(page.locator('.about-cta-copy .button')).toHaveAttribute('href', '#contacts');
      const images = await page.locator('.about-main img').evaluateAll(async (images) => {
        images.forEach((image) => {
          image.loading = 'eager';
        });
        await Promise.all(images.map((image) => image.decode()));
        return images.map((image) => ({
          src: image.currentSrc,
          width: image.naturalWidth,
          renderedWidth: image.getBoundingClientRect().width,
          height: image.getBoundingClientRect().height
        }));
      });
      expect(images).toHaveLength(3);
      for (const image of images) {
        expect(image.src).toContain('/about/');
        expect(image.width).toBeGreaterThan(0);
        expect(image.renderedWidth).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
      }
      for (const selector of ['.about-principle', '.about-timeline-grid article']) {
        for (const item of await page.locator(selector).all()) {
          await item.scrollIntoViewIfNeeded();
          await expect(item.locator('h3')).toBeVisible();
          await expect(item.locator('p')).toBeVisible();
        }
      }
      const clipped = await page
        .locator('main')
        .evaluate((main) =>
          [...main.querySelectorAll('h1,h2,h3,p,b,li,figcaption')]
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
        const text = await page.locator('.about-shift-copy').boundingBox();
        const photo = await page.locator('.about-shift-image').boundingBox();
        expect(photo.y).toBeGreaterThanOrEqual(text.y + text.height);
        await page.locator('.menu-toggle').click();
        await expect(page.locator('#mobile-nav')).toBeVisible();
        await page.locator('.mobile-nav-close').click();
        await expect(page.locator('#mobile-nav')).toBeHidden();
      }
      if (width <= 440) {
        for (const selector of [
          '.about-principle',
          '.about-timeline-grid article',
          '.about-numbers > div'
        ]) {
          const boxes = await page.locator(selector).evaluateAll((items) =>
            items.map((item) => {
              const box = item.getBoundingClientRect();
              return { y: box.y, height: box.height };
            })
          );
          for (let index = 1; index < boxes.length; index++) {
            expect(boxes[index].y).toBeGreaterThanOrEqual(
              boxes[index - 1].y + boxes[index - 1].height
            );
          }
        }
      }
      await page.locator('.cookie-action').click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: testInfo.outputPath('about.png'),
        fullPage: true,
        style: '.skip { visibility: hidden; }'
      });
      if (width === 390) {
        for (const [name, selector] of [
          ['intro', '.about-intro'],
          ['approach', '.about-approach'],
          ['shift', '.about-shift'],
          ['clients', '.about-clients'],
          ['cta', '.about-cta']
        ]) {
          await page.locator(selector).screenshot({ path: testInfo.outputPath(name + '.png') });
        }
      }
      const result = await new AxeBuilder({ page }).include('main').analyze();
      expect(
        result.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
      ).toEqual([]);
      const other = locale === 'ru' ? 'en' : 'ru';
      await page.locator('.language-switch').click();
      await page.locator(`.language-menu a[href="${base}/${other}/about/"]`).click();
      await expect(page).toHaveURL(new RegExp(`/${other}/about/$`));
      await expect(page.locator('html')).toHaveAttribute('lang', other);
      await expect(page.locator('h1')).toHaveText(aboutPageCopy[other].aboutHeroTitle);
    });
  }
}
