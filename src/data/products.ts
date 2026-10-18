import type { Locale } from './translations';

export type ProductCategorySlug = 'substrates' | 'fiber' | 'shell' | 'veymur';
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
  /** Optional unambiguous form value for branded or packaged product ranges. */
  quoteName?: LocalizedText;
  label: LocalizedText;
  description: LocalizedText;
  alt: LocalizedText;
  /** Original asset; generated responsive derivatives preserve this source. */
  image: string;
}
export const productCategories: ProductCategory[] = [
  {
    slug: 'substrates',
    title: text('Кокосовые субстраты', 'Coconut Substrates'),
    description: text(
      'Торф, чипсы, брикеты и диски для теплиц, гидропоники и рассады.',
      'Coir pith, chips, bricks, and discs for greenhouses, hydroponics, and seedlings.'
    ),
    image: '/assets/images/substrates/coconut-substrates.png'
  },
  {
    slug: 'veymur',
    title: text('Пищевые продукты Veymur', 'Veymur Food Products'),
    description: text(
      'Кокосовые пищевые продукты и ингредиенты для розницы и производства.',
      'Coconut food products and ingredients for retail and manufacturing.'
    ),
    image: '/assets/images/veymur/veymur-products.png'
  },
  {
    slug: 'fiber',
    title: text('Кокосовое волокно', 'Coconut Fibre'),
    description: text(
      'Натуральное волокно и изделия для производства, ландшафта и защиты почвы.',
      'Natural fibre and fibre-based products for manufacturing, landscaping, and soil protection.'
    ),
    image: '/assets/images/fiber/coir-products.png'
  },
  {
    slug: 'shell',
    title: text('Кокосовая скорлупа', 'Coconut Shell'),
    description: text(
      'Сырьё для активированного угля, топлива, фильтрации и переработки.',
      'Raw material for activated carbon, fuel, filtration, and processing.'
    ),
    image: '/assets/images/shell/coco-shell-products.png'
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
      'Natural substrate made from cleaned coconut fibre. Suitable for improving moisture retention, aeration, and soil mix structure.',
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
      'Фракционированные чипсы из кокосовой шелухи для аэрации корневой зоны, дренажа и регулирования влажности. Используются самостоятельно или в смеси с кокосовым торфом.',
      'Graded coconut husk chips for root-zone aeration, drainage and moisture management. Suitable for standalone use or blending with coco pith.',
      'Coco Husk Chips',
      'Aeration'
    ],
    [
      'coco-husk-chips-bricks',
      'coco-husk-chips-bricks.png',
      'Кокосовые чипсы в брикетах',
      'Coco Husk Chips Bricks',
      'Компактные брикеты из кокосовой шелухи для хранения и перевозки. После увлажнения разрыхляются в крупные чипсы для аэрации корневой зоны и дренажа. Используются самостоятельно или в смеси с кокосовым торфом.',
      'Compact coconut husk chip bricks for storage and transport. Hydration loosens the bricks into coarse chips for root-zone aeration and drainage. Suitable for standalone use or blending with coco pith.',
      'Coco Husk Chips Bricks',
      'Improved Drainage'
    ],
    [
      'grow-cube-sleeve',
      'grow-cube-sleeve.png',
      'Кубический субстрат',
      'Grow Cube Sleeve',
      'Куб из кокосового торфа для проращивания семян и укоренения черенков. Защитная оболочка сохраняет форму при поливе и пересадке; куб можно переносить целиком в гроубэг или субстратный мат.',
      'A coco pith cube for seed germination and rooting cuttings. The protective sleeve maintains its shape during irrigation and transplanting; the whole cube can be transferred to a grow bag or growing slab.',
      'Grow Cube Sleeve',
      'Hydroponics'
    ],
    [
      'coco-coir-discs',
      'coco-discs.png',
      'Кокосовые диски',
      'Coco Discs',
      'Спрессованные диски из кокосового волокна. При увлажнении увеличиваются, образуют натуральный биоразлагаемый субстрат.',
      'Compressed coconut fibre discs. They expand when moistened and form a natural biodegradable substrate.',
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
      'coir-fiber-bales.png',
      'Тюки кокосового волокна',
      'Coir Fibre Bales',
      'Прессованное кокосовое волокно используется для производства матрасов, мебели, канатов и промышленной продукции.',
      'Processed coconut husk fibres compressed into bales for easy transport. Widely used in mattresses, upholstery, ropes, and industrial products.',
      'Coir Fibre Bales',
      'Industrial Use'
    ],
    [
      'bristle-fiber',
      'bristle-fiber.png',
      'Кокосовая щетина',
      'Bristle Fibre',
      'Высококачественное волокно, полученное из кокосовой шелухи. Используется для производства щёток, ковриков и других изделий.',
      'High-quality fibre obtained from coconut husks. Used in the production of brushes, mats, and other fibre-based products.',
      'Bristle Fibre',
      'High Strength'
    ],
    [
      'machine-twisted-fiber',
      'machine-twisted-fiber.png',
      'Скрученное волокно',
      'Machine Twisted Fibre',
      'Кокосовое волокно, скрученное механическим способом. Используется для производства геотекстиля, канатов и промышленных изделий.',
      'Mechanically twisted coconut fibre. Used in the production of geotextiles, ropes, and various industrial products.',
      'Machine Twisted Fibre',
      'Rope Production'
    ],
    [
      'coir-weed-mat',
      'coir-weed-mat.png',
      'Мульчирующие маты',
      'Coir Weed Mat',
      'Биоразлагаемые маты для сельского хозяйства и ландшафтного дизайна. Сдерживают рост сорняков, пропуская воду и питательные вещества.',
      'Biodegradable mats for agriculture and landscaping. Help suppress weed growth while allowing water and nutrients to pass through.',
      'Coir Weed Mat',
      'Weed Control'
    ],
    [
      'erosion-control-blankets',
      'erosion-control-blankets.png',
      'Противоэрозионные маты',
      'Erosion Control Blankets',
      'Кокосовые маты для защиты почвы от эрозии и укрепления склонов. Используются в строительстве и ландшафтных проектах.',
      'Coconut fibre mats designed for erosion control and slope stabilization. Used in construction, landscaping, and environmental projects.',
      'Erosion Control Blankets',
      'Slope Protection'
    ],
    [
      'coir-geo-textile',
      'coir-geo-textile.png',
      'Кокосовый геотекстиль',
      'Coir Geotextile',
      'Кокосовая сетка для укрепления почвы и защиты от эрозии. Поддерживает рост растений и сохраняет устойчивость грунта.',
      'Coconut fibre netting for soil stabilization and erosion control. Supports vegetation growth while helping maintain soil stability.',
      'Coir Geotextile',
      'Soil Stabilization'
    ]
  ],
  veymur: [
    [
      'veymur-mct-oil',
      'veymur-mct-oil.png',
      'MCT масло',
      'MCT Oil',
      'Масло на основе среднецепочечных триглицеридов кокосового масла. Подходит для добавления в напитки, смузи и готовые блюда.',
      'Oil made from medium-chain triglycerides derived from coconut oil. Suitable for adding to drinks, smoothies, and prepared dishes.',
      '500 мл',
      '500 ml'
    ],
    [
      'veymur-virgin-coconut-oil',
      'veymur-virgin-coconut-oil.png',
      'Нерафинированное кокосовое масло',
      'Virgin Coconut Oil',
      'Нерафинированное кокосовое масло с характерным кокосовым ароматом. Подходит для выпечки, десертов и приготовления блюд.',
      'Unrefined coconut oil with a distinctive coconut aroma. Suitable for baking, desserts, and everyday cooking.',
      '500 мл',
      '500 ml'
    ],
    [
      'veymur-coconut-sugar',
      'veymur-coconut-sugar.png',
      'Кокосовый сахар',
      'Coconut Sugar',
      'Сахар из сока соцветий кокосовой пальмы с карамельными нотами. Используется в напитках, выпечке и десертах.',
      'Sugar made from coconut palm blossom sap, with caramel notes. Use it in drinks, baking, and desserts.',
      '500 г',
      '500 g'
    ],
    [
      'veymur-desiccated-coconut',
      'veymur-desiccated-coconut.png',
      'Кокосовая стружка',
      'Desiccated Coconut',
      'Высушенная измельчённая мякоть кокоса с натуральным вкусом и ароматом. Для выпечки, начинок и украшения десертов.',
      'Dried, shredded coconut flesh with a natural coconut flavour and aroma. For baking, fillings, and decorating desserts.',
      '500 г',
      '500 g'
    ],
    [
      'veymur-coconut-milk',
      'veymur-coconut-milk.png',
      'Кокосовое молоко',
      'Coconut Milk',
      'Кокосовое молоко с мягким вкусом для напитков, каш, соусов и десертов. Удобный формат для домашней кухни и кулинарных экспериментов.',
      'Mild-tasting coconut milk for drinks, porridge, sauces, and desserts. A convenient format for home cooking and trying new recipes.',
      '1 л',
      '1 L'
    ],
    [
      'fresh-coconut',
      '/assets/images/food/fresh-coconut.png',
      'Свежие кокосы',
      'Fresh Coconut',
      'Отборные кокосы из индийского региона Поллачи проходят контроль по размеру, зрелости и свежести. Подходят для переработки.',
      'Selected coconuts from the Pollachi region of India are carefully inspected for size, maturity, and freshness. Suitable for further processing.',
      'Fresh Coconut',
      'Farm Selected'
    ],
    [
      'coconut-copra',
      '/assets/images/food/coconut-copra.png',
      'Кокосовая копра',
      'Coconut Copra',
      'Сушёная мякоть зрелого кокоса с высоким содержанием масла. Применяется для производства кокосового масла и переработки.',
      'Dried flesh of mature coconuts with a high oil content. Used for coconut oil production and further processing.',
      'Coconut Copra',
      'Oil Rich'
    ],
    [
      'coconut-water',
      '/assets/images/food/coconut-water.png',
      'Кокосовая вода',
      'Coconut Water',
      'Производится из молодых кокосов, обладает освежающим вкусом. Используется в напитках и продуктах для здорового питания.',
      'Made from young coconuts with a naturally refreshing taste. Used in beverages and health-focused food products.',
      'Coconut Water',
      'Pure Hydration'
    ],
    [
      'rbd-coconut-oil',
      '/assets/images/food/rbd-coconut-oil.png',
      'Рафинированное кокосовое масло (RBD)',
      'RBD Coconut Oil',
      'Производится из кокосового сырья методом рафинации, отбеливания и дезодорации. Для производства выпечки и других пищевых продуктов.',
      'Made from coconut-derived raw materials through refining, bleaching, and deodorization. Used in bakery products and other food applications.',
      'RBD Coconut Oil',
      'Neutral Taste'
    ]
  ],
  shell: [
    [
      'coco-shell',
      'coco-shell.png',
      'Кокосовая скорлупа',
      'Coco Shell',
      'Натуральная кокосовая скорлупа — востребованное сырьё для производства активированного угля, топлива и промышленной продукции.',
      'Natural coconut shell is a widely used raw material for the production of activated carbon, fuel, and industrial products.',
      'Coco Shell',
      'Industrial Raw Material'
    ],
    [
      'coco-shell-charcoal-briquettes',
      'coco-shell-charcoal-briquettes.png',
      'Брикеты из кокосового угля',
      'Coco Shell Charcoal Briquettes',
      'Брикеты с высокой теплоотдачей и минимальным количеством золы. Подходят для гриля, барбекю и промышленного применения.',
      'Briquettes with high heat output and low ash content. Suitable for grilling, barbecuing, and industrial applications.',
      'Coco Shell Charcoal Briquettes',
      'High Heat Output'
    ],
    [
      'coco-shell-activated-carbon',
      'coco-shell-activated-carbon.png',
      'Активированный уголь',
      'Coco Shell Activated Carbon',
      'Активированный уголь из кокосовой скорлупы для очистки воды, очистки воздуха и промышленных систем фильтрации.',
      'Coconut shell activated carbon for water purification, air purification, and industrial filtration systems.',
      'Coco Shell Activated Carbon',
      'High Adsorption'
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
      ...(slug.startsWith('veymur-')
        ? { quoteName: text(`${ru} Veymur, ${labelRu}`, `${en} Veymur, ${labelEn}`) }
        : {}),
      alt: text(ru, en),
      label: text(labelRu ?? ru, labelEn ?? en),
      description: text(descriptionRu, descriptionEn),
      image: image.startsWith('/')
        ? image
        : `/assets/images/${category}/${image.endsWith('.png') ? image : `${category}-${image}-photorealistic.png`}`
    }))
);
export function localized<T extends LocalizedText>(value: T, locale: Locale) {
  return value[locale];
}
export function productsForCategory(category: ProductCategorySlug): ProductItem[] {
  return products.filter((product) => product.category === category);
}
