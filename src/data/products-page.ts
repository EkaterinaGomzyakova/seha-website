import type { Locale } from './translations';

const ru = {
  title: 'Кокосовые продукты — Сеха',
  description:
    'Каталог кокосовых продуктов Сеха: субстраты, пищевые ингредиенты, розничная линейка Veymur, волокно и скорлупа. Поставки для разных рынков и задач.',
  skipText: 'К каталогу',
  pageAriaLabel: 'Хлебные крошки',
  pageLink: 'Главная',
  pageLabel: 'Продукты',
  catalogTitle: 'Направления продуктов',
  heroAlt: 'Целый кокос, половинка кокоса с белой мякотью и кокосовая стружка на зелёном фоне',
  heroTitle: 'Один кокос',
  heroLabel: 'Больше возможностей',
  heroText: 'Кокосовые продукты высокого качества для разных рынков и задач.',
  heroLine: 'Производим. Перерабатываем. Поставляем по всему миру.'
} as const;

export type ProductsPageCopy = { readonly [Key in keyof typeof ru]: string };

const en = {
  title: 'Coconut Products — Seha',
  description:
    'Explore Seha coconut products: growing substrates, food ingredients, the Veymur retail range, coir fibre, and coconut shell. Supply for different markets and applications.',
  skipText: 'Skip to the catalogue',
  pageAriaLabel: 'Breadcrumbs',
  pageLink: 'Home',
  pageLabel: 'Products',
  catalogTitle: 'Product Categories',
  heroAlt:
    'A whole coconut, a coconut half with white flesh, and coconut flakes against a green background',
  heroTitle: 'One coconut',
  heroLabel: 'More possibilities',
  heroText: 'High-quality coconut products for different markets and applications.',
  heroLine: 'We manufacture. We process. We supply worldwide.'
} satisfies ProductsPageCopy;

export const productsPageCopy = { ru, en } satisfies Record<Locale, ProductsPageCopy>;
