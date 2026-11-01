import { productPackaging } from './product-packaging';

export type QuantityUnit = 'packs' | 'pcs' | 'kg' | 'm2';
const units = {
  packs: { ru: 'уп.', en: 'packs' },
  pcs: { ru: 'шт.', en: 'pcs' },
  kg: { ru: 'кг', en: 'kg' },
  m2: { ru: 'м²', en: 'm²' }
} as const;
export function orderingFor(productId: string) {
  const packaging = productPackaging[productId];
  let unit: QuantityUnit = 'pcs';
  if (packaging) {
    unit = packaging.quantityUnit ?? (packaging.kind === 'weight' ? 'pcs' : 'packs');
  } else if (['coir-weed-mat', 'coir-geo-textile'].includes(productId)) {
    unit = 'm2';
  } else if (
    [
      'coco-peat',
      'coconut-chips',
      'coco-peat-compost',
      'coir-fiber-bales',
      'machine-twisted-fiber',
      'coco-shell-charcoal-briquettes'
    ].includes(productId)
  ) {
    unit = 'kg';
  }
  return { unit, label: units[unit], fractional: unit === 'kg' || unit === 'm2' };
}
