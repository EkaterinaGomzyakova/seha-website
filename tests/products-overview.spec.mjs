import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const slugs = ['substrates', 'veymur', 'fiber', 'shell'];
const images = [
  'substrates/coconut-substrates.png',
  'veymur/veymur-products.png',
  'fiber/coir-products.png',
  'shell/coco-shell-products.png'
];
const copy = {
  ru: {
    heading: ['Один кокос', 'Больше возможностей'],
    titles: [
      'Кокосовые субстраты',
      'Пищевые продукты Veymur',
      'Кокосовое волокно',
      'Кокосовая скорлупа'
    ],
    descriptions: [
      'Торф, чипсы, брикеты и диски для теплиц, гидропоники и рассады.',
      'Кокосовые пищевые продукты и ингредиенты для розницы и производства.',
      'Натуральное волокно и изделия для производства, ландшафта и защиты почвы.',
      'Сырьё для активированного угля, топлива, фильтрации и переработки.'
    ]
  },
  en: {
    heading: ['One coconut', 'More possibilities'],
    titles: ['Coconut Substrates', 'Veymur Food Products', 'Coconut Fibre', 'Coconut Shell'],
    descriptions: [
      'Coir pith, chips, bricks, and discs for greenhouses, hydroponics, and seedlings.',
      'Coconut food products and ingredients for retail and manufacturing.',
      'Natural fibre and fibre-based products for manufacturing, landscaping, and soil protection.',
      'Raw material for activated carbon, fuel, filtration, and processing.'
    ]
  }
};

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1280, 800, 440]) {
    test(`catalogue ${locale} matches Figma assets, copy and layout at ${width}px`, async ({
      page
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/products/`);
      await page.locator('.cookie-action').click();
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('h1')).toHaveText(copy[locale].heading.join(''));
      await expect(page.locator('.product-category')).toHaveCount(4);
      await expect(page.locator('.product-category h2')).toHaveText(copy[locale].titles);
      await expect(page.locator('.product-category > p')).toHaveText(copy[locale].descriptions);
      await expect(page.locator('.product-category-number')).toHaveText(['01', '02', '03', '04']);
      for (const [index, slug] of slugs.entries()) {
        const category = page.locator('.product-category').nth(index);
        await expect(category).toHaveAttribute('href', `${base}/${locale}/products/${slug}/`);
        const photo = category.locator('.product-category-image img');
        await photo.scrollIntoViewIfNeeded();
        await photo.evaluate((image) => image.decode());
        expect(await photo.evaluate((image) => image.currentSrc)).toContain(
          '/assets/images/generated/' + images[index] + '-'
        );
        const bounds = await photo.boundingBox();
        expect(bounds.width).toBe(width <= 440 ? 64 : 94);
        expect(bounds.height).toBe(bounds.width);
        await expect(category.locator('p')).toBeVisible();
        expect(await category.locator('.arrow-circle img').boundingBox()).toMatchObject({
          width: 24,
          height: 24
        });
      }
      await page.locator('.overview-hero__image').evaluate((image) => image.decode());
      expect(
        await page.locator('.overview-hero__image').evaluate((image) => image.currentSrc)
      ).toContain('/assets/images/generated/products/coconut-products.png-');
      const schema = JSON.parse(
        await page.locator('script[type="application/ld+json"]').textContent()
      );
      const list = schema['@graph'].find((entry) => entry['@type'] === 'ItemList');
      expect(list.itemListElement.map((entry) => entry.item.name)).toEqual(copy[locale].titles);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width
      );
      if (locale === 'en') {
        expect(await page.locator('main').innerText()).not.toMatch(/[А-Яа-яЁё]/);
        expect(await page.locator('footer').innerText()).not.toMatch(/[А-Яа-яЁё]/);
      }
      if (width === 1920) {
        const hero = await page.locator('.overview-hero').boundingBox();
        expect(hero.width).toBe(1648);
        expect(hero.height).toBe(500);
        expect(hero.x).toBe(136);
        expect((await page.locator('.products-catalog').boundingBox()).width).toBe(1368);
        await expect(page.locator('.product-category h2').first()).toHaveCSS('font-size', '48px');
        await expect(page.locator('#quote-title')).toHaveCSS('font-size', '72px');
      }
      if (width === 1920 || width === 440) {
        await page.locator('img').evaluateAll(async (images) => {
          await Promise.all(
            images.map(async (image) => {
              image.loading = 'eager';
              await image.decode();
            })
          );
        });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({
          path: testInfo.outputPath(`catalogue-${locale}-${width}.png`),
          fullPage: true
        });
        const result = await new AxeBuilder({ page }).analyze();
        expect(
          result.violations.filter((violation) =>
            ['serious', 'critical'].includes(violation.impact)
          )
        ).toEqual([]);
      }
    });
  }
  test(`catalogue ${locale} adapts without clipping around all product breakpoints`, async ({
    page
  }) => {
    for (const width of [360, 390, 440, 441, 600, 800, 801, 1024, 1280, 1281, 1920]) {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/products/`);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
        `${width}px overflow`
      ).toBeLessThanOrEqual(width);
      for (const item of await page.locator('.product-category').all()) {
        const title = await item.locator('h2').boundingBox();
        const description = await item.locator('p').boundingBox();
        expect(title.x).toBeGreaterThanOrEqual(0);
        expect(title.x + title.width).toBeLessThanOrEqual(width);
        expect(description.height).toBeGreaterThan(0);
      }
      const hero = await page.locator('.overview-hero').boundingBox();
      const margin = width <= 440 ? 24 : width <= 800 ? 32 : width <= 1280 ? 96 : 136;
      expect(hero.x).toBe(margin);
      expect(hero.width).toBe(width - 2 * margin);
    }
  });
  test(`catalogue ${locale} switches languages and opens/closes the menu`, async ({ page }) => {
    await page.setViewportSize({ width: 440, height: 900 });
    await page.goto(`${base}/${locale}/products/`);
    await page.locator('.cookie-action').click();
    await page.locator('.menu-toggle').click();
    await expect(page.locator('#mobile-nav')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-nav')).toBeHidden();
    await expect(page.locator('.menu-toggle')).toBeFocused();
    const other = locale === 'ru' ? 'en' : 'ru';
    await page.locator('[data-language-toggle]').click();
    await page.locator(`[data-set-language="${other}"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${other}/products/$`));
    await expect(page.locator('.product-category h2')).toHaveText(copy[other].titles);
    await page.locator('.product-category').nth(1).click();
    await expect(page).toHaveURL(new RegExp(`/${other}/products/veymur/$`));
    await expect(page.locator('.product-item')).toHaveCount(9);
  });
}
