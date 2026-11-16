import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
// Each scenario covers multiple navigations or six complete accessibility scans.
test.beforeEach(() => test.setTimeout(120_000));

test('reopening settings survives a delayed refusal receipt', async ({ page, request }) => {
  let release;
  await page.route('https://seha-group.ru/**', async (route) => {
    const path = new URL(route.request().url()).pathname;
    if (path === '/api/consent.php') {
      await new Promise((resolve) => {
        release = resolve;
      });
      return route.fulfill({ json: { success: true } });
    }
    return route.fulfill({ response: await request.get(path) });
  });
  await page.route('https://mc.yandex.ru/**', (route) => route.abort());
  await page.goto('https://seha-group.ru/ru/privacy/');
  await page.locator('[data-cookie-reject]').click();
  await expect.poll(() => typeof release).toBe('function');
  await page.locator('.quote-legal-links [data-analytics-settings]').click();
  await expect(page.locator('seha-cookie-banner')).toBeVisible();
  release();
  await expect(page.locator('[data-cookie-action]')).toBeEnabled();
  await expect(page.locator('seha-cookie-banner')).toBeVisible();
});

test('analytics requires a recorded choice, survives navigation and stops on withdrawal', async ({
  page,
  request,
  context
}) => {
  let tags = 0;
  let googleRequests = 0;
  await page.route('https://docs.google.com/**', (route) => {
    googleRequests++;
    return route.abort();
  });
  let fail = true;
  const choices = [];
  await page.route('https://mc.yandex.ru/**', (route) => {
    tags++;
    return route.fulfill({ body: '', contentType: 'application/javascript' });
  });
  await page.route('https://seha-group.ru/**', async (route) => {
    const path = new URL(route.request().url()).pathname;
    if (path === '/api/consent.php') {
      choices.push(route.request().postDataJSON());
      return route.fulfill({ status: fail ? 503 : 200, json: { success: !fail } });
    }
    if (path === '/inquiry-test') return route.fulfill({ json: { success: true } });
    return route.fulfill({ response: await request.get(path) });
  });
  await page.addInitScript(() => {
    window.ym = () => {};
    localStorage.setItem('seha-cookie-consent', 'dismissed');
  });
  await page.goto('https://seha-group.ru/ru/');
  expect(tags).toBe(0);
  await page.locator('[data-cookie-action]').click();
  await expect(page.locator('[data-cookie-error]')).toBeVisible();
  expect(tags).toBe(0);
  await page.locator('[data-cookie-reject]').click();
  await expect(page.locator('seha-cookie-banner')).toBeHidden();
  const form = page.locator('#quote-form');
  await form.locator('[name="contact"]').fill('Buyer');
  await form.locator('[name="phone"]').fill('+79991234567');
  await form.locator('[name="consent"]').check();
  await form.evaluate((el) => {
    el.dataset.formEndpoint = '/inquiry-test';
  });
  await form.locator('[type="submit"]').click();
  await expect(page.locator('#quote-result')).toHaveAttribute('data-state', 'success');
  expect(tags).toBe(0);
  fail = false;
  await page.locator('.quote-legal-links [data-analytics-settings]').click();
  await page.locator('[data-cookie-action]').click();
  await expect.poll(() => tags).toBe(1);
  expect(choices.at(-1)).toMatchObject({ status: 'accepted', version: '2026-11-16' });
  expect(Object.keys(choices.at(-1)).sort()).toEqual(['receipt', 'status', 'version']);
  await page.goto('https://seha-group.ru/ru/consent/');
  await expect(page.locator('seha-cookie-banner')).toBeHidden();
  await expect.poll(() => tags).toBe(2);
  await context.addCookies([
    { name: '_ym_uid', value: 'test', domain: 'seha-group.ru', path: '/' }
  ]);
  await page.locator('.quote-legal-links [data-analytics-settings]').click();
  await Promise.all([page.waitForEvent('load'), page.locator('[data-cookie-reject]').click()]);
  await expect(page.locator('seha-cookie-banner')).toBeHidden();
  expect(tags).toBe(2);
  expect(googleRequests).toBe(0);
  expect((await context.cookies()).some((cookie) => cookie.name === '_ym_uid')).toBe(false);
  await page.reload();
  expect(tags).toBe(2);
  await page.evaluate(() => {
    const choice = JSON.parse(localStorage.getItem('seha-analytics-choice'));
    localStorage.setItem(
      'seha-analytics-choice',
      JSON.stringify({ ...choice, status: 'accepted', at: Date.now() - 181 * 86400000 })
    );
  });
  await page.reload();
  await expect(page.locator('seha-cookie-banner')).toBeVisible();
  expect(tags).toBe(2);
});

test('legal documents and separate form consent are accessible in both languages', async ({
  page
}) => {
  for (const locale of ['ru', 'en']) {
    for (const path of ['privacy', 'consent', 'analytics-consent']) {
      await page.goto(`/${locale}/${path}/`);
      const close = page.locator('.cookie-close');
      if (await close.isVisible()) await close.click();
      await expect(page.locator('main')).not.toContainText(
        /TODO|черновик|заполнить реквизиты|TBC/i
      );
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(result.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true
      );
    }
    const consent = page.locator('#quote-form [name="consent"]');
    await expect(consent).not.toBeChecked();
    await expect(consent.locator('xpath=..').locator('a')).toHaveAttribute(
      'href',
      `/${locale}/consent/`
    );
    await expect(page.locator('.quote-legal-links a')).toHaveAttribute(
      'href',
      `/${locale}/privacy/`
    );
  }
});
