import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const productImages = [
  'grow-bag',
  'open-top-grow-bag',
  'coco-peat',
  'coco-peat-bricks',
  'coco-husk-chips',
  'coco-husk-chips-bricks',
  'grow-cube-sleeve',
  'coco-discs',
  'coco-peat-tablets',
  'coco-peat-compost',
  'seeding-tray-media'
];
const names = {
  ru: [
    'Гроубэг',
    'Открытый гроубэг',
    'Кокосовый торф',
    'Кокосовый торф в брикетах',
    'Кокосовые чипсы',
    'Кокосовые чипсы в брикетах',
    'Кубический субстрат',
    'Кокосовые диски',
    'Таблетки из кокосового торфа',
    'Компост из кокосового торфа',
    'Субстрат для лотков рассады'
  ],
  en: [
    'Grow Bag',
    'Open-Top Grow Bag',
    'Coco Peat',
    'Coco Peat Bricks',
    'Coco Husk Chips',
    'Coco Husk Chips Bricks',
    'Grow Cube Sleeve',
    'Coco Discs',
    'Coco Peat Tablets',
    'Coco Peat Compost',
    'Seeding Tray Media'
  ]
};

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1280, 800, 440]) {
    test(`substrates ${locale} matches the updated catalog at ${width}px`, async ({
      page
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/products/substrates/`);
      await page.locator('.cookie-action').click();
      await page.locator('img').evaluateAll((images) => {
        for (const image of images) image.loading = 'eager';
      });
      const cards = page.locator('.product-item');
      await expect(cards).toHaveCount(11);
      await expect(cards.locator('h3')).toHaveText(names[locale]);
      await expect(page.locator('h1')).toHaveText(
        locale === 'ru' ? 'Кокосовые субстраты' : 'Growing Substrates'
      );
      await expect
        .poll(() => page.locator('.product-hero-icon img').evaluate((image) => image.currentSrc))
        .toContain('/assets/images/generated/substrates/coconut-substrates.png-');
      await expect(cards.nth(1)).toContainText('60%');
      await expect(cards.nth(1)).toContainText('40%');
      for (const [index, name] of productImages.entries()) {
        const photo = cards.nth(index).locator('img');
        await photo.scrollIntoViewIfNeeded();
        await expect
          .poll(() => photo.evaluate((image) => image.complete && image.naturalWidth > 0))
          .toBe(true);
        await photo.evaluate((image) => image.decode());
        expect(await photo.evaluate((image) => image.currentSrc)).toContain(
          `/assets/images/generated/substrates/${name}.png-`
        );
        const bounds = await cards.nth(index).locator('figure').boundingBox();
        expect(Math.abs(bounds.width - bounds.height)).toBeLessThan(1);
        expect(bounds.x).toBeGreaterThanOrEqual(0);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width
      );
      await expect(
        page.locator('#grow-cube-slice-m, #grow-cube-olive-l, #coco-peat-seed-starter')
      ).toHaveCount(0);
      if (locale === 'en') expect(await page.locator('main').innerText()).not.toMatch(/[А-Яа-яЁё]/);
      const schema = JSON.parse(
        await page.locator('script[type="application/ld+json"]').textContent()
      );
      const list = schema['@graph'].find((entry) => entry['@type'] === 'ItemList');
      expect(list.itemListElement).toHaveLength(11);
      if (width === 1920 || width === 440) {
        await page.evaluate(() => document.fonts.ready);
        // Reveal all cards before capturing the complete page, including below-fold content.
        await cards.evaluateAll((items) => items.forEach((item) => item.classList.add('visible')));
        await page.evaluate(async () => {
          await Promise.all(Array.from(document.images, (image) => image.decode()));
          window.scrollTo(0, 0);
          await new Promise((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(resolve))
          );
        });
        await page.screenshot({
          path: testInfo.outputPath(`substrates-${locale}-${width}.png`),
          fullPage: true
        });
        const results = await new AxeBuilder({ page }).analyze();
        expect(
          results.violations.filter((issue) => ['serious', 'critical'].includes(issue.impact))
        ).toEqual([]);
      }
    });
  }

  test(`substrates ${locale} language switch and new product inquiry`, async ({ page }) => {
    const otherLocale = locale === 'ru' ? 'en' : 'ru';
    await page.goto(`${base}/${locale}/products/substrates/`);
    await page.locator('.cookie-action').click();
    await page.locator('#open-top-grow-bag [data-quote-product]').click();
    await expect(page.locator('[name="product"]')).toHaveValue(names[locale][1]);
    await expect(page.locator('[name="productId"]')).toHaveValue('open-top-grow-bag');
    await page.locator('[data-language-toggle]').click();
    await page.locator(`[data-set-language="${otherLocale}"]`).click();
    await expect(page.locator('html')).toHaveAttribute('lang', otherLocale);
    expect(new URL(page.url()).pathname).toBe(`${base}/${otherLocale}/products/substrates/`);
    await expect(page.locator('.product-item h3')).toHaveText(names[otherLocale]);
  });
}
