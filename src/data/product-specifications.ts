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
  field('C12:0 — лауриновая кислота', 'C12:0 — lauric acid', text('≤ 1%', '≤ 1%')),
  field('Кислотное число', 'Acid value', text('≤ 0,2 мг/г', '≤ 0.2 mg/g')),
  field('Число омыления', 'Saponification value', text('325–345 мг KOH/г', '325–345 mg KOH/g')),
  field('Йодное число', 'Iodine value', text('≤ 1 г I₂/100 г', '≤ 1 g I₂/100 g')),
  field('Влажность при поставке', 'Moisture content at dispatch', text('≤ 0,10%', '≤ 0.10%')),
  field('Перекисное число', 'Peroxide value', text('≤ 1 мэкв/кг', '≤ 1 meq/kg')),
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
    text('≤ 1000 КОЕ/г', '≤ 1000 CFU/g')
  ),
  field(
    'Бактерии группы кишечной палочки (Coliform)',
    'Coliform bacteria',
    text('< 10 КОЕ/г', '< 10 CFU/g')
  ),
  field('Плесени и дрожжи', 'Moulds and yeasts', text('≤ 100 КОЕ/г', '≤ 100 CFU/g')),
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
  field('Мышьяк', 'Arsenic', text('≤ 0,1 ppm', '≤ 0.1 ppm')),
  field('Медь', 'Copper', text('≤ 0,1 ppm', '≤ 0.1 ppm')),
  field('Свинец', 'Lead', text('≤ 0,1 ppm', '≤ 0.1 ppm')),
  field('Никель', 'Nickel', text('≤ 0,1 ppm', '≤ 0.1 ppm')),
  field('Хром', 'Chromium', text('≤ 0,05 ppm', '≤ 0.05 ppm')),
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
const rawHusk = field('Сырьё', 'Raw material', text('Волокнистая оболочка кокоса', 'Coconut husk'));
const rawFibre = field('Материал', 'Material', text('Кокосовое волокно', 'Coconut coir fibre'));
const moisture = field('Влажность при поставке', 'Moisture content at dispatch');
const ph = field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5'));
const ec = field('EC (Электропроводность)', 'EC (Electrical conductivity)');
const lowEc = field(
  'EC (Электропроводность)',
  'EC (Electrical conductivity)',
  text('< 0,5 мСм/см', '< 0.5 mS/cm')
);
const washedChipsEc = field(
  'EC (Электропроводность)',
  'EC (Electrical conductivity)',
  text('< 0,5 мСм/см; водная вытяжка 1:1,5 по объёму', '< 0.5 mS/cm; water extract 1:1.5 by volume')
);
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
    field(
      'Состав субстрата',
      'Substrate composition',
      text(
        'Торф и чипсы в любом согласованном соотношении по объёму; под культуру и запрос заказчика',
        'Pith and chips in a fully customised ratio by volume, matched to the crop and buyer requirements'
      )
    ),
    field(
      'Размеры после увлажнения',
      'Hydrated dimensions',
      text(
        'По заказу; после увлажнения, например: клубника — 100 × 20 × 9 см; томат — 100 × 15 × 12 см',
        'Custom; examples: strawberry — 100 × 20 × 9 cm; tomato — 100 × 15 × 12 cm'
      )
    ),
    field(
      'Сухая масса',
      'Dry weight',
      text(
        'Мат длиной 100 см: около 1,0–1,2 кг для 15 л; около 1,4–1,6 кг для 20–22 л',
        '100 cm slab: approximately 1.0–1.2 kg for 15 L; approximately 1.4–1.6 kg for 20–22 L'
      )
    ),
    field(
      'Объём после увлажнения',
      'Expanded volume',
      text(
        'По заказу, под культуру и систему выращивания',
        'Customised for the crop and growing system'
      )
    ),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    ph,
    lowEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательно промыт; без кальциевой буферизации',
        'Thoroughly washed; not calcium-buffered'
      )
    ),
    field(
      'Материал мешка',
      'Bag material',
      text(
        'Трёхслойная соэкструдированная полиэтиленовая плёнка высокого давления (LDPE)',
        'Three-layer co-extruded low-density polyethylene (LDPE) film'
      )
    ),
    field(
      'Посадочные отверстия',
      'Planting holes',
      text(
        'Количество, размер и расположение — под культуру и плотность посадки',
        'Number, size and layout matched to crop and planting density'
      )
    ),
    field(
      'Дренажные отверстия',
      'Drainage holes',
      text(
        'Количество, размер и расположение — под полив и отвод воды',
        'Number, size and layout matched to irrigation and drainage'
      )
    ),
    field(
      'Вода после свободного дренирования',
      'Water retained after free drainage',
      text(
        'Около 11–13 л для мата 15 л со смесью 70–80% торфа / 20–30% чипсов по объёму',
        'Approximately 11–13 L for a 15 L slab containing 70–80% pith / 20–30% chips by volume'
      )
    ),
    field(
      'Воздушная пористость',
      'Air-filled porosity',
      text(
        'Зависит от согласованного состава, фракции и высоты мата',
        'Depends on the agreed blend, particle grade and slab height'
      )
    ),
    field(
      'Минеральные примеси',
      'Mineral impurities',
      text('< 0,5% или < 1% — по исполнению', '< 0.5% or < 1%, depending on grade')
    ),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 5%', '< 5%')),
    field(
      'Срок службы мешка под солнцем',
      'Bag service life in direct sunlight',
      text('Около 12–24 месяцев (1–2 сезона)', 'Approximately 12–24 months (1–2 growing seasons)')
    ),
    field(
      'Выход прессованного торфа после увлажнения',
      'Hydrated yield of compressed coco pith',
      text(
        'В среднем 14–15 л на 1 кг сухого прессованного торфа',
        'Average 14–15 L per kg of dry compressed coco pith'
      )
    ),
    field(
      'Время раскрытия',
      'Hydration time',
      text(
        'Около 2–4 ч, в зависимости от конфигурации',
        'Approximately 2–4 hours, depending on configuration'
      )
    ),
    field(
      'Вода или стартовый раствор для раскрытия',
      'Water or starter solution for hydration',
      text(
        'Около 10–15 л на мешок, в зависимости от конфигурации',
        'Approximately 10–15 L per bag, depending on configuration'
      )
    ),
    field(
      'Температура воды для раскрытия',
      'Hydration water temperature',
      text('20–25 °C', '20–25 °C')
    ),
    field('Буферизация', 'Buffering', text('Без кальциевой буферизации', 'Not calcium-buffered')),
    field('Толщина плёнки', 'Film thickness', text('120–150 мкм', '120–150 μm'))
  ],
  'open-top-grow-bag': [
    field(
      'Состав субстрата',
      'Substrate composition',
      text(
        '60% кокосового торфа / 40% кокосовых чипсов по объёму',
        '60% coco pith / 40% coco chips by volume'
      )
    ),
    field(
      'Размеры наполненного мешка',
      'Filled bag dimensions',
      text(
        'По заказу; для 10 л: диаметр дна около 20–22 см, высота заполнения около 28–30 см',
        'Customised; 10 L example: base diameter approximately 20–22 cm, filling height approximately 28–30 cm'
      )
    ),
    field(
      'Сухая масса',
      'Dry weight',
      text('Около 750–850 г для 10 л', 'Approximately 750–850 g for 10 L')
    ),
    field(
      'Рабочий объём',
      'Working volume',
      text('10 л; другие объёмы — по заказу', '10 L; other volumes to order')
    ),
    // The crop-specific acidity is part of the product variant, not a generic pH claim.
    field(
      'pH для голубики после подготовки',
      'pH for blueberries after preparation',
      text('4,5–5,2', '4.5–5.2')
    ),
    field('pH — вариант для малины', 'pH — raspberry grade', text('5,5–6,2', '5.5–6.2')),
    lowEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field('Обработка', 'Processing', text('Промывка и просеивание', 'Washed and screened')),
    field(
      'Материал мешка',
      'Bag material',
      text(
        'Трёхслойная соэкструдированная полиэтиленовая плёнка высокого давления (LDPE)',
        'Three-layer co-extruded low-density polyethylene (LDPE) film'
      )
    ),
    field(
      'Конструкция мешка',
      'Bag construction',
      text('Открытый верх, дренажные отверстия', 'Open top, drainage holes')
    ),
    field(
      'Дренажные отверстия',
      'Drainage holes',
      text('Количество, размер и расположение — по заказу', 'Number, size and layout to order')
    ),
    waterRetention,
    field(
      'Воздушная пористость',
      'Air-filled porosity',
      text('20–35% после свободного дренирования', '20–35% after free drainage')
    ),
    field(
      'Масса после полива и дренирования',
      'Weight after watering and drainage',
      text('Около 4,5–5 кг для мешка 10 л', 'Approximately 4.5–5 kg for a 10 L bag')
    ),
    field(
      'Минеральные примеси',
      'Mineral impurities',
      text('< 0,5% или < 1% — по исполнению', '< 0.5% or < 1%, depending on grade')
    ),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 5%', '< 5%')),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field(
      'Размеры плоского мешка (В × Ш)',
      'Flat bag dimensions (H × W)',
      text('По заказу; для 10 л — 35 × 25 см', 'Customised; 10 L example — 35 × 25 cm')
    ),
    field('Толщина плёнки', 'Film thickness', text('120–150 мкм', '120–150 μm')),
    field(
      'EC подготовленного субстрата для голубики',
      'Prepared substrate EC for blueberries',
      text('< 0,3 мСм/см', '< 0.3 mS/cm')
    ),
    field(
      'Примеры объёмов для голубики',
      'Example blueberry bag volumes',
      text(
        '15–20 / 25–30 / 35–45 л — под культуру и заказ',
        '15–20 / 25–30 / 35–45 L, matched to crop and order'
      )
    )
  ],
  'coco-peat': [
    rawPith,
    field(
      'Фракция',
      'Particle size',
      text(
        'Fine: сито 4–6 мм; Medium/Coarse: сито до 8–10 мм; по заказу',
        'Fine: 4–6 mm sieve; Medium/Coarse: sieve up to 8–10 mm; custom grades'
      )
    ),
    ph,
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('0,2–0,4 мСм/см', '0.2–0.4 mS/cm')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; дальнейшая обработка по спецификации',
        'Thoroughly washed; further processing according to specification'
      )
    ),
    field(
      'Влагоудерживающая способность',
      'Maximum water-holding capacity',
      text('7–9 кг воды на 1 кг сухого субстрата', '7–9 kg of water per kg of dry substrate')
    ),
    field(
      'Воздушная пористость',
      'Air-filled porosity',
      text('Около 10–15% после свободного дренирования', 'Approximately 10–15% after free drainage')
    ),
    field('Минеральные примеси', 'Mineral impurities', text('< 1,5%', '< 1.5%')),
    field('Пылевая фракция', 'Dust fraction', text('5–8%', '5–8%')),
    field('Короткое волокно', 'Short fibre content', text('15–20%', '15–20%')),
    field('Упаковка', 'Packaging', text('Мешки 50–70 л', '50–70 L bags'))
  ],
  'coco-peat-briquettes': [
    rawPith,
    field('Формат', 'Format', text('Прессованный брикет / блок', 'Compressed brick / block')),
    field(
      'Размеры блока 5 кг',
      '5 kg block dimensions',
      text('30 × 30 × 12 см', '30 × 30 × 12 cm')
    ),
    expandedVolume,
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    ph,
    lowEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('12–15%', '12–15%')),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; дальнейшая обработка по спецификации',
        'Thoroughly washed; further processing according to specification'
      )
    ),
    waterRetention,
    field(
      'Минеральные примеси',
      'Mineral impurities',
      text(
        '< 2% или < 3% от сухой массы — по марке',
        '< 2% or < 3% of dry weight, depending on grade'
      )
    ),
    field(
      'Короткое волокно',
      'Short fibre content',
      text('< 5% или < 10% — по марке', '< 5% or < 10%, depending on grade')
    ),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 5%', '< 5%'))
  ],
  'coconut-chips': [
    field(
      'Внешний вид',
      'Appearance',
      text('Чипсы от коричневого до тёмно-коричневого цвета', 'Brown to dark-brown chips')
    ),
    field(
      'Размер чипсов (фракция)',
      'Chip sizes available',
      text(
        'Мелкая 6–12 мм / Средняя 12–18 мм / По заказу',
        'Fine 6–12 mm / Medium 12–18 mm / Custom'
      )
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Промывка пресной водой, просеивание и сортировка по размеру',
        'Fresh-water washed, screened and graded'
      )
    ),
    field('Буферизация', 'Buffering', text('Без буферизации', 'Not buffered')),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,8', '5.5–6.8')),
    washedChipsEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field(
      'Влагоудерживающая способность',
      'Water-holding capacity',
      text('4–6 кг воды на 1 кг сухих чипсов', '4–6 kg of water per kg of dry chips')
    ),
    field('Воздухоёмкость', 'Air-filled porosity', text('30–45%', '30–45%')),
    field(
      'Формат поставки',
      'Supply form',
      text(
        'Россыпью, в прессованных блоках или в упаковке по заказу',
        'Loose chips, compressed blocks or custom packaging'
      )
    ),
    impurities
  ],
  'coco-husk-chips-bricks': [
    rawHusk,
    field(
      'Состав',
      'Composition',
      text('Чипсы из волокнистой оболочки кокоса', 'Coconut husk chips')
    ),
    field('Формат', 'Format', text('Прессованный брикет', 'Compressed brick')),
    field('Цвет', 'Colour', text('От коричневого до тёмно-коричневого', 'Brown to dark brown')),
    field('Сухая масса', 'Dry weight', text('5 кг', '5 kg')),
    field(
      'Размеры блока 5 кг',
      '5 kg block dimensions',
      text('30 × 30 × 12 см', '30 × 30 × 12 cm')
    ),
    expandedVolume,
    field(
      'Размер чипсов (фракция)',
      'Chip sizes available',
      text(
        'Мелкая 6–12 мм / Средняя 12–18 мм / По заказу',
        'Fine 6–12 mm / Medium 12–18 mm / Custom'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,8', '5.5–6.8')),
    washedChipsEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; просеивание и сортировка по размеру под заказ',
        'Thoroughly washed; screened and graded to order'
      )
    ),
    waterRetention,
    airPorosity,
    field(
      'Упаковка',
      'Packaging',
      text(
        'Отдельные брикеты, коробки или паллеты для экспорта',
        'Individual bricks, cartons or palletised export packaging'
      )
    )
  ],
  'grow-cube-sleeve': [
    field(
      'Состав субстрата',
      'Substrate composition',
      text(
        'Смесь кокосовых чипсов, волокон и торфа; пропорции по объёму — по заказу',
        'Coconut chips, fibre and pith blend; proportions by volume to order'
      )
    ),
    field('Формат', 'Format', text('Куб в защитной оболочке', 'Cube in a protective sleeve')),
    field(
      'Размеры после увлажнения',
      'Expanded dimensions',
      text('10 × 10 × 10 см', '10 × 10 × 10 cm')
    ),
    field('Объём после увлажнения', 'Expanded volume', text('Около 1 л', 'Approximately 1 L')),
    field(
      'Сухая масса',
      'Dry weight',
      text(
        'Около 85–100 г для куба 10 × 10 × 10 см',
        'Approximately 85–100 g for a 10 × 10 × 10 cm cube'
      )
    ),
    ph,
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,3 мСм/см', '< 0.3 mS/cm')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Фракция',
      'Particle size',
      text(
        'Крупная смесь чипсов, волокон и торфа, под культуру',
        'Coarse chips, fibre and pith blend matched to crop'
      )
    ),
    field(
      'Материал оболочки',
      'Sleeve material',
      text('Нетканый УФ-стабилизированный материал', 'UV-stabilised non-woven material')
    ),
    field(
      'Посадочное отверстие',
      'Planting hole',
      text(
        'Сформировано заранее; размер и положение — по заказу',
        'Pre-formed; size and position to order'
      )
    ),
    field(
      'Дренажные отверстия',
      'Drainage holes',
      text('По заказу, с учётом системы выращивания', 'Optional, according to growing system')
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Промывка или промывка с буферизацией — по спецификации',
        'Washed or washed and buffered, according to specification'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Коробки, паллеты или экспортная упаковка по заказу',
        'Cartons, palletised shipments or custom export packaging'
      )
    ),
    field('Минеральные примеси', 'Mineral impurities'),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 2%', '< 2%'))
  ],
  'coco-coir-discs': [
    field(
      'Состав субстрата',
      'Substrate composition',
      text('Кокосовый торф и короткие кокосовые волокна', 'Coco pith and short coir fibres')
    ),
    field('Наружная оболочка', 'Outer sleeve', text('Отсутствует', 'None')),
    field('Цвет', 'Colour', text('От коричневого до тёмно-коричневого', 'Brown to dark brown')),
    field('Форма', 'Shape', text('Круглый диск', 'Circular disc')),
    field(
      'Диаметр',
      'Diameter',
      text('30 / 36 / 40 / 50 мм или по заказу', '30 / 36 / 40 / 50 mm or custom')
    ),
    field(
      'Толщина в сухом виде',
      'Dry thickness',
      text('Зависит от диаметра и степени прессования', 'Depends on disc diameter and compression')
    ),
    field(
      'Сухая масса',
      'Dry weight',
      text('По заказу, в зависимости от размера', 'Customised according to size')
    ),
    field(
      'Высота после увлажнения',
      'Expanded height',
      text(
        'Зависит от размера, массы и условий увлажнения',
        'Depends on disc size, weight and hydration'
      )
    ),
    expandedVolume,
    ph,
    lowEc,
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, просеивание и прессование',
        'Thoroughly washed, screened and compressed'
      )
    ),
    field(
      'Добавленные удобрения',
      'Added fertiliser',
      text(
        'Без добавленных удобрений, если не предусмотрено заказом',
        'No added fertiliser unless specified'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Оптовые коробки, розничная или индивидуальная упаковка',
        'Bulk cartons, retail or custom packaging'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field('Минеральные примеси', 'Mineral impurities', text('< 1%', '< 1%'))
  ],
  'coco-peat-tablets': [
    rawPith,
    field(
      'Цвет',
      'Colour',
      text('От светло-коричневого до тёмно-коричневого', 'Light brown to dark brown')
    ),
    field('Форма', 'Shape', text('Круглая таблетка', 'Circular tablet')),
    field('Диаметр', 'Diameter', text('30–100 мм или по заказу', '30–100 mm or custom')),
    field('Толщина в сухом виде', 'Dry thickness'),
    field(
      'Сухая масса',
      'Dry weight',
      text('По заказу, в зависимости от размера', 'Customised according to size')
    ),
    expandedVolume,
    ph,
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,3 мСм/см', '< 0.3 mS/cm')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field('Степень прессования', 'Compression ratio'),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, просеивание и прессование',
        'Thoroughly washed, screened and compressed'
      )
    ),
    field(
      'Добавленные удобрения',
      'Added fertiliser',
      text(
        'Без добавленных удобрений, если не предусмотрено заказом',
        'No added fertiliser unless specified'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Оптовые коробки, розничная или индивидуальная упаковка',
        'Bulk cartons, retail or custom packaging'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field('Минеральные примеси', 'Mineral impurities'),
    field('Пылевая фракция', 'Dust fraction', text('Около 10%', 'Approximately 10%'))
  ],
  'coco-peat-compost': [
    rawPith,
    field(
      'Состав',
      'Composition',
      text(
        'Чистый переработанный кокосовый торф, без других компостов',
        'Pure processed coco pith, with no other composts'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text('Мелкая, просеянная; размер сита — по заказу', 'Fine and screened; mesh size to order')
    ),
    ph,
    ec,
    moisture,
    waterRetention,
    field('Содержание органического вещества', 'Organic matter content'),
    field('Содержание NPK', 'NPK content'),
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Мелкий рыхлый волокнистый материал от коричневого до тёмно-коричневого',
        'Fine, loose, fibrous material, brown to dark brown'
      )
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, переработка и просеивание',
        'Thoroughly washed, processed and screened'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Прессованные блоки, мешки или упаковка по заказу',
        'Compressed blocks, bags, bulk or custom packaging'
      )
    ),
    impurities
  ],
  'seeding-tray-media': [
    rawPith,
    field(
      'Формат',
      'Format',
      text(
        'Цельная сухая прессованная плита-матрица с формованными ячейками',
        'One-piece dry compressed matrix plate with moulded cell forms'
      )
    ),
    field(
      'Комплектация',
      'Supply contents',
      text(
        'Кокосовый вкладыш; пластиковая или пенопластовая кассета не входит',
        'Coir insert; plastic or foam tray not included'
      )
    ),
    field('Совместимая модель кассеты', 'Compatible tray model'),
    field(
      'Количество ячеек',
      'Cell count',
      text(
        'Под модель кассеты; примеры конфигураций — 64 / 84',
        'Matched to tray model; example configurations — 64 / 84'
      )
    ),
    field(
      'Форма ячеек',
      'Cell shape',
      text(
        'Квадратные или круглые формованные ячейки, под модель кассеты',
        'Square or round moulded cell forms, matched to tray model'
      )
    ),
    field(
      'Объём ячейки',
      'Cell volume',
      text(
        'По требованиям культуры и модели кассеты',
        'According to crop requirements and tray model'
      )
    ),
    field('Размеры вкладыша', 'Insert dimensions'),
    field(
      'Фракция',
      'Particle size',
      text('Мелкая, под культуру и требования заказчика', 'Fine, customised for the crop and buyer')
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, просеивание, прессование и формование',
        'Thoroughly washed, screened, compressed and moulded'
      )
    ),
    ph,
    ec,
    moisture,
    waterRetention,
    airPorosity,
    field(
      'Увлажнение перед посевом',
      'Hydration before sowing',
      text(
        'Капельный полив или подтопление, с последующим дренированием',
        'Drip irrigation or subirrigation, followed by drainage'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text('Стопки сухих прессованных блоков', 'Stacks of dry compressed blocks')
    )
  ],
  'coir-fiber-bales': [
    rawHusk,
    rawFibre,
    field(
      'Длина волокна',
      'Fibre length',
      text(
        'Короткое, среднее или длинное — по выбранной марке',
        'Short, medium or long, according to grade'
      )
    ),
    field(
      'Цвет',
      'Colour',
      text('От золотисто-коричневого до тёмно-коричневого', 'Golden brown to dark brown')
    ),
    field('Размеры тюка', 'Bale dimensions', text('По заказу', 'Customised')),
    field('Масса нетто тюка', 'Net bale weight'),
    field('Структура волокна', 'Fibre texture', text('Грубое, упругое', 'Coarse and resilient')),
    field(
      'Формат тюка',
      'Bale type',
      text(
        'Прессованный или непрессованный — в зависимости от наличия',
        'Compressed or non-compressed, subject to availability'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text('Тюк, закреплённый лентами или обёрткой', 'Bale secured with straps or wrapping')
    ),
    field(
      'Условия хранения',
      'Storage conditions',
      text(
        'В чистом, сухом, проветриваемом месте, с защитой от влаги',
        'Clean, dry, ventilated storage, protected from moisture'
      )
    ),
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
    field('Диаметр пряди', 'Strand diameter', text('По заказу', 'Customised')),
    field(
      'Длина пряди',
      'Strand length',
      text('По требованиям производства', 'According to production requirements')
    ),
    field('Степень скрутки', 'Twist level', text('По заказу', 'Customised')),
    moisture,
    field('Структура', 'Texture', text('Грубая, волокнистая', 'Coarse and fibrous')),
    field('Упаковка', 'Packaging', text('По заказу', 'According to buyer requirements')),
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
    field(
      'Размер ячейки',
      'Mesh opening',
      text('По заказу, с учётом плотности полотна', 'Customised according to fabric grade')
    ),
    field('Цвет', 'Colour', text('Натуральный коричневый', 'Natural brown')),
    field(
      'Биоразлагаемость',
      'Biodegradability',
      text(
        'Биоразлагаемый материал; срок зависит от плотности и условий участка',
        'Biodegradable; duration depends on grade and site conditions'
      )
    ),
    field(
      'Водопроницаемость',
      'Water permeability',
      text('Открытая сетка пропускает воду', 'Open mesh allows water passage')
    ),
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
    field(
      'Цвет в жидком состоянии',
      'Colour when liquid',
      text('От бесцветного до бледно-жёлтого', 'Colourless to pale yellow')
    ),
    field('Добавки', 'Additives', text('уточнить', 'to be confirmed')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Пищевые бутылки, банки или транспортная тара — по наличию',
        'Food-grade bottles, jars, cans or bulk containers, subject to availability'
      )
    ),
    field('Способ извлечения', 'Extraction process', text('Холодный отжим', 'Cold pressing')),
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
    foodStorage,
    field('Тип рафинации', 'Refining type', text('Физическая рафинация', 'Physical refining'))
  ],
  'veymur-coconut-sugar': [
    field(
      'Сырьё',
      'Raw material',
      text('Сок соцветий кокосовой пальмы', 'Coconut palm flower sap')
    ),
    ingredients,
    field(
      'Текстура',
      'Texture',
      text('Сыпучие гранулы или порошок', 'Free-flowing granules or powder')
    ),
    field('Добавки', 'Additives', text('уточнить', 'to be confirmed')),
    field(
      'Упаковка',
      'Packaging',
      text('Пищевые пакеты, мешки или оптовая тара', 'Food-grade pouches, bags or bulk packaging')
    ),
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
    field('Влажность при поставке', 'Moisture content at dispatch', text('≤ 3,0%', '≤ 3.0%')),
    field('Содержание сахарозы', 'Sucrose content'),
    field('Общее содержание сахаров', 'Total sugars'),
    field('pH', 'pH'),
    ash,
    field('Посторонние включения', 'Foreign matter', text('Отсутствуют', 'Absent')),
    ...microbiology,
    organic,
    shelfLife,
    foodStorage,
    field(
      'Производство',
      'Production process',
      text(
        'Выпаривание сока соцветий и кристаллизация',
        'Flower sap evaporation and crystallisation'
      )
    )
  ],
  'veymur-desiccated-coconut': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    ingredients,
    field('Текстура', 'Texture', text('Сухая, сыпучая стружка', 'Dry, free-flowing particles')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Пищевая розничная или оптовая упаковка по заказу',
        'Food-grade retail or bulk packaging to order'
      )
    ),
    field('Добавки', 'Additives'),
    field('Цвет', 'Colour', text('От белого до кремово-белого', 'White to creamy white')),
    field(
      'Вкус и аромат',
      'Taste and aroma',
      text('Характерные кокосовые', 'Characteristic coconut flavour and aroma')
    ),
    field('Фракция', 'Particle size', text('Мелкая / средняя / крупная', 'Fine / medium / coarse')),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 2,5%', '< 2.5%')),
    field(
      'Массовая доля жира',
      'Fat content',
      text('68–72% — типичный диапазон', '68–72% — typical range')
    ),
    protein,
    ash,
    ffa,
    field('Остаточный диоксид серы (SO₂)', 'Residual sulphur dioxide (SO₂)'),
    field('Посторонние включения', 'Foreign matter', text('Отсутствуют', 'Absent')),
    ...microbiology,
    organic,
    shelfLife,
    foodStorage,
    field(
      'Обработка',
      'Processing',
      text(
        'Удаление коричневой оболочки ядра, измельчение и сушка',
        'Kernel paring, shredding and drying'
      )
    ),
    field('Температура сушки', 'Drying temperature', text('60–75 °C', '60–75 °C'))
  ],
  'veymur-coconut-milk': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    field(
      'Основа состава',
      'Base ingredients',
      text('Кокосовый экстракт и вода', 'Coconut extract and water')
    ),
    ingredients,
    field(
      'Упаковка',
      'Packaging',
      text(
        'Асептическая картонная упаковка, банка или другая пищевая тара — по наличию',
        'Aseptic carton, can or other food-grade packaging, subject to availability'
      )
    ),
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
    field(
      'Степень очистки',
      'Husk preparation',
      text(
        'С волокнистой оболочкой или очищенные — по заказу и наличию',
        'With husk or dehusked, according to order and availability'
      )
    ),
    field('Температура хранения и перевозки', 'Storage and transport temperature'),
    shelfLife,
    organic,
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Свежие, без видимой плесени и серьёзных повреждений',
        'Fresh, sound, free from visible mould and serious damage'
      )
    ),
    field(
      'Посторонние включения',
      'Impurity content',
      text(
        'Без видимой почвы и посторонних материалов',
        'Free from visible soil and foreign material'
      )
    ),
    field(
      'Повреждения вредителями',
      'Pest damage',
      text(
        'Без заражения и неприемлемых повреждений',
        'Free from infestation and unacceptable damage'
      )
    ),
    field(
      'Калибровка',
      'Size grading',
      text(
        'Мелкие, средние, крупные или по согласованной массе и диаметру',
        'Small, medium, large or by agreed weight and diameter'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Экспортные коробки, сетчатые мешки или другая согласованная тара',
        'Export cartons, mesh bags or other agreed packaging'
      )
    )
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
    field(
      'Степень очистки',
      'Husk preparation',
      text(
        'С волокнистой оболочкой или очищенные — по заказу и наличию',
        'With husk or dehusked, according to order and availability'
      )
    ),
    field('Температура хранения и перевозки', 'Storage and transport temperature'),
    shelfLife,
    organic,
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Свежие, без видимой плесени и серьёзных повреждений',
        'Fresh, sound, free from visible mould and serious damage'
      )
    ),
    field(
      'Посторонние включения',
      'Foreign matter',
      text(
        'Без видимой почвы и посторонних материалов',
        'Free from visible soil and foreign material'
      )
    ),
    field(
      'Повреждения вредителями',
      'Pest damage',
      text(
        'Без заражения и неприемлемых повреждений',
        'Free from infestation and unacceptable damage'
      )
    ),
    field(
      'Калибровка',
      'Size grading',
      text(
        'Мелкие, средние, крупные или по согласованной массе и диаметру',
        'Small, medium, large or by agreed weight and diameter'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Экспортные коробки, сетчатые мешки или другая согласованная тара',
        'Export cartons, mesh bags or other agreed packaging'
      )
    )
  ],
  'coco-shell-charcoal-briquettes': [
    field('Сырьё', 'Raw material', text('Уголь из кокосовой скорлупы', 'Coconut shell charcoal')),
    field('Форма', 'Shape', text('Шестигранник / куб / подушечка', 'Hexagonal / cube / pillow')),
    dimensions,
    field('Масса брикета', 'Briquette weight'),
    field('Плотность', 'Density'),
    field('Содержание фиксированного углерода', 'Fixed carbon', text('70–85%', '70–85%')),
    field('Зольность', 'Ash content', text('≤ 3–6%', '≤ 3–6%')),
    field('Влажность при поставке', 'Moisture content at dispatch', text('≤ 5–8%', '≤ 5–8%')),
    field('Летучие вещества', 'Volatile matter'),
    field(
      'Теплотворная способность',
      'Calorific value',
      text('6 500–7 500 ккал/кг', '6,500–7,500 kcal/kg')
    ),
    field(
      'Продолжительность горения',
      'Burning duration',
      text('Зависит от размера, плотности и подачи воздуха', 'Depends on size, density and airflow')
    ),
    field(
      'Связующее',
      'Binder',
      text('Крахмальное или другое согласованное связующее', 'Starch-based or other agreed binder')
    ),
    field('Условия хранения', 'Storage conditions', text('В сухом месте', 'Keep dry')),
    field('Цвет', 'Colour', text('От чёрного до тёмно-серого', 'Black to dark grey')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Внутренний пакет в коробке или экспортный мешок',
        'Inner polybag with carton or export sack'
      )
    )
  ],
  'coco-shell-activated-carbon': [
    field('Сырьё', 'Raw material', text('Кокосовая скорлупа', 'Coconut shell')),
    field(
      'Форма',
      'Form',
      text('Гранулы (GAC) / порошок (PAC)', 'Granular (GAC) / powdered (PAC)')
    ),
    field(
      'Размер частиц',
      'Particle size',
      text('Разные ситовые фракции — по заказу', 'Different mesh sizes to order')
    ),
    field('Йодное число', 'Iodine number', text('900–1 200 мг/г', '900–1,200 mg/g')),
    field('Удельная поверхность BET', 'BET surface area'),
    field('Влажность при поставке', 'Moisture content at dispatch', text('≤ 5%', '≤ 5%')),
    field('Зольность', 'Ash content', text('≤ 3–5%', '≤ 3–5%')),
    field('Насыпная плотность', 'Apparent density', text('450–550 кг/м³', '450–550 kg/m³')),
    field('Прочность гранул', 'Granule hardness', text('≥ 95–98%', '≥ 95–98%')),
    field('Активность CTC', 'CTC activity', text('40–60%', '40–60%')),
    field('pH', 'pH', text('9–11', '9–11')),
    field(
      'Активация',
      'Activation process',
      text(
        'Паровая или другая согласованная обработка',
        'Steam or other specified activation process'
      )
    )
  ]
};

