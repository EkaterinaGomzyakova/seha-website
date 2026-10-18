// Client-supplied product copy. Proposed targets are not verified batch results.
// Stable catalogue names, IDs, images and pack sizes remain in products.ts.
type Row = [ru: string, en: string, valueRu?: string, valueEn?: string];
interface Update {
  description: [string, string];
  specifications?: Row[];
}
const organic: Row = [
  'Органическая сертификация',
  'Organic certification',
  'Подтверждена документами',
  'Documented organic certification'
];
const shelf: Row = ['Срок годности', 'Shelf life'];
const origin: Row = ['Страна происхождения', 'Country of origin', 'Индия', 'India'];
const preliminary: Row = [
  'Статус параметров',
  'Specification status',
  'Предварительные параметры; подтвердить спецификацией производителя и документами партии',
  'Preliminary specifications; confirm against the factory TDS and batch documentation'
];
export const productCopyUpdates: Record<string, Update> = {
  'coco-coir-discs': {
    description: [
      'Прессованные круглые диски из кокосового торфа для проращивания семян и выращивания рассады. После увлажнения расширяются и образуют влагоёмкий субстрат.',
      'Compressed circular coco pith discs for seed germination and propagation. They expand with water to form a moisture-retentive growing medium.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Натуральный кокосовый торф', 'Natural coconut coir pith'],
      [
        'Форма и цвет',
        'Shape and colour',
        'Круглый диск; от коричневого до тёмно-коричневого',
        'Circular disc; brown to dark brown'
      ],
      ['Диаметр', 'Diameter', '30, 36, 40, 50 мм или по заказу', '30, 36, 40, 50 mm or customised'],
      [
        'Толщина в сухом виде',
        'Dry thickness',
        'Зависит от диаметра и степени прессования',
        'Depends on diameter and compression'
      ],
      ['Сухая масса', 'Dry weight', 'Подбирается под применение', 'Customised for the application'],
      [
        'Высота после увлажнения',
        'Expanded height',
        'Зависит от размера, массы и условий увлажнения',
        'Depends on size, weight and hydration'
      ],
      ['pH', 'pH', 'Целевой диапазон: 5,5–6,5', 'Target range: 5.5–6.5'],
      [
        'EC',
        'EC',
        'Доступен вариант с низким EC; значение и метод измерения — уточнить',
        'Low-EC grade available; target and test method to be confirmed'
      ],
      [
        'Влажность',
        'Moisture',
        'Согласовывается для поставляемого варианта',
        'Specified for the supplied grade'
      ],
      [
        'Обработка',
        'Processing',
        'Просеивание и прессование; промывка — по спецификации',
        'Screened and compressed; washed options available'
      ],
      [
        'Удобрения',
        'Fertiliser',
        'Без добавленных удобрений, если иное не предусмотрено спецификацией',
        'No added fertiliser unless specified'
      ],
      [
        'Упаковка',
        'Packaging',
        'Оптовые и розничные упаковки, коробки по заказу',
        'Bulk packs, retail packs or customised cartons'
      ],
      [
        'Применение',
        'Applications',
        'Семена овощей и цветов, размножение растений, питомники и домашнее садоводство',
        'Vegetable and flower seeds, propagation, nurseries and home gardening'
      ]
    ]
  },
  'coco-peat-tablets': {
    description: [
      'Прессованные таблетки из кокосового торфа для проращивания семян и рассады. После увлажнения расширяются; используются в лотках, горшках и наборах для выращивания.',
      'Compressed coco pith tablets for seed germination and propagation. They expand with water for use in seedling trays, pots and propagation kits.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Натуральный кокосовый торф', 'Natural coconut coir pith'],
      ['Состав', 'Composition'],
      [
        'Форма и цвет',
        'Shape and colour',
        'Круглая таблетка; от светло-коричневого до тёмно-коричневого',
        'Circular tablet; light brown to dark brown'
      ],
      ['Диаметр', 'Diameter', '30–100 мм или по заказу', '30–100 mm or customised'],
      [
        'Сухая масса',
        'Dry weight',
        'Подбирается под размер таблетки',
        'Customised according to tablet size'
      ],
      [
        'Объём после увлажнения',
        'Expanded volume',
        'уточнить по испытанию увлажнением',
        'to be confirmed by hydration testing'
      ],
      ['pH', 'pH', 'Целевой диапазон: 5,5–6,5', 'Target range: 5.5–6.5'],
      [
        'EC',
        'EC',
        'Целевое значение ниже 0,5 мСм/см для варианта с низким EC; метод — уточнить',
        'Low-EC grade target below 0.5 mS/cm; test method to be confirmed'
      ],
      ['Влажность', 'Moisture', 'Целевое значение: ниже 20%', 'Target below 20%'],
      ['Степень прессования', 'Compression ratio'],
      [
        'Обработка',
        'Processing',
        'Просеивание и прессование; доступны промытые варианты',
        'Screened and compressed; washed grades available'
      ],
      [
        'Удобрения',
        'Fertiliser',
        'Без добавленных удобрений, если иное не предусмотрено спецификацией',
        'No added fertiliser unless specified'
      ],
      [
        'Упаковка',
        'Packaging',
        'Оптовые коробки, розничные упаковки или по заказу',
        'Bulk cartons, retail packs or customised packaging'
      ],
      [
        'Применение',
        'Applications',
        'Проращивание семян, рассада, питомники, теплицы и домашнее садоводство',
        'Seed germination, propagation, nurseries, greenhouses and home gardening'
      ]
    ]
  },
  'coco-peat-compost': {
    description: [
      'Субстрат на основе обработанного кокосового торфа для горшечных смесей, рассады и теплиц. Удерживает влагу и улучшает аэрацию и физическую структуру смеси.',
      'A processed coco pith growing medium for potting mixes, seedlings and greenhouses. It improves moisture retention, aeration and the physical structure of growing media.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Обработанный кокосовый торф', 'Processed coconut coir pith'],
      [
        'Состав',
        'Composition',
        'Чистый кокосовый торф или смесь с компостом — согласно спецификации',
        'Pure coco peat or a coco peat–compost blend, according to specification'
      ],
      [
        'Внешний вид и структура',
        'Appearance and texture',
        'Мелкий рыхлый волокнистый материал от коричневого до тёмно-коричневого; просеянная структура',
        'Fine, loose, fibrous brown to dark-brown material with a screened structure'
      ],
      [
        'pH',
        'pH',
        'Целевой диапазон: 5,5–6,5 для среды на основе кокосового торфа',
        'Target range: 5.5–6.5 for a coco peat-based medium'
      ],
      [
        'EC',
        'EC',
        'По требованиям заказчика; низкий EC — при подтверждении испытаниями',
        'Customer-specific; low-EC grade subject to testing'
      ],
      ['Влажность', 'Moisture'],
      ['Влагоудерживающая способность', 'Water-holding capacity'],
      [
        'Фракция',
        'Particle size',
        'Мелкий просеянный материал; размер ячейки сита — по заказу',
        'Fine screened material; mesh size customisable'
      ],
      ['Органическое вещество', 'Organic matter'],
      ['Питательные элементы (NPK)', 'Nutrients (NPK)'],
      [
        'Обработка',
        'Processing',
        'Просеивание, обработка и смешивание согласно спецификации',
        'Screened, processed and blended according to specification'
      ],
      [
        'Упаковка',
        'Packaging',
        'Прессованные блоки, мешки, оптовая упаковка или по заказу',
        'Compressed blocks, bags, bulk packs or customised packaging'
      ],
      [
        'Применение',
        'Applications',
        'Горшечные смеси, питомники, теплицы, овощные и декоративные культуры',
        'Potting mixes, nurseries, greenhouses, vegetables and ornamental plants'
      ]
    ]
  },
  'seeding-tray-media': {
    description: [
      'Обработанный кокосовый торф для проращивания семян и выращивания рассады в многоклеточных лотках. Фракция субстрата и конфигурация системы подбираются под культуру и объём ячеек.',
      'Processed coco pith for seed germination and propagation in multi-cell trays. The growing-medium grade and system configuration are selected for the crop and cell volume.'
    ],
    specifications: [
      preliminary,
      ['Субстрат', 'Growing medium', 'Обработанный кокосовый торф', 'Processed coconut coir pith'],
      [
        'Материал лотка (по модели)',
        'Tray material (model-dependent)',
        'Многоразовый пластик, биоразлагаемый материал или формованное кокосовое волокно',
        'Reusable plastic, biodegradable material or moulded coir'
      ],
      [
        'Количество ячеек',
        'Cell count',
        '50, 72, 98, 104, 128 или по заказу',
        '50, 72, 98, 104, 128 or customised'
      ],
      [
        'Форма ячеек',
        'Cell shape',
        'Квадратная, круглая, коническая или сужающаяся',
        'Square, round, conical or tapered'
      ],
      [
        'Объём ячейки',
        'Cell volume',
        'Подбирается под культуру и конструкцию лотка',
        'Customised for the crop and tray design'
      ],
      [
        'Размеры лотка',
        'Tray dimensions',
        'По требованиям питомника или теплицы',
        'Customised to nursery or greenhouse requirements'
      ],
      ['pH субстрата', 'Growing-medium pH', 'Целевой диапазон: 5,5–6,5', 'Target range: 5.5–6.5'],
      [
        'EC субстрата',
        'Growing-medium EC',
        'Низкий EC — при подтверждении испытаниями по согласованному методу',
        'Low-EC grade subject to testing using the specified method'
      ],
      [
        'Удержание влаги',
        'Moisture retention',
        'Зависит от фракции, объёма ячеек и условий выращивания',
        'Depends on coir grade, cell volume and growing conditions'
      ],
      ['Дренаж', 'Drainage', 'Зависит от конструкции лотка', 'According to tray construction'],
      [
        'Обработка',
        'Processing',
        'Просеянный кокосовый торф; доступны промытые варианты',
        'Screened coco pith; washed grades available'
      ],
      [
        'Применение',
        'Applications',
        'Рассада овощных, цветочных и декоративных культур, подготовка к пересадке',
        'Vegetable, flower and ornamental seedlings; transplant preparation'
      ],
      ['Комплект поставки', 'Supply contents'],
      [
        'Упаковка',
        'Packaging',
        'Оптовые коробки или палеты, в зависимости от типа лотка',
        'Bulk cartons or palletised packaging, depending on tray type'
      ]
    ]
  },
  'fresh-coconut': {
    description: [
      'Молодые кокосы для свежего употребления и зрелые — для переработки мякоти, молока, масла и стружки. Степень зрелости, размер и наличие шелухи согласовываются отдельно для каждого типа.',
      'Tender coconuts for fresh consumption and mature coconuts for processing into kernel, milk, oil and desiccated coconut. Maturity, grading and husk condition are agreed separately for each type.'
    ],
    specifications: [
      ['Ботаническое название', 'Botanical name', 'Cocos nucifera', 'Cocos nucifera'],
      [
        'Происхождение',
        'Origin',
        'Индия — согласно документам отгрузки',
        'India, subject to shipment documentation'
      ],
      [
        'Молодые кокосы — назначение',
        'Tender coconuts — use',
        'Свежее употребление и кокосовая вода',
        'Fresh consumption and coconut water'
      ],
      [
        'Молодые кокосы — сорт, масса, зрелость и содержание воды',
        'Tender coconuts — variety, weight, maturity and water content'
      ],
      [
        'Зрелые кокосы — назначение',
        'Mature coconuts — use',
        'Переработка мякоти, производство молока, масла и стружки',
        'Kernel processing, milk, oil and desiccated coconut production'
      ],
      [
        'Зрелые кокосы — сорт, масса, зрелость и содержание воды',
        'Mature coconuts — variety, weight, maturity and water content'
      ],
      [
        'Зрелые кокосы — скорлупа',
        'Mature coconuts — shell',
        'Целая, без трещин',
        'Sound and free from cracks'
      ],
      [
        'Критерии приёмки по типам',
        'Type-specific acceptance criteria',
        'Для молодых и зрелых кокосов согласовываются отдельные спецификации; единые нормы массы и содержания воды не применяются',
        'Tender and mature coconuts require separate specifications; shared weight and water-content limits do not apply'
      ],
      [
        'Сортировка',
        'Grading',
        'По согласованной массе или диаметру; сорт и зрелость — по заказу',
        'By agreed weight or diameter; variety and maturity specified to order'
      ],
      [
        'Шелуха',
        'Husk condition',
        'С шелухой, очищенные или по заказу — при наличии',
        'With husk, dehusked or customised, subject to availability'
      ],
      [
        'Внешний вид',
        'Appearance',
        'Свежие плоды без видимой плесени и серьёзных повреждений',
        'Fresh, sound coconuts without visible mould or serious damage'
      ],
      [
        'Посторонние примеси и вредители',
        'Foreign matter and pests',
        'Без видимой земли, посторонних материалов, заражения вредителями и недопустимых повреждений',
        'Free from visible soil, foreign material, infestation and unacceptable damage'
      ],
      [
        'Упаковка',
        'Packaging',
        'Экспортные коробки, сетчатые мешки или согласованная упаковка',
        'Export cartons, mesh bags or other approved packaging'
      ],
      ['Условия хранения и перевозки', 'Storage and transport conditions'],
      [
        'Срок годности',
        'Shelf life',
        'уточнить отдельно по зрелости, подготовке, упаковке и условиям перевозки',
        'to be confirmed separately by maturity, preparation, packaging and transport conditions'
      ]
    ]
  },
  'veymur-coconut-sugar': {
    description: [
      'Сахар из сока соцветий кокосовой пальмы с карамельным вкусом. Выпускается в гранулах или порошке, в зависимости от наличия; используется в напитках, выпечке и кондитерских изделиях.',
      'Sugar made from coconut palm flower sap with a caramel-like flavour. Available as granules or powder, subject to availability, for beverages, baking and confectionery.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Сок соцветий кокосовой пальмы', 'Sap of coconut palm flower buds'],
      ['Окончательный состав и добавки', 'Final ingredients and additives'],
      [
        'Внешний вид',
        'Appearance',
        'Сыпучие гранулы или порошок от золотисто-коричневого до тёмно-коричневого цвета',
        'Free-flowing golden-brown to dark-brown granules or powder'
      ],
      [
        'Вкус и аромат',
        'Taste and aroma',
        'Сладкий, с карамельными нотами; характерный аромат кокосового сахара',
        'Sweet, caramel-like flavour and characteristic coconut sugar aroma'
      ],
      [
        'Влажность',
        'Moisture',
        'Целевой максимум: 3,0%; подтвердить спецификацией',
        'Target maximum: 3.0%; confirm against the product specification'
      ],
      ['Сахароза', 'Sucrose'],
      ['Общие сахара', 'Total sugars'],
      ['pH', 'pH'],
      ['Посторонние примеси', 'Foreign matter', 'Не допускаются', 'Absent'],
      [
        'Помол',
        'Granulation',
        'Мелкий, средний, крупный или по заказу',
        'Fine, medium, coarse or customised'
      ],
      organic,
      [
        'Упаковка',
        'Packaging',
        'Пищевые пакеты, мешки или оптовая упаковка',
        'Food-grade pouches, bags or bulk packaging'
      ],
      [
        'Хранение',
        'Storage',
        'В прохладном сухом месте, защищённом от влаги и загрязнения',
        'Cool, dry conditions, protected from moisture and contamination'
      ],
      shelf
    ]
  },
  'veymur-desiccated-coconut': {
    description: [
      'Высушенная измельчённая мякоть зрелого кокоса с характерным вкусом и ароматом. Мелкая, средняя или крупная фракция — для выпечки, кондитерских изделий, шоколада, снеков и десертов.',
      'Dried, desiccated mature coconut kernel with a characteristic coconut flavour and aroma. Fine, medium or coarse grades for bakery, confectionery, chocolates, snacks and desserts.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Мякоть зрелых кокосов', 'Mature coconut kernels'],
      ['Состав', 'Ingredients'],
      ['Добавки', 'Additives'],
      [
        'Цвет и структура',
        'Colour and texture',
        'От белого до кремово-белого; сухие сыпучие частицы',
        'White to creamy white; dry, free-flowing particles'
      ],
      [
        'Вкус и аромат',
        'Taste and aroma',
        'Характерные кокосовые',
        'Characteristic coconut taste and aroma'
      ],
      [
        'Фракция',
        'Particle size',
        'Мелкая, средняя или крупная — по согласованию',
        'Fine, medium or coarse, as agreed'
      ],
      [
        'Влажность',
        'Moisture',
        'Предлагаемый целевой максимум: 3,0%; не подтверждённый результат — уточнить по TDS и COA',
        'Proposed target maximum: 3.0%; not a verified result — confirm against TDS and COA'
      ],
      ['Жирность', 'Fat content'],
      ['Белок', 'Protein content'],
      ['Зольность', 'Total ash'],
      ['Кислотность / свободные жирные кислоты', 'Acidity / free fatty acids'],
      [
        'Посторонние примеси',
        'Foreign matter',
        'Не допускаются; контроль при проверке качества',
        'Absent, subject to quality inspection'
      ],
      organic,
      origin,
      [
        'Упаковка',
        'Packaging',
        'Пищевая розничная и оптовая упаковка — по заказу',
        'Food-grade retail and bulk packaging to order'
      ],
      [
        'Хранение',
        'Storage',
        'В прохладном сухом месте, защищённом от влаги, тепла и прямого солнечного света',
        'Cool and dry, protected from moisture, heat and direct sunlight'
      ],
      shelf
    ]
  },
  'veymur-coconut-milk': {
    description: [
      'Кокосовое молоко из мякоти зрелых кокосов — кремовая жидкость с характерным кокосовым вкусом. Для карри, супов, соусов, напитков, десертов и выпечки.',
      'Coconut milk made from mature coconut kernels: a smooth, creamy liquid with a characteristic coconut flavour. For curries, soups, sauces, drinks, desserts and baking.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Мякоть зрелых кокосов', 'Mature coconut kernels'],
      [
        'Состав',
        'Ingredients',
        'Кокосовый экстракт и вода; окончательный состав — уточнить',
        'Coconut extract and water; final formulation to be confirmed'
      ],
      [
        'Цвет и консистенция',
        'Colour and texture',
        'От белого до кремово-белого; однородная кремовая жидкость',
        'White to creamy white; smooth, creamy liquid'
      ],
      [
        'Вкус и аромат',
        'Taste and aroma',
        'Характерные кокосовые',
        'Characteristic coconut flavour and aroma'
      ],
      ['Жирность', 'Fat content'],
      ['Сухие вещества', 'Total solids'],
      ['Белок', 'Protein content'],
      ['Влажность', 'Moisture'],
      ['pH', 'pH'],
      ['Кислотность', 'Acidity'],
      ['Стабилизаторы / эмульгаторы', 'Stabilisers / emulsifiers'],
      ['Консерванты', 'Preservatives'],
      ['Микробиологические показатели', 'Microbiological limits'],
      ['Метод обработки', 'Processing method'],
      organic,
      origin,
      [
        'Варианты упаковки',
        'Packaging options',
        'Асептическая картонная упаковка, банка или другая согласованная пищевая упаковка — при наличии',
        'Aseptic carton, can or other approved food-grade packaging, subject to availability'
      ],
      [
        'Хранение',
        'Storage',
        'По утверждённой этикетке; зависит от обработки и упаковки — уточнить',
        'As stated on the approved label; depends on processing and packaging — to be confirmed'
      ],
      shelf
    ]
  },
  'veymur-virgin-coconut-oil': {
    description: [
      'Масло из свежей мякоти зрелых кокосов, без рафинации, отбеливания и дезодорации. Сохраняет кокосовый вкус и аромат; подходит для приготовления пищи и выпечки.',
      'Oil from fresh, mature coconut kernels, without refining, bleaching or deodorisation. It retains its coconut flavour and aroma for cooking and baking.'
    ],
    specifications: [
      preliminary,
      ['Сырьё', 'Raw material', 'Свежая мякоть зрелых кокосов', 'Fresh, mature coconut kernels'],
      ['Состав', 'Ingredients'],
      ['Добавки', 'Additives'],
      [
        'Метод извлечения',
        'Extraction method',
        'Механическое извлечение; конкретный процесс — уточнить',
        'Mechanical extraction; actual process to be confirmed'
      ],
      [
        'Рафинация / отбеливание / дезодорация',
        'Refining / bleaching / deodorisation',
        'Не применяется',
        'Not applied'
      ],
      [
        'Внешний вид',
        'Appearance',
        'Прозрачная жидкость от бесцветной до бледно-жёлтой в тепле; может естественно затвердевать при охлаждении',
        'Clear, colourless to pale-yellow liquid when warm; may naturally solidify when cool'
      ],
      [
        'Вкус и аромат',
        'Taste and aroma',
        'Мягкий кокосовый вкус и характерный аромат',
        'Mild coconut flavour and characteristic coconut aroma'
      ],
      [
        'Влага и летучие вещества',
        'Moisture and volatile matter',
        'Предлагаемый целевой максимум: 0,1%; подтвердить спецификацией',
        'Suggested target maximum: 0.1%; confirm against the factory specification'
      ],
      [
        'Свободные жирные кислоты (в пересчёте на лауриновую)',
        'Free fatty acids (as lauric acid)',
        'Предлагаемый целевой максимум: 0,2%; подтвердить анализом',
        'Suggested target maximum: 0.2%; confirm by laboratory analysis'
      ],
      [
        'Перекисное число',
        'Peroxide value',
        'Предлагаемый целевой максимум: 3 мэкв O₂/кг; подтвердить анализом',
        'Suggested target maximum: 3 meq O₂/kg; confirm by laboratory analysis'
      ],
      ['Йодное число', 'Iodine value'],
      ['Число омыления', 'Saponification value'],
      ['Показатель преломления', 'Refractive index'],
      ['Жирнокислотный состав', 'Fatty acid profile'],
      organic,
      origin,
      [
        'Упаковка',
        'Packaging',
        'Пищевые бутылки, банки, канистры или оптовые ёмкости — при наличии',
        'Food-grade bottles, jars, cans or bulk containers, subject to availability'
      ],
      [
        'Применение',
        'Applications',
        'Кулинария, выпечка, пищевые производства; косметические рецептуры — при соответствии сорта назначению',
        'Cooking, baking and food manufacturing; personal-care formulations where the grade is suitable'
      ],
      [
        'Хранение',
        'Storage',
        'В прохладном сухом месте, вдали от солнечного света, тепла и сильных запахов',
        'Cool and dry, away from sunlight, heat and strong odours'
      ],
      shelf
    ]
  },
  'veymur-mct-oil': {
    description: [
      'Масло из кокоса с концентрированными среднецепочечными триглицеридами C8 и C10. Прозрачная бесцветная жидкость без вкуса и запаха для пищевых рецептур, отдельных напитков и специализированных продуктов питания.',
      'Coconut-derived oil with concentrated C8 and C10 medium-chain triglycerides. A clear, colourless, odourless and tasteless liquid for food formulations, selected beverages and specialised nutritional products.'
    ]
  },
  'coir-fiber-bales': {
    description: [
      'Волокно из кокосовой шелухи в тюках для производства канатов, шпагата, щёток, матов и противоэрозионных изделий. Длина волокна, размеры и масса тюка согласовываются при заказе.',
      'Coconut husk fibre in bales for ropes, twine, brushes, mats and erosion-control products. Fibre length, bale dimensions and weight are agreed when ordering.'
    ],
    specifications: [
      ['Сырьё', 'Raw material', 'Кокосовая шелуха', 'Coconut husk'],
      ['Материал', 'Material', 'Натуральное кокосовое волокно', 'Natural coconut coir fibre'],
      [
        'Цвет',
        'Colour',
        'От золотисто-коричневого до тёмно-коричневого',
        'Golden brown to dark brown'
      ],
      [
        'Длина волокна',
        'Fibre length',
        'Короткое, среднее или длинное; сорт — уточнить',
        'Short, medium or long; grade to be confirmed'
      ],
      ['Структура', 'Texture', 'Грубое упругое волокно', 'Coarse, resilient fibre'],
      [
        'Прочность',
        'Strength',
        'Зависит от сорта и обработки; числовые показатели — уточнить',
        'Depends on grade and processing; numerical values to be confirmed'
      ],
      [
        'Обработка',
        'Processing',
        'Выделение волокна, очистка и сортировка согласно спецификации',
        'Fibre extraction, cleaning and grading according to specification'
      ],
      [
        'Тип тюка',
        'Bale type',
        'Прессованный или непрессованный — при наличии',
        'Compressed or non-compressed, subject to availability'
      ],
      [
        'Размеры тюка',
        'Bale dimensions',
        'По требованиям заказчика',
        'Customised to buyer requirements'
      ],
      ['Масса нетто тюка', 'Net bale weight'],
      ['Влажность', 'Moisture'],
      [
        'Упаковка',
        'Packaging',
        'Тюки с крепёжными лентами или обёрткой согласно заказу',
        'Bales secured with straps or wrapping as ordered'
      ],
      origin,
      [
        'Хранение',
        'Storage',
        'В чистом сухом проветриваемом помещении, защищённом от влаги',
        'Clean, dry and well ventilated, protected from moisture'
      ],
      [
        'Срок хранения',
        'Storage life',
        'Зависит от условий хранения и качества волокна; уточнить',
        'Depends on storage conditions and fibre quality; to be confirmed'
      ]
    ]
  },
  'machine-twisted-fiber': {
    description: [
      'Механически скрученное волокно из кокосовой шелухи для производства канатов, шпагата, матов, сеток и противоэрозионных изделий. Диаметр, длина и степень скрутки — по спецификации заказчика.',
      'Mechanically twisted coconut husk fibre for ropes, twine, mats, nets and erosion-control products. Diameter, length and twist level are specified to order.'
    ],
    specifications: [
      [
        'Сырьё',
        'Raw material',
        'Натуральное волокно кокосовой шелухи',
        'Natural coconut husk fibre'
      ],
      ['Метод обработки', 'Processing method', 'Механическое скручивание', 'Mechanical twisting'],
      ['Тип и структура', 'Type and texture', 'Скрученное грубое волокно', 'Twisted, coarse fibre'],
      ['Цвет', 'Colour', 'Натуральный коричневый', 'Natural brown'],
      [
        'Степень скрутки',
        'Twist level',
        'По требованиям заказчика',
        'As specified by the customer'
      ],
      [
        'Толщина / диаметр',
        'Thickness / diameter',
        'По согласованной спецификации',
        'Customised to the agreed specification'
      ],
      [
        'Длина',
        'Length',
        'По производственным требованиям заказчика',
        'According to production requirements'
      ],
      [
        'Влажность',
        'Moisture',
        'По согласованной спецификации',
        'According to the agreed specification'
      ],
      ['Прочность', 'Strength'],
      ['Упаковка', 'Packaging', 'По требованиям заказчика', 'Customised to buyer requirements'],
      [
        'Применение',
        'Applications',
        'Канаты, шпагат, маты, сетки, щётки и изделия для защиты почвы',
        'Ropes, twine, mats, nets, brushes and soil-protection products'
      ],
      origin
    ]
  }
};
