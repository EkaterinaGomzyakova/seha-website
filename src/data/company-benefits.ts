import type { Locale } from './translations';

interface CompanyBenefitsCopy {
  heading: string;
  introduction: string;
  items: readonly { title: string; description: string }[];
  aboutLink: string;
  qualityLink: string;
}

/** Based on the customer's company profile and confirmed manufacturing/certification details. */
export const companyBenefitsCopy = {
  ru: {
    heading: 'Почему выбирают SEHA',
    introduction:
      'Производство в Индии, параметры продукции под вашу задачу и сопровождение B2B-поставок в России.',
    items: [
      {
        title: '40+ лет отраслевого опыта',
        description:
          'За индийской производственной базой SEHA — более 40 лет работы в кокосовой отрасли: от выращивания и подготовки сырья до переработки.'
      },
      {
        title: 'Две производственные площадки',
        description:
          'Пищевые продукты выпускаются отдельно от субстратов, волокна и продуктов из скорлупы — на двух площадках SEHA в Индии.'
      },
      {
        title: 'Продукт под вашу спецификацию',
        description:
          'Для субстратов согласуем состав, фракцию, pH и EC. Размеры, форматы и упаковку подбираем с учётом продукта и требований заказчика.'
      },
      {
        title: 'Органическая пищевая линейка',
        description:
          'Органическая сертификация пищевых продуктов подтверждена документами. Применимые сертификаты уточняем для выбранной позиции.'
      },
      {
        title: 'Опыт международных поставок',
        description:
          'У индийской производственной базы есть опыт поставок кокосовых субстратов и сопутствующих продуктов покупателям в Европе и Китае.'
      },
      {
        title: 'Сопровождение в России',
        description:
          'На русском языке согласуем продукт, объём, упаковку, документы и условия доставки. Поддерживаем связь с производством в Индии.'
      }
    ],
    aboutLink: 'Больше о компании',
    qualityLink: 'Качество и сертификаты'
  },
  en: {
    heading: 'Why choose SEHA',
    introduction:
      'Manufacturing in India, specifications tailored to your application and B2B supply support in Russia.',
    items: [
      {
        title: '40+ years of industry experience',
        description:
          'SEHA’s Indian manufacturing base draws on over 40 years in the coconut industry, from cultivation and raw material preparation to processing.'
      },
      {
        title: 'Two dedicated manufacturing sites',
        description:
          'Food products are manufactured separately from substrates, fibre and shell products at two SEHA facilities in India.'
      },
      {
        title: 'Products to your specifications',
        description:
          'For substrates, we agree on composition, particle size, pH and EC. Dimensions, formats and packaging are tailored to the product and customer requirements.'
      },
      {
        title: 'Certified organic food range',
        description:
          'Organic certification for the food range is supported by documentation. We confirm the applicable certificates for the selected product.'
      },
      {
        title: 'International supply experience',
        description:
          'The Indian manufacturing base has experience supplying coconut substrates and related products to customers in Europe and China.'
      },
      {
        title: 'Local support in Russia',
        description:
          'Our Russian-speaking team helps agree on products, volumes, packaging, documents and delivery terms, and coordinates with manufacturing in India.'
      }
    ],
    aboutLink: 'More about SEHA',
    qualityLink: 'Quality & certifications'
  }
} satisfies Record<Locale, CompanyBenefitsCopy>;
