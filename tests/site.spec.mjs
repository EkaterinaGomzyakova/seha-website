import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const paths = [
  '/',
  '/about/',
  '/production/',
  '/quality/',
  '/privacy/',
  '/products/',
  '/products/veymur/',
  '/products/substrates/',
  '/products/fiber/',
  '/products/shell/'
];
const routes = ['/', '/ru/', '/en/', '/ru/products/veymur/', '/en/products/substrates/'];
const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const url = (path) => `${base}${path}`;

test.describe('published routes', () => {
  for (const route of routes) {
    test(`${route} loads without broken assets`, async ({ page, request }) => {
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));
      const response = await request.get(url(route));
      expect(response.ok()).toBeTruthy();
      await page.goto(url(route), { waitUntil: 'domcontentloaded', timeout: 90_000 });
      await expect(page.locator('html')).toHaveAttribute(
        'lang',
        route.startsWith('/en') ? 'en' : 'ru'
      );
      await page
        .locator('img')
        .evaluateAll((images) => images.forEach((image) => (image.loading = 'eager')));
      for (const image of await page.locator('img').all()) {
        await expect
          .poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0))
          .toBeTruthy();
      }
      if (route.startsWith('/en')) {
        expect(await page.locator('main').innerText()).not.toMatch(/[А-Яа-яЁё]/);
        expect(await page.locator('meta[name="description"]').getAttribute('content')).not.toMatch(
          /[А-Яа-яЁё]/
        );
        expect(await page.locator('footer').innerText()).not.toMatch(/[А-Яа-яЁё]/);
      }
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="ru"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
      const skipHref = await page.locator('.skip').getAttribute('href');
      await expect(page.locator(skipHref)).toHaveCount(1);
      expect(pageErrors).toEqual([]);
    });
  }
});

test('production metadata endpoints are published', async ({ request }) => {
  const sitemap = await request.get(url('/sitemap.xml'));
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain(`${base}/en/products/veymur/`);

  const robots = await request.get(url('/robots.txt'));
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain(`${base}/sitemap.xml`);
});

