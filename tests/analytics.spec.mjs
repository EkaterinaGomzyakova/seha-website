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
    if (url.pathname === '/api/consent.php') return route.fulfill({ json: { success: true } });
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
  await page.goto(
    'https://seha-group.ru/en/products/veymur/?email=private@example.com&phone=123&message=private&utm_source=calameo&utm_medium=referral&utm_campaign=food_catalog&utm_content=milk&utm_term=coconut&utm_id=summer&yclid=123456#private'
  );
  expect(await page.evaluate(() => window.analyticsCalls.length)).toBe(0);
  expect(tags).toBe(0);
  await page.locator('[data-cookie-action]').click();
  await expect.poll(() => page.evaluate(() => window.analyticsCalls.length)).toBe(1);
  expect(tags).toBe(1);
  const init = await page.evaluate(() => window.analyticsCalls[0]);
  expect(init[0]).toBe(114242284);
  expect(init[1]).toBe('init');
  expect(init[2].webvisor).toBe(true);
  expect(init[2].url).not.toContain('email=');
  const trackedUrl = new URL(init[2].url);
  expect(Object.fromEntries(trackedUrl.searchParams)).toEqual({
    utm_source: 'calameo',
    utm_medium: 'referral',
    utm_campaign: 'food_catalog',
    utm_content: 'milk',
    utm_term: 'coconut',
    utm_id: 'summer',
    yclid: '123456'
  });
  expect(trackedUrl.hash).toBe('');
  expect(init[2].trackLinks).toBe(true);
  await expect(page.locator('[data-email-quote]')).toHaveClass(/ym-disable-tracklink/);
  await expect(page.locator('#quote-form')).toHaveClass(/ym-hide-content/);
  await expect(page.locator('#product-inquiry-form')).toHaveClass(/ym-hide-content/);
  for (const selector of ['#quote-form', '#product-inquiry-form']) {
    if (selector.includes('product')) await page.locator('[data-quote-product]').first().click();
    const form = page.locator(selector);
    await expect(form.locator('[name="company"]')).not.toHaveAttribute('required');
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
    const expected = selector.includes('product') ? 3 : 1;
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
    [114242284, 'reachGoal', 'product_inquiry_opened', { product_id: 'veymur-mct-oil' }],
    [114242284, 'reachGoal', 'product_inquiry_sent', { product_id: 'veymur-mct-oil' }]
  ]);
  // Repeated clicks while open do not count; a genuine reopening counts once again.
  await page
    .locator('[data-quote-product]')
    .first()
    .evaluate((element) => {
      if (element instanceof HTMLElement) element.click();
    });
  expect(await page.evaluate(() => window.analyticsCalls.length)).toBe(4);
  await page.locator('[data-close-inquiry]').click();
  await page.locator('[data-quote-product]').first().click();
  await expect(page.locator('#product-inquiry')).toBeVisible();
  expect(await page.evaluate(() => window.analyticsCalls.slice(4))).toEqual([
    [114242284, 'reachGoal', 'product_inquiry_opened', { product_id: 'veymur-mct-oil' }]
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

test('catalog inquiries keep the selected product when switching between grow bags', async ({
  page,
  request
}) => {
  await page.addInitScript(() => {
    window.analyticsCalls = [];
    window.ym = (...args) => window.analyticsCalls.push(args);
  });
  await page.route('https://mc.yandex.ru/**', (route) =>
    route.fulfill({ contentType: 'application/javascript', body: '' })
  );
  await page.route('https://seha-group.ru/**', async (route) => {
    if (new URL(route.request().url()).pathname === '/api/consent.php')
      return route.fulfill({ json: { success: true } });
    const response = await request.get(new URL(route.request().url()).pathname);
    await route.fulfill({ response });
  });
  await page.goto('https://seha-group.ru/ru/products/substrates/');
  await page.locator('[data-cookie-action]').click();
  for (const productId of ['grow-bag', 'open-top-grow-bag']) {
    await page.locator(`[data-quote-product][data-product-id="${productId}"]`).first().click();
    await expect(page.locator('#product-inquiry')).toBeVisible();
    await expect(page.locator('#product-inquiry-form [name="productId"]')).toHaveValue(productId);
    expect(await page.evaluate(() => window.analyticsCalls.at(-1))).toEqual([
      114242284,
      'reachGoal',
      'product_inquiry_opened',
      { product_id: productId }
    ]);
    await page.locator('[data-close-inquiry]').click();
  }
});
