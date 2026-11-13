import { test, expect } from '@playwright/test';

test('production analytics masks forms and counts only successful inquiries without personal data', async ({
  page,
  request
}) => {
  await page.addInitScript(() => {
    window.analyticsCalls = [];
    window.ym = (...args) => window.analyticsCalls.push(args);
  });
  // Serve the real built site under its production hostname, with no live requests or emails.
  await page.route('https://seha-group.ru/**', async (route) => {
    const url = new URL(route.request().url());
    if (url.pathname === '/analytics-test') return route.fulfill({ json: { success: true } });
    if (url.pathname === '/analytics-fail')
      return route.fulfill({ status: 503, json: { success: false } });
    const response = await request.get(url.pathname);
    await route.fulfill({ response });
  });
  let tags = 0;
  await page.route('https://mc.yandex.ru/**', async (route) => {
    tags++;
    await route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await page.goto('https://seha-group.ru/en/products/veymur/?email=private@example.com');
  await expect.poll(() => page.evaluate(() => window.analyticsCalls.length)).toBe(1);
  expect(tags).toBe(1);
  const init = await page.evaluate(() => window.analyticsCalls[0]);
  expect(init[0]).toBe(114242284);
  expect(init[1]).toBe('init');
  expect(init[2].webvisor).toBe(true);
  expect(init[2].url).not.toContain('email=');
  expect(init[2].trackLinks).toBe(false);
  await expect(page.locator('#quote-form')).toHaveClass(/ym-hide-content/);
  await expect(page.locator('#product-inquiry-form')).toHaveClass(/ym-hide-content/);
  await page.locator('.cookie-close').click();
  for (const selector of ['#quote-form', '#product-inquiry-form']) {
    if (selector.includes('product')) await page.locator('[data-quote-product]').first().click();
    const form = page.locator(selector);
    await form.locator('[name="company"]').fill('Private Company');
    await form.locator('[name="contact"]').fill('Private Person');
    await form.locator('[name="email"]').fill('private@example.com');
    await form.locator('[name="phone"]').fill('+1 202 555 0100');
    await form.locator('[name="consent"]').check();
    await form.evaluate((element) => {
      element.dataset.formEndpoint = '/analytics-fail';
      element.dataset.endpoint = '/analytics-fail';
    });
    await form.locator('[type="submit"]').click();
    await expect(form.locator('[type="submit"]')).toBeEnabled();
    const expected = selector.includes('product') ? 2 : 1;
    expect(await page.evaluate(() => window.analyticsCalls.length)).toBe(expected);
    await form.evaluate((element) => {
      element.dataset.formEndpoint = '/analytics-test';
      element.dataset.endpoint = '/analytics-test';
    });
    await form.locator('[type="submit"]').click();
    await expect.poll(() => page.evaluate(() => window.analyticsCalls.length)).toBe(expected + 1);
  }
  const goals = await page.evaluate(() => window.analyticsCalls.slice(1));
  expect(goals).toEqual([
    [114242284, 'reachGoal', 'footer_inquiry_sent'],
    [114242284, 'reachGoal', 'product_inquiry_sent']
  ]);
});

test('local previews do not load the production counter', async ({ page }) => {
  let requests = 0;
  await page.route('https://mc.yandex.ru/**', async (route) => {
    requests++;
    await route.abort();
  });
  await page.goto('/ru/');
  await expect(page.locator('seha-cookie-banner')).toBeVisible();
  expect(requests).toBe(0);
  await expect(page.locator('[data-seha-metrica]')).toHaveCount(0);
});