const substrateOrder = [
  'Format',
  'Shape',
  'Supply contents',
  'Compatible tray model',
  'Insert dimensions',
  '5 kg block dimensions',
  'Hydrated dimensions',
  'Bag dimensions',
  'Flat bag dimensions (H × W)',
  'Filled bag dimensions',
  'Expanded dimensions',
  'Dimensions (L × W × H)',
  'Diameter',
  'Dry thickness',
  'Dry weight',
  'Expanded volume',
  'Working volume',
  'Example blueberry bag volumes',
  'Expanded height',
  'Expansion ratio',
  'Hydrated yield of compressed coco pith',
  'Hydration time',
  'Hydration before sowing',
  'Water or starter solution for hydration',
  'Hydration water temperature',
  'Substrate composition',
  'Composition',
  'Raw material',
  'Appearance',
  'Colour',
  'Particle size',
  'Chip sizes available',
  'Processing',
  'Buffering',
  'Sleeve material',
  'Bag material',
  'Outer sleeve',
  'Film thickness',
  'Bag construction',
  'Bag service life in direct sunlight',
  'Planting hole',
  'Planting holes',
  'Drainage holes',
  'Cell count',
  'Cell volume',
  'Cell shape',
  'Tray dimensions',
  'Tray material',
  'Drainage',
  'pH',
  'pH (Acidity)',
  'pH for blueberries after preparation',
  'pH — raspberry grade',
  'EC (Electrical conductivity)',
  'Prepared substrate EC for blueberries',
  'Moisture content at dispatch',
  'Maximum water-holding capacity',
  'Water retained after free drainage',
  'Weight after watering and drainage',
  'Air-filled porosity',
  'Organic matter content',
  'NPK content',
  'Added fertiliser',
  'Impurity content',
  'Mineral impurities',
  'Dust fraction < 0.5 mm',
  'Dust fraction',
  'Short fibre content',
  'Packaging'
];
export function specificationsFor(product: ProductItem): Specification[] {
  const sourceRows = productSpecifications[product.id]?.map((row) => {
    if (product.category !== 'substrates') return row;
    if (row.label.en === 'Water-holding capacity')
      return { ...row, label: text('Полная влагоёмкость', 'Maximum water-holding capacity') };
    if (row.label.en.includes('EC') && !row.value.en.includes('1:1.5'))
      return {
        ...row,
        value: text(
          row.value.ru === 'уточнить'
            ? 'уточнить; вытяжка 1:1,5 по объёму'
            : row.value.ru + '; вытяжка 1:1,5 по объёму',
          row.value.en === 'to be confirmed'
            ? 'to be confirmed; 1:1.5 extract by volume'
            : row.value.en + '; 1:1.5 extract by volume'
        )
      };
    return row;
  });
  const rows = sourceRows?.map((row) =>
    product.category === 'substrates' &&
    ['Particle size', 'Chip sizes available'].includes(row.label.en) &&
    !/заказчика|buyer/.test(row.value.ru + row.value.en)
      ? {
          ...row,
          value: text(
            `${row.value.ru}; фракция по требованиям заказчика и под культуру`,
            `${row.value.en}; particle size customised for the buyer and crop`
          )
        }
      : row
  );
  if (!rows) throw new Error(`Missing specifications for product: ${product.id}`);
  return [
    field('Производитель', 'Manufacturer', text('Группа компаний СЕХА', 'SEHA Group of Companies')),
    field(
      'Страна происхождения',
      'Country of origin',
      product.id === 'coconut-chips'
        ? text('Произведено в штате Тамилнад, Индия', 'Manufactured in Tamil Nadu, India')
        : text('Индия', 'India')
    ),
    ...(product.category === 'substrates'
      ? [...rows].sort((a, b) => {
          const rank = (label: string) => {
            const index = substrateOrder.indexOf(label);
            return index < 0 ? substrateOrder.length : index;
          };
          return rank(a.label.en) - rank(b.label.en);
        })
      : rows)
  ];
}
