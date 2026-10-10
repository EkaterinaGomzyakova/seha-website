import type { Locale } from './translations';

const ru = {
  title: 'Качество и сертификаты — Сеха',
  description:
    'Качество и сертификаты кокосовых продуктов Сеха: органические стандарты, пищевая безопасность, контроль партий, документы для B2B-поставок и российское сопровождение.',
  skipText: 'К сертификатам',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'Качество',
  qualityHeroLabel: 'СЕХА / КАЧЕСТВО И СЕРТИФИКАТЫ',
  qualityHeroLabel2: 'ДОКУМЕНТЫ ДЛЯ B2B-ПОСТАВКИ',
  qualityHeroTitle: 'Качество,',
  qualityHeroEmphasis: 'которое можно проверить',
  qualityHeroText:
    'Для B2B-клиента важны не общие обещания, а понятные стандарты, контролируемые параметры партии и документы, которые можно запросить перед закупкой.',
  qualityHeroLink: 'Смотреть стандарты',
  qualityHeroLink2: 'Какие документы доступны',
  qualityHeroAlt: 'Пищевой производственный цех со стальными емкостями',
  qualityHeroCaption:
    'Сертифицированные площадки в Индии. Российское коммерческое сопровождение Сеха.',
  qualityMapLabel: '01 / СТАНДАРТЫ',
  qualityMapLabel2: 'Что подтверждает каждый стандарт',
  qualityMapHeading: 'Сертификаты',
  qualityMapLabel3: 'по смыслу, а не списком',
  qualityMapText:
    'Каждый стандарт отвечает на конкретный вопрос закупщика: органическое происхождение, безопасность пищевого производства, этичность поставки или контроль партии.',
  qualityMapCardTitle: 'Органические стандарты',
  qualityMapText2:
    'USDA Organic, EU Organic и NPOP Organic подтверждают соответствие органическим требованиям в релевантных системах сертификации. Применимость уточняется по конкретному продукту и партии.',
  qualityMapCardTitle2: 'Пищевая безопасность',
  qualityMapText3:
    'Для пищевой линейки Laurico заявлены BRCGS, HACCP и FSSC 22000. Эти стандарты важны для производителей, ритейла, private label и дистрибьюторов пищевых ингредиентов.',
  qualityMapText4:
    'Fairtrade относится к этичной цепочке поставки и условиям работы с сельскохозяйственным сырьем. Его применимость уточняется по продукту, партии и документам поставки.',
  qualityProofAlt: 'Фасовка кокосовых продуктов в пищевом производстве',
  qualityProofLabel: '02 / КОНТРОЛЬ ПАРТИИ',
  qualityProofHeading: 'Что проверяется',
  qualityProofLabel2: 'до отгрузки',
  qualityProofCardTitle: 'Влажность',
  qualityProofText:
    'Для хранения, субстратов и экспортной упаковки важны контролируемые показатели влажности.',
  qualityProofCardTitle2: 'pH и EC',
  qualityProofText2:
    'Для кокосового торфа и субстратов проверяются параметры, влияющие на применение в растениеводстве.',
  qualityProofCardTitle3: 'Фракция',
  qualityProofText3:
    'Просеивание и сортировка помогают удерживать однородность материала в партии.',
  qualityProofCardTitle4: 'Чистота и маркировка',
  qualityProofText4:
    'Для пищевой линейки важны отдельные процессы, фильтрация, упаковка и корректная идентификация партии.',
  documentsSectionLabel: '03 / ДОКУМЕНТЫ',
  documentsSectionLabel2: 'Подбираются под продукт и условия поставки',
  documentsSectionHeading: 'Не один файл.',
  documentsSectionLabel3: 'Комплект под задачу',
  documentsSectionText:
    'Состав документов зависит от продукта, объема, упаковки, требований клиента и условий поставки. Поэтому корректнее говорить не “скачать сертификат”, а “запросить комплект документов по партии”.',
  documentsSectionCardTitle: 'Спецификация продукта',
  documentsSectionText2:
    'Характеристики, формат, упаковка, допустимые параметры и назначение продукта.',
  documentsSectionCardTitle2: 'Сертификаты площадки',
  documentsSectionText3:
    'Органические стандарты, BRCGS, HACCP, FSSC 22000 и Fairtrade — при применимости к выбранной позиции.',
  documentsSectionCardTitle3: 'Документы к поставке',
  documentsSectionText4:
    'Экспортные документы, сертификат происхождения, фитосанитарные документы или отчеты качества — по требованиям партии.',
  documentsSectionCardTitle4: 'Идентификация партии',
  documentsSectionText5:
    'Номер партии и прослеживаемость от производства до отгрузки помогают согласовать контроль на стороне клиента.',
  siteRoleLabel: '04 / РОЛЬ СЕХА',
  siteRoleHeading: 'Документы производства.',
  siteRoleEmphasis: 'Коммуникация в России',
  siteRoleText:
    'Сеха помогает российскому клиенту заранее определить, какие параметры и документы нужны для закупки: тип продукта, объем, упаковка, город доставки, требования к сертификации и формату партии.',
  siteRoleLink: 'Запросить комплект под поставку',
  certPreviewLabel: '05 / СЛЕДУЮЩИЙ ШАГ',
  certPreviewHeading: 'Сначала требования.',
  certPreviewLabel2: 'Затем предложение',
  certPreviewText:
    'Укажите продукт, объем и требования к документам. Мы уточним применимые сертификаты, упаковку, логистику и подготовим коммерческое предложение.',
  certPreviewLink: 'Получить предложение'
} as const;

