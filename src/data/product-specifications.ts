import { text, type LocalizedText, type ProductItem } from './products';
import { productCopyUpdates } from './product-copy-updates';

export interface Specification {
  label: LocalizedText;
  value: LocalizedText;
}
const pending = text('уточнить', 'to be confirmed');
const field = (ru: string, en: string, value = pending): Specification => ({
  label: text(ru, en),
  value
});
// Catalogue values are attached only to relevant product types and remain qualified
// as targets until confirmed for the ordered grade or batch.
function substrateCatalogueFields(product: ProductItem): Specification[] {
  const applicability = text(
    'ориентир каталога; подтвердить для заказанной марки',
    'catalogue target; confirm for the ordered grade'
  );
  const rows: Specification[] = [];

  if (['grow-bag', 'open-top-grow-bag', 'coco-peat', 'coco-peat-briquettes'].includes(product.id)) {
    rows.push(
      field(
        'pH субстрата (ориентир каталога)',
        'Substrate pH (catalogue target)',
        text('5,5–6,5; ' + applicability.ru, '5.5–6.5; ' + applicability.en)
      ),
      field(
        'EC (для согласованной промытой марки с низким EC)',
        'EC (specified washed low-EC grade)',
        text('менее 0,5 мСм/см; ' + applicability.ru, 'below 0.5 mS/cm; ' + applicability.en)
      ),
      field('Метод измерения EC', 'EC test method')
    );
  }

  if (['coco-peat', 'coco-peat-briquettes'].includes(product.id)) {
    rows.push(
      field(
        'Коэффициент расширения после увлажнения',
        'Expansion ratio after hydration',
        text(
          '5:1 или выше — по спецификации; ' + applicability.ru,
          '5:1 or higher, according to specification; ' + applicability.en
        )
      ),
      field(
        'Влажность при поставке',
        'Moisture at delivery',
        product.id === 'coco-peat-briquettes'
          ? text(
              '12–15% для торфяных блоков; подтвердить для заказанной марки',
              '12–15% for peat blocks; confirm for the ordered grade'
            )
          : text(
              'менее 20%; подтвердить для заказанной марки',
              'below 20%; confirm for the ordered grade'
            )
      ),
      field('Влагоудержание и метод измерения', 'Water retention and test method')
    );
  }

  if (['coco-peat', 'coco-peat-briquettes'].includes(product.id)) {
    rows.push(field('Допуск по примесям', 'Impurity tolerance'));
  }

  return rows;
}

// Source: client-confirmed SEHA brochure, laboratory report, pages 06–07.
// Preserve specification limits (not measured results for an individual batch).
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
  field('Пищевая ценность на 100 г / 100 мл', 'Nutrition per 100 g / 100 ml'),
  field(
    'Условия хранения',
    'Storage conditions',
    text(
      'В плотно закрытой упаковке, в прохладном сухом месте, вдали от прямого солнечного света и тепла',
      'Keep tightly sealed in a cool, dry place, away from direct sunlight and heat'
    )
  ),
  field(
    'Варианты упаковки',
    'Packaging options',
    text(
      'Пищевые бутылки, бочки или другие согласованные ёмкости',
      'Food-grade bottles, drums or other approved containers'
    )
  ),
  field(
    'Органическая сертификация',
    'Organic certification',
    text('Подтверждена документами', 'Documented organic certification')
  )
];

