import { productCopyUpdates } from './product-copy-updates';
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
      ...productCopyUpdates['open-top-grow-bag'].description,
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
      ...productCopyUpdates['coco-coir-discs'].description,
      'Coco Disc',
      'Biodegradable'
    ],
    [
      'coco-peat-tablets',
      'coco-peat-tablets.png',
      'Таблетки из кокосового торфа',
      'Coco Peat Tablets',
      ...productCopyUpdates['coco-peat-tablets'].description,
      'Coco Peat Tablets',
      'Seed Starting'
    ],
    [
      'coco-peat-compost',
      'coco-peat-compost.png',
      'Компост из кокосового торфа',
      'Coco Peat Compost',
      ...productCopyUpdates['coco-peat-compost'].description,
      'Coco Peat Compost',
      'Root Growth'
    ],
    [
      'seeding-tray-media',
      'seeding-tray-media.png',
      'Субстрат для лотков рассады',
      'Seeding Tray Media',
      ...productCopyUpdates['seeding-tray-media'].description,
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
      ...productCopyUpdates['coir-fiber-bales'].description,
      'Coir Fibre Bales',
      'Industrial Use'
    ],
    [
      'machine-twisted-fiber',
      'machine-twisted-fiber.png',
      'Скрученное волокно',
      'Machine Twisted Fibre',
      ...productCopyUpdates['machine-twisted-fiber'].description,
      'Machine Twisted Fibre',
      'Rope Production'
    ],
    [
      'coir-weed-mat',
      'coir-weed-mat.png',
      'Мульчирующие маты',
      'Coir Weed Mat',
      ...productCopyUpdates['coir-weed-mat'].description,
      'Coir Weed Mat',
      'Weed Control'
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
      'Органическое масло MCT',
      'Organic MCT Oil',
      ...productCopyUpdates['veymur-mct-oil'].description,
      '500 мл',
      '500 ml'
    ],
    [
      'veymur-virgin-coconut-oil',
      'veymur-virgin-coconut-oil.png',
      'Органическое нерафинированное кокосовое масло',
      'Organic Virgin Coconut Oil',
      ...productCopyUpdates['veymur-virgin-coconut-oil'].description,
      '500 мл',
      '500 ml'
    ],
    [
      'veymur-coconut-sugar',
      'veymur-coconut-sugar.png',
      'Органический кокосовый сахар',
      'Organic Coconut Sugar',
      ...productCopyUpdates['veymur-coconut-sugar'].description,
      '500 г',
      '500 g'
    ],
    [
      'veymur-desiccated-coconut',
      'veymur-desiccated-coconut.png',
      'Органическая кокосовая стружка',
      'Organic Desiccated Coconut',
      ...productCopyUpdates['veymur-desiccated-coconut'].description,
      '500 г',
      '500 g'
    ],
    [
      'veymur-coconut-milk',
      'veymur-coconut-milk.png',
      'Органическое кокосовое молоко',
      'Organic Coconut Milk',
      ...productCopyUpdates['veymur-coconut-milk'].description,
      '1 л',
      '1 L'
    ],
    [
      'fresh-coconut',
      '/assets/images/food/fresh-coconut.png',
      'Органические свежие кокосы',
      'Organic Fresh Coconut',
      ...productCopyUpdates['fresh-coconut'].description,
      'Fresh Coconut',
      'Farm Selected'
    ],
    [
      'rbd-coconut-oil',
      '/assets/images/food/rbd-coconut-oil.png',
      'Органическое рафинированное кокосовое масло (RBD)',
      'Organic RBD Coconut Oil',
      ...productCopyUpdates['rbd-coconut-oil'].description,
      'RBD Coconut Oil',
      'Neutral Taste'
    ]
  ],
  shell: [
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
