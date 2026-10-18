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
// Source: SEHA_Coco_Grow_Bags_and_Substrates.pdf, supplied by the client.
export const specificationSource =
  'https://drive.google.com/file/d/1_1QlwlSco7Msxju9gm-ePZhI8i9t5UGD/view';
// These are catalogue-wide substrate figures, not verified per-SKU guarantees.
export const substrateCatalogueSpecifications = [
  field('pH', 'pH', text('5,5–6,5', '5.5–6.5')),
  field(
    'Электропроводность (EC)',
    'Electrical conductivity (EC)',
    text('менее 0,5 мСм/см', 'below 0.5 mS/cm')
  ),
  field(
    'Коэффициент расширения',
    'Expansion ratio',
    text('5:1 или выше — по спецификации', '5:1 or higher, according to the specification')
  ),
  field(
    'Влажность при поставке',
    'Moisture at delivery',
    text('менее 20%; для блоков торфа — 12–15%', 'below 20%; peat blocks: 12–15%')
  ),
  field(
    'Доля волокна и чипсов',
    'Fibre and chip ratio',
    text('подбирается индивидуально', 'customised')
  ),
  field('Влагоудержание, метод измерения', 'Water retention and test method'),
  field('Допуск по примесям', 'Impurity tolerance'),
  field('Метод измерения EC', 'EC test method')
];

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
  field('Условия хранения', 'Storage conditions')
];

export function specificationsFor(product: ProductItem): Specification[] {
  const rows = [
    field(
      'Производитель',
      'Manufacturer',
      text('SEHA Group of Companies, Индия', 'SEHA Group of Companies, India')
    )
  ];
  if (product.category === 'substrates') {
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
          : product.id === 'coco-husk-chips-bricks'
            ? text('блок 5 кг', '5 kg block')
            : pending
      )
    );
    rows.push(
      field('Объём после увлажнения', 'Hydrated volume'),
      field('Фракция', 'Particle size'),
      field('pH продукта', 'Product pH'),
      field('EC продукта и метод измерения', 'Product EC and test method'),
      field('Промывка / буферизация', 'Washing / buffering')
    );
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
  rows.push(
    field('Упаковка и количество на палете', 'Packaging and pallet quantity'),
    field('Допуски и документы партии', 'Tolerances and batch documents')
  );
  return rows;
}
