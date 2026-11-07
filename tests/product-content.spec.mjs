import { test, expect } from '@playwright/test';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

test('gallery and quantity controls preserve the product selection in the inquiry', async ({
  page,
  isMobile
}) => {
  await page.goto(`${base}/en/products/veymur/veymur-mct-oil/`);
  await page.locator('.cookie-close').click();
  const gallery = page.locator('[data-product-gallery]');
  const thumbnails = gallery.locator('[data-gallery-thumbnail]');
  if (!isMobile) await gallery.locator('[data-gallery-main]').hover();
  await gallery.locator('[data-gallery-next]').click();
  await expect(thumbnails.nth(1)).toHaveAttribute('aria-pressed', 'true');
  await gallery.locator('[data-gallery-previous]').click();
  await expect(thumbnails.first()).toHaveAttribute('aria-pressed', 'true');
  await thumbnails.last().click();
  await expect(thumbnails.last()).toHaveAttribute('aria-pressed', 'true');
  const quantity = page.locator('main [data-order-quantity]');
  await expect(page.locator('[data-quantity-minus]')).toBeDisabled();
  await page.locator('[data-quantity-plus]').click();
  await expect(quantity).toHaveValue('2');
  await quantity.fill('12');
  await page.locator('[data-quantity-minus]').click();
  await expect(quantity).toHaveValue('11');
  await page.locator('main [data-quote-product]').click();
  const dialog = page.locator('#product-inquiry');
  await expect(dialog.locator('[name="productId"]')).toHaveValue('veymur-mct-oil');
  await expect(dialog.locator('[name="quantity"]')).toHaveValue('11');
  await expect(dialog.locator('[data-inquiry-product-preview] img')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});
