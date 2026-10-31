import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { products } from '../src/data/products.ts';
import { applications, productApplications } from '../src/data/product-applications.ts';
import { productBenefits } from '../src/data/product-benefits.ts';
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  test(`product content ${locale}: quantity outside dialog and relevant applications`, async ({
    page,
    request
  }) => {
    for (const product of products) {
      const items = productApplications[product.id];
      expect(items?.length).toBeGreaterThan(0);
      const response = await request.get(
        `${base}/${locale}/products/${product.category}/${product.slug}/`
      );
      expect(response.ok()).toBe(true);
      const html = await response.text();
      for (const key of items) expect(html).toContain(applications[key].label[locale]);
      const benefits = productBenefits[product.id];
      expect(benefits?.length).toBeGreaterThanOrEqual(2);
      for (const benefit of benefits) {
        expect(html).toContain(benefit.title[locale]);
        expect(html).toContain(benefit.description[locale]);
      }
      expect(html).toContain('data-order-quantity');
    }
    await page.goto(`${base}/${locale}/products/veymur/veymur-mct-oil/`);
    const quantity = page.locator('main [data-order-quantity]');
    const control = page.locator('[data-quantity-control]');
    await expect(quantity).toHaveValue('1');
    await expect(control.locator('[data-quantity-minus]')).toBeDisabled();
    await control.locator('[data-quantity-plus]').click();
    await expect(quantity).toHaveValue('2');
    await quantity.fill('12');
    await quantity.focus();
    expect(
      await control
        .locator('.product-quantity__field')
        .evaluate((element) => getComputedStyle(element).boxShadow)
    ).not.toBe('none');
    await control.locator('[data-quantity-minus]').click();
    await expect(quantity).toHaveValue('11');
    await page.locator('main [data-quote-product]').click();
    const dialog = page.locator('#product-inquiry');
    await expect(dialog.locator('[name="quantity"]')).toHaveValue('11');
    await expect(dialog.locator('[name="quantity"]')).not.toBeVisible();
    await expect(dialog.locator('[data-inquiry-quantity-summary]')).toContainText('11');
    await page.keyboard.press('Escape');
    const labels = await page.locator('main dl dt').allTextContents();
    for (const label of [
      'Допуски и документы партии',
      'Готовая упаковка',
      'Промышленная фасовка',
      'Tolerances and batch documents',
      'Consumer packs',
      'Consumer packaging',
      'Bulk packaging',
      'Industrial packaging'
    ])
      expect(labels).not.toContain(label);
    await expect(page.locator('.product-applications li')).toHaveCount(
      productApplications['veymur-mct-oil'].length
    );
    const accessibility = await new AxeBuilder({ page }).include('main').analyze();
    expect(
      accessibility.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
    ).toEqual([]);
    await page.locator('.cookie-action').click();
    await expect(page.locator('.product-benefits li')).toHaveCount(
      productBenefits['veymur-mct-oil'].length
    );
    expect(
      await page
        .locator('.product-benefits')
        .evaluate((section) => section.scrollWidth <= section.clientWidth)
    ).toBe(true);
    await page.locator('.product-benefits').screenshot({
      path: `test-results/benefits-${locale}-${test.info().project.name}.png`
    });
    await page
      .locator('.product-applications')
      .screenshot({ path: `test-results/applications-${locale}-${test.info().project.name}.png` });
    await control.screenshot({
      path: `test-results/quantity-${locale}-${test.info().project.name}.png`
    });
    await page.goto(`${base}/${locale}/products/fiber/coir-weed-mat/`);
    const area = page.locator('[data-order-quantity]');
    await area.fill('2.5');
    await page.locator('main [data-quote-product]').click();
    await expect(dialog.locator('[name="quantity"]')).toHaveValue('2.5');
    await expect(dialog.locator('[name="quantityUnit"]')).toHaveValue('m2');
  });
}
