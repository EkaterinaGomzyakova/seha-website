import type { Locale } from './translations';
import {
  productsForCategory,
  productCategories,
  type ProductItem,
  type ProductCategorySlug
} from './products';

export type ProductCategoryPageSlug = ProductCategorySlug;

interface LocalizedValue {
  ru: string;
  en: string;
}

export type ProductPageItem = ProductItem;

export interface ProductCategoryPageDefinition {
  slug: ProductCategoryPageSlug;
  bodyClass: string;
  path: string;
  heroImage: string;
  section: LocalizedValue;
  breadcrumb: LocalizedValue;
  title: LocalizedValue;
  intro: LocalizedValue;
  listLabel: LocalizedValue;
  listTitle: LocalizedValue;
  cta: LocalizedValue;
  items: ProductPageItem[];
}

const text = (ru: string, en: string): LocalizedValue => ({ ru, en });

export const productPages: Record<ProductCategoryPageSlug, ProductCategoryPageDefinition> = {
  food: {
    slug: 'food',
    bodyClass: 'product-category--food',
    path: '/products/food',
    heroImage: '/assets/images/food/food-products.png',
    section: text('02 / ПИЩЕВЫЕ ПРОДУКТЫ', '02 / FOOD PRODUCTS'),
    breadcrumb: text('Главная / пищевые продукты', 'Main / food products'),
    title: text('Пищевые продукты', 'Food Products'),
    intro: text(
      'Кокосовые продукты и ингредиенты для пищевых производств, HoReCa и оптовых поставок. Различные спецификации, форматы упаковки и объёмы партий для задач вашего бизнеса.',
      'Coconut products and ingredients for food manufacturing, HoReCa, and wholesale supply. Various specifications, packaging formats, and order volumes to meet your business needs.'
    ),
    listLabel: text('для пищевого производства', 'for food manufacturing'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: productsForCategory('food')
  },
  substrates: {
    slug: 'substrates',
    bodyClass: 'product-category--substrates',
    path: '/products/substrates',
    heroImage: '/assets/images/substrates/coconut-substrates.png',
    section: text('01 / КОКОСОВЫЕ СУБСТРАТЫ', '01 / COCONUT SUBSTRATES'),
    breadcrumb: text('Кокосовые субстраты', 'Growing Substrates'),
    title: text('Кокосовые субстраты', 'Growing Substrates'),
    intro: text(
      'Профессиональные субстраты на основе кокоса для теплиц, питомников, гидропоники и рассады. Подберём фракцию, формат, объём и упаковку под вашу технологию выращивания.',
      'Professional coconut-based substrates for greenhouses, nurseries, hydroponics, and seedlings. We will match the fraction, format, volume, and packaging to your growing technology.'
    ),
    listLabel: text('для растениеводства', 'for horticulture'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: productsForCategory('substrates')
  },
  fiber: {
    slug: 'fiber',
    bodyClass: 'product-category--fiber',
    path: '/products/fiber',
    heroImage: productCategories.find((category) => category.slug === 'fiber')!.image,
    section: text('03 / КОКОСОВОЕ ВОЛОКНО', '03 / COIR FIBER'),
    breadcrumb: text('Главная / Кокосовое волокно', 'Main / Coir products'),
    title: text('Продукты из кокосового волокна', 'Coir Products'),
    intro: text(
      'Продукты из натурального кокосового волокна для промышленности, сельского хозяйства, озеленения и защиты грунта. Различные форматы и объёмы поставок для профессионального применения.',
      'Natural coconut fiber products for industrial, agricultural, landscaping, and soil protection applications. Available in various formats and supply volumes for professional use.'
    ),
    listLabel: text('Для промышленности и строительства', 'INDUSTRIAL & CONSTRUCTION USE'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: productsForCategory('fiber')
  },
  shell: {
    slug: 'shell',
    bodyClass: 'product-category--shell',
    path: '/products/shell',
    heroImage: productCategories.find((category) => category.slug === 'shell')!.image,
    section: text('04 / КОКОСОВАЯ СКОРЛУПА', '04 / COCO SHELL'),
    breadcrumb: text('Главная / Кокосовая скорлупа', 'Main / Coco Shell products'),
    title: text('Продукты из кокосовой скорлупы', 'Coco Shell Products'),
    intro: text(
      'Продукты из натуральной кокосовой скорлупы для промышленности, фильтрации и производства топлива. Различные форматы и объёмы поставок для бизнеса.',
      'Natural coconut shell products for industrial applications, filtration, and fuel production. Available in various formats and supply volumes for business needs.'
    ),
    listLabel: text('Для промышленности и топлива', 'Industrial Raw Material'),
    listTitle: text('Оптовая<br>линейка', 'Wholesale<br>Product Range'),
    cta: text('Заказать', 'Request a Quote'),
    items: productsForCategory('shell')
  }
};

export function getProductCategoryPage(slug: ProductCategoryPageSlug, _locale?: Locale) {
  return productPages[slug];
}
