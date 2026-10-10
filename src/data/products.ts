import type { Locale } from './translations';

export type ProductCategorySlug = 'food' | 'substrates' | 'fiber' | 'shell';
export interface LocalizedText {
  ru: string;
  en: string;
}
export const text = (ru: string, en: string): LocalizedText => ({ ru, en });
export interface ProductCategory {
  slug: ProductCategorySlug;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}
export interface ProductItem {
  /** Stable identifier independent of translated names and ordering. */
  id: string;
  slug: string;
  category: ProductCategorySlug;
  name: LocalizedText;
  label: LocalizedText;
  description: LocalizedText;
  alt: LocalizedText;
  /** Original asset; generated responsive derivatives preserve this source. */
  image: string;
}
export const productCategories: ProductCategory[] = [
  {
    slug: 'food',
    title: text('Пищевые продукты', 'Food Products'),
    description: text(
      'Кокосовые ингредиенты для пищевых производств, ресторанов и дистрибуции.',
      'Coconut ingredients for food manufacturing, hospitality, and distribution.'
    ),
    image: '/assets/images/common/category-food.png'
  },
  {
    slug: 'substrates',
    title: text('Кокосовые субстраты', 'Coconut Substrates'),
    description: text(
      'Торф, брикеты, диски и чипсы для профессионального растениеводства.',
      'Peat, bricks, discs, and chips for professional horticulture.'
    ),
    image: '/assets/images/common/category-substrates.png'
  },
  {
    slug: 'fiber',
    title: text('Кокосовое волокно', 'Coconut Fiber'),
    description: text(
      'Материалы для производства, сельского хозяйства и озеленения.',
      'Materials for manufacturing, agriculture, and landscaping.'
    ),
    image: '/assets/images/common/category-fiber.png'
  },
  {
    slug: 'shell',
    title: text('Кокосовая скорлупа', 'Coconut Shell'),
    description: text(
      'Сырьё для производства угля, фильтрации и промышленного применения.',
      'Raw material for charcoal, filtration, and industrial applications.'
    ),
    image: '/assets/images/common/category-shell.png'
  }
];
type Row = [
  slug: string,
  image: string,
  ru: string,
  en: string,
  descriptionRu: string,
  descriptionEn: string,
  labelRu?: string,
  labelEn?: string
];
const rows: Record<ProductCategorySlug, Row[]> = {
  food: [
    [
      'fresh-coconut',
      '01',
      'Свежие кокосы',
      'Fresh Coconut',
      'Отборные кокосы из региона Поллачи в Индии. Плоды проверяют по размеру, зрелости и свежести перед переработкой.',
      'Selected coconuts from Pollachi, India, inspected for size, maturity, and freshness before processing.',
      'Отборные плоды',
      'Farm Selected'
    ],
    [
      'coconut-copra',
      '02',
      'Кокосовая копра',
      'Coconut Copra',
      'Высушенная мякоть зрелых кокосов с высоким содержанием масла для производства кокосового масла и дальнейшей переработки.',
      'Dried mature coconut flesh with a high oil content for coconut oil production and further processing.',
      'Высокое содержание масла',
      'Oil Rich'
    ],
    [
      'coconut-sugar',
      '03',
      'Кокосовый сахар',
      'Coconut Sugar',
      'Натуральный подсластитель из сока соцветий кокосовой пальмы для напитков, выпечки и кондитерских изделий.',
      'A natural sweetener made from coconut palm sap for beverages, bakery, and confectionery.',
      'Натуральный подсластитель',
      'Natural Sweetener'
    ],
    [
      'desiccated-coconut',
      '05',
      'Кокосовая стружка',
      'Desiccated Coconut',
      'Измельчённая и высушенная мякоть кокоса для выпечки, кондитерских изделий и пищевого производства.',
      'Finely grated and dried coconut flesh for bakery, confectionery, and food manufacturing.',
      'Мелкая фракция',
      'Fine Texture'
    ],
    [
      'coconut-water',
      '04',
      'Кокосовая вода',
      'Coconut Water',
      'Вода молодых кокосов с естественным освежающим вкусом для напитков и пищевого производства.',
      'Water from young coconuts with a naturally refreshing taste for beverages and food manufacturing.',
      'Освежающий вкус',
      'Refreshing Taste'
    ],
    [
      'coconut-milk',
      '09',
      'Кокосовое молоко',
      'Coconut Milk',
      'Продукт измельчения и отжима мякоти зрелых кокосов для напитков, десертов, соусов и выпечки.',
      'Made by grinding and pressing mature coconut flesh, for beverages, desserts, sauces, and bakery products.',
      'Кремовая текстура',
      'Creamy Texture'
    ],
    [
      'virgin-coconut-oil',
      '07',
      'Нерафинированное кокосовое масло',
      'Virgin Coconut Oil',
      'Масло из свежей мякоти зрелых кокосов с характерным вкусом и ароматом для пищевого и косметического производства.',
      'Oil from fresh mature coconut flesh, retaining its characteristic taste and aroma for food and cosmetic manufacturing.',
      'Кокосовый аромат',
      'Natural Aroma'
    ],
    [
      'rbd-coconut-oil',
      '06',
      'Рафинированное кокосовое масло',
      'RBD Coconut Oil',
      'Рафинированное, отбеленное и дезодорированное кокосовое масло с нейтральным вкусом для выпечки и других пищевых продуктов.',
      'Refined, bleached, and deodorized coconut oil with a neutral taste for bakery and other food applications.',
      'Нейтральный вкус',
      'Neutral Taste'
    ],
    [
      'mct-oil',
      '08',
      'МСТ-масло',
      'MCT Oil',
      'Среднецепочечные триглицериды из кокосового масла для функциональных продуктов, спортивного и специализированного питания.',
      'Medium-chain triglycerides derived from coconut oil for functional foods, sports nutrition, and specialized nutrition.',
      'Для специализированного питания',
      'Specialized Nutrition'
    ]
  ],
  substrates: [
    [
      'coco-peat',
      '01',
      'Кокосовый торф',
      'Coco Peat',
      'Мелкая фракция кокосового сырья для приготовления субстратов в теплицах и питомниках.',
      'Fine coconut material for preparing growing media in greenhouses and nurseries.'
    ],
    [
      'coco-peat-briquettes',
      '02',
      'Кокосовый торф в брикетах',
      'Coco Peat Bricks',
      'Прессованный кокосовый торф в компактных брикетах, размачиваемых перед использованием.',
      'Compressed coconut peat in compact bricks, hydrated before use.'
    ],
    [
      'grow-cube-slice-m',
      '03',
      'Кубический субстрат (M)',
      'Grow Cube Slice (M)',
      'Кокосовый субстрат в кубическом формате среднего размера для выращивания растений.',
      'Coconut growing medium in a medium cube format for plant cultivation.'
    ],
    [
      'grow-cube-olive-l',
      '04',
      'Кубический субстрат (L)',
      'Grow Cube Olive (L)',
      'Кокосовый субстрат в крупном кубическом формате для профессионального выращивания.',
      'Coconut growing medium in a large cube format for professional cultivation.'
    ],
    [
      'coco-coir-discs',
      '05',
      'Кокосовые диски',
      'Coco Coir Discs',
      'Прессованные кокосовые диски для заполнения горшков и контейнеров после увлажнения.',
      'Compressed coir discs for filling pots and containers after hydration.'
    ],
    [
      'coconut-chips',
      '06',
      'Кокосовые чипсы',
      'Coconut Husk Chips',
      'Крупная фракция кокосовой шелухи для структурирования смесей и выращивания в контейнерах.',
      'Coarse coconut husk chips for structured growing mixes and container cultivation.'
    ],
    [
      'coco-peat-tablets',
      '07',
      'Таблетки из кокосового торфа',
      'Coco Peat Tablets',
      'Компактные таблетки из кокосового торфа для рассады и укоренения черенков.',
      'Compact coconut peat tablets for seedlings and rooting cuttings.'
    ],
    [
      'coco-peat-compost',
      '08',
      'Компост из кокосового торфа',
      'Coco Peat Compost',
      'Материал на основе кокосового торфа для почвенных смесей и профессионального растениеводства.',
      'Coconut peat-based material for soil mixes and professional horticulture.'
    ],
    [
      'seeding-tray-media',
      '09',
      'Субстрат для лотков рассады',
      'Seeding Tray Media',
      'Кокосовый субстрат для заполнения рассадных кассет и лотков.',
      'Coconut growing medium for filling seedling trays and propagation cells.'
    ],
    [
      'coco-peat-seed-starter',
      '10',
      'Субстрат для проращивания',
      'Coco Peat Seed Starter',
      'Кокосовая среда для посева семян и начального этапа выращивания рассады.',
      'Coconut growing medium for seed germination and early seedling cultivation.'
    ]
  ],
  fiber: [
    [
      'coir-fiber-bales',
      '01',
      'Тюки кокосового волокна',
      'Coir Fiber Bales',
      'Прессованное натуральное кокосовое волокно для промышленной переработки.',
      'Baled natural coconut fiber for industrial processing.'
    ],
    [
      'bristle-fiber',
      '02',
      'Кокосовая щетина',
      'Bristle Fiber',
      'Жёсткое кокосовое волокно для изготовления щёток и других изделий.',
      'Stiff coconut fiber for brushes and other manufactured products.'
    ],
    [
      'machine-twisted-fiber',
      '03',
      'Скрученное волокно',
      'Machine Twisted Fiber',
      'Механически скрученное кокосовое волокно для производственных задач.',
      'Mechanically twisted coconut fiber for manufacturing applications.'
    ],
    [
      'coir-weed-mat',
      '04',
      'Мульчирующие маты',
      'Coir Weed Mat',
      'Маты из кокосового волокна для мульчирования и защиты поверхности почвы.',
      'Coir mats for mulching and protecting soil surfaces.'
    ],
    [
      'erosion-control-blankets',
      '05',
      'Противоэрозионные маты',
      'Erosion Control Blankets',
      'Кокосовые маты для защиты склонов и грунта от эрозии при озеленении.',
      'Coir blankets for erosion protection on slopes and landscaped ground.'
    ],
    [
      'coir-geo-textile',
      '06',
      'Кокосовый геотекстиль',
      'Coir Geotextile',
      'Сетчатый материал из кокосового волокна для укрепления почвы и озеленения.',
      'Woven coir material for soil stabilization and landscaping.'
    ]
  ],
  shell: [
    [
      'coco-shell',
      '01',
      'Кокосовая скорлупа',
      'Coconut Shell',
      'Натуральная скорлупа кокоса для промышленной переработки и производства угля.',
      'Natural coconut shell for industrial processing and charcoal production.'
    ],
    [
      'coco-shell-charcoal-briquettes',
      '02',
      'Брикеты из кокосового угля',
      'Coconut Shell Charcoal Briquettes',
      'Формованные брикеты из угля кокосовой скорлупы для топливного применения.',
      'Formed coconut shell charcoal briquettes for fuel applications.'
    ],
    [
      'coco-shell-activated-carbon',
      '03',
      'Активированный уголь',
      'Coconut Shell Activated Carbon',
      'Активированный уголь из кокосовой скорлупы для фильтрации и промышленной очистки.',
      'Coconut shell activated carbon for filtration and industrial purification.'
    ]
  ]
};
export const products: ProductItem[] = (Object.keys(rows) as ProductCategorySlug[]).flatMap(
  (category) =>
    rows[category].map(([slug, image, ru, en, descriptionRu, descriptionEn, labelRu, labelEn]) => ({
      id: slug,
      slug,
      category,
      name: text(ru, en),
      alt: text(ru, en),
      label: text(labelRu ?? ru, labelEn ?? en),
      description: text(descriptionRu, descriptionEn),
      image: `/assets/images/${category}/${category}-${image}-photorealistic.png`
    }))
);
export function localized<T extends LocalizedText>(value: T, locale: Locale) {
  return value[locale];
}
export function productsForCategory(category: ProductCategorySlug): ProductItem[] {
  return products.filter((product) => product.category === category);
}
