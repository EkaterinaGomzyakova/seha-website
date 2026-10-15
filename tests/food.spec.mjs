import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Independent reference copy checked against Figma 147:7670 and 147:7769.
const catalog = JSON.parse(
  readFileSync(new URL('./fixtures/food-catalog.json', import.meta.url), 'utf8')
);
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1280, 800, 440]) {
    test(`food ${locale} matches Figma copy and photos at ${width}px`, async ({
      page
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/products/food/`);
      await page.locator('.cookie-action').click();
      await page.evaluate(() => document.fonts.ready);
      const cards = page.locator('.product-item');
      await expect(cards).toHaveCount(9);
      await expect(cards.locator('h3')).toHaveText(catalog.map((product) => product[locale].name));
      await expect(cards.locator('p')).toHaveText(
        catalog.map((product) => product[locale].description)
      );
      await expect(page.locator('.product-item > span')).toHaveText(
        catalog.map((product) => product[locale].label)
      );
      await expect(cards.locator('.button')).toHaveText(
        Array(9).fill(locale === 'ru' ? 'Заказать' : 'Request a Quote')
      );
      await expect
        .poll(() => page.locator('.product-hero-icon img').evaluate((image) => image.currentSrc))
        .toContain('/assets/images/generated/food/food-products.png-');
      for (const [index, product] of catalog.entries()) {
        const photo = cards.nth(index).locator('img');
        await photo.scrollIntoViewIfNeeded();
        await photo.evaluate((image) => image.decode());
        expect(await photo.evaluate((image) => image.currentSrc)).toContain(
          `/assets/images/generated/food/${product.image}-`
        );
        const bounds = await cards.nth(index).locator('figure').boundingBox();
        expect(Math.abs(bounds.width - bounds.height)).toBeLessThan(1);
        expect(bounds.x).toBeGreaterThanOrEqual(0);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
        await expect(cards.nth(index)).toHaveAttribute('id', product.id);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width
      );
      if (locale === 'en') {
        expect(await page.locator('main').innerText()).not.toMatch(/[А-Яа-яЁё]/);
        expect(await page.locator('footer').innerText()).not.toMatch(/[А-Яа-яЁё]/);
      }
      const schema = JSON.parse(
        await page.locator('script[type="application/ld+json"]').textContent()
      );
      const list = schema['@graph'].find((entry) => entry['@type'] === 'ItemList');
      expect(list.itemListElement.map((entry) => entry.item.name)).toEqual(
        catalog.map((product) => product[locale].name)
      );
      if (width === 1920 || width === 440) {
        await page
          .locator('.product-item')
          .evaluateAll((items) => items.forEach((item) => item.classList.add('visible')));
        await page.evaluate(async () => {
          await Promise.all(Array.from(document.images, (image) => image.decode()));
          window.scrollTo(0, 0);
          await new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve))
          );
        });
        await page.screenshot({
          path: testInfo.outputPath(`food-${locale}-${width}.png`),
          fullPage: true
        });
        const results = await new AxeBuilder({ page }).analyze();
        expect(
          results.violations.filter((issue) => ['serious', 'critical'].includes(issue.impact))
        ).toEqual([]);
      }
    });
  }

  test(`food ${locale} keeps the selected product and switches language`, async ({ page }) => {
    const otherLocale = locale === 'ru' ? 'en' : 'ru';
    await page.goto(`${base}/${locale}/products/food/`);
    await page.locator('.cookie-action').click();
    await page.locator('#mct-oil [data-quote-product]').click();
    await expect(page.locator('[name="product"]')).toHaveValue(catalog[8][locale].name);
    await expect(page.locator('[name="productId"]')).toHaveValue('mct-oil');
    await page.locator('[data-language-toggle]').click();
    await page.locator(`[data-set-language="${otherLocale}"]`).click();
    await expect(page.locator('html')).toHaveAttribute('lang', otherLocale);
    expect(new URL(page.url()).pathname).toBe(`${base}/${otherLocale}/products/food/`);
    await expect(page.locator('.product-item h3')).toHaveText(
      catalog.map((product) => product[otherLocale].name)
    );
  });
}
