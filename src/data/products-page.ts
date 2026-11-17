import type { Locale } from './translations';

const ru = {
  title: 'Кокосовые продукты — СЕХА',
  description:
    'Каталог кокосовых продуктов СЕХА: субстраты, пищевые продукты Veymur, волокно и скорлупа. Поставки для разных рынков и задач.',
  skipText: 'К каталогу',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'Продукты',
  catalogTitle: 'Направления продуктов',
  heroAlt: 'Целый кокос, половинка кокоса с белой мякотью и кокосовая стружка на зелёном фоне',
  heroTitle: 'Один кокос',
  heroLabel: 'Больше возможностей',
  heroText:
    'Кокосовые продукты для бизнеса. Оптовые поставки для производства, торговли и растениеводства.',
  heroLine: 'Производим. Перерабатываем. Поставляем по всему миру.'
} as const;

export type ProductsPageCopy = { readonly [Key in keyof typeof ru]: string };

const en = {
  title: 'Coconut Products — SEHA',
  description:
    'Explore SEHA coconut products: growing substrates, Veymur food products, coir fibre, and coconut shell. Supply for different markets and applications.',
  skipText: 'Skip to the catalogue',
  pageAriaLabel: 'Breadcrumbs',
  pageLink: 'Home',
  pageLabel: 'Products',
  catalogTitle: 'Product Categories',
  heroAlt:
    'A whole coconut, a coconut half with white flesh, and coconut flakes against a green background',
  heroTitle: 'One coconut',
  heroLabel: 'More possibilities',
  heroText:
    'Coconut products for business. Wholesale supply for manufacturing, trade and horticulture.',
  heroLine: 'We manufacture. We process. We supply worldwide.'
} satisfies ProductsPageCopy;

export const productsPageCopy = { ru, en } satisfies Record<Locale, ProductsPageCopy>;
