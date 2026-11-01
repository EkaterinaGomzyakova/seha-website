import { text, type LocalizedText, type ProductItem } from './products';

export interface Specification {
  label: LocalizedText;
  value: LocalizedText;
}
const pending = text('уточнить', 'to be confirmed');
const field = (ru: string, en: string, value = pending): Specification => ({
  label: text(ru, en),
  value
});
// Client-confirmed SEHA laboratory report, pages 06–07. Preserve all limits.
const mctSpecifications: Specification[] = [
  field('Состав', 'Ingredients', text('Органическое кокосовое масло', 'Organic coconut oil')),
  field(
    'Цвет / внешний вид',
    'Colour / appearance',
    text('Бесцветная жидкость / прозрачное масло', 'Colourless liquid / clear oil')
  ),
  field('Вкус / аромат', 'Taste / odour', text('Без запаха и вкуса', 'Odourless and tasteless')),
  field('C8:0 — каприловая кислота', 'C8:0 — caprylic acid', text('55–65%', '55–65%')),
  field('C10:0 — каприновая кислота', 'C10:0 — capric acid', text('35–45%', '35–45%')),
  field('C12:0 — лауриновая кислота', 'C12:0 — lauric acid', text('не более 1%', 'max. 1%')),
  field('Кислотное число', 'Acid value', text('не более 0,2 мг/г', 'max. 0.2 mg/g')),
  field('Число омыления', 'Saponification value', text('325–345 мг KOH/г', '325–345 mg KOH/g')),
  field('Йодное число', 'Iodine value', text('не более 1 г I₂/100 г', 'max. 1 g I₂/100 g')),
  field('Влажность', 'Moisture', text('не более 0,10%', 'max. 0.10%')),
  field('Перекисное число', 'Peroxide value', text('не более 1 мэкв/кг', 'max. 1 meq/kg')),
  field('Хлораты', 'Chlorates', text('< 0,1 мг/кг', '< 0.1 mg/kg')),
  field(
    'Показатель преломления n20/D',
    'Refractive index n20/D',
    text('1,440–1,452', '1.440–1.452')
  ),
  field(
    'Относительная плотность при 20/20 °C',
    'Relative density at 20/20 °C',
    text('0,93–0,96', '0.93–0.96')
  ),
  field(
    'Общее количество аэробных микроорганизмов',
    'Total aerobic microorganism count',
    text('не более 1000 КОЕ/г', 'max. 1000 CFU/g')
  ),
  field(
    'Бактерии группы кишечной палочки (Coliform)',
    'Coliform bacteria',
    text('< 10 КОЕ/г', '< 10 CFU/g')
  ),
  field('Плесени и дрожжи', 'Moulds and yeasts', text('не более 100 КОЕ/г', 'max. 100 CFU/g')),
  field('E. coli', 'E. coli', text('< 10 КОЕ/г', '< 10 CFU/g')),
  field('Salmonella', 'Salmonella', text('не обнаружено в 25 г', 'not detected in 25 g')),
  field('Enterobacter', 'Enterobacter', text('< 10 КОЕ/г', '< 10 CFU/g')),
  field('Staphylococcus aureus', 'Staphylococcus aureus', text('< 10 КОЕ/г', '< 10 CFU/g')),
  field(
    'Listeria monocytogenes',
    'Listeria monocytogenes',
    text('не обнаружено в 25 г', 'not detected in 25 g')
  ),
  field(
    'Общее количество жизнеспособных микроорганизмов',
    'Total viable microorganism count',
    text('< 10 КОЕ/г', '< 10 CFU/g')
  ),
  field('Афлатоксин B1', 'Aflatoxin B1', text('≤ 2,0 мкг/кг', '≤ 2.0 µg/kg')),
  field('Общие афлатоксины', 'Total aflatoxins', text('≤ 4,0 мкг/кг', '≤ 4.0 µg/kg')),
  field('Мышьяк', 'Arsenic', text('не более 0,1 ppm', 'max. 0.1 ppm')),
  field('Медь', 'Copper', text('не более 0,1 ppm', 'max. 0.1 ppm')),
  field('Свинец', 'Lead', text('не более 0,1 ppm', 'max. 0.1 ppm')),
  field('Никель', 'Nickel', text('не более 0,1 ppm', 'max. 0.1 ppm')),
  field('Хром', 'Chromium', text('не более 0,05 ppm', 'max. 0.05 ppm')),
  field(
    'Срок годности',
    'Shelf life',
    text('2 года с даты производства', '2 years from the date of manufacture')
  ),
  field(
    'Условия хранения',
    'Storage conditions',
    text(
      'В плотно закрытой упаковке, в прохладном сухом месте, вдали от прямого солнечного света и тепла',
      'Keep tightly sealed in a cool, dry place, away from direct sunlight and heat'
    )
  )
];

