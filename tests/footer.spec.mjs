import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { publicRoutes } from '../src/data/routes.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const locale of ['ru', 'en']) {
  for (const width of [1920, 1280, 800, locale === 'ru' ? 440 : 360]) {
    test(`footer ${locale} follows Figma at ${width}px on every page`, async ({
      page
    }, testInfo) => {
      await page.setViewportSize({ width, height: 1080 });
      let reference;
      for (const route of publicRoutes) {
        await page.goto(`${base}/${locale}${route}`);
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator('footer')).toHaveCount(1);
        await expect(page.locator('#quote-form')).toHaveCount(1);
        const metrics = await page.locator('footer').evaluate((footer) => {
          const style = getComputedStyle(footer);
          const box = footer.getBoundingClientRect();
          const children = [
            ...footer.querySelectorAll(
              '.quote-layout, .quote-title, #quote-form, .form-grid, .form-field, .business-choices, .tag, .consent, #quote-form > .button, .quote-contacts, .contact-item, .quote-bottom, .quote-brand, .logo-image'
            )
          ];
          return {
            width: box.width,
            x: box.x,
            paddingX: parseFloat(style.paddingLeft),
            paddingY: parseFloat(style.paddingTop),
            background: style.backgroundColor,
            formColumns: getComputedStyle(
              footer.querySelector('.form-grid')
            ).gridTemplateColumns.split(' ').length,
            titleSize: parseFloat(getComputedStyle(footer.querySelector('.quote-title')).fontSize),
            inputSize: parseFloat(
              getComputedStyle(footer.querySelector('input[name="company"]')).fontSize
            ),
            children: children.map((element) => {
              const bounds = element.getBoundingClientRect();
              const computed = getComputedStyle(element);
              return {
                x: Math.round((bounds.x - box.x) * 100) / 100,
                y: Math.round((bounds.y - box.y) * 100) / 100,
                width: Math.round(bounds.width * 100) / 100,
                height: Math.round(bounds.height * 100) / 100,
                font: computed.font,
                gap: computed.gap
              };
            })
          };
        });
        if (!reference) reference = metrics;
        expect(metrics, `footer differs on ${route}`).toEqual(reference);
      }
      expect(reference.width).toBe(width <= 440 ? width : Math.min(1880, width - 32));
      expect(reference.paddingX).toBeCloseTo(
        width > 1280 ? 256 : width > 800 ? 80 : width > 440 ? 32 : 24,
        1
      );
      expect(reference.paddingY).toBe(width > 1280 ? 54 : width > 440 ? 48 : 40);
      expect(reference.titleSize).toBe(width > 1280 ? 72 : width > 440 ? 52 : 32);
      expect(reference.inputSize).toBe(width > 1280 ? 16 : 14);
      expect(reference.formColumns).toBe(width > 440 ? 2 : 1);
      expect(reference.background).toBe('rgb(0, 77, 37)');
      const footer = page.locator('footer');
      await page.locator('.cookie-action').click();
      await page.evaluate(() => document.activeElement?.blur());
      await footer.scrollIntoViewIfNeeded();
      await footer.locator('.logo-image').evaluate((image) => image.decode());
      await expect(footer.locator('.logo-image')).toHaveAttribute(
        'src',
        new RegExp(`logo-${locale === 'ru' ? 'russian' : 'international'}-accent.svg$`)
      );
      await expect(footer.locator('#quote-title')).toHaveText(
        locale === 'ru' ? 'Получите расчёт поставки' : 'Request a Delivery Quote'
      );
      await expect(footer.locator('a[href^="tel:"]')).toHaveAttribute('href', 'tel:+79660612828');
      await expect(footer.locator('a[href^="mailto:"]').first()).toHaveAttribute(
        'href',
        'mailto:seha.info@inbox.ru'
      );
      await expect(footer.locator('.quote-bottom > a')).toHaveAttribute(
        'href',
        `${base}/${locale}/privacy/`
      );
      await footer.screenshot({
        path: testInfo.outputPath(`footer-${locale}-${width}.png`),
        // Exclude the page-level skip link from this isolated component capture.
        style: '.skip { visibility: hidden; }'
      });
      const a11y = await new AxeBuilder({ page }).include('footer').analyze();
      expect(
        a11y.violations.filter((item) => ['serious', 'critical'].includes(item.impact))
      ).toEqual([]);
    });
  }
  test(`footer ${locale} stays usable at breakpoint edges`, async ({ page }) => {
    for (const width of [360, 440, 441, 600, 800, 801, 1024, 1280, 1281, 1440, 1920]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${base}/${locale}/products/veymur/`);
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.locator('footer').evaluate((footer) => {
        const items = [
          footer,
          ...footer.querySelectorAll(
            '.quote-title, .quote-brand, .quote-bottom, .form-grid, .quote-contacts'
          )
        ];
        return items.map((element) => ({
          scroll: element.scrollWidth,
          width: element.clientWidth
        }));
      });
      for (const item of overflow) expect(item.scroll).toBeLessThanOrEqual(item.width + 1);
      await expect(page.locator('.quote-title')).toHaveCSS(
        'font-size',
        width > 1280 ? '72px' : width > 440 ? '52px' : '32px'
      );
    }
  });
}
