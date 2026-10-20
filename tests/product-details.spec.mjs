import { test, expect } from '@playwright/test';
import { products, productsForCategory } from '../src/data/products.ts';
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
for (const locale of ['ru', 'en']) {
  test(`product pages ${locale} support specifications and ordering`, async ({ page, request }) => {
    for (const product of products) {
      const response = await request.get(
        `${base}/${locale}/products/${product.category}/${product.slug}/`
      );
      expect(response.ok()).toBe(true);
      expect(await response.text()).toContain(product.name[locale]);
      if (product.id === 'veymur-mct-oil') {
        const html = await response.text();
        for (const value of ['55–65%', '35–45%', '325–345', 'Listeria monocytogenes']) {
          expect(html).toContain(value);
        }
        expect(html).toContain(
          locale === 'ru' ? '2 года с даты производства' : '2 years from the date of manufacture'
        );
      }
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
    await expect(page.locator('.product-item')).toHaveCount(productsForCategory('veymur').length);
    const productUrl = await page.locator('.product-item__link').first().getAttribute('href');
    for (const target of ['figure', 'p']) {
      await page.goto(`${base}/${locale}/products/veymur/`);
      const area = page.locator(`.product-item ${target}`).first();
      await area.scrollIntoViewIfNeeded();
      const bounds = await area.boundingBox();
      // Real pointer click: the stretched link must cover both the image and description.
      await page.mouse.click(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
      await expect(page).toHaveURL(new RegExp(`${productUrl}$`));
      await expect(page.locator('main h1')).toBeVisible();
    }
  });
}
