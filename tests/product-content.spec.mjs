import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { products } from '../src/data/products.ts';
import {
  applications,
  productApplications,
  productApplicationDescriptions
} from '../src/data/product-applications.ts';
import { productBenefits } from '../src/data/product-benefits.ts';
import { specificationsFor } from '../src/data/product-specifications.ts';
import { productInstructions } from '../src/data/product-instructions.ts';
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
      for (const key of items) {
        expect(html).toContain(applications[key].label[locale]);
        expect(html).toContain(applications[key].image.split('/').at(-1));
        if (product.category === 'substrates') {
          const explanation = productApplicationDescriptions[product.id]?.[key];
          expect(explanation?.ru.trim()).toBeTruthy();
          expect(explanation?.en.trim()).toBeTruthy();
          expect(html).toContain(explanation[locale]);
        }
      }
      const steps = productInstructions[product.id];
      expect(steps?.length).toBeGreaterThanOrEqual(4);
      for (const step of steps) {
        expect(step.title.ru.trim()).toBeTruthy();
        expect(step.title.en.trim()).toBeTruthy();
        expect(html).toContain(step.title[locale]);
        expect(html).toContain(step.description[locale]);
      }
      const benefits = productBenefits[product.id];
      expect(benefits?.length).toBeGreaterThanOrEqual(2);
      for (const benefit of benefits) {
        expect(html).toContain(benefit.title[locale]);
        expect(html).toContain(benefit.description[locale]);
      }
      expect(html).toContain('data-order-quantity');
      const specifications = specificationsFor(product);
      expect(specifications.length).toBeGreaterThan(5);
      const names = specifications.map((row) => row.label.en.toLowerCase());
      expect(new Set(names).size).toBe(names.length);
      for (const row of specifications) {
        expect(row.label.en).not.toMatch(
          /catalog|test method|crops|pallet|specification status|customisation|applications/i
        );
        expect(`${row.label[locale]} ${row.value[locale]}`).not.toMatch(
          /каталог|метод измерения|предварительн|подтвердить|catalog|test method|confirm (by|against)|suggested|target range|batch document/i
        );
        expect(row.value[locale].trim()).not.toBe('');
        expect(html).toContain(
          row.label[locale].replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
        );
      }
    }
    await page.goto(`${base}/${locale}/products/veymur/veymur-mct-oil/`);
    const quantity = page.locator('main [data-order-quantity]');
    const control = page.locator('[data-quantity-control]');
    const gallery = page.locator('[data-product-gallery]');
    const thumbnails = gallery.locator('[data-gallery-thumbnail]');
    if (!test.info().project.use.hasTouch) await gallery.locator('[data-gallery-main]').hover();
    await gallery.locator('[data-gallery-next]').click();
    await expect(thumbnails.nth(1)).toHaveAttribute('aria-pressed', 'true');
    await gallery.locator('[data-gallery-previous]').click();
    await gallery.locator('[data-gallery-previous]').click();
    await expect(thumbnails.last()).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('ArrowRight');
    await expect(thumbnails.first()).toHaveAttribute('aria-pressed', 'true');
    await thumbnails.nth(2).click();
    await expect(gallery.locator('[data-gallery-count]')).toHaveText('3 / 4');
    await gallery.screenshot({
      path: `test-results/gallery-${locale}-${test.info().project.name}.png`
    });
    await expect(gallery.locator('[data-gallery-main] source').first()).toHaveAttribute(
      'sizes',
      /50vw/
    );
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
    const preview = dialog.locator('[data-inquiry-product-preview]');
    await expect(preview).toContainText(
      products.find((item) => item.id === 'veymur-mct-oil').name[locale]
    );
    await expect(dialog.locator('[name="product"]')).toHaveAttribute('type', 'hidden');
    await expect
      .poll(() => preview.locator('img').evaluate((img) => img.complete && img.naturalWidth > 0))
      .toBe(true);
    await dialog.screenshot({
      path: `test-results/inquiry-product-${locale}-${test.info().project.name}.png`
    });
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
      'Industrial packaging',
      'Упаковка и количество на палете',
      'Культуры',
      'Packaging and pallet quantity',
      'Crops'
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
    await page.locator('main [data-product-packaging][value="mat-round"]').check();
    await expect(page.locator('main [data-supply-format]')).toHaveCount(0);
    const area = page.locator('[data-order-quantity]');
    await area.fill('2.5');
    await page.locator('main [data-quote-product]').click();
    await expect(dialog.locator('[name="quantity"]')).toHaveValue('2.5');
    await expect(dialog.locator('[name="quantityUnit"]')).toHaveValue('m2');
    await expect(dialog.locator('[data-product-packaging][value="mat-round"]')).toBeChecked();
    await expect(dialog.locator('[name="packaging"]')).toHaveValue(
      locale === 'ru' ? 'Формат — Круглый мат' : 'Format — Round mat'
    );
    await dialog.locator('[data-product-packaging][value="mat-roll"]').check();
    await expect(dialog.locator('[name="packaging"]')).toHaveValue(
      locale === 'ru' ? 'Формат — Рулон' : 'Format — Roll'
    );
    await expect(preview).toContainText(
      products.find((item) => item.id === 'coir-weed-mat').name[locale]
    );
    await expect(preview.locator('img')).toHaveCount(1);
  });
}
