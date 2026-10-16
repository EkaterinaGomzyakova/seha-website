import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1281, 1280, 800, 441, 440, 360]) {
    test(`home ${locale} layout and assets at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/`);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('.home-hero h1')).toHaveCSS(
        'font-size',
        width > 1280 ? '72px' : width > 440 ? '52px' : '32px'
      );
      await expect(page.locator('footer')).toHaveCount(1);
      await expect(page.locator('.product-direction-card')).toHaveCount(4);
      await expect(page.locator('.industry-card')).toHaveCount(10);
      const cards = page.locator('.product-direction-card');
      const first = await cards.nth(0).boundingBox();
      const second = await cards.nth(1).boundingBox();
      expect(Math.abs(first.y - second.y) < 1).toBe(width > 440);
      for (const slug of ['food', 'substrates', 'fiber', 'shell']) {
        await expect(page.locator(`.product-direction-card[href$="/${slug}/"]`)).toHaveAttribute(
          'href',
          `${base}/${locale}/products/${slug}/`
        );
      }
      const assets = await page.locator('.home-main img').evaluateAll(async (images) => {
        images.forEach((image) => {
          image.loading = 'eager';
        });
        await Promise.all(images.map((image) => image.decode()));
        return images.map((image) => ({
          src: image.currentSrc,
          loaded: image.naturalWidth > 0,
          width: image.getBoundingClientRect().width,
          height: image.getBoundingClientRect().height
        }));
      });
      expect(assets).toHaveLength(18);
      for (const asset of assets) {
        expect(asset.loaded).toBe(true);
        expect(asset.src).toContain('/home/');
        expect(asset.width).toBeGreaterThan(0);
        expect(asset.height).toBeGreaterThan(0);
        if (asset.src.endsWith('.svg')) {
          expect(asset.width).toBe(58);
          expect(asset.height).toBe(58);
        }
      }
      const plantation = await page.locator('.origin-image__palms').evaluate((image) => {
        const bounds = image.getBoundingClientRect();
        const slot = image.closest('.origin-image').getBoundingClientRect();
        return { top: bounds.top - slot.top, bottom: bounds.bottom - slot.bottom };
      });
      expect(plantation.top).toBeLessThanOrEqual(0);
      expect(plantation.bottom).toBeGreaterThanOrEqual(-1);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      expect(overflow).toBeLessThanOrEqual(1);
      await expect(page.locator('[data-industry-prev]')).toBeDisabled();
      await page.locator('[data-industry-next]').click();
      await expect
        .poll(() => page.locator('.industry-track').evaluate((track) => track.scrollLeft))
        .toBeGreaterThan(0);
      await expect(page.locator('[data-industry-prev]')).toBeEnabled();
      await page.locator('.industry-track').evaluate((track) => {
        track.scrollLeft = track.scrollWidth;
      });
      await expect(page.locator('[data-industry-next]')).toBeDisabled();
      await page.locator('.industry-track').evaluate((track) => {
        track.scrollLeft = 0;
      });
      await expect(page.locator('.home-hero .button')).toHaveAttribute(
        'href',
        `${base}/${locale}/products/`
      );
      await expect(page.locator('.ingredient-action')).toHaveAttribute('href', '#contacts');
      await page.locator('.cookie-action').click();
      await page.locator('.home-hero').screenshot({
        path: testInfo.outputPath('hero.png'),
        style: '.skip { visibility: hidden; }'
      });
      await page.screenshot({
        path: testInfo.outputPath('home.png'),
        fullPage: true,
        style: '.skip { visibility: hidden; }'
      });
      const result = await new AxeBuilder({ page }).include('main').analyze();
      expect(
        result.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
      ).toEqual([]);
    });
  }
}
