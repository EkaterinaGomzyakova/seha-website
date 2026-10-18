import { test, expect } from '@playwright/test';
import { products } from '../src/data/products.ts';
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
for (const locale of ['ru', 'en']) {
  test(`product pages ${locale} support specifications and ordering`, async ({ page, request }) => {
    for (const product of products) {
      const response = await request.get(
        `${base}/${locale}/products/${product.category}/${product.slug}/`
      );
      expect(response.ok()).toBe(true);
      expect(await response.text()).toContain(product.name[locale]);
    }
    await page.goto(`${base}/${locale}/products/substrates/open-top-grow-bag/`);
    await page.locator('.cookie-action').click();
    await expect(page.locator('main dl').first()).toContainText('60%');
    await expect(page.locator('main details')).toHaveCount(0);
    await expect(page.locator('link[hreflang="en"]')).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true
    );
    await page.locator('main [data-quote-product]').click();
    await expect(page.locator('[name="productId"]')).toHaveValue('open-top-grow-bag');
    await page.locator('[data-language-toggle]').click();
    await page.locator('[data-set-language]').first().click();
    await expect(page).toHaveURL(
      new RegExp(`/${locale === 'ru' ? 'en' : 'ru'}/products/substrates/open-top-grow-bag/`)
    );
    await page.goto(`${base}/${locale}/products/food/`);
    await expect(page).toHaveURL(new RegExp(`/${locale}/products/veymur/`));
    await expect(page.locator('.product-item')).toHaveCount(9);
    await page.locator('.product-item h3 a').first().click();
    await expect(page.locator('main h1')).toBeVisible();
  });
}
