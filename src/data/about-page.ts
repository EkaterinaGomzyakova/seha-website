import type { Locale } from './translations';

const ru = {
  title: 'О компании — Сеха',
  description:
    'О компании Сеха: российский центр продаж органических кокосовых продуктов, производственная экспертиза Индии и B2B-поставки под требования клиента.',
  skipText: 'К подходу',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'О компании',
  aboutHeroTitle: 'О компании',
  aboutHeroText:
    'Сеха помогает российским компаниям закупать органические кокосовые продукты премиального качества: от пищевых ингредиентов до субстратов, волокна и скорлупы.',
  aboutIntroAlt: 'Половинка кокоса с белой мякотью и волокнистой скорлупой',
  aboutIntroCaption: 'Пищевые, агро- и промышленные продукты из одного сырья.',
  aboutIntroHeading: 'Производим и',
  aboutIntroLabel2: 'поставляем кокосовые продукты',
  aboutIntroText:
    'Сеха — российский центр продаж и сопровождения B2B-поставок кокосовой продукции. Мы переводим производственную экспертизу Индии в понятные коммерческие условия: продукт, объем, упаковка, документы, логистика и сроки.',
  aboutIntroText2:
    'Производственная база связана с регионом Pollachi в Tamil Nadu — одним из сильных кокосовых кластеров Индии. Для клиента это означает доступ к сырью, переработке и экспортной компетенции без необходимости самостоятельно разбираться в каждой детали внешней поставки.',
  aboutNumbersAriaLabel: 'Ключевые факты',
  aboutNumbersLabel: 'лет кокосовой экспертизы у индийской производственной базы',
  aboutNumbersLabel2: 'регион происхождения сырья и производства',
  aboutNumbersLabel3: 'направления: пищевые продукты, субстраты, волокно, скорлупа',
  aboutNumbersLabel4: 'подбор под спецификацию, объем и требования поставки',
  aboutApproachHeading: 'Принципы',
  aboutApproachLabel3: 'работы',
  aboutApproachCardTitle: 'Происхождение имеет значение',
  aboutApproachText2:
    'Кокосовые продукты отличаются по сырью, обработке и назначению. Поэтому мы начинаем разговор не с прайс-листа, а с того, какой продукт нужен вашему бизнесу.',
  aboutApproachCardTitle2: 'Спецификация раньше цены',
  aboutApproachText3:
    'Цена зависит от категории, фракции, упаковки, объема, курса, логистики и документов. Коммерческое предложение собирается под реальный запрос.',
  aboutApproachCardTitle3: 'Вся ценность кокоса',
  aboutApproachText4:
    'Мякоть, волокно и скорлупа становятся разными продуктами: пищевыми ингредиентами, материалами для выращивания и сырьем для промышленного применения.',
  aboutApproachCardTitle4: 'Индивидуальное решение',
  aboutApproachText5:
    'Для B2B-клиента важны характеристики партии, документы, область сертификации и понятные условия поставки. Именно это мы выводим в коммуникацию.',
  aboutShiftLabel: 'Наш подход',
  aboutShiftHeading: 'От сырья',
  aboutShiftEmphasis: 'к коммерческому решению.',
  aboutShiftText:
    'Мы смотрим на кокосовую продукцию как на часть цепочки клиента: рецептуры, выращивания, производства, складской обработки и дальнейшей продажи.',
  aboutShiftAlt: 'Производственное здание и территория переработки кокосовой продукции',
  aboutTimelineLabel: 'Наш опыт',
  aboutTimelineLabel3: '1980-е',
  aboutTimelineCardTitle: 'Начало в кокосовой отрасли',
  aboutTimelineText:
    'Формирование экспертизы в сырье, региональных особенностях и требованиях покупателей.',
  aboutTimelineLabel4: '2000-е',
  aboutTimelineCardTitle2: 'Развитие торговли и контроля',
  aboutTimelineText2:
    'Понимание того, что для экспортного клиента решают стабильность, прослеживаемость и повторяемость партии.',
  aboutTimelineCardTitle3: 'Современная производственная база',
  aboutTimelineText3:
    'Переход к производству и экспортной модели с инфраструктурой для обработки, упаковки и контроля.',
  aboutTimelineLabel5: 'Сейчас',
  aboutTimelineCardTitle4: 'Сеха в России',
  aboutTimelineText4:
    'Российский центр продаж помогает клиентам выбирать продукт и получать предложение под конкретные условия поставки.',
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
  aboutClientsLabel10: 'Фармацевтические компании',
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
    'About Seha: a Russian sales centre for organic coconut products, manufacturing expertise from India and B2B supply tailored to customer requirements.',
  skipText: 'Skip to our approach',
  pageAriaLabel: 'Breadcrumbs',
  pageLink: 'Home',
  pageLabel: 'About us',
  aboutHeroTitle: 'About us',
  aboutHeroText:
    'Seha helps Russian companies purchase premium organic coconut products: from food ingredients to substrates, fibre and shell.',
  aboutIntroAlt: 'A coconut half with white flesh and a fibrous shell',
  aboutIntroCaption: 'Food, agricultural and industrial products from a single raw material.',
  aboutIntroHeading: 'We produce and',
  aboutIntroLabel2: 'supply coconut products',
  aboutIntroText:
    'Seha is a Russian sales and support centre for B2B supply of coconut products. We translate manufacturing expertise from India into clear commercial terms: product, volume, packaging, documents, logistics and lead times.',
  aboutIntroText2:
    'The manufacturing base is connected to the Pollachi region in Tamil Nadu, one of India’s major coconut clusters. For customers, this means access to raw materials, processing and export expertise without having to work through every detail of overseas supply themselves.',
  aboutNumbersAriaLabel: 'Key facts',
  aboutNumbersLabel: 'years of coconut expertise at the Indian manufacturing base',
  aboutNumbersLabel2: 'region of origin of raw materials and manufacturing',
  aboutNumbersLabel3: 'categories: food products, substrates, fibre, shell',
  aboutNumbersLabel4: 'selection to match specifications, volume and supply requirements',
  aboutApproachHeading: 'How',
  aboutApproachLabel3: 'we work',
  aboutApproachCardTitle: 'Origin matters',
  aboutApproachText2:
    'Coconut products differ in raw material, processing and application. That is why we start the conversation with the product your business needs, rather than a price list.',
  aboutApproachCardTitle2: 'Specifications before price',
  aboutApproachText3:
    'Price depends on the category, particle size, packaging, volume, exchange rate, logistics and documents. A quotation is prepared for an actual request.',
  aboutApproachCardTitle3: 'The full value of coconut',
  aboutApproachText4:
    'Flesh, fibre and shell become different products: food ingredients, growing materials and raw materials for industrial applications.',
  aboutApproachCardTitle4: 'A tailored solution',
  aboutApproachText5:
    'B2B customers need batch specifications, documents, certification scope and clear supply terms. These are the points we communicate.',
  aboutShiftLabel: 'Our approach',
  aboutShiftHeading: 'From raw material',
  aboutShiftEmphasis: 'to a commercial solution.',
  aboutShiftText:
    'We view coconut products as part of the customer’s chain: formulation, growing, manufacturing, warehouse handling and onward sale.',
  aboutShiftAlt: 'Manufacturing building and coconut processing site',
  aboutTimelineLabel: 'Our experience',
  aboutTimelineLabel3: '1980s',
  aboutTimelineCardTitle: 'Entering the coconut industry',
  aboutTimelineText:
    'Building expertise in raw materials, regional characteristics and buyer requirements.',
  aboutTimelineLabel4: '2000s',
  aboutTimelineCardTitle2: 'Developing trade and quality control',
  aboutTimelineText2:
    'Understanding that consistency, traceability and repeatability of batches are decisive for export customers.',
  aboutTimelineCardTitle3: 'A modern manufacturing base',
  aboutTimelineText3:
    'Transition to manufacturing and an export model with infrastructure for processing, packaging and quality control.',
  aboutTimelineLabel5: 'Today',
  aboutTimelineCardTitle4: 'Seha in Russia',
  aboutTimelineText4:
    'The Russian sales centre helps customers select a product and receive a quotation for specific supply terms.',
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
  aboutClientsLabel10: 'Pharmaceutical companies',
  certPreviewLabel: 'Next step',
  certPreviewHeading: 'Tell us what you need,',
  certPreviewLabel2: 'we will find the right product',
  certPreviewText:
    'Tell us which product you need, the volume you are considering and where it should be delivered. We will clarify the parameters and prepare a quotation.',
  certPreviewLink: 'Request a quote'
} satisfies AboutPageCopy;

export const aboutPageCopy = { ru, en } satisfies Record<Locale, AboutPageCopy>;