// Field selection follows procurement tables from Coir Plus, E-Coir, Renuka,
// EPL Group and Haycarb. Values are from the client's existing SEHA data only;
// proposed values still require the client's final review. Missing values stay pending.
const rawPith = field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith'));
const rawHusk = field('Сырьё', 'Raw material', text('Кокосовая шелуха', 'Coconut husk'));
const rawFibre = field('Материал', 'Material', text('Кокосовое волокно', 'Coconut coir fibre'));
const moisture = field('Влажность', 'Moisture content');
const ph = field('pH', 'pH', text('5,5–6,5', '5.5–6.5'));
const ec = field('Электропроводность (EC)', 'Electrical conductivity (EC)');
const lowEc = field(
  'Электропроводность (EC)',
  'Electrical conductivity (EC)',
  text('< 0,5 мСм/см', '< 0.5 mS/cm')
);
const dryWeight = field('Сухая масса', 'Dry weight');
const dimensions = field('Размеры (Д × Ш × В)', 'Dimensions (L × W × H)');
const expandedVolume = field('Объём после увлажнения', 'Expanded volume');
const waterRetention = field('Влагоудерживающая способность', 'Water-holding capacity');
const airPorosity = field('Воздушная пористость', 'Air-filled porosity');
const impurities = field('Содержание примесей', 'Impurity content');
const processing = field('Обработка', 'Processing');
const shelfLife = field('Срок годности', 'Shelf life');
const ingredients = field('Состав', 'Ingredients');
const organic = field('Органический статус', 'Organic status', text('Органический', 'Organic'));
const fat = field('Массовая доля жира', 'Fat content');
const protein = field('Массовая доля белка', 'Protein content');
const ash = field('Зольность', 'Ash content');
const fattyAcids = field('Жирнокислотный состав', 'Fatty acid profile');
const ffa = field(
  'Свободные жирные кислоты (в пересчёте на лауриновую)',
  'Free fatty acids (as lauric acid)'
);
const peroxide = field('Перекисное число', 'Peroxide value');
const volatileMoisture = field('Влага и летучие вещества', 'Moisture and volatile matter');
const microbiology = [
  field('Общее количество аэробных микроорганизмов', 'Total aerobic microorganism count'),
  field('Плесени и дрожжи', 'Moulds and yeasts'),
  field('E. coli', 'E. coli'),
  field('Salmonella', 'Salmonella')
];
const foodStorage = field(
  'Условия хранения',
  'Storage conditions',
  text(
    'В прохладном сухом месте, вдали от солнечного света и сильных запахов',
    'Cool and dry, away from sunlight and strong odours'
  )
);
const rollWidth = field('Ширина рулона', 'Roll width');
const rollLength = field('Длина рулона', 'Roll length');
const tensileStrength = field('Разрывная нагрузка', 'Tensile strength');
const matWeight = field('Поверхностная плотность', 'Mass per unit area');

