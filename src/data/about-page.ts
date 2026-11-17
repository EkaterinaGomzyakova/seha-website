import type { Locale } from './translations';

const ru = {
  title: 'О компании — СЕХА',
  description:
    'СЕХА — производство кокосовой продукции в Индии, импорт в Россию и сопровождение заказа командой в Москве.',
  skipText: 'К подходу',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'О компании',
  aboutHeroTitle: 'О компании',
  aboutHeroText:
    'Производим кокосовые продукты в Индии и поставляем в Россию. Команда в Москве сопровождает ваш заказ.',
  aboutIntroAlt: 'Кокосовые пальмы на плантации СЕХА в Индии',
  aboutIntroCaption: 'Пищевые, агро- и промышленные продукты из одного сырья.',
  aboutIntroHeading: 'Производим и',
  aboutIntroLabel2: 'поставляем кокосовые продукты',
  aboutIntroText:
    'Более 40 лет группа компаний СЕХА выращивает кокосы и производит кокосовую продукцию в Поллачи, Индия. СЕХА принадлежит бренд пищевых продуктов из кокоса Veymur™: масла МСТ, RBD и Virgin, кокосовая стружка и молоко. Также производим субстраты, изделия из волокна и продукты из скорлупы.',
  aboutIntroText2:
    'СЕХА производит продукцию в Индии, импортирует её в Россию и принимает заказы. Команда СЕХА в Москве помогает выбрать продукт, согласовать характеристики, упаковку и документы и организует поставку. Работаем с оптовыми поставками для бизнеса.',
  aboutProductionAddressLabel: 'Производство в Индии',
  aboutNumbersAriaLabel: 'Ключевые факты',
  aboutNumbersLabel: 'лет опыта в кокосовой отрасли',
  aboutNumbersLabel2: 'регион происхождения сырья и\nпроизводства',
  aboutNumbersValue3: '200+',
  aboutNumbersLabel3: 'сотрудников на площадке\nсубстратов в Индии',
  aboutNumbersValue4: 'Около 10 га',
  aboutNumbersLabel4: 'площадь кокосовых плантаций',
  aboutApproachHeading: 'Принципы',
  aboutApproachLabel3: 'работы',
  aboutApproachCardTitle: 'Происхождение имеет значение',
  aboutApproachText2:
    'За четыре десятилетия накопили опыт селекции, отбора и сушки кокосов. Контролируем путь от плантации до переработки: зрелость сырья и бережная подготовка помогают поддерживать стабильные вкус и аромат от партии к партии.',
  aboutApproachCardTitle2: 'Спецификация раньше цены',
  aboutApproachText3:
    'Стоимость рассчитываем с учётом продукта, упаковки, объёма и доставки. Для оптовых закупок предлагаем скидки, а для регулярных поставок — долгосрочные контракты с согласованными ценами и графиком отгрузок.',
  aboutApproachCardTitle3: 'Вся ценность кокоса',
  aboutApproachText4:
    'Мякоть, волокно и скорлупа становятся разными продуктами: пищевыми ингредиентами, материалами для выращивания и сырьем для промышленного применения.',
  aboutApproachCardTitle4: 'Индивидуальное решение',
  aboutApproachText5:
    'Подбираем состав и формат субстратов под культуру и систему выращивания. Для пищевого производства консультируем по замене животных жиров и ингредиентов с трансжирами кокосовыми маслами, помогаем разработать рецептуру под вашу технологию.',
  aboutShiftLabel: 'Наш подход',
  aboutShiftHeading: 'Используем',
  aboutShiftEmphasis: 'разные части кокоса',
  aboutShiftText:
    'Кокос — возобновляемое растительное сырьё. Из мякоти мы выпускаем пищевые продукты, из волокнистой оболочки — субстраты, маты и геотекстиль, из скорлупы — уголь и активированный уголь. Переработка разных частей плода помогает полнее использовать урожай и сокращать количество отходов.',
  aboutShiftAlt: 'Производственные здания СЕХА среди кокосовых плантаций в Индии',
  aboutTimelineLabel: 'Наш опыт',
  aboutTimelineLabel3: '1980-е',
  aboutTimelineCardTitle: 'Начало работы в Поллачи',
  aboutTimelineText:
    'В Поллачи начинается работа с кокосовым сырьём. Накапливается практический опыт его отбора и подготовки к переработке.',
  aboutTimelineLabel4: '2000-е',
  aboutTimelineCardTitle2: 'Развитие работы с сырьём',
  aboutTimelineText2:
    'Расширяется работа на юге Индии. Совершенствуются отбор сырья, его подготовка и контроль характеристик партий.',
  aboutTimelineCardTitle3: 'Собственное производство',
  aboutTimelineText3:
    'Открывается специализированная площадка для переработки кокосового сырья, контроля качества и подготовки продукции к экспорту.',
  aboutTimelineLabel5: 'Сейчас',
  aboutTimelineCardTitle4: 'СЕХА в России',
  aboutTimelineText4:
    'СЕХА выпускает продукцию в Индии и импортирует её в Россию. Команда в Москве помогает выбрать продукт и сопровождает заказ до поставки. География экспорта — более 25 стран.',
  certPreviewLabel: 'Следующий шаг',
  certPreviewHeading: 'Начнём с вашей задачи,',
  certPreviewLabel2: 'подберём продукт',
  certPreviewText:
    'Расскажите о продукте, объёме и месте доставки — подготовим коммерческое предложение и образцы. Для пищевой линейки проводим бесплатные дегустации и технологические консультации, чтобы вы могли оценить ингредиент в своей рецептуре.',
  certPreviewLink: 'Получить предложение'
} as const;

