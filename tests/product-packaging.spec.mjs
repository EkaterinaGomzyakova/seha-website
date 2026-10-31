import { test, expect } from '@playwright/test';
import { products } from '../src/data/products.ts';
import { productPackaging } from '../src/data/product-packaging.ts';
import AxeBuilder from '@axe-core/playwright';
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  test(`pack sizes ${locale} match the brochure and product inquiries leave the footer unchanged`, async ({
    page,
    request
  }) => {
    for (const [id, packaging] of Object.entries(productPackaging)) {
      const product = products.find((item) => item.id === id);
      expect(product).toBeTruthy();
      const response = await request.get(`${base}/${locale}/products/veymur/${product.slug}/`);
      const html = await response.text();
      for (const option of packaging.options)
        expect(html.replace(/&nbsp;/g, '\u00a0')).toContain(option.label[locale]);
    }
    await page.goto(`${base}/${locale}/products/veymur/veymur-mct-oil/`);
    await page.locator('main [data-supply-format][value="industrial"]').check();
    await page.locator('main [data-product-packaging][value="industrial-25-l"]').check();
    const trigger = page.locator('main [data-quote-product]');
    await trigger.click();
    const dialog = page.locator('#product-inquiry');
    const form = dialog.locator('form');
    await expect(dialog).toBeVisible();
    await expect(form.locator('[value="industrial-25-l"]')).toBeChecked();
    await expect(form.locator('[data-supply-format][value="industrial"]')).toBeChecked();
    await expect(form.locator('[data-packaging-panel="consumer"]')).toBeHidden();
    await expect(form.locator('[data-packaging-panel="industrial"]')).toContainText(
      locale === 'ru' ? 'без оформления Veymur' : 'without Veymur branding'
    );
    await dialog.screenshot({
      path: `test-results/supply-format-${locale}-${test.info().project.name}.png`
    });
    await expect(form.locator('[name="product"]')).toHaveValue(
      products.find((item) => item.id === 'veymur-mct-oil').name[locale]
    );
    await expect(page.locator('#quote-form [name="product"]')).toHaveValue('');
    const accessibility = await new AxeBuilder({ page }).include('#product-inquiry').analyze();
    expect(
      accessibility.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
    ).toEqual([]);
    await form.locator('[value="industrial-custom"]').check();
    await expect(form.locator('[name="customPackaging"]')).toBeVisible();
    await expect(form.locator('[name="customPackaging"]')).not.toHaveAttribute('required');
    await form.locator('[value="industrial-1000-l"]').check();
    await form.locator('[data-supply-format][value="consumer"]').check();
    await expect(form.locator('[value="consumer-500-ml"]')).toBeChecked();
    await expect(form.locator('[data-packaging-panel="industrial"]')).toBeHidden();
    await form.locator('[data-supply-format][value="industrial"]').check();
    await expect(form.locator('[value="industrial-1000-l"]')).toBeChecked();
    await form.locator('[name="company"]').fill('Buyer Ltd');
    await form.locator('[name="contact"]').fill('Jane');
    await form.locator('[name="email"]').fill('jane@example.com');
    await form.locator('[name="quantity"]').fill('2');
    await form.locator('[name="consent"]').check();
    await form.evaluate((element) => (element.dataset.endpoint = '/product-inquiry-test'));
    await page.route('**/product-inquiry-test', async (route) => {
      const data = route.request().postDataJSON();
      expect(data.productId).toBe('veymur-mct-oil');
      expect(data.packagingId).toBe('industrial-1000-l');
      expect(data.supplyFormat).toBe('industrial');
      expect(data.packaging).toContain('1000');
      expect(data.quantity).toBe('2');
      expect(data.consent).toBe(true);
      await route.fulfill({ status: 502, json: { success: false } });
    });
    await form.locator('[type="submit"]').click();
    await expect(form.locator('[data-inquiry-result]')).toContainText(
      locale === 'ru' ? 'Не удалось отправить' : 'Could not send'
    );
    await expect(form.locator('[name="company"]')).toHaveValue('Buyer Ltd');
    await expect(page.locator('#quote-form [name="company"]')).toHaveValue('');
    await dialog.screenshot({
      path: `test-results/product-inquiry-${locale}-${test.info().project.name}.png`
    });
    expect(await dialog.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(
      true
    );
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await page.goto(`${base}/${locale}/products/substrates/`);
    await page.locator('.product-item [data-quote-product]').first().click();
    await expect(dialog).toBeVisible();
    await expect(form.locator('[name="productId"]')).toHaveValue('grow-bag');
    await expect(form.locator('[data-product-packaging]')).toHaveCount(0);
    await page.keyboard.press('Escape');
    await page.goto(`${base}/${locale}/products/veymur/veymur-virgin-coconut-oil/`);
    await expect(page.locator('main')).not.toContainText(
      locale === 'ru' ? 'только для бизнеса' : 'businesses only'
    );
    await expect(page.locator('main')).toContainText(
      locale === 'ru' ? '3 рабочих дней' : '3 working days'
    );
    await page.locator('main [data-supply-format][value="industrial"]').check();
    const industrial = page.locator('main [data-packaging-panel="industrial"]');
    await expect(industrial.locator('.product-packaging__option')).not.toBeVisible();
    await expect(industrial.locator('legend')).toHaveCount(0);
    await industrial.locator('[data-inline-custom-packaging]').fill('20 kg');
    await page.locator('main .product-packaging').screenshot({
      path: `test-results/custom-packaging-${locale}-${test.info().project.name}.png`
    });
    await page.locator('main [data-quote-product]').click();
    await expect(form.locator('[name="customPackaging"]')).toHaveValue('20 kg');
    await expect(form.locator('[name="customPackaging"]')).not.toHaveAttribute('required');
    await expect(form.locator('[name="packaging"]')).toHaveValue(/20 kg/);
  });
}
