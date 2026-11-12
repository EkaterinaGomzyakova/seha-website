import { test, expect } from '@playwright/test';
import { formatStock, parseInventory } from '../src/lib/inventory.ts';
import { inventorySource } from '../src/data/inventory.ts';

const base = '';
const source = `https://docs.google.com/spreadsheets/d/${inventorySource.spreadsheetId}/gviz/tq**`;
const response = (rows) => ({
  status: 'ok',
  table: {
    cols: ['A', 'D', 'E'].map((id) => ({ id })),
    rows: rows.map((row) => ({ c: row.map((v) => ({ v })) }))
  }
});

async function reply(route, rows) {
  const query = new URL(route.request().url()).searchParams;
  const options = Object.fromEntries(
    query
      .get('tqx')
      .split(';')
      .map((part) => part.split(':'))
  );
  expect(options.responseHandler).toBe('__sehaInventoryResponse');
  expect(query.get('tq')).toBe('select A,D,E');
  await route.fulfill({
    contentType: 'application/javascript; charset=utf-8',
    body: `${options.responseHandler}(${JSON.stringify({ ...response(rows), reqId: options.reqId })});`
  });
}

test('inventory rejects ambiguous or invalid values and preserves zero and fractional amounts', () => {
  const stock = parseInventory(
    response([
      ['valid', 1250.5, 'kg'],
      ['zero', 0, 'L'],
      ['duplicate', 20, 'pcs'],
      ['duplicate', 30, 'pcs'],
      ['negative', -2, 'kg'],
      ['empty', null, 'pcs'],
      ['numeric-string', '20', 'kg'],
      ['bad-unit', 20, '<img src=x>'],
      ['unknown-unit', 20, 'toString']
    ])
  );
  expect([...stock.keys()]).toEqual(['valid', 'zero']);
  expect(formatStock(stock.get('valid'), 'en')).toBe('In stock: 1,250.5\u00a0kg');
  expect(formatStock(stock.get('zero'), 'ru')).toBe('Нет в наличии: 0\u00a0л');
  expect(formatStock(undefined, 'ru')).toBe('Наличие уточняется');
  expect(() => parseInventory({ status: 'error' })).toThrow();
  expect(() => parseInventory({ ...response([]), table: { cols: [], rows: [] } })).toThrow();
});

for (const locale of ['ru', 'en']) {
  test(`inventory ${locale} loads once per page, refreshes and appears below descriptions`, async ({
    page
  }) => {
    await page.clock.install();
    let quantity = 37;
    let requests = 0;
    await page.route(source, async (route) => {
      requests++;
      await reply(route, [['grow-bag', quantity, 'pcs']]);
    });
    await page.goto(`${base}/${locale}/products/substrates/`);
    await expect(page.locator('[data-product-stock]')).toHaveCount(0);
    expect(requests).toBe(0);
    await page.goto(`${base}/${locale}/products/substrates/grow-bag/`);
    const stock = page.locator('[data-product-stock="grow-bag"]');
    await expect(stock).toHaveText(
      locale === 'ru' ? 'В наличии: 37\u00a0шт.' : 'In stock: 37\u00a0pcs'
    );
    expect(requests).toBe(1);
    quantity = 42;
    await page.clock.fastForward(61_000);
    await expect(stock).toContainText('42');
    expect(requests).toBe(2);
    await expect(page.locator('.product-detail__summary > p').first()).toBeVisible();
  });

  test(`inventory ${locale} handles zero, translated units and unavailable Google Sheets`, async ({
    page
  }) => {
    await page.route(source, (route) => reply(route, [['veymur-mct-oil', 12.5, 'L']]));
    await page.goto(`${base}/${locale}/products/veymur/veymur-mct-oil/`);
    await expect(page.locator('[data-product-stock]')).toHaveText(
      locale === 'ru' ? 'В наличии: 12,5\u00a0л' : 'In stock: 12.5\u00a0L'
    );
    await page.unroute(source);
    await page.route(source, (route) => reply(route, [['coco-shell-activated-carbon', 0, 'kg']]));
    await page.goto(`${base}/${locale}/products/shell/coco-shell-activated-carbon/`);
    await expect(page.locator('[data-product-stock]')).toHaveText(
      locale === 'ru' ? 'Нет в наличии: 0\u00a0кг' : 'Out of stock: 0\u00a0kg'
    );
    await page.unroute(source);
    await page.route(source, (route) => route.abort());
    await page.goto(`${base}/${locale}/products/substrates/grow-bag/`);
    await expect(page.locator('[data-stock-state="unknown"]')).toHaveText(
      locale === 'ru' ? 'Наличие уточняется' : 'Availability on request'
    );
    await expect(page.locator('[data-quote-product]').last()).toBeVisible();
  });
}
