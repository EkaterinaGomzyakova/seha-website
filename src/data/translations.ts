export type Locale = 'ru' | 'en';

export const siteTranslations = {
  ru: {
    home: 'Главная',
    products: 'Продукты',
    production: 'Производство',
    quality: 'Качество',
    about: 'О компании',
    offer: 'Получить предложение',
    language: 'Переключить язык',
    menu: 'Открыть меню',
    logoAlt: 'Сеха'
  },
  en: {
    home: 'Home',
    products: 'Products',
    production: 'Manufacturing',
    quality: 'Quality & Certifications',
    about: 'About us',
    offer: 'Request a quote',
    language: 'Switch language',
    menu: 'Open menu',
    logoAlt: 'SEHA — international'
  }
} as const satisfies Record<Locale, Record<string, string>>;

export function getSiteTranslations(locale: Locale = 'ru') {
  return siteTranslations[locale];
}
