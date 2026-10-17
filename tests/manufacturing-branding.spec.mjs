import { test, expect } from '@playwright/test';
import { publicRoutes } from '../src/data/routes.ts';
import { productionPageCopy } from '../src/data/production-page.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const retiredManufacturers = /laurico|nm[\s_-]*cocos|nutraceuticals/i;

test('published pages contain no retired manufacturer names', async ({ request }) => {
  for (const locale of ['ru', 'en']) {
    for (const path of publicRoutes) {
      const response = await request.get(`${base}/${locale}${path}`);
      expect(response.ok()).toBe(true);
      // Include titles, descriptions, alt text, structured data and image URLs.
      expect(await response.text(), `${locale}${path}`).not.toMatch(retiredManufacturers);
    }
  }
});

for (const locale of ['ru', 'en']) {
  test(`SEHA retains two distinct manufacturing facilities in ${locale}`, async ({ page }) => {
    await page.goto(`${base}/${locale}/production/`);
    const copy = productionPageCopy[locale];
    const cards = page.locator('.branch-card');
    await expect(cards).toHaveCount(2);
    await expect(cards.nth(0).locator('span').first()).toHaveText(copy.productionSubstratesLabel);
    await expect(cards.nth(1).locator('span').first()).toHaveText(copy.productionFoodLabel);
    await expect(cards.nth(0).locator('h3')).toHaveText(copy.productionBranchesCardTitle);
    await expect(cards.nth(1).locator('h3')).toHaveText(copy.productionBranchesCardTitle2);
    await expect(page.locator('.production-main > section')).toHaveCount(8);
    await expect(page.locator('.process-item')).toHaveCount(6);
    await expect(page.locator('.facility-units > div')).toHaveCount(4);
    await expect(page.locator('.facility-image__photo')).toHaveAttribute('src', /food-facility/);
    const photo = page.locator('.facility-image__photo');
    await photo.evaluate(async (image) => {
      image.loading = 'eager';
      await image.decode();
    });
    expect(await photo.evaluate((image) => image.naturalWidth)).toBeGreaterThan(0);
  });
}
