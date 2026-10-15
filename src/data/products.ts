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
      'fresh-coconut.png',
      'Свежие кокосы',
      'Fresh Coconut',
      'Отборные кокосы из индийского региона Поллачи проходят контроль по размеру, зрелости и свежести. Подходят для переработки.',
      'Selected coconuts from the Pollachi region of India are carefully inspected for size, maturity, and freshness. Suitable for further processing.',
      'Fresh Coconut',
      'Farm Selected'
    ],
    [
      'coconut-copra',
      'coconut-copra.png',
      'Кокосовая копра',
      'Coconut Copra',
      'Сушёная мякоть зрелого кокоса с высоким содержанием масла. Применяется для производства кокосового масла и переработки.',
      'Dried flesh of mature coconuts with a high oil content. Used for coconut oil production and further processing.',
      'Coconut Copra',
      'Oil Rich'
    ],
    [
      'coconut-sugar',
      'coconut-sugar.png',
      'Кокосовый сахар',
      'Coconut Sugar',
      'Натуральный подсластитель, получаемый из сока кокосовой пальмы. Подвергается минимальной обработке, сохраняет полезные вещества.',
      'A natural sweetener made from coconut palm sap. Minimally processed to retain its natural nutrients.',
      'Coconut Sugar',
      'Natural Sweetener'
    ],
    [
      'desiccated-coconut',
      'desiccated-coconut.png',
      'Кокосовая стружка',
      'Desiccated Coconut Powder',
      'Производится из мелко натёртой и высушенной кокосовой мякоти. Используется в выпечке, кондитерских изделиях и пищевой промышленности.',
      'Made from finely grated and dried coconut flesh. Used in bakery, confectionery, and food manufacturing.',
      'Desiccated Coconut Powder',
      'Fine Texture'
    ],
    [
      'coconut-water',
      'coconut-water.png',
      'Кокосовая вода',
      'Coconut Water',
      'Производится из молодых кокосов, обладает освежающим вкусом. Используется в напитках и продуктах для здорового питания.',
      'Made from young coconuts with a naturally refreshing taste. Used in beverages and health-focused food products.',
      'Coconut Water',
      'Pure Hydration'
    ],
    [
      'coconut-milk',
      'coconut-milk.png',
      'Кокосовое молоко',
      'Coconut Milk',
      'Производится из мякоти зрелых кокосов путём измельчения и отжима. Используется в производстве напитков, десертов, соусов, выпечки и других пищевых продуктов.',
      'Made from the flesh of mature coconuts through grinding and pressing. Used in beverages, desserts, sauces, bakery products, and other food applications.',
      'Coconut Milk',
      'Creamy Texture'
    ],
    [
      'virgin-coconut-oil',
      'virgin-coconut-oil.png',
      'Нерафинированное кокосовое масло',
      'Virgin Coconut Oil',
      'Производится из свежей мякоти зрелых кокосов с сохранением естественного вкуса и аромата. Используется в пищевой промышленности и косметике.',
      'Made from fresh mature coconut flesh, retaining its natural taste and aroma. Used in food manufacturing and cosmetics.',
      'Virgin Coconut Oil',
      'Natural Aroma'
    ],
    [
      'rbd-coconut-oil',
      'rbd-coconut-oil.png',
      'Рафинированное кокосовое масло (RBD)',
      'RBD Coconut Oil',
      'Производится из кокосового сырья методом рафинации, отбеливания и дезодорации. Для производства выпечки и других пищевых продуктов.',
      'Made from coconut-derived raw materials through refining, bleaching, and deodorization. Used in bakery products and other food applications.',
      'RBD Coconut Oil',
      'Neutral Taste'
    ],
    [
      'mct-oil',
      'mct-oil.png',
      'MCT-масло',
      'MCT Oil',
      'Производится из среднецепочечных триглицеридов, получаемых из кокосового масла. Используется в функциональном, спортивном и специализированном питании.',
      'Made from medium-chain triglycerides derived from coconut oil. Used in functional foods, sports nutrition, and specialized nutrition products.',
      'MCT Oil',
      'Fast Energy'
    ]
  ],
  substrates: [
    [
      'grow-bag',
      'grow-bag.png',
      'Гроубэг',
      'Grow Bag',
      'Кокосовый субстрат для беспочвенного выращивания. Состав, размеры и отверстия подбираются под культуру и требования заказчика.',
      'Coco substrate for soilless cultivation. Composition, dimensions and holes tailored to crops and customer needs.',
      'Grow bag',
      'Customizable'
    ],
    [
      'open-top-grow-bag',
      'open-top-grow-bag.png',
      'Открытый гроубэг',
      'Open-Top Grow Bag',
      'Гроубэг для голубики и малины с 60% кокосового торфа и 40% кокосовых чипсов. Состав, размеры и дренаж под требования заказчика.',
      'Grow bag for blueberries and raspberries with 60% coco peat and 40% chips. Customizable composition, size and drainage.',
      'Open-top grow bag',
      'Well-Drained'
    ],
    [
      'coco-peat',
      'coco-peat.png',
      'Кокосовый торф',
      'Coco Peat',
      'Натуральный субстрат из очищенного кокосового волокна. Подходит для улучшения влагоёмкости, аэрации и структуры почвосмесей.',
      'Natural substrate made from cleaned coconut fiber. Suitable for improving moisture retention, aeration, and soil mix structure.',
      'Coco peat',
      'Organic'
    ],
    [
      'coco-peat-briquettes',
      'coco-peat-bricks.png',
      'Кокосовый торф в брикетах',
      'Coco Peat Bricks',
      'Спрессованные брикеты кокосового субстрата для тепличных хозяйств и объёмных поставок. Удобны для хранения и транспортировки.',
      'Compressed coconut substrate bricks for greenhouse operations and bulk supply. Convenient to store and transport.',
      'Coco Peat Bricks',
      'Compressed'
    ],
    [
      'coconut-chips',
      'coco-husk-chips.png',
      'Кокосовые чипсы',
      'Coco Husk Chips',
      'Крупные частицы кокосовой шелухи для улучшения аэрации и дренажа. Подходят для орхидей, гидропоники и специализированных культур.',
      'Large coconut husk particles for improved aeration and drainage. Suitable for orchids, hydroponics, and specialty crops.',
      'Coco Husk Chips',
      'Aeration'
    ],
    [
      'coco-husk-chips-bricks',
      'coco-husk-chips-bricks.png',
      'Кокосовые чипсы в брикетах',
      'Coco Husk Chips Bricks',
      'Прессованные блоки кокосовых чипсов для теплиц и приготовления субстратов. Улучшают аэрацию и дренаж, удобны в транспортировке.',
      'Compressed coco chip bricks for greenhouses and substrate preparation. Improve aeration and drainage, and are easy to transport.',
      'Coco Husk Chips Bricks',
      'Improved Drainage'
    ],
    [
      'grow-cube-sleeve',
      'grow-cube-sleeve.png',
      'Кубический субстрат',
      'Grow Cube Sleeve',
      'Спрессованные блоки кокосового субстрата среднего размера для контролируемого выращивания растений, подходят для гидропоники.',
      'Medium-format coconut blocks for seedlings, potted crops, and hydroponics. Retain moisture and support root aeration.',
      'Grow Cube Sleeve',
      'Hydroponics'
    ],
    [
      'coco-coir-discs',
      'coco-discs.png',
      'Кокосовые диски',
      'Coco Discs',
      'Спрессованные диски из кокосового волокна. При увлажнении увеличиваются, образуют натуральный биоразлагаемый субстрат.',
      'Compressed coconut fiber discs. They expand when moistened and form a natural biodegradable substrate.',
      'Coco Disc',
      'Biodegradable'
    ],
    [
      'coco-peat-tablets',
      'coco-peat-tablets.png',
      'Таблетки из кокосового торфа',
      'Coco Peat Tablets',
      'Торфяные таблетки для проращивания семян и рассады. После полива расширяются и обеспечивают комфортные условия для роста.',
      'Pressed tablets for seed germination and seedlings. They expand when moistened and form a convenient planting medium.',
      'Coco Peat Tablets',
      'Seed Starting'
    ],
    [
      'coco-peat-compost',
      'coco-peat-compost.png',
      'Компост из кокосового торфа',
      'Coco Peat Compost',
      'Органический субстрат для выращивания растений и улучшения почвы. Удерживает влагу и поддерживает здоровье корней.',
      'Organic natural substrate for growing plants and improving soil. Retains moisture and supports root health.',
      'Coco Peat Compost',
      'Root Growth'
    ],
    [
      'seeding-tray-media',
      'seeding-tray-media.png',
      'Субстрат для лотков рассады',
      'Seeding Tray Media',
      'Кокосовый субстрат для выращивания рассады. Обеспечивает равномерное прорастание семян и здоровый рост корней.',
      'Ready-made mix for seedling trays and plug trays. Ensures even germination, aeration, and healthy root development.',
      'Seeding Tray Media',
      'Nursery Production'
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
      image: `/assets/images/${category}/${image.endsWith('.png') ? image : `${category}-${image}-photorealistic.png`}`
    }))
);
export function localized<T extends LocalizedText>(value: T, locale: Locale) {
  return value[locale];
}
export function productsForCategory(category: ProductCategorySlug): ProductItem[] {
  return products.filter((product) => product.category === category);
}
