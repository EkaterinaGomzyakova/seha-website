// Client-supplied product descriptions. Stable names, IDs and images are in products.ts.
// Technical data is maintained in product-specifications.ts.
interface ProductCopyUpdate {
  description: [ru: string, en: string];
  fullDescription?: [ru: string, en: string];
}
export const productCopyUpdates: Record<string, ProductCopyUpdate> = {
  'grow-bag': {
    description: [
      'Гроубэг SEHA — мешок с кокосовым субстратом для теплиц, защищённого грунта и беспочвенного выращивания клубники, томатов, огурцов и других культур.',
      'SEHA grow bags contain coconut substrate for greenhouse, protected and soilless cultivation of strawberries, tomatoes, cucumbers and other crops.'
    ],
    fullDescription: [
      'Гроубэг SEHA — мешок с кокосовым субстратом для теплиц, защищённого грунта и беспочвенного выращивания клубники, томатов, огурцов и других культур. Торф удерживает влагу, а волокно и чипсы формируют воздушные промежутки и помогают отводить лишнюю воду. Состав смеси подбирают под растение и полив.\n\nРазмеры мешка и субстрата после увлажнения, количество, размер и расположение посадочных и дренажных отверстий согласуют под культуру, сорт, плотность посадки, регион и рекомендации агронома. Примеры размеров: для клубники — 100 × 20 × 9 см, для томата — 100 × 15 × 12 см. Это ориентиры, а не единый стандарт.\n\nГроубэги подходят для капельного полива и подачи удобрений с поливной водой. Отдельный корневой объём позволяет управлять влажностью и питанием без посадки в почву; результат зависит от качества воды, подготовки субстрата и ухода.',
      'SEHA grow bags contain coconut substrate for greenhouse, protected and soilless cultivation of strawberries, tomatoes, cucumbers and other crops. Coco pith retains moisture, while fibre and chips create air spaces and help drain excess water. The blend is selected for the crop and irrigation system.\n\nBag dimensions, hydrated substrate size, and the number, size and layout of planting and drainage holes are customised for crop, variety, planting density, region and agronomist recommendations. Reference sizes include 100 × 20 × 9 cm for strawberries and 100 × 15 × 12 cm for tomatoes. These are examples, not a single fixed standard.\n\nGrow bags suit drip irrigation and fertigation, which supplies nutrients with irrigation water. A separate root volume allows moisture and feeding to be managed without planting in soil; performance depends on water quality, substrate preparation and crop management.'
    ]
  },
  'grow-cube-sleeve': {
    description: [
      'Куб из кокосового торфа для проращивания семян и укоренения черенков. Защитная оболочка сохраняет форму при поливе и пересадке.',
      'A coco pith cube for seed germination and rooting cuttings. Its protective sleeve maintains the shape during irrigation and transplanting.'
    ],
    fullDescription: [
      'Кубический субстрат SEHA предназначен для проращивания семян, укоренения черенков и начального развития растений. Каждый куб изготовлен из обработанного кокосового торфа и заключён в защитную оболочку, которая сохраняет его форму при переносе, поливе и пересадке.\n\nКокосовый субстрат сочетает удержание влаги, аэрацию и дренаж для развития корней. Куб можно пересадить целиком в гроубэг, субстратный мат или другую подходящую систему выращивания с минимальным воздействием на корневую зону.\n\nПрименяется для рассады томатов и огурцов, клубники и других ягодных культур, размножения перца и баклажанов, проращивания семян, черенкования и прививки. Размер и масса куба, смесь кокосового субстрата, материал оболочки, посадочные и дренажные отверстия подбираются под культуру, полив и условия теплицы.',
      'SEHA Coco Coir Grow Cubes are designed for seed germination, cutting propagation and early-stage plant development. Manufactured using carefully processed coconut coir, each cube is enclosed in a protective sleeve that helps maintain its shape during handling, irrigation and transplanting.\n\nThe coco coir growing medium provides a balance of moisture retention, aeration and drainage to support healthy root development. The complete cube can be transplanted into coco coir grow bags, growing slabs or other suitable cultivation systems with minimal disturbance to the root zone.\n\nApplications include tomato and cucumber seedlings, strawberries and other soft fruits, pepper and aubergine propagation, seed germination, cuttings and grafting. Cube size, weight, coir blend, sleeve material, planting and drainage holes can be customised for the crop, irrigation system and greenhouse conditions.'
    ]
  },
  'coco-husk-chips-bricks': {
    fullDescription: [
      'Блоки кокосовых чипсов SEHA производятся из отобранной волокнистой оболочки кокоса и прессуются в брикеты, удобные для хранения, перевозки и использования. После увлажнения брикеты разрыхляются в крупные кокосовые чипсы, которые улучшают доступ воздуха к корням, дренаж и распределение влаги.\n\nСубстрат подходит для профессиональных тепличных хозяйств, питомников, гидропонных систем и производителей субстратных смесей. Чипсы используют самостоятельно или смешивают с кокосовым торфом. Размер чипсов, обработку и экспортную упаковку подбирают по заказу.\n\nПрименяются для клубники и других ягодных культур, томатов, огурцов, орхидей, декоративных растений и выращивания посадочного материала.',
      'SEHA Coco Husk Chips Bricks are manufactured from selected coconut husks and compressed into convenient brick formats for efficient storage, transportation and handling. Upon hydration, the bricks expand into coarse coconut chips that help improve root-zone aeration, drainage and moisture management.\n\nDesigned for professional horticulture, our coco chips are suitable for greenhouse growers, nurseries, hydroponic systems and growing-media manufacturers. They can be used on their own or blended with coco pith. Chip sizes, processing and export packaging can be specified to order.\n\nApplications include strawberries, tomatoes, cucumbers, soft fruits, orchids, ornamental plants and nursery production.'
    ],
    description: [
      'Прессованные брикеты из волокнистой оболочки кокоса занимают меньше места при хранении и перевозке. После увлажнения разрыхляются в крупные чипсы, которые удерживают влагу, пропускают воздух к корням и отводят лишнюю воду. Используются самостоятельно или в смеси с кокосовым торфом — в теплицах, гидропонике и питомниках. Подходят для клубники и других ягодных культур, томатов, огурцов, орхидей и декоративных растений.',
      'Compressed coconut husk chip bricks take up less space during storage and transport. Hydration loosens them into coarse chips that retain moisture, support root-zone aeration and drain excess water. Used on their own or blended with coco pith in greenhouses, hydroponics and nurseries. Suitable for strawberries and other soft fruits, tomatoes, cucumbers, orchids and ornamental plants.'
    ]
  },
  'coconut-chips': {
    fullDescription: [
      'Кокосовые чипсы SEHA производятся из отобранной волокнистой оболочки кокоса, которую измельчают и сортируют по размеру для профессионального растениеводства. Чипсы улучшают доступ воздуха к корням, дренаж и распределение влаги. Подходят для теплиц, гидропоники, питомников и составления субстратных смесей.\n\nИспользуются для клубники и других ягодных культур, томатов, огурцов, орхидей, декоративных растений и выращивания посадочного материала в питомниках.',
      'SEHA Coco Husk Chips are manufactured from carefully selected coconut husks and processed into graded chips for professional horticultural applications. Designed to improve root-zone aeration, drainage and moisture management, our coco chips are suitable for greenhouse cultivation, hydroponics, nurseries and customised growing-media blends.\n\nApplications include strawberries, tomatoes, cucumbers, soft fruits, orchids, ornamental plants and professional nursery production.'
    ],
    description: [
      'Кусочки волокнистой оболочки кокоса, отсортированные по размеру. Помогают удерживать влагу, пропускают воздух к корням и отводят лишнюю воду. Используются как самостоятельный субстрат или в смеси с кокосовым торфом и грунтом — в теплицах, гидропонике и питомниках. Подходят для клубники и других ягодных культур, томатов, огурцов, орхидей и декоративных растений.',
      'Graded coconut husk chips for root-zone aeration, drainage and moisture management. Suitable for standalone use or blending with coco pith in greenhouses, hydroponics and nurseries. Used for strawberries and other soft fruits, tomatoes, cucumbers, orchids and ornamental plants.'
    ]
  },
  'open-top-grow-bag': {
    fullDescription: [
      'Открытый гроубэг SEHA содержит смесь 60% кокосового торфа и 40% кокосовых чипсов. Промытый и просеянный субстрат с низким EC удерживает влагу, пропускает воздух к корням и отводит лишнюю воду. Открытый верх удобен для посадки кустов голубики и малины.\n\nДля голубики предусмотрен pH 4,5–5,5; для малины кислотность подбирают отдельно. Это разные варианты подготовки субстрата: кислую смесь для голубики нельзя автоматически считать подходящей для малины.\n\nМешок выполнен из УФ-стабилизированного материала и имеет дренажные отверстия. Размеры, рабочий объём после увлажнения и параметры отверстий согласуют под культуру, сорт, полив и рекомендации агронома. Подходит для контейнерного выращивания с капельным поливом и внесением удобрений с водой.',
      'SEHA Open-Top Grow Bags contain 60% coco pith and 40% coco chips. The washed, screened, low-EC medium retains moisture, supports root-zone aeration and drains excess water. The open top is convenient for planting blueberry and raspberry bushes.\n\nThe blueberry grade has pH 4.5–5.5; the raspberry grade is adjusted separately. These are different substrate preparations: an acidic blueberry blend should not automatically be used for raspberries.\n\nThe UV-stabilised bag has drainage holes. Dimensions, working hydrated volume and hole configuration are customised for the crop, variety, irrigation system and agronomist recommendations. Suitable for container cultivation with drip irrigation and fertigation.'
    ],
    description: [
      'Открытый гроубэг для выращивания голубики и малины: 60% кокосового торфа и 40% кокосовых чипсов. Промытый и просеянный субстрат с низкой электропроводностью сочетает влагоудержание, аэрацию и дренаж. Параметры pH для голубики и малины согласуются отдельно.',
      'An open-top grow bag for blueberries and raspberries, filled with 60% coco pith and 40% coco chips. The washed, screened, low-EC substrate combines moisture retention, aeration and drainage. The pH specification is agreed separately for blueberries and raspberries.'
    ]
  },
  'coco-coir-discs': {
    fullDescription: [
      'Кокосовые диски SEHA производятся из обработанного кокосового торфа и прессуются в компактные круглые формы для проращивания семян, размножения растений и работы питомников.\n\nПосле увлажнения диски расширяются и образуют влагоёмкий субстрат, который пропускает воздух и поддерживает раннее развитие корней. Компактный формат удобен для хранения, перевозки и использования в коммерческих питомниках, растениеводческих хозяйствах и наборах для домашнего выращивания.\n\nПодходят для овощной и цветочной рассады, проращивания семян и размножения растений. Доступны разные диаметры и масса, промытые варианты и варианты с низким EC. Упаковку можно подобрать для розничных и оптовых поставок.',
      'SEHA Coco Coir Discs are manufactured from carefully processed coconut coir and compressed into convenient circular formats for seed germination, plant propagation and nursery applications.\n\nWhen hydrated, the discs expand to create a moisture-retentive growing medium that supports aeration and early root development. Their compact format makes them easy to store, transport and use in commercial nurseries, horticultural operations and home gardening kits.\n\nApplications include vegetable seedlings, flower seeds, nurseries, horticultural propagation and home gardening. Multiple diameters and weights, washed and low-EC grades, and customised retail or bulk packaging are available according to specification.'
    ],
    description: [
      'Прессованные круглые диски из кокосового торфа для проращивания семян и выращивания рассады. После увлажнения расширяются и образуют влагоёмкий субстрат.',
      'Compressed circular coco pith discs for seed germination and propagation. They expand with water to form a moisture-retentive growing medium.'
    ]
  },
  'coco-peat-tablets': {
    fullDescription: [
      'Кокосовые таблетки SEHA производятся из обработанного кокосового торфа и прессуются в компактные формы для проращивания семян, размножения растений и выращивания рассады в питомниках.\n\nПри увлажнении таблетки расширяются и образуют влагоёмкий субстрат, который пропускает воздух и поддерживает раннее развитие корней. Компактный формат удобен для хранения, перевозки и использования в рассадных лотках, горшках, наборах для выращивания и профессиональном растениеводстве.\n\nПрименяются для овощной и цветочной рассады, проращивания семян, тепличного и домашнего выращивания. Доступны разные диаметры и масса, промытые варианты и варианты с низким EC, упаковка по заказу и выпуск под маркой заказчика.',
      'SEHA Coco Peat Tablets are manufactured from carefully processed coconut coir pith and compressed into convenient tablet formats for seed germination, plant propagation and nursery production.\n\nWhen hydrated, the tablets expand to form a moisture-retentive growing medium that supports aeration and early root development. Their compact design makes them easy to store, transport and use in seedling trays, pots, propagation kits and professional horticultural applications.\n\nApplications include vegetable seedlings, flower seeds, nurseries, greenhouse propagation and home gardening. Multiple tablet diameters and weights, washed and low-EC grades, customised packaging and private-label options are available according to specification.'
    ],
    description: [
      'Прессованные таблетки из кокосового торфа для проращивания семян и рассады. После увлажнения расширяются; используются в лотках, горшках и наборах для выращивания.',
      'Compressed coco pith tablets for seed germination and propagation. They expand with water for use in seedling trays, pots and propagation kits.'
    ]
  },
  'coco-peat-compost': {
    fullDescription: [
      'Компост на основе кокосового торфа SEHA — субстрат для садоводства, питомников и профессионального растениеводства. Его производят из обработанного кокосового торфа, который улучшает удержание влаги, аэрацию и физическую структуру субстратных смесей.\n\nПодходит для горшечных смесей, выращивания рассады, теплиц и составления субстратов под конкретную задачу. Доступны разные фракции и форматы упаковки, чистый кокосовый торф или смесь с компостом — в зависимости от спецификации.\n\nПрименяется в домашнем садоводстве, питомниках и теплицах, для декоративных и овощных культур. Фракцию, состав смеси и оптовую или экспортную упаковку согласуют при заказе.',
      'SEHA Coco Peat Compost is a coconut-based growing medium developed for gardening, nursery production and professional horticultural applications. Manufactured from processed coconut coir pith, it helps improve moisture retention, aeration and the physical structure of growing media.\n\nSuitable for use in potting mixes, seedling production, greenhouse cultivation and customised horticultural substrates, the product can be supplied in different grades and packaging formats. Pure coco peat or a formulated compost blend can be supplied according to product specifications.\n\nApplications include home gardening, nurseries, greenhouses, ornamental plants, vegetable cultivation and professional horticulture. Screened grades, formulations and bulk or export packaging are specified to order.'
    ],
    description: [
      'Субстрат на основе обработанного кокосового торфа для горшечных смесей, рассады и теплиц. Удерживает влагу и улучшает аэрацию и физическую структуру смеси.',
      'A processed coco pith growing medium for potting mixes, seedlings and greenhouses. It improves moisture retention, aeration and the physical structure of growing media.'
    ]
  },
  'seeding-tray-media': {
    fullDescription: [
      'Субстрат SEHA для рассадных лотков предназначен для проращивания семян, размножения растений и выращивания рассады. Обработанный кокосовый торф удерживает влагу и пропускает воздух к корням на ранних этапах развития.\n\nРешения для коммерческих питомников, тепличных хозяйств и растениеводства подбирают под культуру, число и объём ячеек, размеры лотка и систему выращивания. Доступны разные конфигурации ячеек и параметры субстрата.\n\nПодходит для овощной, цветочной и декоративной рассады, тепличного выращивания и подготовки растений к пересадке. Предусмотрены оптовые поставки, коробки или паллетная упаковка в зависимости от типа лотка.',
      'SEHA Coco Pith Seeding Trays are designed for seed germination, seedling propagation and early-stage plant development. Using carefully processed coconut coir pith as the growing medium, these propagation solutions provide moisture retention and aeration to support healthy seedling growth.\n\nSuitable for commercial nurseries, greenhouse growers and horticultural operations, seeding tray solutions can be customised according to crop requirements, cell count, cell volume and growing system. Multiple cell configurations, tray sizes and growing-medium specifications are available.\n\nApplications include vegetable seedlings, flower and ornamental propagation, greenhouse cultivation, commercial nursery production and transplant preparation. Bulk supply is available in cartons or palletised packaging, depending on tray type.'
    ],
    description: [
      'Обработанный кокосовый торф для проращивания семян и выращивания рассады в многоклеточных лотках. Фракция субстрата и конфигурация системы подбираются под культуру и объём ячеек.',
      'Processed coco pith for seed germination and propagation in multi-cell trays. The growing-medium grade and system configuration are selected for the crop and cell volume.'
    ]
  },
  'young-coconut': {
    fullDescription: [
      'Молодые кокосы SEHA происходят из кокосоводческих регионов Индии. Плоды отбирают для свежего употребления и получения кокосовой воды по свежести, степени зрелости и требованиям покупателя.\n\nСорт, размер, массу, содержание воды и способ подготовки оболочки согласуют для партии. Возможны плоды с волокнистой оболочкой и очищенные форматы, в зависимости от наличия. После проверки качества кокосы упаковывают для перевозки. Условия хранения и срок годности зависят от степени очистки и логистики.',
      'SEHA young coconuts are sourced from coconut-growing regions of India. Fruit is selected for fresh consumption and coconut water according to freshness, maturity and buyer requirements.\n\nVariety, size, weight, water content and husk preparation are agreed for each shipment. With-husk and dehusked formats are offered subject to availability. Quality-checked fruit is packed for transport. Storage conditions and shelf life depend on preparation and logistics.'
    ],
    description: [
      'Молодые кокосы из Индии для свежего употребления и получения кокосовой воды. Сорт, степень зрелости, массу плода, содержание воды и формат очистки согласуем под заказ. Доступны оптовые поставки для ритейла, HoReCa и дистрибьюторов.',
      'Young coconuts from India for fresh consumption and coconut water extraction. Variety, maturity, fruit weight, water content and husk preparation are agreed to order. Bulk supply for retail, food service and distributors.'
    ]
  },
  'mature-coconut': {
    fullDescription: [
      'Зрелые кокосы SEHA из Индии отбирают для переработки мякоти и производства кокосового молока, масла и стружки. Для этой поставки важны полная зрелость, развитая мякоть и целая скорлупа без трещин.\n\nСорт, калибр, массу плода, требования к мякоти и очистке согласуют отдельно от молодых кокосов. Плоды проверяют на видимую плесень, серьёзные повреждения, загрязнения и поражение вредителями. Поставка возможна в экспортных коробках, сетчатых мешках или другой согласованной упаковке.',
      'SEHA mature coconuts from India are selected for kernel processing and production of coconut milk, coconut oil and desiccated coconut. Full maturity, developed kernels and sound, crack-free shells are the relevant selection criteria.\n\nVariety, size grade, fruit weight, kernel requirements and husk preparation are agreed separately from tender coconuts. Fruit is inspected for visible mould, serious damage, foreign material and pest infestation. Export cartons, mesh bags or other agreed packaging can be supplied.'
    ],
    description: [
      'Зрелые кокосы из Индии для переработки мякоти, производства кокосового молока, масла и стружки. Отбираются по зрелости, размеру и целостности скорлупы. Массу плода, требования к мякоти, очистку и экспортную упаковку согласуем отдельно.',
      'Mature coconuts from India for kernel processing and production of coconut milk, oil and desiccated coconut. Selected for maturity, size and shell integrity. Fruit weight, kernel requirements, husk preparation and export packaging are agreed separately.'
    ]
  },
  'veymur-coconut-sugar': {
    fullDescription: [
      'Органический кокосовый сахар SEHA получают из сока соцветий кокосовой пальмы. Он имеет золотисто-коричневый цвет, характерный аромат и сладкий вкус с карамельными нотами. Выпускается в гранулах или порошке, в зависимости от наличия.\n\nПодходит для напитков, выпечки, кондитерских изделий, десертов и пищевых рецептур. Можно подобрать мелкий, средний или крупный помол и пищевую упаковку для продажи в магазинах или использования на производстве. Органическая сертификация подтверждена документами.',
      'SEHA Organic Coconut Sugar is produced from the sap of coconut palm flower buds and processed into sweet granules with a characteristic golden-brown colour and caramel-like flavour. Granule and powder formats are offered subject to availability.\n\nSuitable for beverages, bakery products, confectionery, desserts and food formulations. Fine, medium or coarse granulation and food-grade retail or bulk packaging can be selected. Organic certification is supported by documents.'
    ],
    description: [
      'Сахар из сока соцветий кокосовой пальмы с карамельным вкусом. Выпускается в гранулах или порошке, в зависимости от наличия; используется в напитках, выпечке и кондитерских изделиях.',
      'Sugar made from coconut palm flower sap with a caramel-like flavour. Available as granules or powder, subject to availability, for beverages, baking and confectionery.'
    ]
  },
  'veymur-desiccated-coconut': {
    fullDescription: [
      'Органическую кокосовую стружку SEHA производят в Индии из мякоти зрелых кокосов: её измельчают и высушивают, сохраняя характерные кокосовые вкус и аромат. Стружка имеет естественный белый или кремово-белый цвет и сухую сыпучую структуру.\n\nМелкую, среднюю или крупную фракцию подбирают для выпечки, кондитерских изделий, шоколада, снеков и десертов. Доступна пищевая упаковка для розничной продажи и использования на производстве. Органическая сертификация подтверждена документами.',
      'SEHA Organic Desiccated Coconut is manufactured in India from mature coconut kernels that are processed and dried to retain their characteristic coconut flavour and aroma. It has a natural white to creamy-white colour and dry, free-flowing texture.\n\nFine, medium or coarse particle sizes suit bakery products, confectionery, chocolates, snacks and desserts. Food-grade retail and bulk packaging can be selected for manufacturers, distributors and retail brands. Organic certification is supported by documents.'
    ],
    description: [
      'Высушенная измельчённая мякоть зрелого кокоса с характерным вкусом и ароматом. Мелкая, средняя или крупная фракция — для выпечки, кондитерских изделий, шоколада, снеков и десертов.',
      'Dried, desiccated mature coconut kernel with a characteristic coconut flavour and aroma. Fine, medium or coarse grades for bakery, confectionery, chocolates, snacks and desserts.'
    ]
  },
  'veymur-coconut-milk': {
    fullDescription: [
      'Органическое кокосовое молоко SEHA производят в Индии из мякоти зрелых кокосов. Оно имеет характерный кокосовый вкус и аромат, однородную кремовую текстуру и цвет от белого до кремово-белого.\n\nПодходит для карри, супов, соусов, смузи, десертов, выпечки и пищевого производства. Формат пищевой упаковки подбирают с учётом рецептуры, способа обработки и назначения продукта. Органическая сертификация подтверждена документами.',
      'SEHA Organic Coconut Milk is made in India from mature coconut kernels. It delivers a characteristic coconut flavour and aroma, a smooth, creamy texture and a white to creamy-white colour.\n\nSuitable for curries, soups, sauces, smoothies, desserts, bakery products and food manufacturing. Food-grade packaging depends on the formulation, processing method and intended application. Organic certification is supported by documents.'
    ],
    description: [
      'Кокосовое молоко из мякоти зрелых кокосов — кремовая жидкость с характерным кокосовым вкусом. Для карри, супов, соусов, напитков, десертов и выпечки.',
      'Coconut milk made from mature coconut kernels: a smooth, creamy liquid with a characteristic coconut flavour. For curries, soups, sauces, drinks, desserts and baking.'
    ]
  },
  'veymur-virgin-coconut-oil': {
    fullDescription: [
      'Органическое нерафинированное кокосовое масло SEHA получают из свежей мякоти зрелых кокосов способом, сохраняющим характерные кокосовые вкус и аромат. Масло не проходит химическую рафинацию, отбеливание и дезодорацию. В тепле оно становится прозрачной жидкостью, а при охлаждении может естественно затвердевать.\n\nПроизводится в Индии для приготовления пищи, выпечки и пищевого производства. В зависимости от марки может использоваться в подходящих косметических рецептурах. Доступны пищевая готовая упаковка и транспортная тара. Органическая сертификация подтверждена документами.',
      'SEHA Organic Virgin Coconut Oil is produced from fresh, mature coconut kernels using an extraction process that preserves its characteristic coconut aroma and flavour. It is not chemically refined, bleached or deodorised. It is clear when warm and may naturally solidify when cool.\n\nManufactured in India for cooking, baking and food manufacturing, it can also serve as an ingredient in suitable personal-care formulations depending on grade and intended use. Food-grade retail and bulk packaging are available. Organic certification is supported by documents.'
    ],
    description: [
      'Масло из свежей мякоти зрелых кокосов, без рафинации, отбеливания и дезодорации. Сохраняет кокосовый вкус и аромат; подходит для приготовления пищи и выпечки.',
      'Oil from fresh, mature coconut kernels, without refining, bleaching or deodorisation. It retains its coconut flavour and aroma for cooking and baking.'
    ]
  },
  'veymur-mct-oil': {
    fullDescription: [
      'Органическое MCT-масло SEHA получают из кокосового масла с концентрированием среднецепочечных триглицеридов. Подтверждённый профиль жирных кислот: C8 — 55–65%, C10 — 35–45%, C12 — не более 1%. Это прозрачная бесцветная жидкость без вкуса и запаха.\n\nПроизводится в Индии для пищевых рецептур, отдельных напитков и специализированных продуктов питания. Поставляется производителям, дистрибьюторам и маркам заказчиков в пищевой готовой упаковке и транспортной таре. Органическая сертификация подтверждена документами.',
      'SEHA Organic MCT Coconut Oil is derived from coconut oil and processed to concentrate medium-chain triglycerides. Its confirmed fatty acid profile is C8 55–65%, C10 35–45% and C12 no more than 1%. It is a clear, colourless, odourless and tasteless liquid.\n\nManufactured in India for food formulations, selected beverages and specialised nutritional products. Food-grade retail and bulk formats serve manufacturers, distributors and private-label brands. Organic certification is supported by documents.'
    ],
    description: [
      'Масло из кокоса с концентрированными среднецепочечными триглицеридами C8 и C10. Прозрачная бесцветная жидкость без вкуса и запаха для пищевых рецептур, отдельных напитков и специализированных продуктов питания.',
      'Coconut-derived oil with concentrated C8 and C10 medium-chain triglycerides. A clear, colourless, odourless and tasteless liquid for food formulations, selected beverages and specialised nutritional products.'
    ]
  },
  'rbd-coconut-oil': {
    description: [
      'Органическое рафинированное кокосовое масло (RBD) получают из кокосового сырья с помощью рафинации, отбеливания и дезодорации. Обработка придаёт маслу чистый внешний вид и нейтральные вкус и аромат. Применяется в пищевом производстве и коммерческом приготовлении блюд.',
      'SEHA Organic RBD Coconut Oil is produced from carefully selected coconuts and processed through refining, bleaching and deodorisation to achieve a clean appearance and a neutral aroma and taste. It is suitable for food manufacturing, commercial food preparation and other approved food applications.'
    ]
  },
  'coir-weed-mat': {
    description: [
      'Покровный мат из натурального кокосового волокна для сельского хозяйства, питомников, садов и ландшафтных проектов. Закрывает поверхность почвы и пропускает воду и воздух; степень подавления сорняков и сокращения испарения зависит от плотности и конструкции мата.',
      'A ground-cover mat made from natural coconut coir fibre for agriculture, nurseries, gardens and landscaping. It covers the soil surface while allowing water and air to pass through; weed suppression and reduced evaporation depend on the mat construction and density.'
    ]
  },
  'coir-fiber-bales': {
    fullDescription: [
      'Кокосовое волокно SEHA получают из волокнистой оболочки кокоса путём выделения, очистки и сортировки. Грубый упругий материал используют для канатов, шпагата, щёток, матов, противоэрозионных изделий и отдельных растениеводческих задач.\n\nДоступны разные длины и марки волокна, в зависимости от наличия. Размеры тюка, массу и экспортную упаковку согласуют под производство заказчика. Прессованный формат удобен для оптовой перевозки. Волокно производится в Индии из возобновляемого растительного сырья.',
      'SEHA Coconut Coir Fibre Bales are produced in India from coconut husks through fibre extraction, cleaning and grading. The coarse, resilient material is used for ropes, twine, brushes, coir mats, erosion-control products and selected horticultural applications.\n\nDifferent fibre grades and lengths are available subject to supply. Bale dimensions, weight and export packing are agreed for the buyer’s production requirements. Compressed bales provide a practical bulk transport format using renewable plant-based material.'
    ],
    description: [
      'Волокно из волокнистой оболочки кокоса в тюках для производства канатов, шпагата, щёток, матов и противоэрозионных изделий. Длина волокна, размеры и масса тюка согласовываются при заказе.',
      'Coconut husk fibre in bales for ropes, twine, brushes, mats and erosion-control products. Fibre length, bale dimensions and weight are agreed when ordering.'
    ]
  },
  'coir-geo-textile': {
    fullDescription: [
      'Кокосовый геотекстиль SEHA — тканое сетчатое полотно из натурального кокосового волокна. Он помогает уменьшать смыв почвы, защищать открытые поверхности от дождя и стока воды и поддерживать закрепление растительности на склонах и берегах.\n\nОткрытая сетка пропускает воду. Материал биоразлагается; продолжительность службы зависит от плотности полотна и условий участка. Применяется в инфраструктурных, ландшафтных и берегозащитных проектах. Доступны плотности 400, 700 и 900 г/м²; размеры рулона и ячейки согласуют под проект.',
      'SEHA Coir Geotextiles are woven, open-mesh soil-protection materials made from natural coconut coir fibres. They help reduce soil loss, protect exposed surfaces from rain and runoff, and support vegetation establishment on slopes and riverbanks.\n\nThe open mesh allows water passage. The textile is biodegradable, with service life depending on grade and site conditions. Suitable for infrastructure, landscaping, riverbank protection and land restoration. Available fabric weights are 400, 700 and 900 g/m²; roll dimensions and mesh openings are agreed for the project.'
    ],
    description: [
      'Кокосовый геотекстиль — тканое сетчатое полотно из натурального кокосового волокна. Применяется для контроля эрозии, стабилизации склонов, защиты берегов и поддержки роста растительности. Открытая структура пропускает воду; срок биоразложения зависит от плотности полотна и условий на участке.',
      'Woven open-mesh geotextile made from natural coconut coir fibre. Used for erosion control, slope stabilisation, riverbank protection and vegetation support. The mesh allows water to pass through; biodegradation time depends on the fabric grade and site conditions.'
    ]
  },
  'coco-shell-charcoal-briquettes': {
    fullDescription: [
      'Угольные брикеты SEHA производят из угля кокосовой скорлупы. Сырьё обрабатывают и прессуют в брикеты одинаковой формы, удобные для хранения, перевозки и использования в грилях и барбекю.\n\nФорму — куб, шестигранник, подушечку или другую — размеры, плотность, связующее и упаковку согласуют под применение. Продолжительность и характер горения зависят от марки, размера, плотности и подачи воздуха. Возможна упаковка во внутренний пакет с коробкой или экспортный мешок.',
      'SEHA charcoal briquettes are manufactured from coconut shell charcoal, processed and compressed into uniform shapes for convenient storage, transport and use in grills and barbecues.\n\nCube, hexagonal, pillow or custom shapes, dimensions, density, binder and packaging can be specified for the application. Burning performance and duration depend on grade, size, density and airflow. Inner polybags with cartons or export sacks can be supplied.'
    ],
    description: [
      'Брикеты из угля кокосовой скорлупы для гриля и барбекю. Прессованный формат удобен для хранения и использования. Форму, размеры и упаковку согласуем при заказе.',
      'Coconut shell charcoal briquettes for grilling and barbecues. The compressed format is convenient to store and handle. Shape, dimensions and packaging are agreed when ordering.'
    ]
  },
  'coco-shell-activated-carbon': {
    fullDescription: [
      'Активированный уголь SEHA — пористый адсорбент из кокосовой скорлупы, полученный карбонизацией и активацией. Развитая внутренняя поверхность и микропоры позволяют удерживать растворённые органические соединения, нежелательные запахи и другие загрязнения — в зависимости от марки и среды.\n\nПрименяется для очистки воды, воздуха и газов, промышленной фильтрации и улавливания растворителей. Кокосовый уголь ценится за твёрдость и стойкость гранул к истиранию. Доступны гранулированные, порошковые и специализированные марки, в зависимости от наличия; фракцию, обработку и упаковку подбирают под процесс.',
      'SEHA Coco Shell Activated Carbon is a porous adsorbent produced from coconut shells through carbonisation and activation. Its developed internal surface and microporous structure adsorb dissolved organic compounds, unwanted odours and other contaminants depending on grade and application.\n\nUsed in water purification, air and gas treatment, industrial filtration and solvent recovery. Coconut shell carbon is valued for hardness and abrasion resistance. Granular, powdered and application-specific grades are offered subject to availability, with particle size, activation and packaging selected for the process.'
    ],
    description: [
      'Активированный уголь SEHA изготавливается из кокосовой скорлупы методом карбонизации и активации. Пористая структура используется для адсорбции загрязнений, органических соединений и нежелательных запахов; эффективность зависит от марки и условий применения. Выпускается в гранулированном или порошкообразном виде, если соответствующая марка доступна.',
      'SEHA Coco Shell Activated Carbon is produced from coconut shells through carbonisation and activation. Its porous structure is used to adsorb contaminants, organic compounds and unwanted odours; performance depends on grade and application. Granular or powdered forms are available where the relevant grade is offered.'
    ]
  },
  'machine-twisted-fiber': {
    fullDescription: [
      'Машинно-скрученное кокосовое волокно SEHA производится из натурального волокна оболочки кокоса на оборудовании для механической скрутки. Скрученные пряди используют для изготовления канатов, шпагата, матов, сеток, щёток и противоэрозионных изделий.\n\nДиаметр, длину, степень скрутки и упаковку подбирают под требования производства. Материал из возобновляемого кокосового сырья может заменять синтетические материалы в подходящих применениях. Доступны оптовые и экспортные поставки из Индии.',
      'SEHA Coir Machine Twisted Fibre is manufactured from natural coconut husk fibres using mechanical twisting machinery to produce uniform coir strands. It is used in rope and twine manufacturing, mats, nets, brushes and erosion-control products.\n\nDiameter, length, twist level and packaging are customised for the manufacturing process. Renewable coconut-derived fibre can replace synthetic materials in suitable applications. Bulk and export supply is available from India.'
    ],
    description: [
      'Механически скрученное волокно из волокнистой оболочки кокоса для производства канатов, шпагата, матов, сеток и противоэрозионных изделий. Диаметр, длина и степень скрутки — по спецификации заказчика.',
      'Mechanically twisted coconut husk fibre for ropes, twine, mats, nets and erosion-control products. Diameter, length and twist level are specified to order.'
    ]
  }
};
