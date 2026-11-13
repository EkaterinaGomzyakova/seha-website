import { products, text, type LocalizedText } from './products';
import type { Locale } from './translations';

type Metadata = { title: LocalizedText; description: LocalizedText };
const metadata = (
  ruTitle: string,
  enTitle: string,
  ruDescription: string,
  enDescription: string
): Metadata => ({
  title: text(ruTitle, enTitle),
  description: text(ruDescription, enDescription)
});

// Search and social metadata are separate from visible headings and catalogue copy.
export const pageSeo: Record<string, Metadata> = {
  '/': metadata(
    'Кокосовые продукты и субстраты оптом — производство в Индии | СЕХА',
    'Coconut Products & Coir Substrates — Manufacturer in India | SEHA',
    'СЕХА производит кокосовые субстраты, пищевые продукты Veymur, волокно и уголь в Индии. Оптовые поставки в Россию, параметры и упаковка под заказ.',
    'SEHA manufactures coconut growing media, Veymur food products, coir fibre and shell products in India. Wholesale supply, custom specifications and packaging.'
  ),
  '/products': metadata(
    'Кокосовая продукция оптом — каталог производителя | СЕХА',
    'Wholesale Coconut Products — Manufacturer Catalogue | SEHA',
    'Каталог СЕХА: кокосовый торф, чипсы, гроубэги, масла, молоко, сахар, стружка, волокно и уголь. Производство в Индии и поставки по требованиям заказчика.',
    'Explore SEHA coco peat, husk chips, grow bags, coconut oils, milk, sugar, desiccated coconut, coir and carbon. Indian manufacturing and custom wholesale supply.'
  ),
  '/products/substrates': metadata(
    'Кокосовые субстраты оптом — торф, чипсы и гроубэги | СЕХА',
    'Coir Growing Media — Coco Peat, Husk Chips & Grow Bags | SEHA',
    'Кокосовые субстраты для теплиц, гидропоники и рассады: торф, чипсы, гроубэги, кубики и таблетки. Промытые субстраты по спецификации заказчика.',
    'Washed coco peat, husk chips, grow bags, propagation cubes, discs and tablets for greenhouses, hydroponics and nurseries. Custom growing media from SEHA.'
  ),
  '/products/veymur': metadata(
    'Кокосовые пищевые продукты оптом — масла, молоко, сахар | Veymur',
    'Coconut Food Ingredients — Oils, Milk, Sugar & Coconut | Veymur',
    'Пищевые продукты Veymur от СЕХА: кокосовые масла MCT, virgin и RBD, молоко, сахар, стружка и свежие кокосы. Розничная и оптовая упаковка под заказ.',
    'Veymur coconut food products by SEHA: MCT, virgin and RBD oils, coconut milk, sugar, desiccated coconut and fresh coconuts. Retail and bulk packaging.'
  ),
  '/products/fiber': metadata(
    'Кокосовое волокно оптом — тюки, маты и геотекстиль | СЕХА',
    'Coir Fibre Products — Bales, Weed Mats & Geotextiles | SEHA',
    'Кокосовое волокно в тюках, скрученное волокно, мульчирующие маты и геотекстиль. Для производства, растениеводства и защиты почвы. Параметры под заказ.',
    'Coir fibre bales, machine twisted fibre, weed mats and geotextiles for manufacturing, horticulture and erosion control. Custom specifications from SEHA, India.'
  ),
  '/products/shell': metadata(
    'Кокосовый уголь оптом — брикеты и активированный уголь | СЕХА',
    'Coconut Shell Charcoal Briquettes & Activated Carbon | SEHA',
    'Продукты из кокосовой скорлупы: угольные брикеты для гриля и кальяна, активированный уголь для фильтрации воды и воздуха. Оптовые поставки СЕХА.',
    'Coconut shell charcoal briquettes for BBQ and hookah, and activated carbon for water, air and industrial filtration. Wholesale supply and custom grades by SEHA.'
  ),
  '/production': metadata(
    'Производство кокосовых продуктов и субстратов в Индии | СЕХА',
    'Coconut Product & Coir Substrate Manufacturing in India | SEHA',
    'Производство СЕХА в Поллачи: выращивание кокосов, переработка, промывка и прессование субстратов, пищевая переработка, фасовка и подготовка к поставке.',
    'Discover SEHA manufacturing in Pollachi, India: coconut cultivation, coir washing and compression, food processing, packing and shipment preparation.'
  ),
  '/about': metadata(
    'О компании СЕХА — производитель кокосовой продукции и импортёр',
    'About SEHA — Coconut Products Manufacturer & Supplier',
    'Группа компаний СЕХА: производство кокосовых продуктов в Индии и импорт в Россию. Более 40 лет опыта в отрасли, команда в Москве и сопровождение поставок.',
    'SEHA produces coconut products in India and imports them into Russia. Over 40 years of industry experience, a Moscow team and support throughout each order.'
  ),
  '/quality': metadata(
    'Качество и сертификаты кокосовой продукции | СЕХА',
    'Coconut Product Quality Control & Certifications | SEHA',
    'Контроль качества СЕХА: влажность, pH, EC и структура кокосовых субстратов. Сертификаты пищевой продукции и согласование документов для поставки.',
    'SEHA quality control for moisture, pH, EC and coir substrate structure. Food product certifications and shipment documentation tailored to the order.'
  ),
  '/privacy': metadata(
    'Политика конфиденциальности и обработки персональных данных | СЕХА',
    'Privacy & Personal Data Policy | SEHA',
    'Как СЕХА обрабатывает контактные данные и заявки с сайта: цели обработки, защита информации и порядок обращения по вопросам персональных данных.',
    'How SEHA handles contact information and website enquiries: processing purposes, information protection and personal data requests.'
  )
};