const productSpecifications: Record<string, readonly Specification[]> = {
  'grow-bag': [
    field('Состав субстрата', 'Substrate composition'),
    dimensions,
    dryWeight,
    expandedVolume,
    field('Фракция', 'Particle size'),
    ph,
    lowEc,
    moisture,
    processing,
    field('Материал оболочки', 'Sleeve material'),
    field('Посадочные и дренажные отверстия', 'Planting and drainage holes'),
    waterRetention,
    airPorosity
  ],
  'open-top-grow-bag': [
    field(
      'Состав субстрата',
      'Substrate composition',
      text('60% кокосового торфа / 40% кокосовых чипсов', '60% coco pith / 40% coco chips')
    ),
    dimensions,
    dryWeight,
    expandedVolume,
    // The crop-specific acidity is part of the product variant, not a generic pH claim.
    field('pH — вариант для голубики', 'pH — blueberry grade', text('4,5–5,5', '4.5–5.5')),
    field('pH — вариант для малины', 'pH — raspberry grade'),
    lowEc,
    field('Влажность', 'Moisture content', text('15–20%', '15–20%')),
    field('Обработка', 'Processing', text('Промывка и просеивание', 'Washed and screened')),
    field(
      'Материал мешка',
      'Bag material',
      text('УФ-стабилизированный материал', 'UV-stabilised material')
    ),
    field(
      'Конструкция мешка',
      'Bag construction',
      text('Открытый верх, дренажные отверстия', 'Open top, drainage holes')
    ),
    waterRetention,
    airPorosity
  ],
  'coco-peat': [
    rawPith,
    field('Фракция', 'Particle size'),
    ph,
    lowEc,
    field('Влажность', 'Moisture content', text('< 20%', '< 20%')),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
    processing,
    waterRetention,
    airPorosity,
    impurities
  ],
  'coco-peat-briquettes': [
    rawPith,
    field('Формат', 'Format', text('Прессованный брикет / блок', 'Compressed brick / block')),
    field('Сухая масса', 'Dry weight', text('650 г / 5 кг', '650 g / 5 kg')),
    dimensions,
    expandedVolume,
    field('Фракция', 'Particle size'),
    ph,
    lowEc,
    field('Влажность', 'Moisture content', text('12–15%', '12–15%')),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
    processing,
    waterRetention,
    impurities
  ],
  'coconut-chips': [
    rawHusk,
    field('Состав', 'Composition', text('Чипсы из кокосовой шелухи', 'Coconut husk chips')),
    field('Фракция', 'Chip size', text('6–12 мм / 12–18 мм', '6–12 mm / 12–18 mm')),
    field('pH', 'pH', text('5,5–6,8', '5.5–6.8')),
    lowEc,
    field('Влажность', 'Moisture content', text('15–20%', '15–20%')),
    field(
      'Обработка',
      'Processing',
      text('Промывка, просеивание, сортировка по фракциям', 'Washed, screened and graded')
    ),
    waterRetention,
    airPorosity,
    impurities
  ],
  'coco-husk-chips-bricks': [
    rawHusk,
    field('Состав', 'Composition', text('Чипсы из кокосовой шелухи', 'Coconut husk chips')),
    field('Формат', 'Format', text('Прессованный брикет', 'Compressed brick')),
    field('Сухая масса', 'Dry weight', text('5 кг', '5 kg')),
    dimensions,
    expandedVolume,
    field('Фракция чипсов', 'Chip size', text('6–12 мм / 12–18 мм', '6–12 mm / 12–18 mm')),
    field('pH', 'pH', text('5,5–6,8', '5.5–6.8')),
    ec,
    field('Влажность', 'Moisture content', text('15–20%', '15–20%')),
    field(
      'Обработка',
      'Processing',
      text('Промывка, просеивание, сортировка по фракциям', 'Washed, screened and graded')
    ),
    waterRetention,
    airPorosity
  ],
  'grow-cube-sleeve': [
    rawPith,
    field('Формат', 'Format', text('Куб в защитной оболочке', 'Cube in a protective sleeve')),
    field(
      'Размеры после увлажнения',
      'Expanded dimensions',
      text('10 × 10 × 10 см', '10 × 10 × 10 cm')
    ),
    // The earlier 850–900 ml value conflicts with the stated cube dimensions;
    // leave volume pending rather than infer net substrate volume.
    expandedVolume,
    dryWeight,
    ph,
    lowEc,
    field('Влажность', 'Moisture content', text('< 20%', '< 20%')),
    field(
      'Фракция',
      'Particle size',
      text('Мелкий просеянный кокосовый торф', 'Fine screened coco pith')
    ),
    field('Материал оболочки', 'Sleeve material'),
    field('Посадочное отверстие', 'Planting hole'),
    field('Дренажные отверстия', 'Drainage holes'),
    processing
  ],
  'coco-coir-discs': [
    rawPith,
    field('Форма', 'Shape', text('Круглый диск', 'Circular disc')),
    field('Диаметр', 'Diameter', text('30 / 36 / 40 / 50 мм', '30 / 36 / 40 / 50 mm')),
    field('Толщина в сухом виде', 'Dry thickness'),
    dryWeight,
    field('Высота после увлажнения', 'Expanded height'),
    expandedVolume,
    ph,
    ec,
    moisture,
    field('Обработка', 'Processing', text('Просеивание и прессование', 'Screened and compressed')),
    field('Добавленные удобрения', 'Added fertiliser')
  ],
  'coco-peat-tablets': [
    rawPith,
    field('Форма', 'Shape', text('Круглая таблетка', 'Circular tablet')),
    field('Диаметр', 'Diameter', text('30–100 мм', '30–100 mm')),
    field('Толщина в сухом виде', 'Dry thickness'),
    dryWeight,
    expandedVolume,
    ph,
    lowEc,
    field('Влажность', 'Moisture content', text('< 20%', '< 20%')),
    field('Степень прессования', 'Compression ratio'),
    field('Обработка', 'Processing', text('Просеивание и прессование', 'Screened and compressed')),
    field('Добавленные удобрения', 'Added fertiliser')
  ],
  'coco-peat-compost': [
    rawPith,
    field('Состав и соотношение компонентов', 'Composition and component ratio'),
    field('Фракция', 'Particle size'),
    ph,
    ec,
    moisture,
    waterRetention,
    field('Содержание органического вещества', 'Organic matter content'),
    field('Содержание NPK', 'NPK content'),
    processing,
    impurities
  ],
  'seeding-tray-media': [
    rawPith,
    field('Фракция', 'Particle size'),
    ph,
    ec,
    moisture,
    waterRetention,
    airPorosity,
    field(
      'Количество ячеек',
      'Cell count',
      text('50 / 72 / 98 / 104 / 128', '50 / 72 / 98 / 104 / 128')
    ),
    field('Объём ячейки', 'Cell volume'),
    field('Форма ячеек', 'Cell shape'),
    field('Размеры лотка', 'Tray dimensions'),
    field('Материал лотка', 'Tray material'),
    processing
  ],
  'coir-fiber-bales': [
    rawHusk,
    rawFibre,
    field('Длина волокна', 'Fibre length'),
    field(
      'Цвет',
      'Colour',
      text('От золотисто-коричневого до тёмно-коричневого', 'Golden brown to dark brown')
    ),
    field('Размеры тюка', 'Bale dimensions'),
    field('Масса нетто тюка', 'Net bale weight'),
    moisture,
    impurities,
    tensileStrength,
    field(
      'Обработка',
      'Processing',
      text('Выделение волокна, очистка, сортировка', 'Fibre extraction, cleaning and grading')
    )
  ],
  'machine-twisted-fiber': [
    rawFibre,
    field('Обработка', 'Processing', text('Механическое скручивание', 'Mechanical twisting')),
    field('Диаметр пряди', 'Strand diameter'),
    field('Длина пряди', 'Strand length'),
    field('Степень скрутки', 'Twist level'),
    moisture,
    tensileStrength,
    impurities,
    field('Цвет', 'Colour', text('Натуральный коричневый', 'Natural brown'))
  ],
  'coir-weed-mat': [
    rawFibre,
    field('Структура', 'Construction', text('Тканая / иглопробивная', 'Woven / needle-punched')),
    matWeight,
    field('Толщина', 'Thickness'),
    rollWidth,
    rollLength,
    tensileStrength,
    field('Водопроницаемость', 'Water permeability'),
    field('Воздухопроницаемость', 'Air permeability'),
    field('УФ-стабилизация', 'UV stabilisation')
  ],
  'coir-geo-textile': [
    rawFibre,
    field('Структура', 'Construction', text('Тканое сетчатое полотно', 'Woven open mesh')),
    field(
      'Поверхностная плотность',
      'Mass per unit area',
      text('400 / 700 / 900 г/м²', '400 / 700 / 900 g/m²')
    ),
    field('Ширина рулона', 'Roll width', text('1 / 2 м', '1 / 2 m')),
    field('Длина рулона', 'Roll length', text('25 / 50 м', '25 / 50 m')),
    field('Размер ячейки', 'Mesh opening'),
    field('Открытая площадь', 'Open area'),
    tensileStrength,
    field('Удлинение при разрыве', 'Elongation at break')
  ],
  'veymur-mct-oil': [...mctSpecifications, organic],
  'veymur-virgin-coconut-oil': [
    field(
      'Сырьё',
      'Raw material',
      text('Свежая мякоть зрелых кокосов', 'Fresh, mature coconut kernels')
    ),
    ingredients,
    field('Способ извлечения', 'Extraction process'),
    field(
      'Обработка',
      'Processing',
      text('Без рафинации, отбеливания и дезодорации', 'Unrefined, unbleached and undeodorised')
    ),
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Прозрачное масло в жидком состоянии; затвердевает при охлаждении',
        'Clear when liquid; solidifies when cool'
      )
    ),
    field(
      'Вкус и аромат',
      'Taste and aroma',
      text('Характерные кокосовые', 'Characteristic coconut flavour and aroma')
    ),
    field('Влага и летучие вещества', 'Moisture and volatile matter', text('≤ 0,1%', '≤ 0.1%')),
    field(
      'Свободные жирные кислоты (в пересчёте на лауриновую)',
      'Free fatty acids (as lauric acid)',
      text('≤ 0,2%', '≤ 0.2%')
    ),
    field('Перекисное число', 'Peroxide value', text('≤ 3 мэкв O₂/кг', '≤ 3 meq O₂/kg')),
    field('Йодное число', 'Iodine value'),
    field('Число омыления', 'Saponification value'),
    field('Показатель преломления', 'Refractive index'),
    fattyAcids,
    organic,
    shelfLife,
    foodStorage
  ],
  'rbd-coconut-oil': [
    field('Сырьё', 'Raw material', text('Кокос', 'Coconut')),
    ingredients,
    field(
      'Обработка',
      'Processing',
      text('Рафинация, отбеливание и дезодорация', 'Refining, bleaching and deodorisation')
    ),
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Прозрачное масло в жидком состоянии; затвердевает при охлаждении',
        'Clear when liquid; solidifies when cool'
      )
    ),
    field('Цвет', 'Colour', text('От бесцветного до бледно-жёлтого', 'Colourless to pale yellow')),
    field('Вкус и аромат', 'Taste and aroma', text('Нейтральные', 'Neutral')),
    volatileMoisture,
    ffa,
    peroxide,
    field('Йодное число', 'Iodine value'),
    field('Число омыления', 'Saponification value'),
    fattyAcids,
    organic,
    shelfLife,
    foodStorage
  ],
  'veymur-coconut-sugar': [
    field(
      'Сырьё',
      'Raw material',
      text('Сок соцветий кокосовой пальмы', 'Coconut palm flower sap')
    ),
    ingredients,
    field('Форма', 'Form', text('Гранулы / порошок', 'Granules / powder')),
    field(
      'Цвет',
      'Colour',
      text('От золотисто-коричневого до тёмно-коричневого', 'Golden brown to dark brown')
    ),
    field(
      'Вкус и аромат',
      'Taste and aroma',
      text('Сладкий, с карамельными нотами', 'Sweet, with caramel-like notes')
    ),
    field('Помол', 'Granulation', text('Мелкий / средний / крупный', 'Fine / medium / coarse')),
    field('Влажность', 'Moisture content', text('≤ 3,0%', '≤ 3.0%')),
    field('Содержание сахарозы', 'Sucrose content'),
    field('Общее содержание сахаров', 'Total sugars'),
    field('pH', 'pH'),
    ash,
    impurities,
    ...microbiology,
    organic,
    shelfLife,
    foodStorage
  ],
  'veymur-desiccated-coconut': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    ingredients,
    field('Добавки', 'Additives'),
    field('Цвет', 'Colour', text('От белого до кремово-белого', 'White to creamy white')),
    field(
      'Вкус и аромат',
      'Taste and aroma',
      text('Характерные кокосовые', 'Characteristic coconut flavour and aroma')
    ),
    field('Фракция', 'Particle size', text('Мелкая / средняя / крупная', 'Fine / medium / coarse')),
    field('Влажность', 'Moisture content', text('≤ 3,0%', '≤ 3.0%')),
    fat,
    protein,
    ash,
    ffa,
    field('Остаточный диоксид серы (SO₂)', 'Residual sulphur dioxide (SO₂)'),
    impurities,
    ...microbiology,
    organic,
    shelfLife,
    foodStorage
  ],
  'veymur-coconut-milk': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    ingredients,
    field('Добавки', 'Additives'),
    field('Цвет', 'Colour', text('От белого до кремово-белого', 'White to creamy white')),
    field('Консистенция', 'Texture', text('Однородная кремовая жидкость', 'Smooth, creamy liquid')),
    fat,
    field('Сухие вещества', 'Total solids'),
    protein,
    moisture,
    field('pH', 'pH'),
    field('Кислотность', 'Acidity'),
    processing,
    ...microbiology,
    organic,
    shelfLife,
    field('Условия хранения', 'Storage conditions')
  ],
  'young-coconut': [
    field('Тип продукта', 'Product type', text('Молодой кокос', 'Young (tender) coconut')),
    field('Ботаническое название', 'Botanical name', text('Cocos nucifera', 'Cocos nucifera')),
    field('Степень зрелости', 'Maturity', text('Молодой плод', 'Tender fruit')),
    field('Сорт', 'Variety'),
    field('Масса одного плода', 'Fruit weight'),
    field('Диаметр плода', 'Fruit diameter'),
    field('Объём кокосовой воды', 'Coconut water volume'),
    field('Содержание растворимых сухих веществ (°Brix)', 'Soluble solids (°Brix)'),
    field('Масса мякоти', 'Kernel weight'),
    field('Степень очистки', 'Husk preparation'),
    field('Температура хранения и перевозки', 'Storage and transport temperature'),
    shelfLife,
    organic
  ],
  'mature-coconut': [
    field('Тип продукта', 'Product type', text('Зрелый кокос', 'Mature coconut')),
    field('Ботаническое название', 'Botanical name', text('Cocos nucifera', 'Cocos nucifera')),
    field('Степень зрелости', 'Maturity', text('Полностью зрелый плод', 'Fully mature fruit')),
    field('Сорт', 'Variety'),
    field('Масса одного плода', 'Fruit weight'),
    field('Диаметр плода', 'Fruit diameter'),
    field('Масса мякоти', 'Kernel weight'),
    field('Толщина мякоти', 'Kernel thickness'),
    field(
      'Состояние скорлупы',
      'Shell condition',
      text('Целая, без трещин', 'Sound, free from cracks')
    ),
    field('Степень очистки', 'Husk preparation'),
    field('Температура хранения и перевозки', 'Storage and transport temperature'),
    shelfLife,
    organic
  ],
  'coco-shell-charcoal-briquettes': [
    field('Сырьё', 'Raw material', text('Уголь из кокосовой скорлупы', 'Coconut shell charcoal')),
    field('Форма', 'Shape', text('Шестигранник / куб / подушечка', 'Hexagonal / cube / pillow')),
    dimensions,
    field('Масса брикета', 'Briquette weight'),
    field('Плотность', 'Density'),
    field('Содержание фиксированного углерода', 'Fixed carbon', text('70–85%', '70–85%')),
    field('Зольность', 'Ash content', text('≤ 3–6%', '≤ 3–6%')),
    field('Влажность', 'Moisture content', text('≤ 5–8%', '≤ 5–8%')),
    field('Летучие вещества', 'Volatile matter'),
    field(
      'Теплотворная способность',
      'Calorific value',
      text('6 500–7 500 ккал/кг', '6,500–7,500 kcal/kg')
    ),
    field('Продолжительность горения', 'Burning duration'),
    field('Связующее', 'Binder'),
    field('Условия хранения', 'Storage conditions', text('В сухом месте', 'Keep dry'))
  ],
  'coco-shell-activated-carbon': [
    field('Сырьё', 'Raw material', text('Кокосовая скорлупа', 'Coconut shell')),
    field(
      'Форма',
      'Form',
      text('Гранулы (GAC) / порошок (PAC)', 'Granular (GAC) / powdered (PAC)')
    ),
    field('Размер частиц', 'Particle size'),
    field('Йодное число', 'Iodine number', text('900–1 200 мг/г', '900–1,200 mg/g')),
    field('Удельная поверхность BET', 'BET surface area'),
    field('Влажность', 'Moisture content', text('≤ 5%', '≤ 5%')),
    field('Зольность', 'Ash content', text('≤ 3–5%', '≤ 3–5%')),
    field('Насыпная плотность', 'Apparent density', text('450–550 кг/м³', '450–550 kg/m³')),
    field('Прочность гранул', 'Granule hardness', text('≥ 95–98%', '≥ 95–98%')),
    field('Активность CTC', 'CTC activity', text('40–60%', '40–60%')),
    field('pH', 'pH', text('9–11', '9–11')),
    field('Активация', 'Activation process')
  ]
};

export function specificationsFor(product: ProductItem): Specification[] {
  const rows = productSpecifications[product.id];
  if (!rows) throw new Error(`Missing specifications for product: ${product.id}`);
  return [
    field(
      'Производитель',
      'Manufacturer',
      text('SEHA Group of Companies', 'SEHA Group of Companies')
    ),
    field('Страна происхождения', 'Country of origin', text('Индия', 'India')),
    ...rows
  ];
}
