// Public, read-only source. Keep private customer/order data in a different spreadsheet.
export const inventorySource = {
  spreadsheetId: '1hBJr7axUUdTJCrlbb91vhsdD-ov15gFh9JXpmnkJuXM',
  sheetId: '0',
  range: 'A1:E1000',
  columns: ['A', 'D', 'E'],
  refreshMs: 60_000,
  timeoutMs: 10_000
} as const;