export const productSeo: Record<string, Metadata> = {
  'grow-bag': metadata(
    'Кокосовые гроубэги для теплиц — производство и поставки | СЕХА',
    'Coco Coir Grow Bags for Greenhouses — Custom Supply | SEHA',
    'Кокосовые гроубэги для томатов, огурцов и клубники. Промытая смесь торфа и чипсов; состав, размеры, посадочные и дренажные отверстия под заказ.',
    'Coco coir grow bags for tomatoes, cucumbers and strawberries. Washed pith and chip blends with custom dimensions, planting holes and drainage layouts.'
  ),
  'open-top-grow-bag': metadata(
    'Открытые кокосовые гроубэги для голубики и малины | СЕХА',
    'Open-Top Coir Grow Bags for Blueberries & Raspberries | SEHA',
    'Открытые гроубэги с прессованным кокосовым субстратом для голубики и малины. Пример — 10 л, 60% торфа и 40% чипсов по объёму. Другие составы под заказ.',
    'Open-top grow bags with compressed coir for blueberries and raspberries. Example: 10 L with 60% pith and 40% chips by volume. Custom sizes and blends.'
  ),
  'coco-peat': metadata(
    'Кокосовый торф россыпью оптом для рассады и почвосмесей | СЕХА',
    'Loose Coco Peat for Seedlings & Potting Mixes — Wholesale | SEHA',
    'Промытый кокосовый торф россыпью для рассады, теплиц и приготовления почвосмесей. Фракция и упаковка по требованиям заказчика; буферизация по запросу.',
    'Washed loose coco peat for seedlings, greenhouse crops and potting mixes. Custom particle grades and packaging, with buffering available on request.'
  ),
  'coco-peat-briquettes': metadata(
    'Кокосовый торф в брикетах 650 г и блоках 5 кг оптом | СЕХА',
    'Coco Peat Bricks 650 g & Blocks 5 kg — Wholesale | SEHA',
    'Прессованный кокосовый торф: брикет 650 г даёт 9–10 л, блок 5 кг — 70–75 л субстрата после увлажнения. Для теплиц и рассады. Производство под заказ.',
    'Compressed coco peat: 650 g bricks expand to 9–10 L and 5 kg blocks to 70–75 L after hydration. For greenhouses and propagation, with custom specifications.'
  ),
  'coconut-chips': metadata(
    'Кокосовые чипсы россыпью для растений и субстратов | СЕХА',
    'Coco Husk Chips for Orchids & Growing Media — Wholesale | SEHA',
    'Промытые кокосовые чипсы для орхидей, клубники, томатов и огурцов. Для аэрации и дренажа субстратов; фракция под культуру и требования заказчика.',
    'Washed coco husk chips for orchids, strawberries, tomatoes and cucumbers. Coarse growing media for aeration and drainage, graded to crop requirements.'
  ),
  'coco-husk-chips-bricks': metadata(
    'Кокосовые чипсы в прессованных блоках и брикетах | СЕХА',
    'Compressed Coco Husk Chips Bricks & Blocks | SEHA',
    'Прессованные блоки кокосовых чипсов для теплиц, гидропоники и субстратных смесей. После увлажнения раскрываются в рыхлые чипсы. Фракция под заказ.',
    'Compressed coco husk chips bricks for greenhouses, hydroponics and growing media blends. Expand into loose chips on hydration; custom chip grades available.'
  ),
  'grow-cube-sleeve': metadata(
    'Кокосовый кубический субстрат для рассады — Grow Cube | СЕХА',
    'Coco Coir Grow Cube for Tomato, Cucumber & Pepper Propagation | SEHA',
    'Кокосовые рассадные кубики Grow Cube для томатов, огурцов и перцев. Формат 10 × 10 × 10 см, около 1 л, с отверстием под пробку и защитной оболочкой.',
    'Coir Grow Cubes for tomato, cucumber and pepper propagation. A 10 × 10 × 10 cm format of approximately 1 L, with a plug hole and protective sleeve.'
  ),
  'coco-coir-discs': metadata(
    'Кокосовые диски для горшков и рассадных стаканчиков | СЕХА',
    'Compressed Coco Coir Discs for Pots & Seedling Cups | SEHA',
    'Кокосовые диски без удерживающей оболочки для заполнения горшков и рассадных стаканчиков. Расширяются при увлажнении. Диаметр и формат под заказ.',
    'Compressed coir discs without an outer retaining sleeve for filling pots and seedling cups. Expand with water; diameters and formats tailored to your needs.'
  ),
  'coco-peat-tablets': metadata(
    'Кокосовые таблетки для проращивания семян и рассады | СЕХА',
    'Coco Peat Tablets for Seed Germination & Propagation | SEHA',
    'Кокосовые таблетки в биоразлагаемой нетканой сеточке для посева и выращивания рассады. Расширяются после добавления воды; размеры и упаковка под заказ.',
    'Coco peat tablets in biodegradable non-woven mesh for seed germination and propagation. Water-activated expansion, with custom sizes and packaging.'
  ),
  'coco-peat-compost': metadata(
    'Компост из кокосового торфа для растений оптом | СЕХА',
    'Coco Peat Compost for Potting Mixes & Horticulture | SEHA',
    'Кокосовый компост из переработанного кокосового торфа без добавления других компостов и удобрений. Для почвосмесей, рассады и декоративных растений.',
    'Coco peat compost made from processed coconut pith without added composts or fertilizers. For potting mixes, seedlings and ornamental plant cultivation.'
  ),
  'seeding-tray-media': metadata(
    'Кокосовый субстрат для рассадных кассет и лотков | СЕХА',
    'Coco Pith Seeding Tray Media for Nursery Propagation | SEHA',
    'Кокосовый субстрат для лотков и рассадных кассет: проращивание семян и выращивание овощной и цветочной рассады. Конфигурация под систему заказчика.',
    'Coco pith growing media for seedling trays, vegetable seedlings and flower propagation. Cell configurations and medium specifications tailored to nursery systems.'
  ),
  'coir-fiber-bales': metadata(
    'Кокосовое волокно в тюках 120 кг — оптовые поставки | СЕХА',
    'Coir Fibre Bales 120 kg — Wholesale Coconut Fibre | SEHA',
    'Натуральное кокосовое волокно длиной 10–25 см в тюках 120 кг. Для канатов, щёток, матов и противоэрозионных изделий. Производство в Индии.',
    'Natural coconut coir fibre, 10–25 cm long, supplied in 120 kg bales. For ropes, brushes, mats and erosion-control products. Manufactured in India by SEHA.'
  ),
  'machine-twisted-fiber': metadata(
    'Скрученное кокосовое волокно для канатов и матов | СЕХА',
    'Machine Twisted Coir Fibre for Ropes & Mats | SEHA',
    'Кокосовое волокно машинной скрутки для канатов, сеток, матов и промышленных изделий. Диаметр, длина, степень скрутки и упаковка по спецификации заказчика.',
    'Machine twisted coconut coir fibre for ropes, nets, mats and industrial products. Diameter, length, twist and packaging made to customer specifications.'
  ),
  'coir-weed-mat': metadata(
    'Кокосовые мульчирующие маты — рулоны и приствольные круги | СЕХА',
    'Coir Weed Mats — Mulch Rolls & Tree Rings | SEHA',
    'Мульчирующие маты из кокосового волокна для сдерживания сорняков и сохранения влаги. Рулоны и круглые маты для деревьев; размеры и плотность под заказ.',
    'Coconut coir weed mats help suppress weeds and reduce soil moisture loss. Available as mulch rolls and tree rings with custom dimensions and weights.'
  ),
  'coir-geo-textile': metadata(
    'Кокосовый геотекстиль для укрепления склонов и защиты почвы | СЕХА',
    'Coir Geotextiles for Slope Protection & Erosion Control | SEHA',
    'Тканый кокосовый геотекстиль для защиты склонов, берегов и почвы от эрозии. Примеры плотности — 400, 700 и 900 г/м²; ячейка и размеры рулонов под заказ.',
    'Woven coir geotextiles for slopes, riverbanks and erosion control. Example grades: 400, 700 and 900 GSM; mesh openings and roll dimensions made to order.'
  ),
  'veymur-mct-oil': metadata(
    'Органическое кокосовое MCT-масло C8 и C10 оптом | Veymur',
    'Organic Coconut MCT Oil C8 & C10 — Wholesale | Veymur',
    'Органическое MCT-масло из кокоса без вкуса и запаха: C8 55–65%, C10 35–45%. Для пищевых продуктов и напитков. Розничная и оптовая фасовка под заказ.',
    'Organic coconut MCT oil with neutral taste and odour: C8 55–65%, C10 35–45%. For food and beverage formulations, in retail and bulk packaging.'
  ),
  'veymur-virgin-coconut-oil': metadata(
    'Органическое нерафинированное кокосовое масло оптом | Veymur',
    'Organic Virgin Coconut Oil — Wholesale & Retail Packs | Veymur',
    'Нерафинированное кокосовое масло холодного отжима Veymur, без добавок. Сохраняет кокосовый вкус и аромат. Для кулинарии и пищевых производств.',
    'Veymur organic virgin coconut oil, cold pressed with no additives. Retains its natural coconut flavour and aroma for cooking, baking and food manufacturing.'
  ),
  'veymur-coconut-sugar': metadata(
    'Органический кокосовый сахар оптом из Индии | Veymur',
    'Organic Coconut Sugar from India — Wholesale | Veymur',
    'Органический кокосовый сахар из сока соцветий кокосовой пальмы с карамельным вкусом. Для выпечки, напитков и десертов. Фасовка и упаковка под заказ.',
    'Organic coconut sugar from coconut palm flower sap with a caramel-like flavour. For bakery, beverages and desserts; custom retail and bulk packaging.'
  ),
  'veymur-desiccated-coconut': metadata(
    'Органическая кокосовая стружка оптом из Индии | Veymur',
    'Organic Desiccated Coconut — Wholesale from India | Veymur',
    'Органическая кокосовая стружка из мякоти зрелых кокосов для выпечки, кондитерских изделий и десертов. Разные фракции, розничная и оптовая упаковка.',
    'Organic desiccated coconut from mature kernels for bakery, confectionery and desserts. Available in different particle grades and retail or bulk packaging.'
  ),
  'veymur-coconut-milk': metadata(
    'Органическое кокосовое молоко 17–19% оптом | Veymur',
    'Organic Coconut Milk 17–19% Fat — Wholesale | Veymur',
    'Ультрапастеризованное кокосовое молоко 17–19% жирности без консервантов и эмульгаторов. Для соусов, напитков и десертов. Другая жирность по запросу.',
    'UHT organic coconut milk with 17–19% fat, without preservatives or emulsifiers. For sauces, beverages and desserts. Other fat levels available on request.'
  ),
  'young-coconut': metadata(
    'Молодые питьевые кокосы из Индии — оптовые поставки | СЕХА',
    'Young Drinking Coconuts from India — Wholesale | SEHA',
    'Молодые кокосы для свежего потребления и кокосовой воды. Цельные зелёные плоды и очищенные Diamond-cut. Калибр, подготовка и упаковка по заказу.',
    'Young Indian coconuts for fresh consumption and coconut water. Whole green and diamond-cut formats, with grading, preparation and packing to buyer requirements.'
  ),
  'mature-coconut': metadata(
    'Зрелые полуочищенные кокосы из Индии оптом | СЕХА',
    'Mature Semi-Husked Coconuts from India — Wholesale | SEHA',
    'Зрелые полуочищенные кокосы из Поллачи, Индия. Для переработки мякоти, производства молока, масла и стружки. Калибровка и экспортная упаковка под заказ.',
    'Mature semi-husked coconuts from Pollachi, India, for kernel processing, coconut milk, oil and desiccated coconut. Custom grading and export packaging.'
  ),
  'rbd-coconut-oil': metadata(
    'Рафинированное кокосовое масло RBD оптом | СЕХА',
    'Organic RBD Coconut Oil for Food Manufacturing | SEHA',
    'Рафинированное, отбеленное и дезодорированное кокосовое масло RBD без добавок. Нейтральный вкус для кулинарии и пищевой промышленности. Оптовая фасовка.',
    'Organic refined, bleached and deodorized coconut oil with no additives. Neutral flavour for cooking and food manufacturing. Bulk packaging to order.'
  ),
  'coco-shell-charcoal-briquettes': metadata(
    'Кокосовые угольные брикеты для гриля и кальяна оптом | СЕХА',
    'Coconut Charcoal Briquettes for BBQ & Hookah | SEHA',
    'Брикеты из угля кокосовой скорлупы для барбекю, гриля и кальяна. Кубики, шестигранники и подушечки; форма, размеры и упаковка по требованиям заказчика.',
    'Coconut shell charcoal briquettes for BBQ, grilling and hookah. Cube, hexagonal and pillow shapes, with custom dimensions and export packaging.'
  ),
  'coco-shell-activated-carbon': metadata(
    'Кокосовый активированный уголь для очистки воды и воздуха | СЕХА',
    'Coconut Shell Activated Carbon for Water & Air Filtration | SEHA',
    'Активированный уголь из кокосовой скорлупы: гранулы GAC и порошок PAC для очистки воды, воздуха и промышленных сред. Йодное число 900–1200 мг/г.',
    'Coconut shell activated carbon in GAC and PAC grades for water, air and industrial filtration. Iodine number 900–1,200 mg/g, with grades tailored to use.'
  )
};

export function metadataFor(
  path: string,
  locale: Locale,
  fallback: { title: string; description: string }
) {
  const normalized = path.replace(/^\/(ru|en)(?=\/|$)/, '').replace(/\/$/, '') || '/';
  const product = products.find((item) => normalized === `/products/${item.category}/${item.slug}`);
  const entry = product ? productSeo[product.id] : pageSeo[normalized];
  return entry ? { title: entry.title[locale], description: entry.description[locale] } : fallback;
}
