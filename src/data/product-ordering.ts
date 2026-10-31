import { productPackaging } from './product-packaging';

export type QuantityUnit = 'packs' | 'pcs' | 'kg' | 'm2';
const units = {
  packs: { ru: 'уп.', en: 'packs' },
  pcs: { ru: 'шт.', en: 'pcs' },
  kg: { ru: 'кг', en: 'kg' },
  m2: { ru: 'м²', en: 'm²' }
} as const;
export function orderingFor(productId: string) {
  const unit: QuantityUnit = productPackaging[productId]
    ? 'packs'
    : ['coir-weed-mat', 'coir-geo-textile'].includes(productId)
      ? 'm2'
      : [
            'coco-peat',
            'coconut-chips',
            'coco-peat-compost',
            'coir-fiber-bales',
            'machine-twisted-fiber',
            'coco-shell-charcoal-briquettes',
            'coco-shell-activated-carbon'
          ].includes(productId)
        ? 'kg'
        : 'pcs';
  return { unit, label: units[unit], fractional: unit === 'kg' || unit === 'm2' };
}
