import { test, expect } from '@playwright/test';

const base = '';

test('catalogue photos and descriptions open the corresponding product', async ({ page }) => {
  await page.goto(`${base}/ru/products/veymur/`);
  await page.locator('.cookie-close').click();
  const product = page.locator('.product-item').first();
  const href = await product.locator('.product-item__link').getAttribute('href');
  for (const target of ['figure', 'p']) {
    await page.goto(`${base}/ru/products/veymur/`);
    const area = page.locator(`.product-item ${target}`).first();
    await area.scrollIntoViewIfNeeded();
    const bounds = await area.boundingBox();
    await page.mouse.click(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator('main h1')).toBeVisible();
    expect(
      await page
        .locator('.breadcrumbs')
        .evaluate((element) => element.scrollWidth <= element.clientWidth)
    ).toBe(true);
  }
});
