import type { Locale } from './translations';

export type ProductCategorySlug = 'food' | 'substrates' | 'fiber' | 'shell';

export interface LocalizedText {
  ru: string;
  en: string;
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProductItem {
  slug: string;
  category: ProductCategorySlug;
  name: LocalizedText;
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'food',
    title: { ru: 'Пищевые продукты', en: 'Food Products' },
    description: {
      ru: 'Кокосовые ингредиенты для пищевых производств, HoReCa и дистрибуции.',
      en: 'Coconut ingredients for food manufacturing, HoReCa, and distribution.'
    }
  },
  {
    slug: 'substrates',
    title: { ru: 'Кокосовые субстраты', en: 'Coconut Substrates' },
    description: {
      ru: 'Торф, брикеты, диски и чипсы для профессионального растениеводства.',
      en: 'Peat, briquettes, discs, and chips for professional horticulture.'
    }
  },
  {
    slug: 'fiber',
    title: { ru: 'Кокосовое волокно', en: 'Coconut Fiber' },
    description: {
      ru: 'Материалы для производства, сельского хозяйства и озеленения.',
      en: 'Materials for manufacturing, agriculture, and landscaping.'
    }
  },
  {
    slug: 'shell',
    title: { ru: 'Кокосовая скорлупа', en: 'Coconut Shell' },
    description: {
      ru: 'Сырьё для производства угля, фильтрации и промышленного применения.',
      en: 'Raw material for charcoal, filtration, and industrial applications.'
    }
  }
];

export const products: ProductItem[] = [
  ...[
    ['fresh-coconut', 'Свежий кокос', 'Fresh Coconut'],
    ['coconut-copra', 'Копра', 'Coconut Copra'],
    ['coconut-sugar', 'Кокосовый сахар', 'Coconut Sugar'],
    ['desiccated-coconut', 'Кокосовая стружка', 'Desiccated Coconut'],
    ['coconut-water', 'Кокосовая вода', 'Coconut Water'],
    ['coconut-milk', 'Кокосовое молоко', 'Coconut Milk'],
    ['virgin-coconut-oil', 'Виргинское кокосовое масло', 'Virgin Coconut Oil'],
    ['rbd-coconut-oil', 'Рафинированное кокосовое масло', 'RBD Coconut Oil'],
    ['mct-oil', 'МСТ-масло', 'MCT Oil']
  ].map(([slug, ru, en]) => ({
    slug,
    category: 'food' as const,
    name: { ru, en }
  })),
  ...[
    ['coir-fiber-bales', 'Тюки кокосового волокна', 'Coir Fiber Bales'],
    ['bristle-fiber', 'Кокосовая щетина', 'Bristle Fiber'],
    ['machine-twisted-fiber', 'Скрученное волокно', 'Machine Twisted Fiber'],
    ['coir-weed-mat', 'Мульчирующие маты', 'Coir Weed Mat'],
    ['erosion-control-blankets', 'Противоэрозионные маты', 'Erosion Control Blankets'],
    ['coir-geo-textile', 'Кокосовый геотекстиль', 'Coir Geo Textile']
  ].map(([slug, ru, en]) => ({
    slug,
    category: 'fiber' as const,
    name: { ru, en }
  })),
  ...[
    ['coco-shell', 'Кокосовая скорлупа', 'Coco Shell'],
    [
      'coco-shell-charcoal-briquettes',
      'Брикеты из кокосового угля',
      'Coco Shell Charcoal Briquettes'
    ],
    ['coco-shell-activated-carbon', 'Активированный уголь', 'Coco Shell Activated Carbon']
  ].map(([slug, ru, en]) => ({
    slug,
    category: 'shell' as const,
    name: { ru, en }
  })),
  ...[
    ['coco-peat', 'Кокосовый торф', 'Coco Peat'],
    ['coco-peat-briquettes', 'Кокосовые брикеты', 'Coco Peat Briquettes'],
    ['coco-coir-discs', 'Кокосовые диски', 'Coco Coir Discs'],
    ['coconut-chips', 'Кокосовые чипсы', 'Coconut Chips']
  ].map(([slug, ru, en]) => ({
    slug,
    category: 'substrates' as const,
    name: { ru, en }
  }))
];

export function localized<T extends LocalizedText>(value: T, locale: Locale) {
  return value[locale];
}
