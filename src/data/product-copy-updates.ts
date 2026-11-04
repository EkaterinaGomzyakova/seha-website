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
      'Гроубэг SEHA — мешок с кокосовым субстратом для теплиц и беспочвенного выращивания клубники, томатов, огурцов и других культур. Торф удерживает влагу, а волокно и чипсы поддерживают аэрацию и дренаж.\n\nСостав по объёму, фракцию, размеры и отверстия подбираем под культуру и систему выращивания. Субстрат промыт, буферизация доступна по запросу. Подходит для капельного полива и подачи удобрений с поливной водой.',
      'SEHA grow bags contain coconut substrate for greenhouse and soilless cultivation of strawberries, tomatoes, cucumbers and other crops. Pith retains moisture, while fibre and chips support aeration and drainage.\n\nThe blend by volume, particle grade, dimensions and holes are tailored to the crop and growing system. The substrate is washed; buffering is available on request. Suitable for drip irrigation and fertigation.'
    ]
  },
  'grow-cube-sleeve': {
    description: [
      'Кокосовый рассадный кубик из смеси чипсов, волокон и торфа в нетканой оболочке. Для доращивания томатов, огурцов и перца с последующей пересадкой целым кубом в гроубэг.',
      'A propagation cube of chips, fibre and coco pith in a non-woven sleeve. For growing on tomato, cucumber and pepper transplants before moving the whole cube into a grow bag.'
    ],
    fullDescription: [
      'Кубический субстрат SEHA — кокосовый рассадный кубик из крупной смеси чипсов, волокон и торфа в нетканой УФ-стабилизированной оболочке. Формат предназначен для доращивания рассады в профессиональных теплицах и гидропонных системах, особенно томатов, огурцов и перца.\n\nЦентральное отверстие служит для установки подросшего растения в небольшой кокосовой или минераловатной пробке. Размер отверстия подбирают под посадочную пробку; оболочка удерживает форму куба при поливе и переносе. Описанный размер после увлажнения — 10 × 10 × 10 см, объём около 1 л; другие размеры согласуют по заказу.\n\nКогда корни освоят куб, его целиком устанавливают на подготовленный горизонтальный мат или размещают в открытом гроубэге, обеспечивая контакт с влажным субстратом. Корневой ком не разбирают.',
      'SEHA Grow Cube is a propagation block made from a coarse blend of chips, fibre and coco pith in a UV-stabilised non-woven sleeve. It is designed for growing on transplants in professional greenhouses and hydroponic systems, particularly tomatoes, cucumbers and peppers.\n\nThe central opening receives an established plant in a small coir or stonewool plug. Opening size is matched to the planting plug, while the sleeve holds the cube together during irrigation and handling. The described hydrated size is 10 × 10 × 10 cm, approximately 1 L; other sizes can be agreed to order.\n\nOnce roots establish, place the complete cube on a prepared horizontal slab or into an open-top grow bag, ensuring contact with moist medium without breaking up the root ball.'
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
      'Открытый гроубэг SEHA — вертикальный мешок с кокосовым субстратом для голубики, малины и других культур. Промытый торф удерживает влагу, чипсы поддерживают аэрацию, а дренажные отверстия отводят лишнюю воду.\n\nПример состава — 60% торфа и 40% чипсов по объёму, рабочий объём — 10 л. Размеры, объём, фракцию и pH подбираем под заказ. Буферизация доступна по запросу. Мешок изготовлен из трёхслойной LDPE-плёнки, подходит для капельного полива. Отдельное растение можно переместить или заменить без нарушения соседних посадок.',
      'SEHA Open-Top Grow Bags are upright bags of coconut substrate for blueberries, raspberries and other crops. Washed pith retains moisture, chips support aeration, and drainage holes release excess water.\n\nAn example blend is 60% pith and 40% chips by volume, with a 10 L working volume. Dimensions, volume, particle grade and pH are tailored to the order. Buffering is available on request. The three-layer LDPE bag suits drip irrigation, and individual plants can be moved or replaced without disturbing neighbouring plants.'
    ],
    description: [
      'Открытый гроубэг для голубики, малины и других культур. Промытый кокосовый субстрат в трёхслойном LDPE-мешке с дренажом. Состав, объём и pH подбираем под заказ.',
      'An open-top grow bag for blueberries, raspberries and other crops. Washed coconut substrate in a three-layer LDPE bag with drainage. Blend, volume and pH are tailored to order.'
    ]
  },
  'coco-coir-discs': {
    fullDescription: [
      'Кокосовые диски SEHA — круглые прессованные заготовки без наружной удерживающей оболочки. Они состоят из тщательно промытого кокосового торфа и коротких волокон и предназначены прежде всего для заполнения небольших горшков, кашпо и рассадных стаканчиков.\n\nДиск подбирают под диаметр дна ёмкости, кладут внутрь и постепенно увлажняют. Он раскрывается в рыхлый субстрат и заполняет горшок, а не сохраняет самостоятельную форму цилиндра. Более волокнистую структуру и фракцию можно подобрать под культуру.\n\nДиск также можно раскрыть отдельно в чистой ёмкости, а полученный торф использовать для наполнения кассет или составления смеси с грунтом. Доли компонентов рассчитывают по объёму.',
      'SEHA Coco Coir Discs are round compressed blanks without an outer retaining sleeve. They contain thoroughly washed coco pith and short fibres, primarily for filling small pots, planters and propagation cups.\n\nChoose a disc for the container base diameter, place it inside and add water gradually. It expands into loose medium filling the pot rather than retaining a freestanding cylinder shape. The fibrous structure and particle grade can be matched to the crop.\n\nA disc can also be expanded separately in a clean container, then used to fill trays or blend with potting soil. Component ratios are calculated by volume.'
    ],
    description: [
      'Прессованные кокосовые диски без наружной оболочки для заполнения горшков и рассадных стаканчиков. После увлажнения превращаются в рыхлую смесь кокосового торфа и коротких волокон.',
      'Compressed coir discs without an outer sleeve for filling pots and propagation cups. Hydration releases a loose blend of coco pith and short fibres.'
    ]
  },
  'coco-peat-tablets': {
    fullDescription: [
      'Кокосовые таблетки SEHA производятся из обработанного кокосового торфа и прессуются в компактные формы для проращивания семян, размножения растений и выращивания рассады в питомниках.\n\nПри увлажнении таблетки расширяются и образуют влагоёмкий субстрат, который пропускает воздух и поддерживает раннее развитие корней. Компактный формат удобен для хранения, перевозки и использования в рассадных лотках, горшках, наборах для выращивания и профессиональном растениеводстве.\n\nПрименяются для овощной и цветочной рассады, проращивания семян, тепличного и домашнего выращивания. Доступны разные диаметры и масса. Субстрат тщательно промыт; варианты EC согласуются по спецификации. упаковка по заказу и выпуск под маркой заказчика.',
      'SEHA Coco Peat Tablets are manufactured from carefully processed coconut coir pith and compressed into convenient tablet formats for seed germination, plant propagation and nursery production.\n\nWhen hydrated, the tablets expand to form a moisture-retentive growing medium that supports aeration and early root development. Their compact design makes them easy to store, transport and use in seedling trays, pots, propagation kits and professional horticultural applications.\n\nApplications include vegetable seedlings, flower seeds, nurseries, greenhouse propagation and home gardening. The substrate is thoroughly washed. Tablet diameters, weights, low-EC grades, packaging and private-label options are selected according to specification.'
    ],
    description: [
      'Прессованные таблетки из кокосового торфа для проращивания семян и рассады. После увлажнения расширяются; используются в лотках, горшках и наборах для выращивания.',
      'Compressed coco pith tablets for seed germination and propagation. They expand with water for use in seedling trays, pots and propagation kits.'
    ]
  },
  'coco-peat-compost': {
    fullDescription: [
      'Компост из кокосового торфа SEHA состоит из чистого переработанного кокосового торфа, без добавления других компостов. Тщательно промытый и просеянный материал удерживает влагу и формирует рыхлую основу для горшечных смесей.\n\nПодходит для выращивания рассады, овощей, зелени и декоративных растений в питомниках, теплицах и контейнерах. Фракцию подбирают под культуру и требования заказчика. Упаковку согласуют под формат поставки; состав питания и наличие удобрений уточняют отдельно.',
      'SEHA Coco Peat Compost is pure processed coco pith with no other composts added. Thorough washing and screening produce a moisture-retentive, loose base for potting mixes.\n\nSuitable for seedlings, vegetables, herbs and ornamental plants in nurseries, greenhouses and containers. Particle grade is customised for crop and buyer requirements. Packaging is agreed for the supply format; nutrient content and any added fertiliser are confirmed separately.'
    ],
    description: [
      'Чистый переработанный кокосовый торф без добавления других компостов. Тщательно промыт; для горшечных смесей, рассады и тепличного выращивания.',
      'Pure processed coco pith with no other composts added. Thoroughly washed for potting mixes, seedlings and greenhouse cultivation.'
    ]
  },
  'seeding-tray-media': {
    fullDescription: [
      'Кассетная вставка SEHA — цельная сухая жёсткая плита-матрица из тщательно промытого прессованного кокосового субстрата мелкой фракции. На ней сформованы ряды квадратных или круглых ячеек под определённую модель пластиковой или пенопластовой кассеты.\n\nВкладыш укладывают целиком в совместимый лоток и увлажняют капельным поливом или подтоплением. Плита раскрывается внутри кассеты; перегородки лотка разделяют увлажнённый субстрат на ячейки. Ручная засыпка и уплотнение каждой ячейки не требуются. После подготовки можно сеять вручную или сеялкой.\n\nДля пересадки укоренённые комы аккуратно разделяют по границам ячеек, сохраняя корни. Вкладыши поставляются стопками сухих прессованных блоков. Пластиковый или пенопластовый лоток в комплект не входит; совместимость с моделью кассеты согласуют до заказа.',
      'SEHA cassette inserts are single rigid dry matrix plates of thoroughly washed, fine compressed coco substrate. Rows of square or round cell forms are moulded for a specified plastic or foam propagation tray.\n\nPlace the complete insert in a compatible tray and hydrate by drip irrigation or subirrigation. The plate expands inside the tray, whose dividers separate the hydrated medium into cells. There is no need to hand-fill or compact each cell. The prepared medium is ready for manual or machine sowing.\n\nFor transplanting, carefully separate rooted plugs along cell boundaries while preserving roots. Inserts are supplied in stacks of dry compressed blocks. Plastic or foam trays are not included; tray-model compatibility is agreed before ordering.'
    ],
    description: [
      'Цельный сухой прессованный кокосовый вкладыш для совместимой рассадной кассеты. После увлажнения заполняет её ячейки и готов к посеву. Лоток не входит.',
      'A one-piece dry compressed coir insert for a compatible propagation tray. It expands into the cells when hydrated, ready for sowing. Tray not included.'
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
      'Органическое нерафинированное кокосовое масло SEHA получают из свежей мякоти зрелых кокосов холодным отжимом, сохраняющим характерные кокосовые вкус и аромат. Масло не проходит химическую рафинацию, отбеливание и дезодорацию. В тепле оно становится прозрачной жидкостью, а при охлаждении может естественно затвердевать.\n\nПроизводится в Индии для приготовления пищи, выпечки и пищевого производства. В зависимости от марки может использоваться в подходящих косметических рецептурах. Доступны пищевая готовая упаковка и транспортная тара. Органическая сертификация подтверждена документами.',
      'SEHA Organic Virgin Coconut Oil is produced from fresh, mature coconut kernels by cold pressing, preserving its characteristic coconut aroma and flavour. It is not chemically refined, bleached or deodorised. It is clear when warm and may naturally solidify when cool.\n\nManufactured in India for cooking, baking and food manufacturing, it can also serve as an ingredient in suitable personal-care formulations depending on grade and intended use. Food-grade retail and bulk packaging are available. Organic certification is supported by documents.'
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
