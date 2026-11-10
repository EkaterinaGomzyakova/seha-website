import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const url = (path) => `${base}${path}`;

test('industry carousel advances one card with buttons, keys and dragging', async ({
  page,
  isMobile
}) => {
  await page.setViewportSize(
    isMobile ? { width: 390, height: 844 } : { width: 1920, height: 1080 }
  );
  await page.goto(url('/ru/'));
  await page.locator('.cookie-close').click();
  const track = page.locator('#industry-track');
  const cards = track.locator('.industry-card:not([inert])');
  const indices = cards.locator('.industry-index');
  const count = isMobile ? 1 : 3;
  await expect(cards).toHaveCount(count);
  await expect(indices.first()).toHaveText('1');
  await page.locator('[data-industry-next]').click();
  await expect(indices.first()).toHaveText('2');
  await expect(cards).toHaveCount(count);
  expect(
    await track.evaluate((element) => {
      const { left, right } = element.getBoundingClientRect();
      return [...element.querySelectorAll('.industry-card:not([inert])')].every((card) => {
        const bounds = card.getBoundingClientRect();
        return bounds.left >= left - 1 && bounds.right <= right + 1;
      });
    })
  ).toBe(true);
  await track.press('ArrowLeft');
  await expect(indices.first()).toHaveText('1');

  await track.scrollIntoViewIfNeeded();
  const { x, y, width, height } = await track.boundingBox();
  const startX = Math.round(x + width / 2);
  const startY = Math.round(y + height / 2);
  const endX = startX - 110;
  if (isMobile) {
    const session = await page.context().newCDPSession(page);
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ x: startX, y: startY }]
    });
    await session.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [{ x: endX, y: startY }]
    });
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  } else {
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(endX, startY, { steps: 6 });
    await page.mouse.up();
  }
  await expect(indices.first()).toHaveText('2');
});

test('browser notice preference is stored only after an explicit action', async ({ page }) => {
  await page.goto(url('/en/'), { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => localStorage.removeItem('seha-cookie-consent'));
  await page.reload({ waitUntil: 'domcontentloaded' });
  const banner = page.locator('seha-cookie-banner');
  await expect(banner).toBeVisible();
  await expect(page.locator('.cookie-action')).toBeVisible();
  await page.locator('.cookie-action').click();
  await expect(banner).toBeHidden();
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('seha-cookie-consent')))
    .toBe('dismissed');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(banner).toBeHidden();
  await page.evaluate(() => localStorage.removeItem('seha-cookie-consent'));
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.locator('.cookie-close').click();
  await expect(banner).toBeHidden();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(banner).toBeHidden();
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url('/en/'), { waitUntil: 'domcontentloaded' });
  const toggle = page.locator('.menu-toggle');
  const menu = page.locator('#mobile-nav');
  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.mobile-nav-links a')).toHaveText([
    'Products',
    'Manufacturing',
    'Quality & Certifications',
    'About us'
  ]);
  await expect(page.locator('.mobile-nav-close')).toBeFocused();
  for (let step = 0; step < 10; step++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => !!document.activeElement.closest('#mobile-nav'))).toBeTruthy();
  }
  await page.locator('.mobile-nav-close').click();
  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});

