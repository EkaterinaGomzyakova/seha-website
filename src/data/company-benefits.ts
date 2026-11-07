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
          'Более 40 лет работы с кокосовым сырьём, его переработкой и применением в растениеводстве.'
      },
      {
        title: 'Две производственные площадки',
        description:
          'Пищевые продукты выпускаются отдельно от субстратов, волокна и продуктов из скорлупы — на двух площадках SEHA в Индии.'
      },
      {
        title: 'Продукт под вашу спецификацию',
        description:
          'Подбираем рецептуру, фракцию и размеры блоков под заказ. Доступны маркировка по требованиям заказчика (OEM) и упаковка под его торговой маркой.'
      },
      {
        title: 'Органическая пищевая линейка',
        description:
          'Органическая сертификация пищевых продуктов подтверждена документами. Применимые сертификаты уточняем для выбранной позиции.'
      },
      {
        title: 'Опыт поставок в 25+ стран',
        description:
          'У производственной базы SEHA в Индии есть опыт поставок кокосовых субстратов и сопутствующих продуктов в 25+ стран, включая страны Европы и Китай.'
      },
      {
        title: 'Сопровождение в России',
        description:
          'SEHA производит в Индии и импортирует продукцию в Россию. Команда в Москве ведёт продажи и сопровождает заказ от подбора до поставки.'
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
          'Over 40 years of experience with coconut raw materials, processing and horticultural applications.'
      },
      {
        title: 'Two dedicated manufacturing sites',
        description:
          'Food products are manufactured separately from substrates, fibre and shell products at two SEHA facilities in India.'
      },
      {
        title: 'Products to your specifications',
        description:
          'We tailor blends, particle sizes and block dimensions to the order. OEM labelling and private-label packaging are available.'
      },
      {
        title: 'Certified organic food range',
        description:
          'Organic certification for the food range is supported by documentation. We confirm the applicable certificates for the selected product.'
      },
      {
        title: 'Supply experience in 25+ countries',
        description:
          'SEHA’s Indian manufacturing base has experience supplying coconut substrates and related products to 25+ countries, including European countries and China.'
      },
      {
        title: 'Local support in Russia',
        description:
          'SEHA manufactures in India and imports into Russia. The Moscow team handles sales and supports orders from product selection to delivery.'
      }
    ],
    aboutLink: 'More about SEHA',
    qualityLink: 'Quality & certifications'
  }
} satisfies Record<Locale, CompanyBenefitsCopy>;
