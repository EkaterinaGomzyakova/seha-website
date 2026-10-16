import { test, expect } from '@playwright/test';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
for (const slug of ['about', 'quality']) {
  test(`${slug} desktop alignment follows the Figma frame`, async ({ page, isMobile }) => {
    test.skip(isMobile, 'This reference frame is 1920px wide.');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(`${base}/ru/${slug}/`);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('.site-nav a[href$="/quality/"]')).toHaveText(
      'Качество и сертификаты'
    );
    const banner = page.locator('.' + slug + '-cta');
    const panel = await banner.boundingBox();
    const button = await banner.locator('.button').boundingBox();
    expect(panel.x).toBeCloseTo(136, 0);
    expect(panel.width).toBeCloseTo(1648, 0);
    expect(panel.height).toBeCloseTo(335, 0);
    expect(button.x).toBeCloseTo(1111, 0);
    expect(button.width).toBeCloseTo(425, 0);
    expect(button.height).toBeCloseTo(56, 0);
    expect(Math.abs(button.y - panel.y - 206.54)).toBeLessThan(1);
    if (slug === 'about') {
      const headings = await page
        .locator('.about-principle h3')
        .evaluateAll((items) => items.map((item) => item.getBoundingClientRect().bottom));
      expect(Math.abs(headings[0] - headings[1])).toBeLessThan(1);
      expect(Math.abs(headings[2] - headings[3])).toBeLessThan(1);
      await expect(page.locator('.about-numbers')).toContainText('200+');
      await expect(page.locator('.about-numbers')).toContainText('25 акров');
      await expect(page.locator('.about-numbers')).toContainText('индийской');
    } else {
      const photo = await page.locator('.quality-proof-image').boundingBox();
      const label = await page.locator('.quality-proof-copy > .header-container').boundingBox();
      expect(photo.width).toBeCloseTo(744, 0);
      expect(label.x).toBeCloseTo(960, 0);
      const image = await page.locator('.quality-proof-photo').boundingBox();
      expect(image.width).toBeCloseTo(1799.5, 0);
      expect(image.x - photo.x).toBeCloseTo(-585.22, 0);
      await expect(page.locator('.quality-proof-list p').first()).toHaveCSS('max-width', '572px');
      const role = await page.locator('.quality-role h2').boundingBox();
      expect(role.height).toBeGreaterThan(125);
      expect(role.height).toBeLessThan(131);
    }
    await page.locator('.cookie-action').click();
    await banner.locator('.button').click();
    await expect(page).toHaveURL(/#contacts$/);
    await expect(page.locator('#quote-form')).toBeVisible();
    expect(await page.locator('#quote-form').evaluate((form) => form.checkValidity())).toBe(false);
  });
}