export type AboutPageCopy = { readonly [Key in keyof typeof ru]: string };

const en = {
  title: 'About SEHA — Coconut Products and B2B Supply',
  description:
    'SEHA manufactures coconut products in India, imports them into Russia and supports customers through its Moscow team.',
  skipText: 'Skip to our approach',
  pageAriaLabel: 'Breadcrumbs',
  pageLink: 'Home',
  pageLabel: 'About us',
  aboutHeroTitle: 'About us',
  aboutHeroText:
    'We make coconut products in India and supply them to Russia. Our Moscow team manages your order.',
  aboutIntroAlt: 'Coconut palms on the SEHA plantation in India',
  aboutIntroCaption: 'Food, agricultural and industrial products from a single raw material.',
  aboutIntroHeading: 'We produce and',
  aboutIntroLabel2: 'supply coconut products',
  aboutIntroText:
    'For over 40 years, SEHA Group has grown coconuts and manufactured coconut products in Pollachi, India. SEHA owns Veymur™, its coconut food products brand: MCT, RBD and Virgin oils, desiccated coconut and coconut milk. We also manufacture growing substrates, coir fibre and coconut shell products.',
  aboutIntroText2:
    'SEHA manufactures products in India, imports them into Russia and accepts orders. The SEHA team in Moscow helps customers choose products, agree on specifications, packaging and documents, and arrange delivery. We supply coconut products to businesses wholesale.',
  aboutProductionAddressLabel: 'Manufacturing in India',
  aboutNumbersAriaLabel: 'Key facts',
  aboutNumbersLabel: 'years of experience in the coconut industry',
  aboutNumbersLabel2: 'region of origin of raw materials and manufacturing',
  aboutNumbersValue3: '200+',
  aboutNumbersLabel3: 'employees at the Indian substrate facility',
  aboutNumbersValue4: 'Approx. 10 ha',
  aboutNumbersLabel4: 'of coconut plantations',
  aboutApproachHeading: 'How',
  aboutApproachLabel3: 'we work',
  aboutApproachCardTitle: 'Origin matters',
  aboutApproachText2:
    'Four decades of experience in coconut selection, cultivation and drying underpin our work. We control the journey from plantation to processing: raw material maturity and careful preparation help maintain consistent flavour and aroma across batches.',
  aboutApproachCardTitle2: 'Specifications before price',
  aboutApproachText3:
    'Pricing reflects the product, packaging, volume and delivery. We offer wholesale discounts and long-term contracts with agreed prices and shipment schedules for recurring orders.',
  aboutApproachCardTitle3: 'The full value of coconut',
  aboutApproachText4:
    'Flesh, fibre and shell become different products: food ingredients, growing materials and raw materials for industrial applications.',
  aboutApproachCardTitle4: 'A tailored solution',
  aboutApproachText5:
    'We tailor substrate blends and formats to the crop and growing system. For food manufacturers, we advise on replacing animal fats and ingredients containing trans fats with coconut oils and help develop recipes for their processes.',
  aboutShiftLabel: 'Our approach',
  aboutShiftHeading: 'Making use of',
  aboutShiftEmphasis: 'different parts of the coconut',
  aboutShiftText:
    'Coconut is a renewable plant-based raw material. We use the kernel for food products, the fibrous husk for growing substrates, mats and geotextiles, and the shell for charcoal and activated carbon. Processing different parts of the fruit helps us make fuller use of the harvest and reduce waste.',
  aboutShiftAlt: 'SEHA manufacturing buildings among coconut plantations in India',
  aboutTimelineLabel: 'Our experience',
  aboutTimelineLabel3: '1980s',
  aboutTimelineCardTitle: 'Starting in Pollachi',
  aboutTimelineText:
    'Work with coconut raw materials begins in Pollachi, building practical experience in selection and preparation for processing.',
  aboutTimelineLabel4: '2000s',
  aboutTimelineCardTitle2: 'Developing raw material expertise',
  aboutTimelineText2:
    'Operations expand across southern India, with improvements in raw material selection, preparation and batch quality control.',
  aboutTimelineCardTitle3: 'Dedicated manufacturing',
  aboutTimelineText3:
    'A dedicated facility opens for coconut processing, quality control and preparation of products for export.',
  aboutTimelineLabel5: 'Today',
  aboutTimelineCardTitle4: 'SEHA in Russia',
  aboutTimelineText4:
    'SEHA manufactures in India and imports its products into Russia. The Moscow team helps customers choose products and manages orders through to delivery. Exports reach more than 25 countries.',
  certPreviewLabel: 'Next step',
  certPreviewHeading: 'Tell us what you need,',
  certPreviewLabel2: 'we will find the right product',
  certPreviewText:
    'Tell us the product, volume and delivery destination to receive a quotation and samples. We offer free tastings and technical consultations for the food range so you can evaluate an ingredient in your own formulation.',
  certPreviewLink: 'Request a quote'
} satisfies AboutPageCopy;

export const aboutPageCopy = { ru, en } satisfies Record<Locale, AboutPageCopy>;