export type QualityPageCopy = { readonly [Key in keyof typeof ru]: string };

const en = {
  title: 'Quality and Certifications — Seha',
  description:
    'Quality and certifications for Seha coconut products: organic standards, food safety, batch control, documents for B2B supply and support in Russia.',
  skipText: 'Skip to certifications',
  pageAriaLabel: 'Breadcrumbs',
  pageLink: 'Home',
  pageLabel: 'Quality',
  qualityHeroLabel: 'SEHA / QUALITY AND CERTIFICATES',
  qualityHeroLabel2: 'DOCUMENTS FOR B2B SUPPLY',
  qualityHeroTitle: 'Quality',
  qualityHeroEmphasis: 'you can verify',
  qualityHeroText:
    'B2B customers need clear standards, controlled batch parameters and documents they can request before purchasing, rather than general promises.',
  qualityHeroLink: 'View standards',
  qualityHeroLink2: 'Which documents are available',
  qualityHeroAlt: 'Food production workshop with steel tanks',
  qualityHeroCaption: 'Certified facilities in India. Commercial support from Seha in Russia.',
  qualityMapLabel: '01 / STANDARDS',
  qualityMapLabel2: 'What each standard confirms',
  qualityMapHeading: 'Certificates',
  qualityMapLabel3: 'by purpose, rather than as a list',
  qualityMapText:
    'Each standard answers a specific buyer question: organic origin, food manufacturing safety, ethical supply or batch control.',
  qualityMapCardTitle: 'Organic standards',
  qualityMapText2:
    'USDA Organic, EU Organic and NPOP Organic confirm compliance with organic requirements in the relevant certification systems. Applicability is clarified for the specific product and batch.',
  qualityMapCardTitle2: 'Food safety',
  qualityMapText3:
    'BRCGS, HACCP and FSSC 22000 are stated for the Laurico food range. These standards are important for manufacturers, retail, private label and food ingredient distributors.',
  qualityMapText4:
    'Fairtrade relates to an ethical supply chain and working conditions for agricultural raw materials. Its applicability is clarified by product, batch and supply documents.',
  qualityProofAlt: 'Packing coconut products in food manufacturing',
  qualityProofLabel: '02 / BATCH CONTROL',
  qualityProofHeading: 'What is checked',
  qualityProofLabel2: 'before shipment',
  qualityProofCardTitle: 'Moisture',
  qualityProofText:
    'Controlled moisture levels are important for storage, substrates and export packaging.',
  qualityProofCardTitle2: 'pH and EC',
  qualityProofText2:
    'For coir pith and substrates, parameters affecting horticultural use are checked.',
  qualityProofCardTitle3: 'Particle size',
  qualityProofText3: 'Sieving and sorting help maintain material uniformity within a batch.',
  qualityProofCardTitle4: 'Cleanliness and labeling',
  qualityProofText4:
    'Dedicated processes, filtration, packaging and correct batch identification are important for the food range.',
  documentsSectionLabel: '03 / DOCUMENTS',
  documentsSectionLabel2: 'Selected for the product and supply terms',
  documentsSectionHeading: 'More than one file.',
  documentsSectionLabel3: 'A package for your task',
  documentsSectionText:
    'The document package depends on the product, volume, packaging, customer requirements and supply terms. It is therefore more accurate to request a batch document package than to simply download a certificate.',
  documentsSectionCardTitle: 'Product specification',
  documentsSectionText2:
    'Characteristics, format, packaging, permitted parameters and intended use of the product.',
  documentsSectionCardTitle2: 'Facility certificates',
  documentsSectionText3:
    'Organic standards, BRCGS, HACCP, FSSC 22000 and Fairtrade, where applicable to the selected product.',
  documentsSectionCardTitle3: 'Supply documents',
  documentsSectionText4:
    'Export documents, certificate of origin, phytosanitary documents or quality reports, according to batch requirements.',
  documentsSectionCardTitle4: 'Batch identification',
  documentsSectionText5:
    'The batch number and traceability from manufacturing to shipment help agree on quality control at the customer’s end.',
  siteRoleLabel: '04 / SEHA’S ROLE',
  siteRoleHeading: 'Manufacturing documents.',
  siteRoleEmphasis: 'Communication in Russia',
  siteRoleText:
    'Seha helps Russian customers determine in advance which parameters and documents they need for purchasing: product type, volume, packaging, delivery city, certification requirements and batch format.',
  siteRoleLink: 'Request documents for your supply',
  certPreviewLabel: '05 / NEXT STEP',
  certPreviewHeading: 'Requirements first.',
  certPreviewLabel2: 'Then a quotation',
  certPreviewText:
    'Specify the product, volume and document requirements. We will clarify applicable certificates, packaging and logistics, and prepare a quotation.',
  certPreviewLink: 'Request a quote'
} satisfies QualityPageCopy;

export const qualityPageCopy = { ru, en } satisfies Record<Locale, QualityPageCopy>;
