import { test, expect } from '@playwright/test';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

test('food packaging and quantity are sent with the selected product', async ({ page }) => {
  await page.goto(`${base}/en/products/veymur/veymur-mct-oil/`);
  await page.locator('.cookie-close').click();
  await page.locator('main [data-supply-format][value="industrial"]').check();
  await page.locator('main [data-product-packaging][value="industrial-25-l"]').check();
  await page.locator('main [data-order-quantity]').fill('2');
  const trigger = page.locator('main [data-quote-product]');
  await trigger.click();
  const form = page.locator('#product-inquiry-form');
  await expect(form.locator('[value="industrial-25-l"]')).toBeChecked();
  await form.locator('[value="industrial-1000-l"]').check();
  await form.locator('[data-supply-format][value="consumer"]').check();
  await form.locator('[data-supply-format][value="industrial"]').check();
  await expect(form.locator('[value="industrial-1000-l"]')).toBeChecked();
  await form.locator('[name="company"]').fill('Buyer Ltd');
  await form.locator('[name="contact"]').fill('Jane');
  await form.locator('[name="email"]').fill('jane@example.com');
  await form.locator('[name="consent"]').check();
  await form.evaluate((element) => (element.dataset.endpoint = '/product-inquiry-test'));
  let submitted;
  await page.route('**/product-inquiry-test', async (route) => {
    submitted = route.request().postDataJSON();
    await route.fulfill({ status: 200, json: { success: true } });
  });
  await form.locator('[type="submit"]').click();
  await expect(form.locator('[data-inquiry-result]')).toContainText('Request sent');
  expect(submitted).toMatchObject({
    productId: 'veymur-mct-oil',
    packagingId: 'industrial-1000-l',
    supplyFormat: 'industrial',
    quantity: '2',
    quantityUnit: 'packs',
    consent: true
  });
  await expect(page.locator('#quote-form [name="company"]')).toHaveValue('');
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
});

test('substrate weight is carried into the inquiry', async ({ page }) => {
  await page.goto(`${base}/ru/products/substrates/coco-peat-briquettes/`);
  await page.locator('.cookie-close').click();
  await page.locator('main [data-product-packaging][value="industrial-5-kg"]').check();
  await page.locator('main [data-order-quantity]').fill('3');
  await page.locator('main [data-quote-product]').click();
  const form = page.locator('#product-inquiry-form');
  await expect(form.locator('[value="industrial-5-kg"]')).toBeChecked();
  await expect(form.locator('[name="quantity"]')).toHaveValue('3');
  await expect(form.locator('[name="quantityUnit"]')).toHaveValue('pcs');
});