test('language switch keeps the current page', async ({ page }) => {
  await page.goto(url('/en/products/veymur/'), { waitUntil: 'domcontentloaded' });
  await page.locator('[data-language-toggle]').click();
  await page.locator('[data-set-language="ru"]').click();
  await expect(page).toHaveURL(/\/ru\/products\/veymur\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
});

test('main routes have no serious accessibility violations', async ({ page }) => {
  test.setTimeout(90_000);
  for (const route of [
    '/ru/',
    '/en/products/veymur/',
    '/en/products/substrates/open-top-grow-bag/'
  ]) {
    await page.goto(url(route), { waitUntil: 'domcontentloaded', timeout: 90_000 });
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(
      ({ impact }) => impact === 'critical' || impact === 'serious'
    );
    expect(blocking, `${route}: ${blocking.map(({ id }) => id).join(', ')}`).toEqual([]);
  }
});

async function fillInquiry(page, selector = '#quote-form') {
  const form = page.locator(selector);
  await form.locator('[name="company"]').fill('Example LLC');
  await form.locator('[name="contact"]').fill('Jane Doe');
  await form.locator('[name="email"]').fill('jane@example.com');
  await form.locator('[name="phone"]').fill('+1 202 555 0100');
  await form.locator('[name="consent"]').check();
}

test('product inquiry sends selection and shows success only after response', async ({ page }) => {
  await page.goto(url('/en/products/veymur/'));
  await page.locator('[data-quote-product]').first().click();
  await expect(page.locator('#product-inquiry-form [name="product"]')).not.toHaveValue('');
  await expect(page.locator('#product-inquiry-form [name="productId"]')).not.toHaveValue('');
  await fillInquiry(page, '#product-inquiry-form');
  await page
    .locator('#product-inquiry-form')
    .evaluate((form) => (form.dataset.endpoint = '/inquiry-test'));
  let resolveRequest;
  let requests = 0;
  await page.route('**/inquiry-test', async (route) => {
    requests++;
    expect(route.request().postData()).toContain('Example LLC');
    await new Promise((resolve) => (resolveRequest = resolve));
    await route.fulfill({ json: { success: true } });
  });
  const submit = page.locator('#product-inquiry-form [type="submit"]');
  await submit.click();
  await expect(submit).toBeDisabled();
  await expect(page.locator('[data-inquiry-result]')).toHaveText('');
  await expect.poll(() => requests).toBe(1);
  resolveRequest();
  await expect(page.locator('[data-inquiry-result]')).toContainText('Request sent.');
  await expect(page.locator('[data-inquiry-result]')).toContainText('1 working day');
  await expect(submit).toBeEnabled();
});

test('failed inquiry preserves entered values and offers email', async ({ page }) => {
  await page.goto(url('/en/'));
  await fillInquiry(page);
  await page
    .locator('#quote-form')
    .evaluate((form) => (form.dataset.formEndpoint = '/inquiry-test'));
  await page.route('**/inquiry-test', (route) =>
    route.fulfill({ status: 503, body: 'Unavailable' })
  );
  await page.locator('#quote-form [type="submit"]').click();
  await expect(page.locator('[data-result-title]')).toHaveText('Your inquiry could not be sent');
  await expect(page.locator('[name="company"]')).toHaveValue('Example LLC');
  const mailto = await page.locator('[data-email-quote]').getAttribute('href');
  expect(decodeURIComponent(mailto)).toContain('Company name: Example LLC');
  expect(decodeURIComponent(mailto)).not.toMatch(/[А-Яа-яЁё]/);
});

test('inquiry without a handler stays a draft and does not navigate away', async ({ page }) => {
  await page.goto(url('/en/'));
  await fillInquiry(page);
  await page.locator('#quote-form').evaluate((form) => delete form.dataset.formEndpoint);
  await page.locator('#quote-form [type="submit"]').click();
  await expect(page.locator('#quote-result')).toHaveAttribute('data-state', 'draft');
  await expect(page.locator('[data-result-message]')).toContainText(
    'Direct delivery is not connected'
  );
  await expect(page.locator('[data-email-quote]')).toHaveAttribute('href', /^mailto:/);
  await expect(page.locator('[name="company"]')).toHaveValue('Example LLC');
  expect(new URL(page.url()).pathname).toBe(url('/en/'));
});

test('footer sends general JSON inquiry and requires explicit delivery confirmation', async ({
  page
}) => {
  await page.goto(url('/en/'));
  await fillInquiry(page);
  await page
    .locator('#quote-form')
    .evaluate((form) => (form.dataset.formEndpoint = '/general-test'));
  let accepted = false;
  await page.route('**/general-test', async (route) => {
    const payload = route.request().postDataJSON();
    expect(payload.type).toBe('general');
    expect(payload.consent).toBe(true);
    expect(payload.email).toBe('jane@example.com');
    await route.fulfill({ json: { success: accepted } });
  });
  await page.locator('#quote-form [type="submit"]').click();
  await expect(page.locator('#quote-result')).toHaveAttribute('data-state', 'error');
  await expect(page.locator('#quote-form [name="company"]')).toHaveValue('Example LLC');
  accepted = true;
  await page.locator('#quote-form [type="submit"]').click();
  await expect(page.locator('#quote-result')).toHaveAttribute('data-state', 'success');
  await expect(page.locator('#quote-form [name="company"]')).toHaveValue('');
});

test('main pages load and show the shared navigation', async ({ page, request }) => {
  for (const path of [
    '/ru/',
    '/en/',
    '/ru/about/',
    '/ru/production/',
    '/ru/quality/',
    '/ru/privacy/',
    '/ru/products/',
    '/ru/products/substrates/',
    '/ru/products/veymur/',
    '/ru/products/fiber/',
    '/ru/products/shell/'
  ]) {
    const response = await request.get(url(path));
    expect(response.ok(), path).toBeTruthy();
  }
  for (const path of ['/ru/', '/en/products/veymur/']) {
    await page.goto(url(path));
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('.site-header__brand .logo-image')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true
    );
  }
});
