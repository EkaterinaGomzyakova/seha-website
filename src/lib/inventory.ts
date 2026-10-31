import type { Locale } from '../data/translations';
import { inventorySource } from '../data/inventory';

const units = {
  pcs: { ru: 'шт.', en: 'pcs' },
  kg: { ru: 'кг', en: 'kg' },
  L: { ru: 'л', en: 'L' },
  'm²': { ru: 'м²', en: 'm²' }
} as const;

export interface StockItem {
  quantity: number;
  unit: keyof typeof units;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** Ignore invalid/ambiguous rows instead of interpreting missing quantities as zero. */
export function parseInventory(response: unknown): Map<string, StockItem> {
  if (
    !isRecord(response) ||
    response.status !== 'ok' ||
    !isRecord(response.table) ||
    !Array.isArray(response.table.cols) ||
    !Array.isArray(response.table.rows)
  ) {
    throw new Error('Inventory source is unavailable');
  }
  const columns = response.table.cols;
  if (
    !inventorySource.columns.every(
      (id, index) => isRecord(columns[index]) && columns[index].id === id
    )
  ) {
    throw new Error('Inventory columns do not match the expected schema');
  }
  const stock = new Map<string, StockItem>();
  const seen = new Set<string>();
  for (const row of response.table.rows) {
    if (!isRecord(row) || !Array.isArray(row.c)) continue;
    const [id, quantity, unit] = row.c.map((cell: unknown) => (isRecord(cell) ? cell.v : null));
    if (typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) continue;
    if (seen.has(id)) {
      stock.delete(id);
      continue;
    }
    seen.add(id);
    if (
      typeof quantity !== 'number' ||
      !Number.isFinite(quantity) ||
      quantity < 0 ||
      quantity > Number.MAX_SAFE_INTEGER ||
      typeof unit !== 'string' ||
      !Object.hasOwn(units, unit)
    ) {
      continue;
    }
    stock.set(id, { quantity, unit: unit as StockItem['unit'] });
  }
  return stock;
}

export function formatStock(stock: StockItem | undefined, locale: Locale): string {
  if (!stock) return locale === 'ru' ? 'Наличие уточняется' : 'Availability on request';
  const quantity = new Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'en-GB', {
    maximumFractionDigits: 6
  }).format(stock.quantity);
  const label =
    stock.quantity > 0
      ? locale === 'ru'
        ? 'В наличии'
        : 'In stock'
      : locale === 'ru'
        ? 'Нет в наличии'
        : 'Out of stock';
  return `${label}: ${quantity}\u00a0${units[stock.unit][locale]}`;
}
