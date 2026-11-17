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

test('product questions expand with keyboard and keep one answer open', async ({ page }) => {
  for (const product of [
    'substrates/grow-bag',
    'substrates/open-top-grow-bag',
    'veymur/veymur-mct-oil'
  ]) {
    await page.goto(`/ru/products/${product}/`);
    const cookie = page.locator('.cookie-close');
    if (await cookie.isVisible()) await cookie.click();
    const questions = page.locator('.product-detail__question');
    await expect(questions).toHaveCount(3);
    await expect(page.locator('.product-detail__question[open]')).toHaveCount(0);
    const first = questions.first();
    const second = questions.nth(1);
    await first.locator('summary').focus();
    await page.keyboard.press('Enter');
    await expect(first).toHaveAttribute('open', '');
    await expect(first.locator('.product-detail__answer')).toBeVisible();
    await second.locator('summary').click();
    await expect(first).not.toHaveAttribute('open');
    await expect(second).toHaveAttribute('open', '');
    await second.locator('summary').click();
    await expect(second).not.toHaveAttribute('open');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true
    );
  }
});
