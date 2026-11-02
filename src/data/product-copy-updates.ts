// Client-supplied product descriptions. Stable names, IDs and images are in products.ts.
// Technical data is maintained in product-specifications.ts.
interface ProductCopyUpdate {
  description: [ru: string, en: string];
  fullDescription?: [ru: string, en: string];
}
export const productCopyUpdates: Record<string, ProductCopyUpdate> = {
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
    description: [
      'Молодые кокосы из Индии для свежего употребления и получения кокосовой воды. Сорт, степень зрелости, массу плода, содержание воды и формат очистки согласуем под заказ. Доступны оптовые поставки для ритейла, HoReCa и дистрибьюторов.',
      'Young coconuts from India for fresh consumption and coconut water extraction. Variety, maturity, fruit weight, water content and husk preparation are agreed to order. Bulk supply for retail, food service and distributors.'
    ]
  },
  'mature-coconut': {
    description: [
      'Зрелые кокосы из Индии для переработки мякоти, производства кокосового молока, масла и стружки. Отбираются по зрелости, размеру и целостности скорлупы. Массу плода, требования к мякоти, очистку и экспортную упаковку согласуем отдельно.',
      'Mature coconuts from India for kernel processing and production of coconut milk, oil and desiccated coconut. Selected for maturity, size and shell integrity. Fruit weight, kernel requirements, husk preparation and export packaging are agreed separately.'
    ]
  },
  'veymur-coconut-sugar': {
    description: [
      'Сахар из сока соцветий кокосовой пальмы с карамельным вкусом. Выпускается в гранулах или порошке, в зависимости от наличия; используется в напитках, выпечке и кондитерских изделиях.',
      'Sugar made from coconut palm flower sap with a caramel-like flavour. Available as granules or powder, subject to availability, for beverages, baking and confectionery.'
    ]
  },
  'veymur-desiccated-coconut': {
    description: [
      'Высушенная измельчённая мякоть зрелого кокоса с характерным вкусом и ароматом. Мелкая, средняя или крупная фракция — для выпечки, кондитерских изделий, шоколада, снеков и десертов.',
      'Dried, desiccated mature coconut kernel with a characteristic coconut flavour and aroma. Fine, medium or coarse grades for bakery, confectionery, chocolates, snacks and desserts.'
    ]
  },
  'veymur-coconut-milk': {
    description: [
      'Кокосовое молоко из мякоти зрелых кокосов — кремовая жидкость с характерным кокосовым вкусом. Для карри, супов, соусов, напитков, десертов и выпечки.',
      'Coconut milk made from mature coconut kernels: a smooth, creamy liquid with a characteristic coconut flavour. For curries, soups, sauces, drinks, desserts and baking.'
    ]
  },
  'veymur-virgin-coconut-oil': {
    description: [
      'Масло из свежей мякоти зрелых кокосов, без рафинации, отбеливания и дезодорации. Сохраняет кокосовый вкус и аромат; подходит для приготовления пищи и выпечки.',
      'Oil from fresh, mature coconut kernels, without refining, bleaching or deodorisation. It retains its coconut flavour and aroma for cooking and baking.'
    ]
  },
  'veymur-mct-oil': {
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
    description: [
      'Волокно из волокнистой оболочки кокоса в тюках для производства канатов, шпагата, щёток, матов и противоэрозионных изделий. Длина волокна, размеры и масса тюка согласовываются при заказе.',
      'Coconut husk fibre in bales for ropes, twine, brushes, mats and erosion-control products. Fibre length, bale dimensions and weight are agreed when ordering.'
    ]
  },
  'coir-geo-textile': {
    description: [
      'Кокосовый геотекстиль — тканое сетчатое полотно из натурального кокосового волокна. Применяется для контроля эрозии, стабилизации склонов, защиты берегов и поддержки роста растительности. Открытая структура пропускает воду; срок биоразложения зависит от плотности полотна и условий на участке.',
      'Woven open-mesh geotextile made from natural coconut coir fibre. Used for erosion control, slope stabilisation, riverbank protection and vegetation support. The mesh allows water to pass through; biodegradation time depends on the fabric grade and site conditions.'
    ]
  },
  'coco-shell-charcoal-briquettes': {
    description: [
      'Брикеты из угля кокосовой скорлупы для гриля и барбекю. Прессованный формат удобен для хранения и использования. Форму, размеры и упаковку согласуем при заказе.',
      'Coconut shell charcoal briquettes for grilling and barbecues. The compressed format is convenient to store and handle. Shape, dimensions and packaging are agreed when ordering.'
    ]
  },
  'coco-shell-activated-carbon': {
    description: [
      'Активированный уголь SEHA изготавливается из кокосовой скорлупы методом карбонизации и активации. Пористая структура используется для адсорбции загрязнений, органических соединений и нежелательных запахов; эффективность зависит от марки и условий применения. Выпускается в гранулированном или порошкообразном виде, если соответствующая марка доступна.',
      'SEHA Coco Shell Activated Carbon is produced from coconut shells through carbonisation and activation. Its porous structure is used to adsorb contaminants, organic compounds and unwanted odours; performance depends on grade and application. Granular or powdered forms are available where the relevant grade is offered.'
    ]
  },
  'machine-twisted-fiber': {
    description: [
      'Механически скрученное волокно из волокнистой оболочки кокоса для производства канатов, шпагата, матов, сеток и противоэрозионных изделий. Диаметр, длина и степень скрутки — по спецификации заказчика.',
      'Mechanically twisted coconut husk fibre for ropes, twine, mats, nets and erosion-control products. Diameter, length and twist level are specified to order.'
    ]
  }
};
