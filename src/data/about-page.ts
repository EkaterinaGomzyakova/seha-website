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
    'SEHA производит кокосовую продукцию в Индии, импортирует её в Россию и сопровождает заказ от подбора до поставки. С покупателями работает команда в Москве.',
  aboutIntroAlt: 'Кокосовые пальмы на плантации SEHA в Индии',
  aboutIntroCaption: 'Пищевые, агро- и промышленные продукты из одного сырья.',
  aboutIntroHeading: 'Производим и',
  aboutIntroLabel2: 'поставляем кокосовые продукты',
  aboutIntroText:
    'SEHA — производитель кокосовой продукции в Индии и её импортёр в Россию. Российская компания ведёт продажи и сопровождает всю сделку: подбор продукта, согласование характеристик, документы, расчёты и поставку.',
  aboutIntroText2:
    'Индийская компания SEHA выросла из семейного бизнеса одного из основателей с более чем 40-летним опытом в кокосовой отрасли. Сегодня у компании два основателя. Они работают в Индии, а менеджеры в Москве поддерживают связь с покупателями и производством в Поллачи, штат Тамилнад.',
  aboutNumbersAriaLabel: 'Ключевые факты',
  aboutNumbersLabel: 'лет опыта семейного бизнеса\nв Индии',
  aboutNumbersLabel2: 'регион происхождения сырья и\nпроизводства',
  aboutNumbersValue3: '200+',
  aboutNumbersLabel3: 'сотрудников на площадке\nсубстратов в Индии',
  aboutNumbersValue4: 'Около 10 га',
  aboutNumbersLabel4: 'площадь производства\nсубстратов',
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
  aboutShiftEmphasis: 'к коммерческому решению.',
  aboutShiftText:
    'Мы смотрим на кокосовую продукцию как на часть цепочки клиента: рецептуры, выращивания, производства, складской обработки и дальнейшей продажи.',
  aboutShiftAlt: 'Производственные здания SEHA среди кокосовых плантаций в Индии',
  aboutTimelineLabel: 'Наш опыт',
  aboutTimelineLabel3: '1980-е',
  aboutTimelineCardTitle: 'Начало в кокосовой отрасли',
  aboutTimelineText:
    'Семья начинает работать с кокосами в Поллачи. Сотрудничество с местными фермерами закладывает основу будущего производства.',
  aboutTimelineLabel4: '2000-е',
  aboutTimelineCardTitle2: 'Развитие торговли и контроля',
  aboutTimelineText2:
    'Торговля кокосовым сырьём на юге Индии помогает выстроить отбор сырья и контроль качества партий.',
  aboutTimelineCardTitle3: 'Современная производственная база',
  aboutTimelineText3:
    'Семейное дело переходит к специализированному производству с оборудованием для переработки, контроля качества и подготовки экспортных партий.',
  aboutTimelineLabel5: 'Сейчас',
  aboutTimelineCardTitle4: 'Сеха в России',
  aboutTimelineText4:
    'SEHA производит в Индии и импортирует продукцию в Россию. Команда в Москве ведёт продажи и сопровождает заказ. Индийское производство имеет опыт поставок в 25+ стран, включая европейские страны и Китай.',
  aboutClientsLabel: 'Для кого',
  aboutClientsHeading: 'Для компаний,',
  aboutClientsLabel2: 'которым важна предсказуемость.',
  aboutClientsLabel3: 'Дистрибьюторы',
  aboutClientsLabel4: 'Ритейлеры и торговые сети',
  aboutClientsLabel5: 'Производители продуктов питания',
  aboutClientsLabel6: 'Гидропонные фермы',
  aboutClientsLabel7: 'Садоводческие компании',
  aboutClientsLabel8: 'Бренды продуктов питания',
  aboutClientsLabel9: 'Косметические бренды',
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
    'SEHA manufactures coconut products in India, imports them into Russia and manages orders from product selection to delivery. Our Moscow team works directly with customers.',
  aboutIntroAlt: 'Coconut palms on the SEHA plantation in India',
  aboutIntroCaption: 'Food, agricultural and industrial products from a single raw material.',
  aboutIntroHeading: 'We produce and',
  aboutIntroLabel2: 'supply coconut products',
  aboutIntroText:
    'SEHA manufactures coconut products in India and imports them into Russia. Its Russian company handles sales and the complete transaction: product selection, specifications, documentation, payments and delivery.',
  aboutIntroText2:
    'SEHA in India grew from one founder’s family business, with over 40 years of experience in the coconut industry. The company now has two founders based in India, while managers in Moscow connect customers with manufacturing in Pollachi, Tamil Nadu.',
  aboutNumbersAriaLabel: 'Key facts',
  aboutNumbersLabel: 'years of family business experience in India',
  aboutNumbersLabel2: 'region of origin of raw materials and manufacturing',
  aboutNumbersValue3: '200+',
  aboutNumbersLabel3: 'employees at the Indian substrate facility',
  aboutNumbersValue4: 'Approx. 10 ha',
  aboutNumbersLabel4: 'of substrate manufacturing premises',
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
  aboutShiftEmphasis: 'to a commercial solution.',
  aboutShiftText:
    'We view coconut products as part of the customer’s chain: formulation, growing, manufacturing, warehouse handling and onward sale.',
  aboutShiftAlt: 'SEHA manufacturing buildings among coconut plantations in India',
  aboutTimelineLabel: 'Our experience',
  aboutTimelineLabel3: '1980s',
  aboutTimelineCardTitle: 'Entering the coconut industry',
  aboutTimelineText:
    'The family enters the coconut trade in Pollachi, building relationships with local farmers and learning how to select and process coconuts.',
  aboutTimelineLabel4: '2000s',
  aboutTimelineCardTitle2: 'Developing trade and quality control',
  aboutTimelineText2:
    'Trading across southern India helps the family refine raw material selection and batch quality control.',
  aboutTimelineCardTitle3: 'A modern manufacturing base',
  aboutTimelineText3:
    'The family business moves into dedicated manufacturing, with facilities for processing, quality control and export packing.',
  aboutTimelineLabel5: 'Today',
  aboutTimelineCardTitle4: 'Seha in Russia',
  aboutTimelineText4:
    'SEHA manufactures in India and imports into Russia. The Moscow team handles sales and order support. Indian manufacturing has experience supplying 25+ countries, including European countries and China.',
  aboutClientsLabel: 'Who we serve',
  aboutClientsHeading: 'For companies',
  aboutClientsLabel2: 'that value predictability.',
  aboutClientsLabel3: 'Distributors',
  aboutClientsLabel4: 'Retailers and retail chains',
  aboutClientsLabel5: 'Food manufacturers',
  aboutClientsLabel6: 'Hydroponic farms',
  aboutClientsLabel7: 'Horticulture companies',
  aboutClientsLabel8: 'Food brands',
  aboutClientsLabel9: 'Cosmetics brands',
  certPreviewLabel: 'Next step',
  certPreviewHeading: 'Tell us what you need,',
  certPreviewLabel2: 'we will find the right product',
  certPreviewText:
    'Tell us which product you need, the volume you are considering and where it should be delivered. We will clarify the parameters and prepare a quotation.',
  certPreviewLink: 'Request a quote'
} satisfies AboutPageCopy;

export const aboutPageCopy = { ru, en } satisfies Record<Locale, AboutPageCopy>;
