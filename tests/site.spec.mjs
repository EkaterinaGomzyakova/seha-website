import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/',
  '/ru/',
  '/en/',
  '/ru/products/food/',
  '/en/products/food/',
  '/ru/products/substrates/',
  '/en/products/substrates/',
  '/ru/products/fiber/',
  '/en/products/fiber/',
  '/ru/products/shell/',
  '/en/products/shell/',
  '/ru/privacy/',
  '/en/privacy/'
];

test.describe('published routes', () => {
  for (const route of routes) {
    test(`${route} loads without broken assets`, async ({ page, request }) => {
      const response = await request.get(route);
      expect(response.ok()).toBeTruthy();
      await page.goto(route, { waitUntil: 'domcontentloaded', timeout: 90_000 });
      await expect(page.locator('html')).toHaveAttribute(
        'lang',
        route.startsWith('/en') ? 'en' : 'ru'
      );
      const failedAssets = await page.locator('img').evaluateAll(
        (elements) =>
          elements.filter((element) => {
            return element.complete && element.naturalWidth === 0;
          }).length
      );
      expect(failedAssets).toBe(0);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="ru"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    });
  }
});

test('production metadata endpoints are published', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain('https://seha-group.ru/en/products/food/');

  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain('Sitemap: https://seha-group.ru/sitemap.xml');
});

test('pages expose organization JSON-LD', async ({ page }) => {
  await page.goto('/en/', { waitUntil: 'domcontentloaded' });
  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).toContain('Organization');
  expect(jsonLd).toContain('SEHA');
});

test('cookie consent is stored only after an explicit action', async ({ page }) => {
  await page.goto('/en/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => localStorage.removeItem('seha-cookie-consent'));
  await page.reload({ waitUntil: 'domcontentloaded' });
  const banner = page.locator('seha-cookie-banner');
  await expect(banner).toBeVisible();
  await expect(page.locator('.cookie-action')).toBeVisible();
  await page.locator('.cookie-action').click();
  await expect(banner).toBeHidden();
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('seha-cookie-consent')))
    .toBe('accepted');
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/', { waitUntil: 'domcontentloaded' });
  const toggle = page.locator('.menu-toggle');
  const menu = page.locator('#mobile-nav');
  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.locator('.mobile-nav-close').click();
  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('language switch keeps the current page', async ({ page }) => {
  await page.goto('/en/products/food/', { waitUntil: 'domcontentloaded' });
  await page.locator('[data-language-toggle]').click();
  await page.locator('[data-set-language="ru"]').click();
  await expect(page).toHaveURL(/\/ru\/products\/food\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
});

test('main routes have no serious accessibility violations', async ({ page }) => {
  for (const route of ['/en/', '/en/products/food/', '/en/privacy/']) {
    await page.goto(route, { waitUntil: 'domcontentloaded', timeout: 90_000 });
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(
      ({ impact }) => impact === 'critical' || impact === 'serious'
    );
    expect(blocking, `${route}: ${blocking.map(({ id }) => id).join(', ')}`).toEqual([]);
  }
});

test('home page visual baseline', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/en/', { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await expect(page).toHaveScreenshot('home-en-desktop.png', {
    fullPage: true,
    animations: 'disabled',
    timeout: 30_000
  });
});

test('mobile menu visual baseline', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en/', { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await page.locator('.menu-toggle').click();
  await expect(page).toHaveScreenshot('home-en-mobile-menu.png', {
    fullPage: true,
    animations: 'disabled',
    timeout: 30_000
  });
});
