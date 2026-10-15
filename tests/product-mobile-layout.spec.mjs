import { test, expect } from '@playwright/test';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

for (const category of ['food', 'substrates', 'fiber', 'shell']) {
  for (const locale of ['ru', 'en']) {
    test(`mobile product layout: ${category} ${locale}`, async ({ page }) => {
      for (const width of [360, 390, 440, 441, 480, 560, 600, 800]) {
        await page.setViewportSize({ width, height: 1080 });
        await page.goto(`${base}/${locale}/products/${category}/`);
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.evaluate(() => {
          const box = (selector) =>
            document.querySelector(selector).getBoundingClientRect().toJSON();
          const style = (selector) => getComputedStyle(document.querySelector(selector));
          return {
            grid: style('.product-grid-page').gridTemplateColumns.split(' ').length,
            gap: parseFloat(style('.product-grid-page').rowGap),
            hero: box('.product-hero'),
            breadcrumb: box('.breadcrumbs'),
            icon: box('.product-hero-icon'),
            title: box('.product-hero h1'),
            titleSize: parseFloat(style('.product-hero h1').fontSize),
            footer: box('.quote-footer'),
            formColumns: style('.form-grid').gridTemplateColumns.split(' ').length,
            labelPadding: parseFloat(style('.product-item > span').paddingTop),
            language: box('.language-control'),
            menu: box('.menu-toggle'),
            footerTitle: box('#quote-title'),
            photos: [...document.querySelectorAll('.product-item figure')].map((el) =>
              el.getBoundingClientRect().toJSON()
            ),
            cards: [...document.querySelectorAll('.product-item')].map((el) =>
              el.getBoundingClientRect().toJSON()
            ),
            overflow: document.documentElement.scrollWidth
          };
        });
        expect(metrics.overflow).toBeLessThanOrEqual(width);
        expect(metrics.grid).toBe(width <= 440 ? 1 : 2);
        if (width <= 440) {
          expect(metrics.hero.x).toBeCloseTo(24, 0);
          expect(metrics.hero.width).toBeCloseTo(width - 48, 0);
          expect(metrics.hero.y - metrics.breadcrumb.bottom).toBeCloseTo(20, 0);
          expect(metrics.icon.y - metrics.hero.y).toBeCloseTo(40, 0);
          expect(metrics.title.y - metrics.icon.bottom).toBeCloseTo(24, 0);
          expect(metrics.titleSize).toBe(32);
          expect(metrics.menu.right).toBeCloseTo(width - 24, 0);
          expect(metrics.menu.left - metrics.language.right).toBeCloseTo(20, 0);
          if (category === 'shell' && locale === 'ru' && width === 440) {
            expect(metrics.title.height).toBeCloseTo(96, 0);
            expect(metrics.footerTitle.height).toBeCloseTo(64, 0);
          }
          expect(metrics.formColumns).toBe(1);
          expect(metrics.footer.x).toBe(0);
          expect(metrics.footer.width).toBe(width);
          expect(metrics.labelPadding).toBe(6);
          expect(metrics.gap).toBe(32);
          metrics.photos.forEach((photo, index) => {
            expect(photo.x).toBeCloseTo(24, 0);
            expect(photo.width).toBeCloseTo(width - 48, 0);
            expect(photo.height).toBeCloseTo(photo.width, 0);
            if (index)
              expect(metrics.cards[index].top - metrics.cards[index - 1].bottom).toBeCloseTo(32, 0);
          });
        }
      }
    });
  }
}
