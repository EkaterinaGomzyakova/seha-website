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
      'Влага и воздух',
      'Moisture and aeration',
      'Кокосовая смесь удерживает воду и сохраняет воздушные промежутки; дренажные отверстия отводят её избыток.',
      'The coir blend retains water and maintains air spaces; drainage holes release excess water.'
    ),
    benefit(
      'Полив и питание под контролем',
      'Irrigation and feeding control',
      'Подходит для капельного полива и внесения удобрений с водой. Режим подбирают под культуру и стадию роста.',
      'Suited to drip irrigation and fertigation, with settings matched to crop and growth stage.'
    ),
    benefit(
      'Отдельный корневой объём',
      'Separate root volume',
      'Позволяет выращивать растения без контакта корней с почвой участка. Чистота системы зависит от воды, рассады и ухода.',
      'Allows roots to grow separately from site soil. System hygiene still depends on water, plants and management.'
    ),
    benefit(
      'Состав под культуру',
      'Crop-specific blend',
      'Соотношение подбирают по объёму. Примеры торф / чипсы: 70–80% / 20–30% — для большего запаса влаги; 50% / 50% — для баланса влаги и воздуха; 20–30% / 70–80% или 100% чипсов — для более быстрого дренажа.',
      'Ratios are specified by volume. Examples of pith / chips: 70–80% / 20–30% for greater moisture retention; 50% / 50% for balanced moisture and aeration; 20–30% / 70–80% or 100% chips for faster drainage.'
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
      'Количество, размеры и расположение посадочных и дренажных отверстий согласуются под культуру и систему полива.',
      'The number, size and layout of planting and drainage holes are agreed for the crop and irrigation system.'
    ),
    benefit(
      'Прочная оболочка',
      'Durable sleeve',
      'Трёхслойная соэкструдированная LDPE-плёнка. Ориентировочный срок службы под прямым солнцем — 12–24 месяца (1–2 сезона).',
      'Three-layer co-extruded LDPE film. Indicative service life in direct sunlight is 12–24 months (1–2 growing seasons).'
    ),
    benefit(
      'Служит дольше без прямого солнца',
      'Longer life away from direct sun',
      'При искусственном освещении мешок может служить дольше; срок зависит от механического износа при поливе, промывках и пересадке.',
      'Under artificial lighting, the bag may last longer; service life depends on mechanical wear from irrigation, washing and transplanting.'
    )
  ],
  'open-top-grow-bag': [
    benefit(
      'Влага и воздух',
      'Moisture and aeration',
      'Кокосовая смесь удерживает воду и сохраняет воздушные промежутки; дренажные отверстия отводят её избыток.',
      'The coir blend retains water and maintains air spaces; drainage holes release excess water.'
    ),
    benefit(
      'Полив и питание под контролем',
      'Irrigation and feeding control',
      'Подходит для капельного полива и внесения удобрений с водой. Режим подбирают под культуру и стадию роста.',
      'Suited to drip irrigation and fertigation, with settings matched to crop and growth stage.'
    ),
    benefit(
      'Отдельный корневой объём',
      'Separate root volume',
      'Позволяет выращивать растения без контакта корней с почвой участка. Чистота системы зависит от воды, рассады и ухода.',
      'Allows roots to grow separately from site soil. System hygiene still depends on water, plants and management.'
    ),
    benefit(
      'Торф и чипсы',
      'Pith and chips',
      'Смесь 60% кокосового торфа и 40% чипсов по объёму сочетает влагоудержание и аэрацию.',
      'A blend of 60% coco pith and 40% chips by volume combines moisture retention and aeration.'
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
    ),
    benefit(
      'Объём 10 литров',
      '10 litre volume',
      'Описанный вариант — 10 л, высота заполнения около 28–30 см; другие размеры и объёмы — по заказу.',
      'The described option is 10 L with approximately 28–30 cm fill height; other sizes and volumes are available to order.'
    ),
    benefit(
      'Удобно для Long Cane',
      'Convenient for long-cane systems',
      'Для малины с подготовленными длинными побегами. Отдельный мешок можно переместить или заменить без разборки соседних посадок.',
      'For prepared long-cane raspberry plants. Individual bags can be moved or replaced without disturbing neighbouring plants.'
    )
  ],
  'coco-peat': [
    benefit(
      'Удерживает влагу',
      'Moisture retention',
      'Удерживает 7–9 кг воды на 1 кг сухого субстрата.',
      'Holds 7–9 kg of water per kg of dry substrate.'
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
      'Доступ воздуха к корням',
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
      'Промытые чипсы',
      'Washed chips',
      'Промыты пресной водой. Доступен вариант с низким содержанием растворимых солей (EC).',
      'Washed with fresh water. A low-EC grade with low soluble salt content is available.'
    ),
    benefit(
      'Удерживает влагу',
      'Moisture retention',
      'Удерживает 4–6 кг воды на 1 кг сухих чипсов.',
      'Holds 4–6 kg of water per kg of dry chips.'
    ),
    benefit(
      'Самостоятельный субстрат',
      'Standalone growing medium',
      '100% чипсов по объёму — для орхидей, бромелиевых и других эпифитов, а также отдельных гидропонных систем.',
      '100% chips by volume for orchids, bromeliads and other epiphytes, as well as selected hydroponic systems.'
    ),
    benefit(
      'Добавка в смесь',
      'A component of growing mixes',
      'Примерно 20–40% по объёму добавляют в кокосовый торф или грунт для улучшения аэрации и дренажа. Долю подбирают с учётом растения, размера чипсов и режима полива.',
      'Approximately 20–40% by volume is added to coco pith or potting mixes to improve aeration and drainage. The proportion depends on the plant, chip size and irrigation regime.'
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
      'После увлажнения брикет разрыхляется в крупные чипсы. Объём зависит от массы брикета, размера чипсов и условий замачивания.',
      'Hydration loosens the brick into coarse chips. The expanded volume depends on brick weight, chip size and hydration conditions.'
    ),
    benefit(
      'Аэрация и дренаж',
      'Aeration and drainage',
      'Крупная структура помогает воздуху и воде проходить через субстрат.',
      'The coarse structure helps air and water move through the growing medium.'
    ),
    benefit(
      'Самостоятельно или в смеси',
      'Standalone or blended',
      'После увлажнения чипсы используют отдельно или смешивают с кокосовым торфом.',
      'After hydration, chips can be used on their own or blended with coco pith.'
    ),
    benefit(
      'Размер чипсов на выбор',
      'Choice of chip size',
      'Фракции 6–12 и 12–18 мм; другие размеры — по заказу.',
      'Chip sizes of 6–12 and 12–18 mm; other sizes are available to order.'
    ),
    benefit(
      'Промывка и сортировка',
      'Washing and grading',
      'Чипсы тщательно промыты и просеяны; доступен вариант с низким EC.',
      'Chips are thoroughly washed and screened; a low-EC grade is available.'
    )
  ],
  'grow-cube-sleeve': [
    benefit(
      'Размеры и отверстия',
      'Sizes and holes',
      'Одинаковые размеры кубов для рассадных линий. Посадочные и дренажные отверстия — по заказу.',
      'Consistent cube dimensions for propagation lines. Planting and drainage holes are available to order.'
    ),
    benefit(
      'Под систему выращивания',
      'Matched to the growing system',
      'Размер, массу, смесь субстрата и оболочку можно подобрать под культуру и полив.',
      'Size, weight, coir blend and sleeve can be specified for the crop and irrigation.'
    ),
    benefit(
      'Промытый субстрат',
      'Washed substrate',
      'Субстрат тщательно промыт. Буферизацию выбирают по спецификации.',
      'The substrate is thoroughly washed. Buffering is selected according to specification.'
    ),
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
      'Для доращивания рассады',
      'For growing on transplants',
      'Центральное отверстие принимает растение в кокосовой или минераловатной пробке.',
      'The central opening receives a plant in a coir or stonewool plug.'
    )
  ],
  'coco-coir-discs': [
    benefit(
      'Без оболочки',
      'No retaining sleeve',
      'После увлажнения образуется обычный рыхлый торф, который заполняет выбранную ёмкость.',
      'Hydration releases loose pith that fills the selected container.'
    ),
    benefit(
      'Диск под горшок',
      'Disc matched to the pot',
      'Диаметр выбирают под дно горшка, кашпо или рассадного стаканчика.',
      'Choose the diameter for the base of a pot, planter or propagation cup.'
    ),
    benefit(
      'Для небольших объёмов',
      'For small quantities',
      'Можно раскрыть отдельно и использовать для заполнения ёмкостей или смешивания с грунтом.',
      'Can be expanded separately to fill containers or blend with potting soil.'
    )
  ],
  'coco-peat-tablets': [
    benefit(
      'Обработка на выбор',
      'Processing options',
      'Субстрат тщательно промыт; параметры EC согласуются по спецификации.',
      'The substrate is thoroughly washed; EC is specified for the supplied grade.'
    ),
    benefit(
      'Под вашей маркой',
      'Private-label supply',
      'Возможны упаковка по заказу и выпуск под маркой заказчика.',
      'Custom packaging and private-label options are available.'
    ),
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
      'Чистый кокосовый торф',
      'Pure coco pith',
      'Без добавления других компостов; фракцию подбирают под культуру.',
      'No other composts added; particle grade is matched to the crop.'
    )
  ],
  'seeding-tray-media': [
    benefit(
      'Без засыпки ячеек',
      'No hand-filling',
      'Цельную плиту укладывают в лоток и увлажняют, без ручной засыпки и трамбовки каждой ячейки.',
      'Place the complete plate in the tray and hydrate, without hand-filling or compacting individual cells.'
    ),
    benefit(
      'Под рассадную кассету',
      'Matched to the tray',
      'Формованные ячейки и габариты согласуют под конкретную совместимую модель кассеты.',
      'Cell forms and dimensions are matched to a specified compatible tray model.'
    ),
    benefit(
      'Для ручного и машинного посева',
      'Manual or machine sowing',
      'После увлажнения субстрат готов для посева; при пересадке корневые комы разделяют по ячейкам.',
      'Once hydrated, the medium is ready for sowing; rooted plugs are separated at transplanting.'
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
