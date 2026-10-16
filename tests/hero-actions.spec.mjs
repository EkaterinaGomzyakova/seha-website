import { test, expect } from '@playwright/test';
import { publicRoutes } from '../src/data/routes.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
for (const locale of ['ru', 'en']) {
  test(`only the home first screen has actions in ${locale}`, async ({ page }) => {
    for (const route of publicRoutes) {
      await page.goto(`${base}/${locale}${route}`);
      const hero = page.locator('body > main > section').first();
      await expect(hero).toBeVisible();
      const actions = hero.locator('.button, button, [role="button"]');
      if (route === '/') await expect(actions).toHaveCount(1);
      else await expect(actions).toHaveCount(0);
    }
  });
}
