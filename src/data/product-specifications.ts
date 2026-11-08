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
// Field selection follows procurement tables from Coir Plus, E-Coir, Renuka,
// EPL Group and Haycarb. Values are from the client's existing SEHA data only;
// proposed values still require the client's final review. Missing values stay pending.
const rawPith = field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith'));
const rawHusk = field('Сырьё', 'Raw material', text('Волокнистая оболочка кокоса', 'Coconut husk'));
const rawFibre = field('Материал', 'Material', text('Кокосовое волокно', 'Coconut coir fibre'));
const moisture = field('Влажность при поставке', 'Moisture content at dispatch');
const ph = field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5'));
const ec = field('EC (Электропроводность)', 'EC (Electrical conductivity)');
const waterRetention = field('Влагоудерживающая способность', 'Water-holding capacity');
const airPorosity = field('Воздушная пористость', 'Air-filled porosity');
const impurities = field('Содержание примесей', 'Impurity content');
const buffering = field('Буферизация', 'Buffering', text('По запросу', 'On request'));
const tensileStrength = field('Разрывная нагрузка', 'Tensile strength');

const productSpecifications: Record<string, readonly Specification[]> = {
  'grow-bag': [
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
      text('2,1–2,2 кг — для 100 × 15 × 12 см', '2.1–2.2 kg for 100 × 15 × 12 cm')
    ),
    field(
      'Объём после увлажнения',
      'Expanded volume',
      text(
        'Около 18 л — для 100 × 15 × 12 см; другие объёмы по заказу',
        'Approximately 18 L for 100 × 15 × 12 cm; other volumes to order'
      )
    ),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
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
    field(
      'Состав субстрата',
      'Substrate composition',
      text(
        'Торф и чипсы в любом согласованном соотношении по объёму; под культуру и запрос заказчика',
        'Pith and chips in a fully customised ratio by volume, matched to the crop and buyer requirements'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field('Обработка', 'Processing', text('Промыт и просеян', 'Washed and screened')),
    field(
      'Материал мешка',
      'Bag material',
      text(
        'Трёхслойная соэкструдированная полиэтиленовая плёнка высокого давления (LDPE)',
        'Three-layer co-extruded low-density polyethylene (LDPE) film'
      )
    ),
    field('Толщина плёнки', 'Film thickness', text('120–150 мкм', '120–150 μm')),
    field(
      'Срок службы мешка под солнцем',
      'Bag service life in direct sunlight',
      text('Около 12–24 месяцев (1–2 сезона)', 'Approximately 12–24 months (1–2 growing seasons)')
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
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,5 мСм/см; вытяжка 1:1,5 по объёму', '< 0.5 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
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
      'Масса после увлажнения',
      'Hydrated weight',
      text('13–15 кг — для 100 × 15 × 12 см', '13–15 kg for 100 × 15 × 12 cm')
    )
  ],
  'open-top-grow-bag': [
    field(
      'Размеры плоского мешка (В × Ш)',
      'Flat bag dimensions (H × W)',
      text('По заказу; для 10 л — 35 × 25 см', 'Customised; 10 L example — 35 × 25 cm')
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
      text('1,1–1,3 кг — для примера 10 л', '1.1–1.3 kg for the 10 L example')
    ),
    field(
      'Рабочий объём',
      'Working volume',
      text('Пример — 10 л; объём по заказу', 'Example: 10 L; volume to order')
    ),
    field(
      'Примеры объёмов для голубики',
      'Example blueberry bag volumes',
      text(
        '15–20 / 25–30 / 35–45 л — под культуру и заказ',
        '15–20 / 25–30 / 35–45 L, matched to crop and order'
      )
    ),
    field(
      'Смесь субстрата',
      'Substrate composition',
      text(
        'Пример — 60% торфа / 40% чипсов по объёму; состав по заказу',
        'Example: 60% pith / 40% chips by volume; blend to order'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field('Обработка', 'Processing', text('Промывка и просеивание', 'Washed and screened')),
    field(
      'Материал мешка',
      'Bag material',
      text(
        'Двухслойная LDPE-плёнка: белая снаружи, чёрная внутри',
        'Two-layer LDPE film: white outside, black inside'
      )
    ),
    field('Толщина плёнки', 'Film thickness', text('120–150 мкм', '120–150 μm')),
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
    field(
      'pH для голубики после подготовки',
      'pH for blueberries after preparation',
      text('4,5–5,2', '4.5–5.2')
    ),
    field('pH — вариант для малины', 'pH — raspberry grade', text('5,5–6,2', '5.5–6.2')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,5 мСм/см; вытяжка 1:1,5 по объёму', '< 0.5 mS/cm; 1:1.5 extract by volume')
    ),
    field(
      'EC подготовленного субстрата для голубики',
      'Prepared substrate EC for blueberries',
      text('< 0,3 мСм/см; вытяжка 1:1,5 по объёму', '< 0.3 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field(
      'Полная влагоёмкость',
      'Maximum water-holding capacity',
      text(
        '6,5–7,5 л воды — для примера 10 л, смесь 60/40',
        '6.5–7.5 L of water for the 10 L, 60/40 example'
      )
    ),
    field(
      'Воздушная пористость',
      'Air-filled porosity',
      text('20–25% — для примера 10 л, смесь 60/40', '20–25% for the 10 L, 60/40 example')
    ),
    field(
      'Минеральные примеси',
      'Mineral impurities',
      text('< 0,5% или < 1% — по исполнению', '< 0.5% or < 1%, depending on grade')
    ),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 5%', '< 5%')),
    field(
      'Формат',
      'Format',
      text('Сухой прессованный субстрат внутри мешка', 'Dry compressed substrate inside the bag')
    )
  ],
  'coco-peat': [
    field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith')),
    field(
      'Фракция',
      'Particle size',
      text(
        'Fine: сито 4–6 мм; Medium/Coarse: сито до 8–10 мм; по заказу; фракция по требованиям заказчика и под культуру',
        'Fine: 4–6 mm sieve; Medium/Coarse: sieve up to 8–10 mm; custom grades; particle size customised for the buyer and crop'
      )
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; дальнейшая обработка по спецификации',
        'Thoroughly washed; further processing according to specification'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('0,2–0,4 мСм/см; вытяжка 1:1,5 по объёму', '0.2–0.4 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
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
    field('Упаковка', 'Packaging', text('По заказу', 'To order'))
  ],
  'coco-peat-briquettes': [
    field('Формат', 'Format', text('Прессованный брикет / блок', 'Compressed brick / block')),
    field(
      'Размеры блока 5 кг',
      '5 kg block dimensions',
      text('30 × 30 × 12 см', '30 × 30 × 12 cm')
    ),
    field(
      'Объём после увлажнения',
      'Expanded volume',
      text('650 г — 9–10 л; 5 кг — 70–75 л', '650 g: 9–10 L; 5 kg: 70–75 L')
    ),
    field('Коэффициент расширения', 'Expansion ratio', text('≥ 5:1', '≥ 5:1')),
    field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith')),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; дальнейшая обработка по спецификации',
        'Thoroughly washed; further processing according to specification'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,5 мСм/см; вытяжка 1:1,5 по объёму', '< 0.5 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('12–15%', '12–15%')),
    field(
      'Полная влагоёмкость',
      'Maximum water-holding capacity',
      text('уточнить', 'to be confirmed')
    ),
    field(
      'Минеральные примеси',
      'Mineral impurities',
      text(
        '< 2% или < 3% от сухой массы — по марке',
        '< 2% or < 3% of dry weight, depending on grade'
      )
    ),
    field('Пылевая фракция < 0,5 мм', 'Dust fraction < 0.5 mm', text('< 5%', '< 5%')),
    field(
      'Короткое волокно',
      'Short fibre content',
      text('< 5% или < 10% — по марке', '< 5% or < 10%, depending on grade')
    ),
    field(
      'Размеры брикета 650 г',
      '650 g brick dimensions',
      text('20 × 10 × 5 см', '20 × 10 × 5 cm')
    )
  ],
  'coconut-chips': [
    field(
      'Внешний вид',
      'Appearance',
      text('Чипсы от коричневого до тёмно-коричневого цвета', 'Brown to dark-brown chips')
    ),
    field(
      'Фракции чипсов',
      'Chip sizes available',
      text(
        'Мелкая (Small / Mini) 2–8 мм / Средняя (Medium / Standard) 6–15 мм / Крупная (Large / Coarse) 15–30 мм и крупнее; под требования заказчика',
        'Small / Mini 2–8 mm / Medium / Standard 6–15 mm / Large / Coarse 15–30 mm and larger; to buyer requirements'
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
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,8', '5.5–6.8')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text(
        '< 0,5 мСм/см; водная вытяжка 1:1,5 по объёму',
        '< 0.5 mS/cm; water extract 1:1.5 by volume'
      )
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field(
      'Полная влагоёмкость',
      'Maximum water-holding capacity',
      text('4–6 кг воды на 1 кг сухих чипсов', '4–6 kg of water per kg of dry chips')
    ),
    field('Воздухоёмкость', 'Air-filled porosity', text('30–45%', '30–45%')),
    field('Содержание примесей', 'Impurity content', text('уточнить', 'to be confirmed')),
    field(
      'Формат поставки',
      'Supply form',
      text(
        'Россыпью, в прессованных блоках или в упаковке по заказу',
        'Loose chips, compressed blocks or custom packaging'
      )
    )
  ],
  'coco-husk-chips-bricks': [
    field('Формат', 'Format', text('Прессованный брикет', 'Compressed brick')),
    field(
      'Размеры блока 5 кг',
      '5 kg block dimensions',
      text('30 × 30 × 12 см', '30 × 30 × 12 cm')
    ),
    field('Сухая масса', 'Dry weight', text('5 кг', '5 kg')),
    field('Объём после увлажнения', 'Expanded volume', text('уточнить', 'to be confirmed')),
    field(
      'Состав',
      'Composition',
      text('Чипсы из волокнистой оболочки кокоса', 'Coconut husk chips')
    ),
    field('Сырьё', 'Raw material', text('Волокнистая оболочка кокоса', 'Coconut husk')),
    field('Цвет', 'Colour', text('От коричневого до тёмно-коричневого', 'Brown to dark brown')),
    field(
      'Фракции чипсов',
      'Chip sizes available',
      text(
        'Мелкая (Small / Mini) 2–8 мм / Средняя (Medium / Standard) 6–15 мм / Крупная (Large / Coarse) 15–30 мм и крупнее; под требования заказчика',
        'Small / Mini 2–8 mm / Medium / Standard 6–15 mm / Large / Coarse 15–30 mm and larger; to buyer requirements'
      )
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка; просеивание и сортировка по размеру под заказ',
        'Thoroughly washed; screened and graded to order'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,8', '5.5–6.8')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text(
        '< 0,5 мСм/см; водная вытяжка 1:1,5 по объёму',
        '< 0.5 mS/cm; water extract 1:1.5 by volume'
      )
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('15–20%', '15–20%')),
    field(
      'Полная влагоёмкость',
      'Maximum water-holding capacity',
      text('уточнить', 'to be confirmed')
    ),
    field('Воздушная пористость', 'Air-filled porosity', text('уточнить', 'to be confirmed')),
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
    field('Форма', 'Shape', text('Круглый диск', 'Circular disc')),
    field(
      'Диаметр',
      'Diameter',
      text('По заказу; пример для горшка — 130 мм', 'To order; pot-disc example: 130 mm')
    ),
    field(
      'Толщина в сухом виде',
      'Dry thickness',
      text('Около 3 см — для примера диаметром 130 мм', 'Approximately 3 cm for the 130 mm example')
    ),
    field(
      'Сухая масса',
      'Dry weight',
      text('По заказу, в зависимости от размера', 'Customised according to size')
    ),
    field(
      'Объём после увлажнения',
      'Expanded volume',
      text('Около 4 л — для примера диаметром 130 мм', 'Approximately 4 L for the 130 mm example')
    ),
    field(
      'Высота после увлажнения',
      'Expanded height',
      text(
        'Зависит от размера, массы и условий увлажнения',
        'Depends on disc size, weight and hydration'
      )
    ),
    field(
      'Состав субстрата',
      'Substrate composition',
      text('Кокосовый торф и короткие кокосовые волокна', 'Coco pith and short coir fibres')
    ),
    field('Цвет', 'Colour', text('От коричневого до тёмно-коричневого', 'Brown to dark brown')),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, просеивание и прессование',
        'Thoroughly washed, screened and compressed'
      )
    ),
    field(
      'Удерживающая оболочка',
      'Outer sleeve',
      text(
        'У дисков для горшков отсутствует; для проращивания — биоразлагаемая нетканая сеточка',
        'None on pot discs; seed-germination discs use biodegradable non-woven mesh'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,5 мСм/см; вытяжка 1:1,5 по объёму', '< 0.5 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Добавленные удобрения',
      'Added fertiliser',
      text(
        'Без добавленных удобрений, если не предусмотрено заказом',
        'No added fertiliser unless specified'
      )
    ),
    field('Минеральные примеси', 'Mineral impurities', text('< 1%', '< 1%')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Оптовые коробки, розничная или индивидуальная упаковка',
        'Bulk cartons, retail or custom packaging'
      )
    ),
    field(
      'Формат',
      'Format',
      text('Диски для рассадных стаканчиков и горшков', 'Discs for seedling cups and pots')
    )
  ],
  'coco-peat-tablets': [
    field('Форма', 'Shape', text('Круглая таблетка', 'Circular tablet')),
    field(
      'Диаметр',
      'Diameter',
      text('Пример — 40 мм; другие размеры по заказу', 'Example: 40 mm; other sizes to order')
    ),
    field(
      'Толщина в сухом виде',
      'Dry thickness',
      text('1–1,5 см — для примера 40 мм', '1–1.5 cm for the 40 mm example')
    ),
    field(
      'Сухая масса',
      'Dry weight',
      text('По заказу, в зависимости от размера', 'Customised according to size')
    ),
    field('Объём после увлажнения', 'Expanded volume', text('уточнить', 'to be confirmed')),
    field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith')),
    field(
      'Цвет',
      'Colour',
      text('От светло-коричневого до тёмно-коричневого', 'Light brown to dark brown')
    ),
    field(
      'Фракция',
      'Particle size',
      text('По требованиям заказчика и под культуру', 'Customised for the buyer and crop')
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Тщательная промывка, просеивание и прессование',
        'Thoroughly washed, screened and compressed'
      )
    ),
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('< 0,3 мСм/см; вытяжка 1:1,5 по объёму', '< 0.3 mS/cm; 1:1.5 extract by volume')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('< 20%', '< 20%')),
    field(
      'Добавленные удобрения',
      'Added fertiliser',
      text(
        'Без добавленных удобрений, если не предусмотрено заказом',
        'No added fertiliser unless specified'
      )
    ),
    field('Минеральные примеси', 'Mineral impurities', text('уточнить', 'to be confirmed')),
    field('Пылевая фракция', 'Dust fraction', text('Около 10%', 'Approximately 10%')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Оптовые коробки, розничная или индивидуальная упаковка',
        'Bulk cartons, retail or custom packaging'
      )
    ),
    field('Степень прессования', 'Compression ratio', text('уточнить', 'to be confirmed')),
    field(
      'Высота после увлажнения',
      'Expanded height',
      text('Около 4,5–5 см — для примера 40 мм', 'Approximately 4.5–5 cm for the 40 mm example')
    ),
    field(
      'Оболочка',
      'Outer sleeve',
      text(
        'Биоразлагаемая нетканая сеточка; при пересадке не снимают',
        'Biodegradable non-woven mesh; leave in place when transplanting'
      )
    )
  ],
  'coco-peat-compost': [
    field(
      'Состав',
      'Composition',
      text(
        'Чистый переработанный кокосовый торф, без других компостов',
        'Pure processed coco pith, with no other composts'
      )
    ),
    field('Сырьё', 'Raw material', text('Кокосовый торф', 'Coconut coir pith')),
    field(
      'Внешний вид',
      'Appearance',
      text(
        'Мелкий рыхлый волокнистый материал от коричневого до тёмно-коричневого',
        'Fine, loose, fibrous material, brown to dark brown'
      )
    ),
    field(
      'Фракция',
      'Particle size',
      text(
        'Мелкая, просеянная; размер сита — по заказу; фракция по требованиям заказчика и под культуру',
        'Fine and screened; mesh size to order; particle size customised for the buyer and crop'
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
    field('pH (Кислотность)', 'pH (Acidity)', text('5,5–6,5', '5.5–6.5')),
    field(
      'EC (Электропроводность)',
      'EC (Electrical conductivity)',
      text('0,6–1,2 мСм/см', '0.6–1.2 mS/cm')
    ),
    field('Влажность при поставке', 'Moisture content at dispatch', text('50–60%', '50–60%')),
    field(
      'Полная влагоёмкость',
      'Maximum water-holding capacity',
      text('уточнить', 'to be confirmed')
    ),
    field(
      'Содержание органического вещества',
      'Organic matter content',
      text('уточнить', 'to be confirmed')
    ),
    field('Содержание NPK', 'NPK content', text('уточнить', 'to be confirmed')),
    field('Содержание примесей', 'Impurity content', text('уточнить', 'to be confirmed')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Прессованные блоки, мешки или упаковка по заказу',
        'Compressed blocks, bags, bulk or custom packaging'
      )
    ),
    field('Удобрения', 'Added fertiliser', text('Не добавляются', 'None added'))
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
    field('Длина волокна', 'Fibre length', text('10–25 см', '10–25 cm')),
    field(
      'Цвет',
      'Colour',
      text('От золотисто-коричневого до тёмно-коричневого', 'Golden brown to dark brown')
    ),
    field('Размеры тюка', 'Bale dimensions', text('По заказу', 'Customised')),
    field('Масса нетто тюка', 'Net bale weight', text('120 кг', '120 kg')),
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
    field('Формат', 'Format', text('Рулон / круглый мат', 'Roll / round mat')),
    field('Цвет', 'Colour', text('Натуральный коричневый', 'Natural brown')),
    field('Диаметр круглого мата', 'Round mat diameter', text('30–90 см', '30–90 cm')),
    field('Толщина круглого мата', 'Round mat thickness', text('2–6 мм', '2–6 mm')),
    field('Ширина рулона', 'Roll width', text('≤ 2 м', '≤ 2 m')),
    field('Длина рулона', 'Roll length', text('≤ 20 м', '≤ 20 m')),
    field(
      'Поверхностная плотность рулона',
      'Roll mass per unit area',
      text('Пример — 800 г/м²', 'Example: 800 g/m²')
    ),
    field(
      'Материал рулонного мата',
      'Roll mat material',
      text('Кокосовое волокно, латекс', 'Coir fibre, latex')
    ),
    tensileStrength,
    field(
      'Водопроницаемость',
      'Water permeability',
      text('Пропускает воду', 'Allows water passage')
    ),
    field(
      'Воздухопроницаемость',
      'Air permeability',
      text('Зависит от структуры и плотности', 'Depends on construction and density')
    ),
    field('Биоразлагаемость', 'Biodegradability', text('Биоразлагаемый материал', 'Biodegradable')),
    field(
      'Размеры и плотность',
      'Dimensions and density',
      text('По заказу; указаны примеры исполнений', 'To order; listed sizes are examples')
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Рулоны или круглые маты, упакованные для перевозки',
        'Rolls or round mats packed for transport'
      )
    )
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
  'veymur-mct-oil': [
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
    field('Условия хранения', 'Storage conditions', text('При температуре 2–25 °C', 'At 2–25 °C')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field(
      'После вскрытия',
      'Storage after opening',
      text(
        'Хранить в холодильнике, употребить в течение 2 месяцев',
        'Refrigerate and use within 2 months'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Бутылка из тёмного пластика; упаковка по заказу',
        'Dark plastic bottle; packaging to order'
      )
    ),
    field(
      'Энергетическая ценность на 100 г',
      'Energy per 100 g',
      text('900 ккал / 3780 кДж', '900 kcal / 3780 kJ')
    ),
    field('Белки на 100 г', 'Protein per 100 g', text('0 г', '0 g')),
    field('Жиры на 100 г', 'Fat per 100 g', text('100 г', '100 g')),
    field('Углеводы на 100 г', 'Carbohydrate per 100 g', text('0 г', '0 g'))
  ],
  'rbd-coconut-oil': [
    field('Сырьё', 'Raw material', text('Кокос', 'Coconut')),
    field(
      'Состав',
      'Ingredients',
      text('100% органическое кокосовое масло', '100% organic coconut oil')
    ),
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
    field(
      'Влага и летучие вещества',
      'Moisture and volatile matter',
      text('уточнить', 'to be confirmed')
    ),
    field(
      'Свободные жирные кислоты (в пересчёте на лауриновую)',
      'Free fatty acids (as lauric acid)',
      text('уточнить', 'to be confirmed')
    ),
    field('Перекисное число', 'Peroxide value', text('уточнить', 'to be confirmed')),
    field('Йодное число', 'Iodine value', text('уточнить', 'to be confirmed')),
    field('Число омыления', 'Saponification value', text('уточнить', 'to be confirmed')),
    field('Жирнокислотный состав', 'Fatty acid profile', text('уточнить', 'to be confirmed')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field('Срок годности', 'Shelf life', text('уточнить', 'to be confirmed')),
    field(
      'Условия хранения',
      'Storage conditions',
      text(
        'В прохладном сухом месте, вдали от солнечного света и сильных запахов',
        'Cool and dry, away from sunlight and strong odours'
      )
    ),
    field('Тип рафинации', 'Refining type', text('Физическая рафинация', 'Physical refining')),
    field('Добавки', 'Additives', text('Отсутствуют', 'None'))
  ],
  'veymur-virgin-coconut-oil': [
    field(
      'Сырьё',
      'Raw material',
      text('Свежая мякоть зрелых кокосов', 'Fresh, mature coconut kernels')
    ),
    field(
      'Состав',
      'Ingredients',
      text('100% органическое кокосовое масло', '100% organic coconut oil')
    ),
    field('Добавки', 'Additives', text('Отсутствуют', 'None')),
    field('Способ получения', 'Extraction process', text('Холодный отжим', 'Cold pressing')),
    field(
      'Обработка',
      'Processing',
      text('Без рафинации, отбеливания и дезодорации', 'Not refined, bleached or deodorised')
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
      'Цвет в жидком состоянии',
      'Colour when liquid',
      text('От бесцветного до бледно-жёлтого', 'Colourless to pale yellow')
    ),
    field(
      'Вкус и аромат',
      'Taste and aroma',
      text('Характерные кокосовые', 'Characteristic coconut')
    ),
    field('Влага и летучие вещества', 'Moisture and volatile matter', text('≤ 0,1%', '≤ 0.1%')),
    field(
      'Свободные жирные кислоты (в пересчёте на лауриновую)',
      'Free fatty acids (as lauric acid)',
      text('≤ 0,2%', '≤ 0.2%')
    ),
    field('Перекисное число', 'Peroxide value', text('≤ 3 мэкв O₂/кг', '≤ 3 meq O₂/kg')),
    field('Йодное число', 'Iodine value', text('уточнить', 'to be confirmed')),
    field('Число омыления', 'Saponification value', text('уточнить', 'to be confirmed')),
    field('Показатель преломления', 'Refractive index', text('уточнить', 'to be confirmed')),
    field('Жирнокислотный состав', 'Fatty acid profile', text('уточнить', 'to be confirmed')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field(
      'Срок годности',
      'Shelf life',
      text('24 месяца с даты производства', '24 months from manufacture')
    ),
    field(
      'Условия хранения',
      'Storage conditions',
      text(
        'В сухом прохладном месте при температуре ≤ 25 °C и относительной влажности ≤ 75%',
        'In a cool, dry place at ≤ 25 °C and relative humidity ≤ 75%'
      )
    ),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Прозрачная банка с винтовой крышкой; упаковка по заказу',
        'Clear jar with screw cap; packaging to order'
      )
    ),
    field(
      'Энергетическая ценность на 100 г',
      'Energy per 100 g',
      text('900 ккал / 3766 кДж', '900 kcal / 3766 kJ')
    ),
    field('Белки на 100 г', 'Protein per 100 g', text('0 г', '0 g')),
    field('Жиры на 100 г', 'Fat per 100 g', text('100 г', '100 g')),
    field('Углеводы на 100 г', 'Carbohydrate per 100 g', text('0 г', '0 g'))
  ],
  'veymur-coconut-sugar': [
    field(
      'Сырьё',
      'Raw material',
      text('Сок соцветий кокосовой пальмы', 'Coconut palm flower sap')
    ),
    field(
      'Состав',
      'Ingredients',
      text('Нерафинированный кокосовый сахар', 'Unrefined coconut sugar')
    ),
    field(
      'Текстура',
      'Texture',
      text('Сыпучие гранулы или порошок', 'Free-flowing granules or powder')
    ),
    field('Добавки', 'Additives', text('Отсутствуют', 'None')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Дой-пак или прозрачная банка с винтовой крышкой; упаковка по заказу',
        'Stand-up pouch or clear jar with screw cap; packaging to order'
      )
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
    field('Содержание сахарозы', 'Sucrose content', text('уточнить', 'to be confirmed')),
    field('Общее содержание сахаров', 'Total sugars', text('уточнить', 'to be confirmed')),
    field('pH', 'pH', text('уточнить', 'to be confirmed')),
    field('Зольность', 'Ash content', text('уточнить', 'to be confirmed')),
    field('Посторонние включения', 'Foreign matter', text('Отсутствуют', 'Absent')),
    field(
      'Общее количество аэробных микроорганизмов',
      'Total aerobic microorganism count',
      text('уточнить', 'to be confirmed')
    ),
    field('Плесени и дрожжи', 'Moulds and yeasts', text('уточнить', 'to be confirmed')),
    field('E. coli', 'E. coli', text('уточнить', 'to be confirmed')),
    field('Salmonella', 'Salmonella', text('уточнить', 'to be confirmed')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field(
      'Срок годности',
      'Shelf life',
      text('6 месяцев с даты производства', '6 months from manufacture')
    ),
    field(
      'Условия хранения',
      'Storage conditions',
      text(
        'В сухом прохладном месте при температуре ≤ 25 °C и относительной влажности ≤ 75%',
        'In a cool, dry place at ≤ 25 °C and relative humidity ≤ 75%'
      )
    ),
    field(
      'Производство',
      'Production process',
      text(
        'Выпаривание сока соцветий и кристаллизация',
        'Flower sap evaporation and crystallisation'
      )
    ),
    field(
      'Энергетическая ценность на 100 г',
      'Energy per 100 g',
      text('380 ккал / 1590 кДж', '380 kcal / 1590 kJ')
    ),
    field('Белки на 100 г', 'Protein per 100 g', text('0 г', '0 g')),
    field('Жиры на 100 г', 'Fat per 100 g', text('0 г', '0 g')),
    field('Углеводы на 100 г', 'Carbohydrate per 100 g', text('95 г', '95 g'))
  ],
  'veymur-desiccated-coconut': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    field('Состав', 'Ingredients', text('Кокосовая стружка', 'Desiccated coconut')),
    field('Текстура', 'Texture', text('Сухая, сыпучая стружка', 'Dry, free-flowing particles')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Дой-пак или прозрачная банка с винтовой крышкой; упаковка по заказу',
        'Stand-up pouch or clear jar with screw cap; packaging to order'
      )
    ),
    field('Добавки', 'Additives', text('Отсутствуют', 'None')),
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
    field('Зольность', 'Ash content', text('уточнить', 'to be confirmed')),
    field(
      'Свободные жирные кислоты (в пересчёте на лауриновую)',
      'Free fatty acids (as lauric acid)',
      text('уточнить', 'to be confirmed')
    ),
    field('Посторонние включения', 'Foreign matter', text('Отсутствуют', 'Absent')),
    field(
      'Общее количество аэробных микроорганизмов',
      'Total aerobic microorganism count',
      text('уточнить', 'to be confirmed')
    ),
    field('Плесени и дрожжи', 'Moulds and yeasts', text('уточнить', 'to be confirmed')),
    field('E. coli', 'E. coli', text('уточнить', 'to be confirmed')),
    field('Salmonella', 'Salmonella', text('уточнить', 'to be confirmed')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field(
      'Срок годности',
      'Shelf life',
      text('12 месяцев с даты производства', '12 months from manufacture')
    ),
    field(
      'Условия хранения',
      'Storage conditions',
      text(
        'В сухом прохладном месте при температуре ≤ 25 °C и относительной влажности ≤ 75%',
        'In a cool, dry place at ≤ 25 °C and relative humidity ≤ 75%'
      )
    ),
    field(
      'Обработка',
      'Processing',
      text(
        'Удаление коричневой оболочки ядра, измельчение и сушка',
        'Kernel paring, shredding and drying'
      )
    ),
    field('Температура сушки', 'Drying temperature', text('60–75 °C', '60–75 °C')),
    field(
      'Энергетическая ценность на 100 г',
      'Energy per 100 g',
      text('660 ккал / 2761 кДж', '660 kcal / 2761 kJ')
    ),
    field('Белки на 100 г', 'Protein per 100 g', text('6,9 г', '6.9 g')),
    field('Жиры на 100 г', 'Fat per 100 g', text('68 г', '68 g')),
    field('Углеводы на 100 г', 'Carbohydrate per 100 g', text('23,7 г', '23.7 g'))
  ],
  'veymur-coconut-milk': [
    field('Сырьё', 'Raw material', text('Мякоть зрелых кокосов', 'Mature coconut kernels')),
    field('Состав', 'Ingredients', text('Кокосовый экстракт и вода', 'Coconut extract and water')),
    field(
      'Упаковка',
      'Packaging',
      text(
        'Асептическая картонная упаковка или жестяная банка; по заказу',
        'Aseptic carton or metal can; packaging to order'
      )
    ),
    field('Цвет', 'Colour', text('От белого до кремово-белого', 'White to creamy white')),
    field('Консистенция', 'Texture', text('Однородная кремовая жидкость', 'Smooth, creamy liquid')),
    field(
      'Массовая доля жира',
      'Fat content',
      text('17–19%; другая жирность по запросу', '17–19%; other fat contents on request')
    ),
    field('Сухие вещества', 'Total solids', text('уточнить', 'to be confirmed')),
    field('Массовая доля белка', 'Protein content', text('уточнить', 'to be confirmed')),
    field(
      'Влажность при поставке',
      'Moisture content at dispatch',
      text('уточнить', 'to be confirmed')
    ),
    field('pH', 'pH', text('уточнить', 'to be confirmed')),
    field('Кислотность', 'Acidity', text('уточнить', 'to be confirmed')),
    field(
      'Обработка',
      'Processing',
      text(
        'Механический отжим мякоти с водой, ультрапастеризация (UHT)',
        'Mechanical pressing of kernels with water, UHT processing'
      )
    ),
    field(
      'Общее количество аэробных микроорганизмов',
      'Total aerobic microorganism count',
      text('уточнить', 'to be confirmed')
    ),
    field('Плесени и дрожжи', 'Moulds and yeasts', text('уточнить', 'to be confirmed')),
    field('E. coli', 'E. coli', text('уточнить', 'to be confirmed')),
    field('Salmonella', 'Salmonella', text('уточнить', 'to be confirmed')),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
    field(
      'Срок годности',
      'Shelf life',
      text('12–36 месяцев, в зависимости от упаковки', '12–36 months, depending on packaging')
    ),
    field(
      'Условия хранения',
      'Storage conditions',
      text('В закрытой упаковке при 5–25 °C', 'Unopened at 5–25 °C')
    ),
    field(
      'Консерванты и эмульгаторы',
      'Preservatives and emulsifiers',
      text('Отсутствуют', 'None')
    ),
    field(
      'После вскрытия',
      'Storage after opening',
      text('2–3 дня в холодильнике при 2–6 °C', 'Refrigerate at 2–6 °C and use within 2–3 days')
    )
  ],
  'young-coconut': [
    field('Тип продукта', 'Product type', text('Молодой кокос', 'Young (tender) coconut')),
    field('Ботаническое название', 'Botanical name', text('Cocos nucifera', 'Cocos nucifera')),
    field('Степень зрелости', 'Maturity', text('Молодой плод', 'Tender fruit')),
    field('Сорт', 'Variety', text('уточнить', 'to be confirmed')),
    field(
      'Диаметр цельного плода',
      'Fruit diameter',
      text('Около 15–20 см', 'Approximately 15–20 cm')
    ),
    field('Объём кокосовой воды', 'Coconut water volume', text('350–500 мл', '350–500 ml')),
    field(
      'Содержание растворимых сухих веществ (°Brix)',
      'Soluble solids (°Brix)',
      text('уточнить', 'to be confirmed')
    ),
    field('Масса мякоти', 'Kernel weight', text('уточнить', 'to be confirmed')),
    field(
      'Подготовка плода',
      'Husk preparation',
      text('Цельные зелёные или очищенные Diamond-cut', 'Whole green or diamond-cut / trimmed')
    ),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
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
    ),
    field('Масса цельного плода', 'Whole fruit weight', text('1,8–2,5 кг', '1.8–2.5 kg')),
    field('Масса очищенного плода', 'Trimmed fruit weight', text('1,2–1,5 кг', '1.2–1.5 kg')),
    field(
      'Размеры очищенного плода',
      'Trimmed fruit dimensions',
      text('Высота и диаметр около 12–14 см', 'Height and diameter approximately 12–14 cm')
    ),
    field(
      'Хранение цельных плодов',
      'Whole fruit storage',
      text(
        '5–7 дней при 24–28 °C; 2–3 недели при 13–15 °C',
        '5–7 days at 24–28 °C; 2–3 weeks at 13–15 °C'
      )
    ),
    field(
      'Хранение очищенных плодов',
      'Trimmed fruit storage',
      text('24–30 дней при 2–5 °C', '24–30 days at 2–5 °C')
    )
  ],
  'mature-coconut': [
    field('Тип продукта', 'Product type', text('Зрелый кокос', 'Mature coconut')),
    field('Ботаническое название', 'Botanical name', text('Cocos nucifera', 'Cocos nucifera')),
    field('Степень зрелости', 'Maturity', text('Полностью зрелый плод', 'Fully mature fruit')),
    field('Сорт', 'Variety', text('уточнить', 'to be confirmed')),
    field('Масса плода', 'Fruit weight', text('По калибру', 'According to grade')),
    field('Диаметр плода', 'Fruit diameter', text('уточнить', 'to be confirmed')),
    field('Масса мякоти', 'Kernel weight', text('уточнить', 'to be confirmed')),
    field('Толщина мякоти', 'Kernel thickness', text('уточнить', 'to be confirmed')),
    field(
      'Состояние скорлупы',
      'Shell condition',
      text('Целая, без трещин', 'Sound, free from cracks')
    ),
    field(
      'Подготовка плода',
      'Husk preparation',
      text('Полуочищенный (Semi-Husked)', 'Semi-husked')
    ),
    field(
      'Температура хранения и перевозки',
      'Storage and transport temperature',
      text(
        '12–15 °C; относительная влажность 75–80%, хорошая вентиляция',
        '12–15 °C; relative humidity 75–80%, good ventilation'
      )
    ),
    field(
      'Срок годности',
      'Shelf life',
      text(
        '60–90 дней при соблюдении условий хранения',
        '60–90 days under the specified storage conditions'
      )
    ),
    field('Органический статус', 'Organic status', text('Органический', 'Organic')),
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
      'Калибр',
      'Size grading',
      text('Medium — 500–550 г; Large — от 600 г', 'Medium: 500–550 g; Large: 600 g and above')
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
    field(
      'Форма',
      'Shape',
      text('Шестигранник / куб / подушечка / по заказу', 'Hexagonal / cube / pillow / custom shape')
    ),
    field(
      'Размер кубиков для кальяна',
      'Hookah cube size',
      text('Пример — 20–28 мм по каждой стороне', 'Example: 20–28 mm on each side')
    ),
    field(
      'Размер брикетов для гриля',
      'Barbecue briquette size',
      text(
        'Пример — длина до 15 см, диаметр около 4,5 см',
        'Example: up to 15 cm long, approximately 4.5 cm diameter'
      )
    ),
    field('Размеры (Д × Ш × В)', 'Dimensions (L × W × H)', text('уточнить', 'to be confirmed')),
    field('Масса брикета', 'Briquette weight', text('уточнить', 'to be confirmed')),
    field('Плотность', 'Density', text('уточнить', 'to be confirmed')),
    field('Содержание фиксированного углерода', 'Fixed carbon', text('70–85%', '70–85%')),
    field(
      'Зольность',
      'Ash content',
      text('≤ 3% / ≤ 6% — по марке', '≤ 3% / ≤ 6%, depending on grade')
    ),
    field(
      'Влажность при поставке',
      'Moisture content at dispatch',
      text('≤ 5% / ≤ 8% — по марке', '≤ 5% / ≤ 8%, depending on grade')
    ),
    field('Летучие вещества', 'Volatile matter', text('уточнить', 'to be confirmed')),
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
    field('Удельная поверхность BET', 'BET surface area', text('уточнить', 'to be confirmed')),
    field('Влажность при поставке', 'Moisture content at dispatch', text('≤ 5%', '≤ 5%')),
    field(
      'Зольность',
      'Ash content',
      text('≤ 3% / ≤ 5% — по марке', '≤ 3% / ≤ 5%, depending on grade')
    ),
    field('Насыпная плотность', 'Apparent density', text('450–550 кг/м³', '450–550 kg/m³')),
    field(
      'Прочность гранул',
      'Granule hardness',
      text(
        '≥ 95% / ≥ 98% — для соответствующих гранулированных марок',
        '≥ 95% / ≥ 98% for applicable granular grades'
      )
    ),
    field(
      'Активность CTC',
      'CTC activity',
      text('Около 40–60% — для отдельных марок', 'Approximately 40–60% for selected grades')
    ),
    field('pH (Кислотность)', 'pH', text('9–11 — для отдельных марок', '9–11 for selected grades')),
    field(
      'Активация',
      'Activation process',
      text(
        'Паровая или другая согласованная обработка',
        'Steam or other specified activation process'
      )
    ),
    field(
      'Внешний вид',
      'Appearance',
      text('Чёрные пористые гранулы или порошок', 'Black porous granules or powder')
    ),
    field('Упаковка', 'Packaging', text('Мешки 25 кг', '25 kg bags'))
  ]
};

const substrateOrder = [
  'Format',
  'Shape',
  'Supply contents',
  'Compatible tray model',
  'Insert dimensions',
  '650 g brick dimensions',
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
export function allSpecificationsFor(product: ProductItem): Specification[] {
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
    field(
      'Производство',
      'Manufacturing',
      text('По спецификации заказчика', 'To the customer’s specification')
    ),
    ...(product.category === 'substrates'
      ? [...rows, buffering].sort((a, b) => {
          const rank = (label: string) => {
            const index = substrateOrder.indexOf(label);
            return index < 0 ? substrateOrder.length : index;
          };
          return rank(a.label.en) - rank(b.label.en);
        })
      : rows)
  ];
}

// Retain detailed and unconfirmed data for review without cluttering the catalogue.
const detailedSubstrateFields = new Set([
  'Example blueberry bag volumes',
  'Hydrated yield of compressed coco pith',
  'Water or starter solution for hydration',
  'Hydration water temperature',
  'Water retained after free drainage',
  'Weight after watering and drainage',
  'Prepared substrate EC for blueberries',
  'pH — raspberry grade',
  'Dust fraction < 0.5 mm',
  'Dust fraction',
  'Short fibre content',
  'Organic matter content',
  'NPK content'
]);
export function specificationsFor(product: ProductItem): Specification[] {
  return allSpecificationsFor(product)
    .filter((row) => !/уточнить|to be confirmed/i.test(row.value.ru + row.value.en))
    .filter(
      (row) => product.category !== 'substrates' || !detailedSubstrateFields.has(row.label.en)
    )
    .map((row) => {
      if (product.category !== 'substrates') return row;
      if (row.label.en === 'pH for blueberries after preparation')
        return {
          label: text('pH (Кислотность)', 'pH (Acidity)'),
          value: text('Под культуру, по заказу', 'Customised for the crop')
        };
      if (row.label.en === 'Particle size')
        return { ...row, value: text('Под культуру, по заказу', 'Customised for the crop') };
      if (row.label.en === 'Mineral impurities' && row.value.ru.includes('или'))
        return { ...row, value: text('По спецификации заказа', 'To the order specification') };
      return row;
    });
}
