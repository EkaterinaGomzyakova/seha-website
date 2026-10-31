import { inventorySource } from '../data/inventory';
import { formatStock, parseInventory } from '../lib/inventory';

declare global {
  interface Window {
    __sehaInventoryResponse?: (response: unknown) => void;
  }
}

let initialized = false;
let activeRequest: { id: string; receive: (response: unknown) => void } | undefined;

// Google Sheets supports JSONP for public data; its CSV endpoint does not allow browser CORS.
// A single persistent callback safely ignores late replies after a timeout.
function requestInventory(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const requestId = String(Date.now());
    const script = document.createElement('script');
    let settled = false;
    const finish = (response: unknown, error?: Error) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      script.remove();
      if (activeRequest?.id === requestId) activeRequest = undefined;
      if (error) reject(error);
      else resolve(response);
    };
    const timeout = window.setTimeout(
      () => finish(undefined, new Error('Inventory request timed out')),
      inventorySource.timeoutMs
    );
    activeRequest = { id: requestId, receive: (response) => finish(response) };
    window.__sehaInventoryResponse = (response) => {
      if (
        typeof response === 'object' &&
        response !== null &&
        'reqId' in response &&
        response.reqId === activeRequest?.id
      ) {
        activeRequest?.receive(response);
      }
    };
    const url = new URL(
      `https://docs.google.com/spreadsheets/d/${inventorySource.spreadsheetId}/gviz/tq`
    );
    url.searchParams.set('gid', inventorySource.sheetId);
    url.searchParams.set('range', inventorySource.range);
    url.searchParams.set('headers', '1');
    url.searchParams.set('tq', `select ${inventorySource.columns.join(',')}`);
    url.searchParams.set(
      'tqx',
      `out:json;reqId:${requestId};responseHandler:__sehaInventoryResponse`
    );
    script.src = url.href;
    script.async = true;
    script.referrerPolicy = 'no-referrer';
    script.onerror = () => finish(undefined, new Error('Inventory request failed'));
    script.onload = () => {
      if (activeRequest?.id === requestId) {
        finish(undefined, new Error('Inventory response is missing'));
      }
    };
    document.head.append(script);
  });
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
