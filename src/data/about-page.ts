import type { Locale } from './translations';

const ru = {
  title: 'О компании — Сеха',
  description:
    'SEHA — производство кокосовой продукции в Индии, импорт в Россию и сопровождение заказа командой в Москве.',
  skipText: 'К подходу',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'О компании',
  aboutHeroTitle: 'О компании',
  aboutHeroText:
    'Производим кокосовые продукты в Индии и поставляем в Россию. Команда в Москве сопровождает ваш заказ.',
  aboutIntroAlt: 'Кокосовые пальмы на плантации SEHA в Индии',
  aboutIntroCaption: 'Пищевые, агро- и промышленные продукты из одного сырья.',
  aboutIntroHeading: 'Производим и',
  aboutIntroLabel2: 'поставляем кокосовые продукты',
  aboutIntroText:
    'Группа компаний СЕХА производит кокосовую продукцию в Поллачи, Индия, и поставляет её в Россию. Выпускаем пищевые продукты Veymur, субстраты для выращивания, изделия из кокосового волокна и продукты из скорлупы.',
  aboutIntroText2:
    'Работаем от выращивания кокосов до переработки и фасовки готовой продукции. Команда в Москве помогает выбрать продукт, согласовать характеристики, упаковку и документы и организует поставку.',
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
    'Наши корни — в сельском хозяйстве. Фермерский опыт и контроль от сбора урожая до готовой продукции помогают подбирать сырьё и решения под задачи заказчиков.',
  aboutApproachCardTitle2: 'Спецификация раньше цены',
  aboutApproachText3:
    'Цена зависит от категории, фракции, упаковки, объема, курса, логистики и документов. Коммерческое предложение собирается под реальный запрос.',
  aboutApproachCardTitle3: 'Вся ценность кокоса',
  aboutApproachText4:
    'Мякоть, волокно и скорлупа становятся разными продуктами: пищевыми ингредиентами, материалами для выращивания и сырьем для промышленного применения.',
  aboutApproachCardTitle4: 'Индивидуальное решение',
  aboutApproachText5:
    'Для растениеводства подбираем состав субстрата, pH, EC, фракцию и соотношение волокна и чипсов. Размеры гроубэгов, отверстия и упаковку согласовываем под культуру и систему выращивания.',
  aboutShiftLabel: 'Наш подход',
  aboutShiftHeading: 'От сырья',
  aboutShiftEmphasis: 'к коммерческому решению',
  aboutShiftText:
    'Мы смотрим на кокосовую продукцию как на часть цепочки клиента: рецептуры, выращивания, производства, складской обработки и дальнейшей продажи.',
  aboutShiftAlt: 'Производственные здания SEHA среди кокосовых плантаций в Индии',
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
    'Расскажите, какой продукт нужен, какой объем рассматриваете и куда нужна доставка. Мы уточним параметры и подготовим коммерческое предложение.',
  certPreviewLink: 'Получить предложение'
} as const;

export type AboutPageCopy = { readonly [Key in keyof typeof ru]: string };

const en = {
  title: 'About Seha — Coconut Products and B2B Supply',
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
    'SEHA Group of Companies manufactures coconut products in Pollachi, India, and supplies them to Russia. Our range includes Veymur food products, growing substrates, coir fibre products and coconut shell products.',
  aboutIntroText2:
    'Our work covers coconut cultivation, processing and packing of finished products. Our Moscow team helps customers choose products, agree on specifications, packaging and documents, and arrange delivery.',
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
    'Our roots are in agriculture. Farming experience and control from harvesting to finished products help us select raw materials and solutions for our customers’ needs.',
  aboutApproachCardTitle2: 'Specifications before price',
  aboutApproachText3:
    'Price depends on the category, particle size, packaging, volume, exchange rate, logistics and documents. A quotation is prepared for an actual request.',
  aboutApproachCardTitle3: 'The full value of coconut',
  aboutApproachText4:
    'Flesh, fibre and shell become different products: food ingredients, growing materials and raw materials for industrial applications.',
  aboutApproachCardTitle4: 'A tailored solution',
  aboutApproachText5:
    'For horticulture, we tailor substrate composition, pH, EC, particle size and the fibre-to-chip ratio. Grow bag dimensions, openings and packaging are agreed for the crop and growing system.',
  aboutShiftLabel: 'Our approach',
  aboutShiftHeading: 'From raw material',
  aboutShiftEmphasis: 'to a commercial solution',
  aboutShiftText:
    'We view coconut products as part of the customer’s chain: formulation, growing, manufacturing, warehouse handling and onward sale.',
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
  aboutTimelineCardTitle4: 'Seha in Russia',
  aboutTimelineText4:
    'SEHA manufactures in India and imports its products into Russia. The Moscow team helps customers choose products and manages orders through to delivery. Exports reach more than 25 countries.',
  certPreviewLabel: 'Next step',
  certPreviewHeading: 'Tell us what you need,',
  certPreviewLabel2: 'we will find the right product',
  certPreviewText:
    'Tell us which product you need, the volume you are considering and where it should be delivered. We will clarify the parameters and prepare a quotation.',
  certPreviewLink: 'Request a quote'
} satisfies AboutPageCopy;

export const aboutPageCopy = { ru, en } satisfies Record<Locale, AboutPageCopy>;
