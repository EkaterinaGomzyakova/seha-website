import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Product names, packaging and image order from Figma 159:5519; descriptions are newly written editorial copy.
const catalog = JSON.parse(
  readFileSync(new URL('./fixtures/veymur-catalog.json', import.meta.url), 'utf8')
);
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1280, 800, 440]) {
    test(`veymur ${locale} matches Figma copy and photos at ${width}px`, async ({
      page
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      await page.goto(`${base}/${locale}/products/veymur/`);
      await page.locator('.cookie-action').click();
      await page.evaluate(() => document.fonts.ready);
      const cards = page.locator('.product-item');
      await expect(page.locator('.breadcrumbs [aria-current="page"]')).toHaveText(
        locale === 'ru' ? 'Пищевые продукты Veymur' : 'Veymur Food Products'
      );
      await expect(cards).toHaveCount(5);
      await expect(cards.locator('h3')).toHaveText(catalog.map((product) => product[locale].name));
      await expect(cards.locator('p')).toHaveText(
        catalog.map((product) => product[locale].description)
      );
      await expect(page.locator('.product-item > span')).toHaveText(
        catalog.map((product) => product[locale].label)
      );
      await expect(cards.locator('.button')).toHaveText(
        Array(5).fill(locale === 'ru' ? 'Заказать' : 'Request a Quote')
      );
      await expect
        .poll(() => page.locator('.product-hero-icon img').evaluate((image) => image.currentSrc))
        .toContain('/assets/images/generated/veymur/veymur-products.png-');
      for (const [index, product] of catalog.entries()) {
        const photo = cards.nth(index).locator('img');
        await photo.scrollIntoViewIfNeeded();
        await photo.evaluate((image) => image.decode());
        expect(await photo.evaluate((image) => image.currentSrc)).toContain(
          `/assets/images/generated/veymur/${product.image}-`
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
          path: testInfo.outputPath(`veymur-${locale}-${width}.png`),
          fullPage: true
        });
        const results = await new AxeBuilder({ page }).analyze();
        expect(
          results.violations.filter((issue) => ['serious', 'critical'].includes(issue.impact))
        ).toEqual([]);
      }
    });
  }

  test(`veymur ${locale} keeps the selected product and switches language`, async ({ page }) => {
    const otherLocale = locale === 'ru' ? 'en' : 'ru';
    await page.goto(`${base}/${locale}/products/veymur/`);
    await page.locator('.cookie-action').click();
    await page.locator('#veymur-coconut-milk [data-quote-product]').click();
    await expect(page.locator('[name="product"]')).toHaveValue(
      `${catalog[4][locale].name} Veymur, ${catalog[4][locale].label.replaceAll(' ', '\u00a0')}`
    );
    await expect(page.locator('[name="productId"]')).toHaveValue('veymur-coconut-milk');
    await page.locator('[data-language-toggle]').click();
    await page.locator(`[data-set-language="${otherLocale}"]`).click();
    await expect(page.locator('html')).toHaveAttribute('lang', otherLocale);
    expect(new URL(page.url()).pathname).toBe(`${base}/${otherLocale}/products/veymur/`);
    await expect(page.locator('.product-item h3')).toHaveText(
      catalog.map((product) => product[otherLocale].name)
    );
  });
}

for (const locale of ['ru', 'en']) {
  test(`veymur ${locale} has indexable content and entry points without JavaScript`, async ({
    browser,
    baseURL,
    request
  }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
    const page = await context.newPage();
    await page.goto(`${base}/${locale}/products/veymur/`);
    await expect(page.locator('h1')).toHaveText(
      locale === 'ru' ? 'Пищевые продукты Veymur' : 'Veymur Food Products'
    );
    await expect(page.locator('.product-item')).toHaveCount(5);
    const path = `${base}/${locale}/products/veymur/`;
    expect(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).pathname).toBe(
      path
    );
    for (const language of ['ru', 'en']) {
      const alternate = page.locator(`link[rel="alternate"][hreflang="${language}"]`);
      expect(new URL(await alternate.getAttribute('href')).pathname).toBe(
        `${base}/${language}/products/veymur/`
      );
    }
    const sitemap = await request.get(`${base}/sitemap.xml`);
    expect(await sitemap.text()).toContain(path);
    await page.goto(`${base}/${locale}/products/`);
    await page.locator(`.products-list a[href="${path}"]`).click();
    await expect(page.locator('.product-item')).toHaveCount(5);
    await page.goto(`${base}/${locale}/products/food/`);
    await page.locator(`.product-hero a[href="${path}"]`).click();
    await expect(page.locator('.product-item')).toHaveCount(5);
    await context.close();
  });
  test(`veymur ${locale} mobile menu opens and closes`, async ({ page }) => {
    await page.setViewportSize({ width: 440, height: 900 });
    await page.goto(`${base}/${locale}/products/veymur/`);
    await page.locator('.cookie-action').click();
    const trigger = page.locator('.menu-toggle');
    await trigger.click();
    await expect(page.locator('#mobile-nav')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-nav')).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });
}
