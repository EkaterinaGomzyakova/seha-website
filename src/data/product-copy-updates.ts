// Client-supplied product descriptions. Stable names, IDs and images are in products.ts.
// Technical data is maintained in product-specifications.ts.
interface ProductCopyUpdate {
  description: [ru: string, en: string];
}
export const productCopyUpdates: Record<string, ProductCopyUpdate> = {
  'coconut-chips': {
    description: [
      'Кусочки кокосовой шелухи, отсортированные по размеру. Помогают удерживать влагу, пропускают воздух к корням и отводят лишнюю воду. Используются как самостоятельный субстрат или в смеси с кокосовым торфом и грунтом — в теплицах, гидропонике и питомниках. Подходят для клубники и других ягодных культур, томатов, огурцов, орхидей и декоративных растений.',
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
    description: [
      'Прессованные круглые диски из кокосового торфа для проращивания семян и выращивания рассады. После увлажнения расширяются и образуют влагоёмкий субстрат.',
      'Compressed circular coco pith discs for seed germination and propagation. They expand with water to form a moisture-retentive growing medium.'
    ]
  },
  'coco-peat-tablets': {
    description: [
      'Прессованные таблетки из кокосового торфа для проращивания семян и рассады. После увлажнения расширяются; используются в лотках, горшках и наборах для выращивания.',
      'Compressed coco pith tablets for seed germination and propagation. They expand with water for use in seedling trays, pots and propagation kits.'
    ]
  },
  'coco-peat-compost': {
    description: [
      'Субстрат на основе обработанного кокосового торфа для горшечных смесей, рассады и теплиц. Удерживает влагу и улучшает аэрацию и физическую структуру смеси.',
      'A processed coco pith growing medium for potting mixes, seedlings and greenhouses. It improves moisture retention, aeration and the physical structure of growing media.'
    ]
  },
  'seeding-tray-media': {
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
      'Волокно из кокосовой шелухи в тюках для производства канатов, шпагата, щёток, матов и противоэрозионных изделий. Длина волокна, размеры и масса тюка согласовываются при заказе.',
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
      'Механически скрученное волокно из кокосовой шелухи для производства канатов, шпагата, матов, сеток и противоэрозионных изделий. Диаметр, длина и степень скрутки — по спецификации заказчика.',
      'Mechanically twisted coconut husk fibre for ropes, twine, mats, nets and erosion-control products. Diameter, length and twist level are specified to order.'
    ]
  }
};
