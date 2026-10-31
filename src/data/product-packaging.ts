import type { LocalizedText } from './products';

export type SupplyFormat = 'consumer' | 'industrial';

export const wholesaleNotice = {
  ru: 'Оптовые поставки только для бизнеса. Минимальную партию и условия поставки согласуем при запросе.',
  en: 'Wholesale supply for businesses only. Minimum order quantities and delivery terms are agreed when you enquire.'
};

export const packagingFormats = {
  consumer: {
    label: { ru: 'Потребительская упаковка', en: 'Consumer packaging' },
    description: {
      ru: 'Для магазинов и дистрибьюторов. Готовая фасовка поставляется оптовыми партиями.',
      en: 'For shops and distributors. Finished consumer packs supplied in wholesale quantities.'
    }
  },
  industrial: {
    label: { ru: 'Промышленная фасовка', en: 'Industrial packaging' },
    description: {
      ru: 'В транспортной таре, без оформления Veymur. Тип тары и объём партии согласуем при запросе.',
      en: 'In transport packaging without Veymur branding. Container type and order quantity are agreed when you enquire.'
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
  label: { ru: 'Под ваши требования', en: 'Custom pack size' }
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
