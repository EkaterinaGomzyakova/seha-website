import { inventorySource } from '../data/inventory';
import { formatStock, parseInventory } from '../lib/inventory';

let initialized = false;

// Public stock is fetched by our server; visitors never connect directly to Google.
async function requestInventory(): Promise<unknown> {
  const response = await fetch('/api/inventory.php', {
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    signal: AbortSignal.timeout(inventorySource.timeoutMs)
  });
  if (!response.ok) throw new Error('Inventory unavailable');
  return response.json();
}

export function initProductStock(): void {
  if (initialized) return;
  const elements = [...document.querySelectorAll<HTMLElement>('[data-product-stock]')];
  if (!elements.length) return;
  initialized = true;
  let busy = false;
  let lastAttempt = 0;

  const refresh = async () => {
    if (busy || document.hidden || Date.now() - lastAttempt < inventorySource.refreshMs) return;
    busy = true;
    lastAttempt = Date.now();
    let stock: ReturnType<typeof parseInventory>;
    try {
      stock = parseInventory(await requestInventory());
    } catch {
      stock = new Map();
    }
    for (const element of elements) {
      const item = stock.get(element.dataset.productStock ?? '');
      const locale = element.dataset.stockLocale === 'en' ? 'en' : 'ru';
      const text = formatStock(item, locale);
      if (element.textContent !== text) element.textContent = text;
      element.dataset.stockState = item
        ? item.quantity > 0
          ? 'available'
          : 'unavailable'
        : 'unknown';
    }
    busy = false;
  };

  // Availability must not delay the page's load event if Google is slow or unavailable.
  if (document.readyState === 'complete') void refresh();
  else window.addEventListener('load', () => void refresh(), { once: true });
  window.setInterval(() => void refresh(), inventorySource.refreshMs);
  document.addEventListener('visibilitychange', () => void refresh());
}
