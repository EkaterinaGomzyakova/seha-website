import type { LocalizedText } from './products';

export interface PackagingOption {
  id: string;
  kind: 'retail' | 'bulk';
  label: LocalizedText;
}
interface ProductPackaging {
  defaultId: string;
  options: PackagingOption[];
}
const size = (
  amount: number,
  unit: 'ml' | 'L' | 'g' | 'kg',
  kind: PackagingOption['kind'] = 'retail'
): PackagingOption => ({
  id: `${kind}-${amount}-${unit.toLowerCase()}`,
  kind,
  label: {
    ru: `${amount}\u00a0${{ ml: 'мл', L: 'л', g: 'г', kg: 'кг' }[unit]}`,
    en: `${amount}\u00a0${unit}`
  }
});
const custom: PackagingOption = {
  id: 'bulk-custom',
  kind: 'bulk',
  label: { ru: 'Под ваши требования', en: 'Custom pack size' }
};

// Client brochure: do not infer bulk capacities for products without specified sizes.
export const productPackaging: Partial<Record<string, ProductPackaging>> = {
  'veymur-mct-oil': {
    defaultId: 'retail-500-ml',
    options: [
      size(500, 'ml'),
      size(25, 'L', 'bulk'),
      size(200, 'L', 'bulk'),
      size(1000, 'L', 'bulk'),
      custom
    ]
  },
  'veymur-virgin-coconut-oil': {
    defaultId: 'retail-500-ml',
    options: [size(500, 'ml'), custom]
  },
  'rbd-coconut-oil': {
    defaultId: 'retail-500-ml',
    options: [size(500, 'ml'), custom]
  },
  'veymur-coconut-milk': {
    defaultId: 'retail-1-l',
    options: [size(250, 'ml'), size(500, 'ml'), size(1, 'L'), custom]
  },
  'veymur-coconut-sugar': {
    defaultId: 'retail-500-g',
    options: [size(250, 'g'), size(500, 'g'), size(1, 'kg'), custom]
  },
  'veymur-desiccated-coconut': {
    defaultId: 'retail-500-g',
    options: [
      size(250, 'g'),
      size(500, 'g'),
      size(1, 'kg'),
      size(5, 'kg', 'bulk'),
      size(25, 'kg', 'bulk'),
      custom
    ]
  }
};