export function specificationsFor(product: ProductItem): Specification[] {
  const rows = [
    field(
      'Производитель',
      'Manufacturer',
      text('SEHA Group of Companies, Индия', 'SEHA Group of Companies, India')
    )
  ];
  const update = productCopyUpdates[product.id];
  if (update?.specifications) {
    rows.push(
      ...update.specifications.map(([ru, en, valueRu, valueEn]) =>
        field(ru, en, valueRu && valueEn ? text(valueRu, valueEn) : pending)
      )
    );
    if (product.id.startsWith('veymur-')) rows.push(field('Фасовка', 'Pack size', product.label));
  } else if (product.id === 'coconut-chips') {
    // Client-supplied suggested specifications; grade-specific conditions must remain explicit.
    rows.push(
      field(
        'Статус параметров',
        'Specification status',
        text(
          'Предлагаемые параметры; согласовываются при заказе',
          'Suggested specifications; agreed when ordering'
        )
      ),
      field('Сырьё', 'Raw material', text('Натуральная кокосовая шелуха', 'Natural coconut husk')),
      field(
        'Состав',
        'Composition',
        text(
          '100% чипсов из кокосовой шелухи при поставке чистых чипсов',
          '100% coconut husk chips when supplied as pure chips'
        )
      ),
      field(
        'Внешний вид',
        'Appearance',
        text('Чипсы от коричневого до тёмно-коричневого цвета', 'Natural brown to dark-brown chips')
      ),
      field(
        'Фракция',
        'Particle size',
        text('6–12 мм, 12–18 мм или по заказу', '6–12 mm, 12–18 mm or customised')
      ),
      field('pH', 'pH', text('5,5–6,8', '5.5–6.8')),
      field(
        'Электропроводность (EC)',
        'Electrical conductivity (EC)',
        text(
          'Ниже 0,5 мСм/см — для согласованной промытой фракции с низким EC',
          'Below 0.5 mS/cm for a specified low-EC washed grade'
        )
      ),
      field('Метод измерения EC', 'EC test method'),
      field('Влажность', 'Moisture content', text('Обычно 15–20%', 'Typically 15–20%')),
      field(
        'Обработка',
        'Processing',
        text(
          'Промывка, просеивание и сортировка по фракциям — согласно заказу',
          'Washed, screened and graded as ordered'
        )
      ),
      field(
        'Формат поставки',
        'Supply format',
        text(
          'Прессованные блоки, россыпью или упаковка по заказу',
          'Compressed blocks, loose chips or customised packaging'
        )
      ),
      field(
        'Применение',
        'Applications',
        text(
          'Теплицы, гидропоника, питомники и приготовление субстратных смесей',
          'Greenhouse cultivation, hydroponics, nurseries and substrate blending'
        )
      ),
      field(
        'Культуры',
        'Crops',
        text(
          'Клубника и другие ягодные культуры, томаты, огурцы, орхидеи и декоративные растения',
          'Strawberries and other soft fruits, tomatoes, cucumbers, orchids and ornamental plants'
        )
      )
    );
  } else if (product.id === 'coco-husk-chips-bricks') {
    // Client-supplied brick specifications; target ranges are not batch test results.
    rows.push(
      field('Сырьё', 'Raw material', text('Натуральная кокосовая шелуха', 'Natural coconut husk')),
      field('Состав', 'Composition', text('Чипсы из кокосовой шелухи', 'Coconut husk chips')),
      field(
        'Цвет',
        'Colour',
        text('От коричневого до тёмно-коричневого', 'Natural brown to dark brown')
      ),
      field(
        'Фракция чипсов',
        'Chip size',
        text('6–12 мм, 12–18 мм или по заказу', '6–12 mm, 12–18 mm or customised')
      ),
      field('pH', 'pH', text('Целевой диапазон: 5,5–6,8', 'Target range: 5.5–6.8')),
      field(
        'Электропроводность (EC)',
        'Electrical conductivity (EC)',
        text(
          'По требованиям заказчика; вариант с низким EC — при подтверждении испытаниями',
          'Customer-specific; a low-EC grade is available subject to testing'
        )
      ),
      field('Метод измерения EC', 'EC test method'),
      field(
        'Влажность',
        'Moisture content',
        text('Целевой диапазон: 15–20%', 'Target range: 15–20%')
      ),
      field('Формат', 'Format', text('Прессованный брикет', 'Compressed brick')),
      field('Масса при поставке', 'Weight at delivery', text('Блок 5 кг', '5 kg block')),
      field(
        'Расширение после увлажнения',
        'Expansion after hydration',
        text(
          'Зависит от массы брикета, фракции чипсов и условий увлажнения',
          'Depends on brick weight, chip size and hydration conditions'
        )
      ),
      field(
        'Обработка',
        'Processing options',
        text(
          'Промывка, просеивание и сортировка по фракциям — согласно спецификации',
          'Washed, screened and graded as specified'
        )
      ),
      field(
        'Варианты упаковки',
        'Packaging options',
        text(
          'Отдельные брикеты, коробки или экспортная упаковка на палетах',
          'Individual bricks, cartons or palletised export packaging'
        )
      ),
      field(
        'Применение',
        'Applications',
        text(
          'Теплицы, гидропоника, питомники и приготовление субстратных смесей',
          'Greenhouse cultivation, hydroponics, nurseries and substrate blending'
        )
      ),
      field(
        'Культуры',
        'Crops',
        text(
          'Клубника и другие ягодные культуры, томаты, огурцы, орхидеи и декоративные растения',
          'Strawberries and other soft fruits, tomatoes, cucumbers, orchids and ornamental plants'
        )
      )
    );
  } else if (product.id === 'grow-cube-sleeve') {
    // Client-supplied suggested specifications; dimensions and volume await reconciliation.
    rows.push(
      field(
        'Статус параметров',
        'Specification status',
        text(
          'Предлагаемые параметры; согласовываются при заказе',
          'Suggested specifications; agreed when ordering'
        )
      ),
      field(
        'Сырьё',
        'Raw material',
        text('Натуральный кокосовый торф', 'Natural coconut coir pith')
      ),
      field('Состав и соотношение компонентов', 'Composition and component ratio'),
      field(
        'Формат',
        'Format',
        text(
          'Сформированный куб в защитной оболочке',
          'Pre-formed cube enclosed in a protective sleeve'
        )
      ),
      field(
        'Размеры после увлажнения',
        'Expanded dimensions',
        text(
          '10 × 10 × 10 см — предлагаемый стандарт; уточнить',
          '10 × 10 × 10 cm — suggested standard; to be confirmed'
        )
      ),
      field(
        'Объём после увлажнения',
        'Expanded volume',
        text(
          'Около 850–900 мл для указанного формата; уточнить соответствие размерам',
          'Approximately 850–900 ml for the referenced format; consistency with dimensions to be confirmed'
        )
      ),
      field('Сухая масса', 'Dry weight'),
      field('pH', 'pH', text('Целевой диапазон: 5,5–6,5', 'Target range: 5.5–6.5')),
      field(
        'Электропроводность (EC)',
        'Electrical conductivity (EC)',
        text(
          'Целевое значение ниже 0,5 мСм/см — для варианта с низким EC',
          'Target below 0.5 mS/cm for the low-EC grade'
        )
      ),
      field('Метод измерения EC', 'EC test method'),
      field(
        'Влажность при отгрузке',
        'Moisture at dispatch',
        text('Целевое значение: ниже 20%', 'Target below 20%')
      ),
      field(
        'Фракция',
        'Particle size',
        text(
          'Мелкий кокосовый торф, просеянный до согласованной фракции',
          'Fine coir pith, screened to the agreed grade'
        )
      ),
      field(
        'Материал оболочки',
        'Sleeve material',
        text(
          'УФ-стабилизированная плёнка LDPE, биоразлагаемая сетка или нетканый материал — в зависимости от исполнения',
          'UV-treated LDPE film, biodegradable net or non-woven material, depending on product design'
        )
      ),
      field(
        'Посадочное отверстие',
        'Planting hole',
        text(
          'Предварительно сформированное; размер и расположение — по заказу',
          'Pre-formed; size and position customisable'
        )
      ),
      field(
        'Дренажные отверстия',
        'Drainage holes',
        text(
          'Опционально, в зависимости от системы выращивания',
          'Optional, according to the growing system'
        )
      ),
      field(
        'Обработка',
        'Processing',
        text(
          'Промывка или промывка с буферизацией — согласно спецификации',
          'Washed or washed and buffered, according to specification'
        )
      ),
      field(
        'Применение',
        'Applications',
        text(
          'Проращивание семян, укоренение черенков, прививка, выращивание рассады и пересадка в тепличные системы',
          'Seed germination, rooting cuttings, grafting, nursery propagation and greenhouse transplanting'
        )
      ),
      field(
        'Культуры',
        'Crops',
        text(
          'Томаты, огурцы, перец, баклажаны, клубника и другие ягодные культуры',
          'Tomatoes, cucumbers, peppers, aubergines, strawberries and other soft fruits'
        )
      ),
      field(
        'Варианты упаковки',
        'Packaging options',
        text(
          'Коробки, отгрузка на палетах или экспортная упаковка по заказу',
          'Cartons, palletised shipments or customised export packaging'
        )
      ),
      field(
        'Параметры под заказ',
        'Customisation',
        text(
          'Размер и масса куба, состав смеси, оболочка, конфигурация отверстий и упаковка',
          'Cube size and weight, coir blend, sleeve type, hole configuration and packaging'
        )
      )
    );
  } else if (product.category === 'substrates') {
    rows.push(
      field(
        'Состав и соотношение компонентов',
        'Composition and component ratio',
        product.id === 'open-top-grow-bag'
          ? text('60% кокосового торфа / 40% чипсов', '60% coco peat / 40% chips')
          : pending
      )
    );
    rows.push(field('Размеры (Д × Ш × В) / диаметр', 'Dimensions (L × W × H) / diameter'));
    rows.push(
      field(
        'Масса при поставке',
        'Weight at delivery',
        product.id === 'coco-peat-briquettes'
          ? text('брикет 650 г; блок 5 кг', '650 g brick; 5 kg block')
          : pending
      )
    );
    rows.push(
      field('Объём после увлажнения', 'Hydrated volume'),
      field('Фракция', 'Particle size'),
      field('Промывка / буферизация', 'Washing / buffering')
    );
    if (
      !['grow-bag', 'open-top-grow-bag', 'coco-peat', 'coco-peat-briquettes'].includes(product.id)
    ) {
      rows.push(
        field('pH продукта', 'Product pH'),
        field('EC продукта и метод измерения', 'Product EC and test method')
      );
    }
    if (product.id.includes('grow-bag'))
      rows.push(
        field(
          'Посадочные и дренажные отверстия',
          'Planting and drainage holes',
          text(
            'количество и расположение согласовываются',
            'number and positioning agreed to order'
          )
        )
      );
    rows.push(...substrateCatalogueFields(product));
  } else if (product.id === 'veymur-mct-oil') {
    rows.push(...mctSpecifications, field('Фасовка', 'Pack size', product.label));
  } else if (product.category === 'fiber') {
    rows.push(
      field('Состав', 'Composition'),
      field('Размеры / длина волокна', 'Dimensions / fibre length'),
      field('Плотность / поверхностная плотность', 'Density / mass per unit area'),
      field('Влажность', 'Moisture'),
      field('Прочность', 'Strength'),
      field('Содержание примесей', 'Impurity content')
    );
  } else if (product.category === 'shell') {
    rows.push(
      field('Фракция / размеры', 'Particle size / dimensions'),
      field('Влажность', 'Moisture'),
      field('Зольность', 'Ash content'),
      field('Насыпная плотность', 'Bulk density')
    );
    if (product.id.includes('activated'))
      rows.push(
        field('Йодное число', 'Iodine number'),
        field('Твёрдость', 'Hardness'),
        field('Удельная поверхность', 'Specific surface area')
      );
    if (product.id.includes('briquettes'))
      rows.push(
        field('Теплотворная способность', 'Calorific value'),
        field('Связующее и его доля', 'Binder and proportion'),
        field('Время горения', 'Burn time')
      );
  } else {
    rows.push(
      field('Состав', 'Ingredients'),
      field('Пищевая ценность на 100 г / 100 мл', 'Nutrition per 100 g / 100 ml'),
      field('Влажность / сухие вещества', 'Moisture / total solids'),
      field('Микробиологические показатели', 'Microbiological limits'),
      field('Срок годности', 'Shelf life'),
      field('Условия хранения', 'Storage conditions')
    );
    if (product.id.includes('oil'))
      rows.push(
        field('Жирнокислотный состав', 'Fatty acid composition'),
        field('Кислотное и перекисное числа', 'Acid and peroxide values')
      );
    if (product.id.includes('desiccated'))
      rows.push(field('Фракция и жирность', 'Grade and fat content'));
    if (product.id.startsWith('veymur-')) rows.push(field('Фасовка', 'Pack size', product.label));
  }
  const specifiedLabels = new Set(
    update?.specifications?.map(([, label]) => label.toLocaleLowerCase('en')) ?? []
  );
  if (!specifiedLabels.has('packaging')) {
    rows.push(field('Упаковка и количество на палете', 'Packaging and pallet quantity'));
  }
  if (!specifiedLabels.has('tolerances and batch documents')) {
    rows.push(field('Допуски и документы партии', 'Tolerances and batch documents'));
  }
  return rows;
}
