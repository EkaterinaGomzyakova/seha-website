import type { LocalizedText } from './products';

export type SupplyFormat = 'consumer' | 'industrial';

export const packagingFormats = {
  consumer: {
    label: { ru: 'Готовая упаковка', en: 'Consumer packs' },
    description: {
      ru: 'Упаковка Veymur для продажи в магазинах.',
      en: 'Veymur packs for resale.'
    }
  },
  industrial: {
    label: { ru: 'Промышленная фасовка', en: 'Bulk packaging' },
    description: {
      ru: 'В транспортной таре без оформления Veymur.',
      en: 'Transport packaging without Veymur branding.'
    }
  }
} as const;

export interface PackagingOption {
  id: string;
  format: SupplyFormat;
  label: LocalizedText;
}
interface ProductPackaging {
  defaultId: string;
  options: PackagingOption[];
}
const size = (
  amount: number,
  unit: 'ml' | 'L' | 'g' | 'kg',
  format: PackagingOption['format'] = 'consumer'
): PackagingOption => ({
  id: `${format}-${amount}-${unit.toLowerCase()}`,
  format,
  label: {
    ru: `${amount}\u00a0${{ ml: 'мл', L: 'л', g: 'г', kg: 'кг' }[unit]}`,
    en: `${amount}\u00a0${unit}`
  }
});
const custom: PackagingOption = {
  id: 'industrial-custom',
  format: 'industrial',
  label: { ru: 'Другая фасовка', en: 'Other size' }
};

// Client brochure: do not infer bulk capacities for products without specified sizes.
export const productPackaging: Partial<Record<string, ProductPackaging>> = {
  'veymur-mct-oil': {
    defaultId: 'consumer-500-ml',
    options: [
      size(500, 'ml'),
      size(25, 'L', 'industrial'),
      size(200, 'L', 'industrial'),
      size(1000, 'L', 'industrial'),
      custom
    ]
  },
  'veymur-virgin-coconut-oil': {
    defaultId: 'consumer-500-ml',
    options: [size(500, 'ml'), custom]
  },
  'rbd-coconut-oil': {
    defaultId: 'consumer-500-ml',
    options: [size(500, 'ml'), custom]
  },
  'veymur-coconut-milk': {
    defaultId: 'consumer-1-l',
    options: [size(250, 'ml'), size(500, 'ml'), size(1, 'L'), custom]
  },
  'veymur-coconut-sugar': {
    defaultId: 'consumer-500-g',
    options: [size(250, 'g'), size(500, 'g'), size(1, 'kg'), custom]
  },
  'veymur-desiccated-coconut': {
    defaultId: 'consumer-500-g',
    options: [
      size(250, 'g'),
      size(500, 'g'),
      size(1, 'kg'),
      size(5, 'kg', 'industrial'),
      size(25, 'kg', 'industrial'),
      custom
    ]
  }
};
