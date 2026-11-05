import type { Locale } from './translations';

const ru = {
  title: 'Качество и сертификаты — Сеха',
  description:
    'Качество и сертификаты кокосовых продуктов Сеха: органические стандарты, пищевая безопасность, контроль партий, документы для B2B-поставок и российское сопровождение.',
  skipText: 'К сертификатам',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'Качество',
  qualityHeroTitle: 'Проверенное',
  qualityHeroEmphasis: 'качество',
  qualityHeroText:
    'Понятные стандарты, контролируемые параметры партии и документы, которые можно запросить перед закупкой.',
  qualityHeroAlt: 'Пищевой производственный цех со стальными емкостями',
  qualityMapHeading: 'Сертифицированное',
  qualityMapLabel3: 'производство',
  qualityMapText:
    'Органическая пищевая линейка, безопасность пищевого производства, этичность поставки и контроль партии.',
  qualityMapCardTitle: 'Органические стандарты',
  qualityMapText2:
    'Органическая сертификация подтверждена для пищевых продуктов SEHA. Она не распространяется на субстраты, волокно и продукты из скорлупы. Документы по выбранному пищевому продукту можно запросить перед закупкой.',
  qualityMapCardTitle2: 'Пищевая безопасность',
  qualityMapText3:
    'Для пищевой линейки SEHA заявлены BRCGS, HACCP и FSSC 22000. Применимость уточняется по продукту, партии и документам площадки. Эти стандарты важны для пищевых производств, ритейла и private label.',
  qualityMapText4:
    'Fairtrade относится к этичной цепочке поставки и условиям работы с сельскохозяйственным сырьем. Его применимость уточняется по продукту, партии и документам поставки.',
  qualityProofAlt: 'Производственный цех и склад упакованной продукции SEHA',
  qualityProofLabel: 'Контроль партии',
  qualityProofHeading: 'Что проверяется',
  qualityProofLabel2: 'до отгрузки.',
  qualityProofCardTitle: 'Влажность',
  qualityProofText:
    'Для хранения, субстратов и экспортной упаковки важны контролируемые показатели влажности.',
  qualityProofCardTitle2: 'pH и EC',
  qualityProofText2:
    'Для кокосовых субстратов контролируем pH и EC. Субстраты промыты, буферизация доступна по запросу.',
  qualityProofCardTitle3: 'Структура и влагоёмкость',
  qualityProofText3:
    'Проверяем фракцию, соотношение волокна и чипсов, насыпную плотность и расширение после увлажнения. Контролируем влагоёмкость, воздушную пористость и дренаж.',
  qualityProofCardTitle4: 'Чистота и маркировка',
  qualityProofText4:
    'Для пищевой линейки важны отдельные процессы, фильтрация, упаковка и корректная идентификация партии.',
  documentsSectionHeading: 'Комплект',
  documentsSectionLabel3: 'документов под задачу',
  documentsSectionText:
    'Состав документов зависит от продукта, объема, упаковки, требований клиента и условий поставки.',
  documentsSectionCardTitle: 'Спецификация продукта',
  documentsSectionText2:
    'Согласованные характеристики, формат поставки, упаковку и допустимые параметры фиксируем в спецификации продукта.',
  documentsSectionCardTitle2: 'Сертификаты площадки',
  documentsSectionText3:
    'Органические сертификаты — для пищевой линейки. BRCGS, HACCP, FSSC 22000 и Fairtrade — по документам выбранного продукта и площадки.',
  documentsSectionCardTitle3: 'Документы к поставке',
  documentsSectionText4:
    'Экспортные документы, сертификат происхождения, фитосанитарные документы или отчеты качества — по требованиям партии.',
  documentsSectionCardTitle4: 'Идентификация партии',
  documentsSectionText5:
    'Номер партии и прослеживаемость от производства до отгрузки помогают согласовать контроль на стороне клиента.',
  siteRoleLabel: 'Роль Сеха',
  siteRoleHeading: 'Документы\nпроизводства,',
  siteRoleEmphasis: 'коммуникация в России.',
  siteRoleText:
    'Сеха помогает российскому клиенту заранее определить, какие параметры и документы нужны для закупки: тип продукта, объем, упаковка, город доставки, требования к сертификации и формату партии.',
  siteRoleLink: 'Запросить комплект под поставку',
  certPreviewLabel: 'Следующий шаг',
  certPreviewHeading: 'Уточните требования,',
  certPreviewLabel2: 'мы подготовим предложение',
  certPreviewText:
    'Укажите продукт, объём и требования к документам. Для ряда продуктов можно запросить образцы перед оптовым заказом — доступность и условия отправки согласуем отдельно. Подготовим спецификацию и коммерческое предложение.',
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
  qualityHeroTitle: 'Verified',
  qualityHeroEmphasis: 'quality',
  qualityHeroText:
    'Clear standards, controlled batch parameters and documents you can request before purchasing.',
  qualityHeroAlt: 'Food production workshop with steel tanks',
  qualityMapHeading: 'Certified',
  qualityMapLabel3: 'manufacturing',
  qualityMapText:
    'Certified organic food products, food manufacturing safety, ethical supply and batch control.',
  qualityMapCardTitle: 'Organic standards',
  qualityMapText2:
    'Organic certification is confirmed for SEHA food products. It does not cover substrates, fibre or shell products. Documents for the selected food product can be requested before purchasing.',
  qualityMapCardTitle2: 'Food safety',
  qualityMapText3:
    'BRCGS, HACCP and FSSC 22000 are stated for the SEHA food range. Applicability is checked against the product, batch and facility documents. These standards matter for food manufacturing, retail and private label.',
  qualityMapText4:
    'Fairtrade relates to an ethical supply chain and working conditions for agricultural raw materials. Its applicability is clarified by product, batch and supply documents.',
  qualityProofAlt: 'SEHA production workshop and packaged goods warehouse',
  qualityProofLabel: 'Batch control',
  qualityProofHeading: 'What is checked',
  qualityProofLabel2: 'before shipment.',
  qualityProofCardTitle: 'Moisture',
  qualityProofText:
    'Controlled moisture levels are important for storage, substrates and export packaging.',
  qualityProofCardTitle2: 'pH and EC',
  qualityProofText2:
    'For coir substrates, we monitor pH and EC. Substrates are washed; buffering is available on request.',
  qualityProofCardTitle3: 'Structure and water retention',
  qualityProofText3:
    'Checks cover particle size, fibre-to-chip ratio, bulk density and expansion after hydration, along with water-holding capacity, air-filled porosity and drainage.',
  qualityProofCardTitle4: 'Cleanliness and labelling',
  qualityProofText4:
    'Dedicated processes, filtration, packaging and correct batch identification are important for the food range.',
  documentsSectionHeading: 'A document package',
  documentsSectionLabel3: 'for your needs',
  documentsSectionText:
    'The document package depends on the product, volume, packaging, customer requirements and supply terms.',
  documentsSectionCardTitle: 'Product specification',
  documentsSectionText2:
    'Agreed characteristics, supply format, packaging and permitted parameter ranges are recorded in the product specification.',
  documentsSectionCardTitle2: 'Facility certificates',
  documentsSectionText3:
    'Organic certificates cover the food range. BRCGS, HACCP, FSSC 22000 and Fairtrade apply according to the selected product and facility documents.',
  documentsSectionCardTitle3: 'Supply documents',
  documentsSectionText4:
    'Export documents, certificate of origin, phytosanitary documents or quality reports, according to batch requirements.',
  documentsSectionCardTitle4: 'Batch identification',
  documentsSectionText5:
    'The batch number and traceability from manufacturing to shipment help agree on quality control at the customer’s end.',
  siteRoleLabel: 'Seha’s role',
  siteRoleHeading: 'Manufacturing\ndocuments,',
  siteRoleEmphasis: 'communication in Russia.',
  siteRoleText:
    'Seha helps Russian customers determine in advance which parameters and documents they need for purchasing: product type, volume, packaging, delivery city, certification requirements and batch format.',
  siteRoleLink: 'Request documents for your supply',
  certPreviewLabel: 'Next step',
  certPreviewHeading: 'Tell us your requirements,',
  certPreviewLabel2: 'we will prepare a quotation',
  certPreviewText:
    'Specify the product, volume and document requirements. Samples can be requested for selected products before a bulk order; availability and shipping terms are agreed separately. We will prepare a specification and quotation.',
  certPreviewLink: 'Request a quote'
} satisfies QualityPageCopy;

export const qualityPageCopy = { ru, en } satisfies Record<Locale, QualityPageCopy>;
