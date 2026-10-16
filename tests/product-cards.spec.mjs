import { test, expect } from '@playwright/test';
import { bindShortWords } from '../src/lib/typography.ts';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');

test('card typography binds connecting words without changing ordinary words', () => {
  expect(bindShortWords('Субстрат в брикетах и для теплиц', 'ru')).toBe(
    'Субстрат в\u00a0брикетах и\u00a0для\u00a0теплиц'
  );
  expect(bindShortWords('Из-за дождя, во дворе и на улице', 'ru')).toBe(
    'Из-за\u00a0дождя, во\u00a0дворе и\u00a0на\u00a0улице'
  );
  expect(bindShortWords('Made from coconut for the nursery', 'en')).toBe(
    'Made from\u00a0coconut for\u00a0the\u00a0nursery'
  );
  expect(bindShortWords('Coconut manufacturing', 'en')).toBe('Coconut manufacturing');
  const formatted = bindShortWords('Для теплиц и рассады', 'ru');
  expect(bindShortWords(formatted, 'ru')).toBe(formatted);
});

for (const category of ['food', 'substrates', 'fiber', 'shell', 'veymur']) {
  for (const locale of ['ru', 'en']) {
    test(`${category} ${locale} cards have equal heights and 20px description clearance`, async ({
      page
    }, testInfo) => {
      for (const width of [1920, 1280, 800, 440, 360]) {
        await page.setViewportSize({ width, height: 1080 });
        await page.goto(`${base}/${locale}/products/${category}/`);
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.locator('.product-item').evaluateAll((cards) =>
          cards.map((card) => {
            const description = card.querySelector('p');
            const button = card.querySelector('.button');
            const text = document.createRange();
            text.selectNodeContents(description);
            const lastLine = Math.max(...Array.from(text.getClientRects(), (rect) => rect.bottom));
            return {
              height: card.getBoundingClientRect().height,
              clearance: button.getBoundingClientRect().top - lastLine,
              margin: parseFloat(getComputedStyle(description).marginBottom),
              texts: Array.from(
                card.querySelectorAll('h3, p, :scope > span'),
                (element) => element.textContent
              )
            };
          })
        );
        expect(metrics.length).toBeGreaterThan(0);
        const heights = metrics.map((item) => item.height);
        expect(Math.max(...heights) - Math.min(...heights), `${width}px card heights`).toBeLessThan(
          1
        );
        for (const card of metrics) {
          expect(card.margin, `${width}px description margin`).toBeGreaterThanOrEqual(20);
          expect(card.clearance, `${width}px visible text clearance`).toBeGreaterThanOrEqual(19.5);
          for (const text of card.texts) expect(text).toBe(bindShortWords(text, locale));
        }
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth),
          `${width}px overflow`
        ).toBeLessThanOrEqual(width);
        if (category === 'substrates' && locale === 'ru' && width === 1920) {
          await page.locator('.product-item img').evaluateAll(async (images) => {
            await Promise.all(
              images.map(async (image) => {
                image.loading = 'eager';
                await image.decode();
              })
            );
          });
          await page
            .locator('.product-item')
            .evaluateAll((cards) => cards.forEach((card) => card.classList.add('visible')));
          await page
            .locator('.product-grid-page')
            .screenshot({ path: testInfo.outputPath('product-card-spacing.png') });
        }
      }
    });
  }
}
