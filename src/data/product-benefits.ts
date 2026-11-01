import type { LocalizedText } from './products';

interface ProductBenefit {
  title: LocalizedText;
  description: LocalizedText;
}
const benefit = (
  ru: string,
  en: string,
  descriptionRu: string,
  descriptionEn: string
): ProductBenefit => ({
  title: { ru, en },
  description: { ru: descriptionRu, en: descriptionEn }
});

// Based on client descriptions and confirmed specifications. Proposed laboratory
// targets and unverified performance claims are deliberately excluded.
export const productBenefits: Record<string, readonly ProductBenefit[]> = {
  'grow-bag': [
    benefit(
      'Состав под культуру',
      'Crop-specific blend',
      'Соотношение компонентов согласуется под выращиваемую культуру.',
      'The component ratio is agreed for the crop being grown.'
    ),
    benefit(
      'Размеры под систему',
      'Sizes to suit the system',
      'Размеры гроубэга подбираются под требования заказчика.',
      'Grow bag dimensions are tailored to the buyer’s requirements.'
    ),
    benefit(
      'Нужные отверстия',
      'Hole configuration',
      'Расположение отверстий согласуется для выбранной системы выращивания.',
      'Hole positions are agreed for the growing system.'
    )
  ],
  'open-top-grow-bag': [
    benefit(
      'Торф и чипсы',
      'Pith and chips',
      'Смесь 60% кокосового торфа и 40% чипсов сочетает влагоудержание и аэрацию.',
      'A blend of 60% coco pith and 40% chips combines moisture retention and aeration.'
    ),
    benefit(
      'Промытый субстрат',
      'Washed substrate',
      'Кокосовое сырьё промыто и просеяно; используется марка с низким EC.',
      'The coconut substrate is washed and screened, using a low-EC grade.'
    ),
    benefit(
      'Мешок с дренажом',
      'Drainage holes',
      'УФ-стабилизированная оболочка с открытым верхом и дренажными отверстиями.',
      'A UV-stabilised open-top bag with drainage holes.'
    )
  ],
  'coco-peat': [
    benefit(
      'Удерживает влагу',
      'Moisture retention',
      'Кокосовый торф удерживает воду в корневой зоне.',
      'Coco pith retains water in the root zone.'
    ),
    benefit(
      'Основа для смесей',
      'A base for growing mixes',
      'Используется самостоятельно или как компонент субстратных смесей.',
      'Used on its own or as a component of growing-media blends.'
    )
  ],
  'coco-peat-briquettes': [
    benefit(
      'Компактное хранение',
      'Compact storage',
      'Прессованный формат занимает меньше места до увлажнения.',
      'The compressed format takes up less space before hydration.'
    ),
    benefit(
      'Расширение при поливе',
      'Water-activated expansion',
      'После добавления воды брикет превращается в рыхлый субстрат.',
      'Adding water expands the brick into a loose growing medium.'
    ),
    benefit(
      'Влагоёмкая основа',
      'Moisture-retentive medium',
      'Кокосовый торф удерживает влагу и подходит для субстратных смесей.',
      'Coco pith retains moisture and can be used in growing-media blends.'
    )
  ],
  'coconut-chips': [
    benefit(
      'Воздух у корней',
      'Root-zone aeration',
      'Крупные частицы помогают сохранять воздушные промежутки в субстрате.',
      'Coarse particles help maintain air spaces in the growing medium.'
    ),
    benefit(
      'Дренаж',
      'Drainage',
      'Чипсы улучшают отвод лишней воды из корневой зоны.',
      'Chips improve drainage of excess water from the root zone.'
    ),
    benefit(
      'Выбор фракции',
      'Choice of chip size',
      'Фракции 6–12 и 12–18 мм; другие размеры — по заказу.',
      'Chip sizes of 6–12 and 12–18 mm; other sizes are available to order.'
    ),
    benefit(
      'Промытые чипсы',
      'Washed chips',
      'Доступна промытая марка с низкой электропроводностью (EC).',
      'A washed, low-EC grade is available.'
    )
  ],
  'coco-husk-chips-bricks': [
    benefit(
      'Компактные брикеты',
      'Compact bricks',
      'Прессованные чипсы удобнее хранить и перевозить.',
      'Compressed chips are convenient to store and transport.'
    ),
    benefit(
      'Раскрываются в воде',
      'Expand with water',
      'После увлажнения брикет разрыхляется в крупные кокосовые чипсы.',
      'Hydration loosens the brick into coarse coconut chips.'
    ),
    benefit(
      'Аэрация и дренаж',
      'Aeration and drainage',
      'Крупная структура помогает воздуху и воде проходить через субстрат.',
      'The coarse structure helps air and water move through the growing medium.'
    )
  ],
  'grow-cube-sleeve': [
    benefit(
      'Сохраняет форму',
      'Holds its shape',
      'Защитная оболочка удерживает куб при поливе и переносе.',
      'The protective sleeve holds the cube together during irrigation and handling.'
    ),
    benefit(
      'Пересадка целиком',
      'Transplant as one cube',
      'Куб можно перенести в гроубэг или субстратный мат, не разбирая корневую зону.',
      'The whole cube can be moved into a grow bag or slab without breaking up the root zone.'
    ),
    benefit(
      'Для семян и черенков',
      'For seeds and cuttings',
      'Сформированный куб служит отдельным местом для проращивания и укоренения.',
      'Each pre-formed cube provides an individual space for germination and rooting.'
    )
  ],
  'coco-coir-discs': [
    benefit(
      'Компактный формат',
      'Compact format',
      'Прессованные диски занимают мало места при хранении.',
      'Compressed discs take up little storage space.'
    ),
    benefit(
      'Расширяются в воде',
      'Expand with water',
      'При увлажнении образуют влагоёмкий субстрат для проращивания.',
      'Hydration creates a moisture-retentive medium for germination.'
    ),
    benefit(
      'Диаметр под задачу',
      'Diameter to suit the use',
      'Диски можно подобрать по диаметру и массе.',
      'Discs can be specified by diameter and weight.'
    )
  ],
  'coco-peat-tablets': [
    benefit(
      'Расширяются в воде',
      'Expand with water',
      'Сухая таблетка после увлажнения образует субстрат для рассады.',
      'Each dry tablet expands with water into a growing medium for seedlings.'
    ),
    benefit(
      'Для лотков и горшков',
      'For trays and pots',
      'Компактный формат подходит для рассадных лотков, горшков и наборов для выращивания.',
      'The compact format suits seedling trays, pots and propagation kits.'
    ),
    benefit(
      'Размер на выбор',
      'Choice of size',
      'Диаметр и сухая масса подбираются под способ выращивания.',
      'Diameter and dry weight are selected for the growing method.'
    )
  ],
  'coco-peat-compost': [
    benefit(
      'Удержание влаги',
      'Moisture retention',
      'Кокосовый торф помогает удерживать воду в субстратной смеси.',
      'Coco pith helps retain water in the growing mix.'
    ),
    benefit(
      'Рыхлая структура',
      'Loose structure',
      'Просеянный материал улучшает физическую структуру и аэрацию смеси.',
      'Screened material improves the structure and aeration of growing mixes.'
    ),
    benefit(
      'Состав по задаче',
      'Choice of formulation',
      'Поставляется кокосовый торф или смесь с компостом — по спецификации.',
      'Supplied as coco pith or a compost blend, according to specification.'
    )
  ],
  'seeding-tray-media': [
    benefit(
      'Фракция под ячейку',
      'Grade matched to the cell',
      'Фракция торфа подбирается с учётом культуры и объёма ячеек.',
      'The coir grade is selected for the crop and cell volume.'
    ),
    benefit(
      'Влага и воздух',
      'Moisture and aeration',
      'Кокосовый торф сочетает влагоудержание с аэрацией корневой зоны.',
      'Coco pith combines moisture retention with root-zone aeration.'
    ),
    benefit(
      'Конфигурация под рассаду',
      'Propagation configuration',
      'Количество и объём ячеек согласуются под систему выращивания.',
      'Cell count and volume are agreed for the growing system.'
    )
  ],
  'coir-fiber-bales': [
    benefit(
      'Натуральное волокно',
      'Natural coir fibre',
      'Сырьё получают из кокосовой шелухи.',
      'The fibre is obtained from coconut husks.'
    ),
    benefit(
      'Марка под производство',
      'Grade for the process',
      'Длина и сорт волокна согласуются под выпускаемые изделия.',
      'Fibre length and grade are agreed for the products being manufactured.'
    ),
    benefit(
      'Тюки нужного размера',
      'Bale dimensions to order',
      'Масса и размеры тюка подбираются для хранения и перевозки.',
      'Bale weight and dimensions are agreed for storage and transport.'
    )
  ],
  'machine-twisted-fiber': [
    benefit(
      'Механическая скрутка',
      'Machine-twisted strands',
      'Кокосовое волокно поставляется в виде скрученных прядей.',
      'Coconut coir fibre is supplied as mechanically twisted strands.'
    ),
    benefit(
      'Диаметр под изделие',
      'Diameter to suit the product',
      'Толщина и степень скрутки согласуются под производство.',
      'Thickness and twist level are specified for the manufacturing process.'
    ),
    benefit(
      'Нужная длина',
      'Length to order',
      'Длину волокна и формат упаковки можно согласовать при заказе.',
      'Strand length and packaging can be agreed when ordering.'
    )
  ],
  'coir-weed-mat': [
    benefit(
      'Меньше сорняков',
      'Weed suppression',
      'Мат закрывает поверхность почвы и помогает сдерживать рост сорняков; результат зависит от плотности.',
      'The mat covers the soil and helps suppress weeds; performance depends on density.'
    ),
    benefit(
      'Меньше испарения',
      'Reduced evaporation',
      'Покрытие помогает уменьшить прямое испарение влаги с поверхности почвы.',
      'The covering helps reduce direct evaporation from the soil surface.'
    ),
    benefit(
      'Пропускает воду',
      'Water permeability',
      'Вода проходит через мат в зависимости от его структуры и плотности.',
      'Water passes through the mat according to its structure and density.'
    )
  ],
  'coir-geo-textile': [
    benefit(
      'Защита от эрозии',
      'Erosion control',
      'Сетка помогает уменьшить смыв почвы на открытых участках.',
      'The mesh helps reduce soil loss on exposed surfaces.'
    ),
    benefit(
      'Открытая структура',
      'Open mesh',
      'Полотно пропускает воду и поддерживает закрепление растительности.',
      'The textile lets water through and supports vegetation establishment.'
    ),
    benefit(
      'Биоразлагаемое волокно',
      'Biodegradable fibre',
      'Кокосовое волокно разлагается; срок зависит от марки и условий на участке.',
      'Coir fibre biodegrades over a period that depends on the grade and site conditions.'
    )
  ],
  'veymur-mct-oil': [
    benefit(
      'C8 и C10',
      'C8 and C10',
      'Каприловая кислота C8 — 55–65%, каприновая C10 — 35–45%.',
      'Caprylic acid C8: 55–65%; capric acid C10: 35–45%.'
    ),
    benefit(
      'Без вкуса и запаха',
      'No taste or odour',
      'Не добавляет кокосовый вкус или аромат в пищевую рецептуру.',
      'Does not add a coconut taste or aroma to food formulations.'
    ),
    benefit(
      'Жидкая форма',
      'Liquid format',
      'Прозрачное бесцветное масло для пищевых смесей и отдельных напитков.',
      'A clear, colourless oil for food formulations and selected beverages.'
    )
  ],
  'veymur-virgin-coconut-oil': [
    benefit(
      'Из свежей мякоти',
      'From fresh kernels',
      'Сырьё — свежая мякоть зрелых кокосов.',
      'Made from fresh, mature coconut kernels.'
    ),
    benefit(
      'Кокосовый вкус',
      'Coconut flavour',
      'Сохраняет характерные вкус и аромат кокоса.',
      'Retains its characteristic coconut flavour and aroma.'
    ),
    benefit(
      'Без рафинации',
      'Unrefined',
      'Не проходит рафинацию, отбеливание и дезодорацию.',
      'Not refined, bleached or deodorised.'
    )
  ],
  'veymur-coconut-sugar': [
    benefit(
      'Карамельный вкус',
      'Caramel-like flavour',
      'Придаёт напиткам и десертам характерный карамельный оттенок вкуса.',
      'Adds a characteristic caramel-like flavour to drinks and desserts.'
    ),
    benefit(
      'Из сока соцветий',
      'From coconut flower sap',
      'Получают из сока соцветий кокосовой пальмы.',
      'Produced from the sap of coconut palm flowers.'
    ),
    benefit(
      'Выбор помола',
      'Choice of granulation',
      'Гранулы или порошок — в зависимости от наличия.',
      'Granules or powder, subject to availability.'
    )
  ],
  'veymur-desiccated-coconut': [
    benefit(
      'Кокосовый вкус и аромат',
      'Coconut flavour and aroma',
      'Высушенная мякоть сохраняет характерный вкус кокоса.',
      'Dried coconut kernel retains its characteristic flavour.'
    ),
    benefit(
      'Выбор фракции',
      'Choice of particle size',
      'Мелкая, средняя или крупная стружка подбирается под продукт.',
      'Fine, medium or coarse grades can be selected for the finished product.'
    ),
    benefit(
      'Сыпучая структура',
      'Free-flowing texture',
      'Сухие частицы подходят для добавления в кондитерские и зерновые смеси.',
      'Dry particles can be added to confectionery and cereal mixes.'
    )
  ],
  'veymur-coconut-milk': [
    benefit(
      'Кремовая текстура',
      'Creamy texture',
      'Однородная кремовая жидкость для соусов, напитков и десертов.',
      'A smooth, creamy liquid for sauces, drinks and desserts.'
    ),
    benefit(
      'Кокосовый вкус',
      'Coconut flavour',
      'Придаёт блюдам характерные вкус и аромат кокоса.',
      'Adds characteristic coconut flavour and aroma to food.'
    ),
    benefit(
      'Из зрелых кокосов',
      'From mature coconuts',
      'Производится из мякоти зрелых кокосов.',
      'Made from mature coconut kernels.'
    )
  ],
  'young-coconut': [
    benefit(
      'Отбор молодых плодов',
      'Tender fruit selection',
      'Степень зрелости согласуется для свежего употребления и кокосовой воды.',
      'Maturity is agreed for fresh consumption and coconut water.'
    ),
    benefit(
      'Калибр под заказ',
      'Grading to order',
      'Размер и массу плода согласуем под требования покупателя.',
      'Fruit size and weight are agreed to the buyer’s requirements.'
    ),
    benefit(
      'Выбор очистки',
      'Husk preparation',
      'С шелухой или очищенные — по заказу и при наличии.',
      'With husk or dehusked, according to the order and availability.'
    )
  ],
  'mature-coconut': [
    benefit(
      'Зрелая мякоть',
      'Mature kernels',
      'Полностью зрелые плоды отбираются для переработки мякоти.',
      'Fully mature coconuts are selected for kernel processing.'
    ),
    benefit(
      'Целая скорлупа',
      'Sound shells',
      'Плоды отбираются с целой скорлупой, без трещин.',
      'Coconuts are selected with sound shells, free from cracks.'
    ),
    benefit(
      'Отбор под переработку',
      'Grading for processing',
      'Размер плода и требования к мякоти согласуются отдельно.',
      'Fruit size and kernel requirements are agreed separately.'
    )
  ],
  'rbd-coconut-oil': [
    benefit(
      'Нейтральный вкус',
      'Neutral taste',
      'Нейтральные вкус и аромат подходят для рецептур без выраженного кокосового оттенка.',
      'Neutral taste and aroma suit formulations without a pronounced coconut flavour.'
    ),
    benefit(
      'Обработка RBD',
      'RBD processing',
      'Масло проходит рафинацию, отбеливание и дезодорацию.',
      'The oil is refined, bleached and deodorised.'
    ),
    benefit(
      'Органическая сертификация',
      'Organic certification',
      'Органический статус подтверждён документами.',
      'Organic status is supported by certification documents.'
    )
  ],
  'coco-shell-charcoal-briquettes': [
    benefit(
      'Прессованный формат',
      'Compressed format',
      'Уголь из кокосовой скорлупы спрессован в брикеты для удобного обращения.',
      'Coconut shell charcoal is compressed into briquettes for convenient handling.'
    ),
    benefit(
      'Форма под задачу',
      'Shape to suit the use',
      'Форму и размеры брикетов можно согласовать при заказе.',
      'Briquette shape and dimensions can be agreed when ordering.'
    )
  ],
  'coco-shell-activated-carbon': [
    benefit(
      'Пористая структура',
      'Porous structure',
      'Адсорбирует органические соединения и нежелательные запахи в зависимости от марки и среды.',
      'Adsorbs organic compounds and unwanted odours, depending on grade and medium.'
    ),
    benefit(
      'Гранулы или порошок',
      'Granules or powder',
      'Гранулированные и порошковые марки — при наличии.',
      'Granular and powdered grades, subject to availability.'
    ),
    benefit(
      'Фракция под фильтрацию',
      'Particle size for filtration',
      'Размер частиц согласуется для выбранного процесса очистки.',
      'Particle size is agreed for the selected treatment process.'
    )
  ]
};