test('pages expose organization JSON-LD', async ({ page }) => {
  await page.goto(url('/en/'), { waitUntil: 'domcontentloaded' });
  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).toContain('Organization');
  expect(jsonLd).toContain('SEHA');
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

test('header uses one grid and responsive layout across page templates', async ({ page }) => {
  for (const width of [1920, 1280, 800, 440]) {
    await page.setViewportSize({ width, height: 900 });
    const margin = width > 1280 ? 136 : width > 800 ? 96 : width > 440 ? 32 : 24;
    for (const locale of ['ru', 'en']) {
      let referenceHeight;
      for (const path of ['/', '/products/substrates/', '/404/']) {
        await page.goto(url(`/${locale}${path}`), { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => document.fonts.ready);
        const header = page.locator('header.site-header');
        await expect(header).toHaveCount(1);
        const box = await header.boundingBox();
        expect(box.x).toBe(margin);
        expect(box.width).toBe(width - 2 * margin);
        expect(box.y).toBe(0);
        referenceHeight ??= box.height;
        expect(box.height).toBe(referenceHeight);
        await expect(header.locator('.site-nav')).toBeVisible({ visible: width > 1024 });
        await expect(header.locator('.button')).toBeVisible({ visible: width > 1280 });
        await expect(header.locator('.menu-toggle')).toBeVisible({ visible: width <= 1024 });
        const actions = await header.locator('.site-header__actions').boundingBox();
        expect(actions.x + actions.width).toBeLessThanOrEqual(width - margin + 1);
        if (width <= 1024) {
          expect(box.height).toBe(72);
          const logo = await header.locator('.logo-image').boundingBox();
          expect(logo).toMatchObject({ x: margin, y: 20, width: 95, height: 32 });
          const toggle = await header.locator('.menu-toggle').boundingBox();
          expect(toggle).toMatchObject({ x: width - margin - 32, y: 20, width: 32, height: 32 });
          const language = await header.locator('.language-control').boundingBox();
          expect(toggle.x - language.x - language.width).toBe(20);
        }
      }
    }
  }
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
  test.setTimeout(300_000);
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

test('English content and language links work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  for (const path of paths) {
    await page.goto(url(`/en${path}`));
    expect(await page.locator('main').innerText()).not.toMatch(/[А-Яа-яЁё]/);
    expect(await page.locator('footer').innerText()).not.toMatch(/[А-Яа-яЁё]/);
    await expect(page.locator('.language-control noscript a')).toHaveAttribute(
      'href',
      url(`/ru${path}`)
    );
  }
  await context.close();
});

test('short mobile menu scrolls and Escape restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 400 });
  await page.goto(url('/en/'));
  await page.locator('.menu-toggle').click();
  expect(
    await page.locator('#mobile-nav').evaluate((node) => node.clientHeight <= innerHeight)
  ).toBeTruthy();
  const email = page.locator('.mobile-nav-contacts a[href^="mailto:"]');
  await email.scrollIntoViewIfNeeded();
  await expect(email).toBeInViewport();
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-nav')).toBeHidden();
  await expect(page.locator('.menu-toggle')).toBeFocused();
});

test('language options close with Escape and keep focus', async ({ page }) => {
  await page.goto(url('/en/'));
  const trigger = page.locator('[data-language-toggle]');
  await trigger.click();
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('[data-set-language="ru"]')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

async function fillInquiry(page) {
  await page.locator('[name="company"]').fill('Example LLC');
  await page.locator('[name="contact"]').fill('Jane Doe');
  await page.locator('[name="email"]').fill('jane@example.com');
  await page.locator('[name="phone"]').fill('+1 202 555 0100');
  await page.locator('.consent__checkbox').click();
}

test('product inquiry sends selection and shows success only after response', async ({ page }) => {
  await page.goto(url('/en/products/veymur/'));
  await page.locator('[data-quote-product]').first().click();
  await expect(page.locator('[name="product"]')).not.toHaveValue('');
  await expect(page.locator('[name="productId"]')).not.toHaveValue('');
  await fillInquiry(page);
  await page
    .locator('#quote-form')
    .evaluate((form) => (form.dataset.formEndpoint = '/inquiry-test'));
  let resolveRequest;
  let requests = 0;
  await page.route('**/inquiry-test', async (route) => {
    requests++;
    expect(route.request().postData()).toContain('Example LLC');
    await new Promise((resolve) => (resolveRequest = resolve));
    await route.fulfill({ json: { success: true } });
  });
  const submit = page.locator('#quote-form [type="submit"]');
  await submit.click();
  await expect(submit).toBeDisabled();
  await expect(page.locator('#quote-result')).toBeHidden();
  await expect.poll(() => requests).toBe(1);
  resolveRequest();
  await expect(page.locator('[data-result-title]')).toHaveText('Inquiry sent');
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

test('category structured data describes a collection and 404 is not indexed', async ({ page }) => {
  await page.goto(url('/en/products/veymur/'));
  const data = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(data['@graph'].some((item) => item['@type'] === 'CollectionPage')).toBeTruthy();
  expect(data['@graph'].some((item) => item['@type'] === 'Product')).toBeFalsy();
  await page.goto(url('/404.html'));
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);
});

test('disabled browser storage does not break navigation or notices', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('Storage disabled');
    };
    Storage.prototype.setItem = () => {
      throw new Error('Storage disabled');
    };
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url('/en/'));
  await page.locator('.cookie-action').click();
  await expect(page.locator('seha-cookie-banner')).toBeHidden();
  await page.locator('.menu-toggle').click();
  await expect(page.locator('#mobile-nav')).toBeVisible();
  expect(errors).toEqual([]);
});
