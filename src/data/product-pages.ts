import type { Locale } from './translations';

export type ProductPageSlug = 'food' | 'substrates' | 'fiber' | 'shell';

interface LocalizedValue {
  ru: string;
  en: string;
}

export interface ProductPageItem {
  image: string;
  label: LocalizedValue;
  name: LocalizedValue;
  alt: LocalizedValue;
  description: LocalizedValue;
}

export interface ProductPageDefinition {
  slug: ProductPageSlug;
  bodyClass: string;
  path: string;
  heroImage: string;
  section: LocalizedValue;
  breadcrumb: LocalizedValue;
  title: LocalizedValue;
  intro: LocalizedValue;
  listLabel: LocalizedValue;
  listTitle: LocalizedValue;
  cta: LocalizedValue;
  items: ProductPageItem[];
}

const text = (ru: string, en: string): LocalizedValue => ({ ru, en });

export const productPages: Record<ProductPageSlug, ProductPageDefinition> = {
  food: {
    slug: 'food',
    bodyClass: 'product-detail--food',
    path: '/products/food',
    heroImage: '/assets/images/food/food-06-photorealistic.png',
    section: text('02 / ПИЩЕВЫЕ ПРОДУКТЫ', '02 / FOOD PRODUCTS'),
    breadcrumb: text('Главная / пищевые продукты', 'Main / food products'),
    title: text('Пищевые продукты', 'Food Products'),
    intro: text(
      'Кокос и продукты его переработки для производителей продуктов питания, брендов, HoReCa и дистрибьюторов. Уточним формат, характеристики, упаковку и объем партии.',
      'Coconut products and ingredients for food manufacturing, HoReCa, and wholesale supply. Various specifications, packaging formats, and order volumes to meet your business needs.'
    ),
    listLabel: text('для пищевого производства', 'for food manufacturing'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: [
      [
        'food-01',
        'Fresh Coconut',
        'Свежие кокосы',
        'Selected coconuts from the Pollachi region of India are carefully inspected for size, maturity, and freshness. Suitable for further processing.',
        'Farm Selected'
      ],
      [
        'food-02',
        'Coconut Copra',
        'Кокосовая копра',
        'Dried flesh of mature coconuts with a high oil content. Used for coconut oil production and further processing.',
        'Oil Rich'
      ],
      [
        'food-03',
        'Coconut Sugar',
        'Кокосовый сахар',
        'A natural sweetener made from coconut palm sap. Minimally processed to retain its natural nutrients.',
        'Natural Sweetener'
      ],
      [
        'food-05',
        'Desiccated Coconut Powder',
        'Кокосовая стружка',
        'Made from finely grated and dried coconut flesh. Used in bakery, confectionery, and food manufacturing.',
        'Fine Texture'
      ],
      [
        'food-04',
        'Coconut Water',
        'Кокосовая вода',
        'Made from young coconuts with a naturally refreshing taste. Used in beverages and health-focused food products.',
        'Pure Hydration'
      ],
      [
        'food-09',
        'Coconut Milk',
        'Кокосовое молоко',
        'Made from the flesh of mature coconuts through grinding and pressing. Used in beverages, desserts, sauces, bakery products, and other food applications.',
        'Creamy Texture'
      ],
      [
        'food-07',
        'Virgin Coconut Oil',
        'Нерафинированное масло',
        'Made from fresh mature coconut flesh, retaining its natural taste and aroma. Used in food manufacturing and cosmetics.',
        'Natural Aroma'
      ],
      [
        'food-06',
        'RBD Coconut Oil',
        'Кокосовое масло RBD',
        'Made from coconut-derived raw materials through refining, bleaching, and deodorization. Used in bakery products and other food applications.',
        'Neutral Taste'
      ],
      [
        'food-08',
        'MCT Oil',
        'MCT масло',
        'Made from medium-chain triglycerides derived from coconut oil. Used in functional foods, sports nutrition, and specialized nutrition products.',
        'Fast Energy'
      ]
    ].map(([image, labelEn, nameRu, descriptionEn, labelRu]) => ({
      image: `/assets/images/food/${image}-photorealistic.png`,
      label: text(labelRu, labelEn),
      name: text(nameRu, labelEn),
      alt: text(nameRu, labelEn),
      description: text(descriptionEn, descriptionEn)
    }))
  },
  substrates: {
    slug: 'substrates',
    bodyClass: 'product-detail--substrates',
    path: '/products/substrates',
    heroImage: '/assets/images/substrates/substrates-01-photorealistic.png',
    section: text('01 / КОКОСОВЫЕ СУБСТРАТЫ', '01 / COCONUT SUBSTRATES'),
    breadcrumb: text('Кокосовые субстраты', 'Coconut Substrates'),
    title: text('Субстраты для выращивания', 'Growing Substrates'),
    intro: text(
      'Профессиональные субстраты на основе кокоса для теплиц, питомников, гидропоники и рассады. Подберем фракцию, формат, объем и упаковку под вашу технологию выращивания.',
      'Professional coconut-based substrates for greenhouses, nurseries, hydroponics, and seedlings. We will match the fraction, format, volume, and packaging to your growing technology.'
    ),
    listLabel: text('для растениеводства', 'for horticulture'),
    listTitle: text('Категории<br>продуктов', 'Product<br>categories'),
    cta: text('Заказать', 'Request a Quote'),
    items: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'].map((image, index) => {
      const names = [
        ['Кокосовый торф', 'Coconut Peat'],
        ['Кокосовый торф в брикетах', 'Coconut Peat Bricks'],
        ['Кубический субстрат (M)', 'Grow Cube Slice (M)'],
        ['Кубический субстрат (L)', 'Grow Cube Olive (L)'],
        ['Кокосовые диски', 'Coco Disc'],
        ['Кокосовые чипсы', 'Coco Husk Chips'],
        ['Таблетки из кокосового торфа', 'Coco Peat Tablets'],
        ['Компост из кокосового торфа', 'Coco Peat Compost'],
        ['Субстрат для лотков рассады', 'Seeding Tray Media'],
        ['Субстрат для проращивания', 'Coco Peat Seed Starter']
      ][index];
      return {
        image: `/assets/images/substrates/substrates-${image}-photorealistic.png`,
        label: text(names[0], names[1]),
        name: text(names[0], names[1]),
        alt: text(names[0], names[1]),
        description: text(
          'Натуральный кокосовый субстрат для профессионального растениеводства, теплиц и гидропоники.',
          'Professional coconut-based substrate for greenhouses, nurseries, hydroponics, and seedlings.'
        )
      };
    })
  },
  fiber: {
    slug: 'fiber',
    bodyClass: 'product-detail--fiber',
    path: '/products/fiber',
    heroImage: '/assets/images/fiber/fiber-01-photorealistic.png',
    section: text('03 / КОКОСОВОЕ ВОЛОКНО', '03 / COIR FIBER'),
    breadcrumb: text('Главная / Кокосовое волокно', 'Main / Coir products'),
    title: text('Продукты из кокосового волокна', 'Coir Products'),
    intro: text(
      'Продукты из натурального кокосового волокна для промышленности, сельского хозяйства, озеленения и защиты грунта. Различные форматы и объёмы поставок для профессионального применения.',
      'Natural coconut fiber products for industrial, agricultural, landscaping, and soil protection applications. Available in various formats and supply volumes for professional use.'
    ),
    listLabel: text('Для промышленности и строительства', 'INDUSTRIAL & CONSTRUCTION USE'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: [
      ['01', 'Тюки кокосового волокна', 'Coir Fiber Bales'],
      ['02', 'Кокосовая щетина', 'Bristle Fiber'],
      ['03', 'Скрученное волокно', 'Machine Twisted Fiber'],
      ['04', 'Мульчирующие маты', 'Coir Weed Mat'],
      ['05', 'Противоэрозионные маты', 'Erosion Control Blankets'],
      ['06', 'Кокосовый геотекстиль', 'Coir Geo Textile']
    ].map(([image, ru, en]) => ({
      image: `/assets/images/fiber/fiber-${image}-photorealistic.png`,
      label: text(ru, en),
      name: text(ru, en),
      alt: text(ru, en),
      description: text(
        'Натуральное кокосовое волокно для профессионального производства, сельского хозяйства и защиты почвы.',
        'Natural coconut fiber for professional manufacturing, agriculture, landscaping, and soil protection.'
      )
    }))
  },
  shell: {
    slug: 'shell',
    bodyClass: 'product-detail--shell',
    path: '/products/shell',
    heroImage: '/assets/images/shell/shell-01-photorealistic.png',
    section: text('04 / КОКОСОВАЯ СКОРЛУПА', '04 / COCO SHELL'),
    breadcrumb: text('Главная / Кокосовая скорлупа', 'Main / Coco Shell products'),
    title: text('Продукты из кокосовой скорлупы', 'Coco Shell Products'),
    intro: text(
      'Продукты из натуральной кокосовой скорлупы для промышленности, фильтрации и производства топлива. Различные форматы и объёмы поставок для бизнеса.',
      'Natural coconut shell products for industrial applications, filtration, and fuel production. Available in various formats and supply volumes for business needs.'
    ),
    listLabel: text('Для промышленности и топлива', 'Industrial Raw Material'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: [
      ['01', 'Кокосовая скорлупа', 'Coco Shell'],
      ['02', 'Брикеты из кокосового угля', 'Coco Shell Charcoal Briquettes'],
      ['03', 'Активированный уголь', 'Coco Shell Activated Carbon']
    ].map(([image, ru, en]) => ({
      image: `/assets/images/shell/shell-${image}-photorealistic.png`,
      label: text(ru, en),
      name: text(ru, en),
      alt: text(ru, en),
      description: text(
        'Натуральное сырьё из кокосовой скорлупы для топлива, фильтрации и промышленного применения.',
        'Natural coconut shell raw material for fuel, filtration, and industrial applications.'
      )
    }))
  }
};

export function getProductPage(slug: ProductPageSlug, locale: Locale) {
  return productPages[slug];
}
