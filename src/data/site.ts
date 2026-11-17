export const siteContact = {
  name: 'SEHA',
  email: 'seha.info@inbox.ru',
  phone: '+7 966 061-28-28',
  phoneHref: 'tel:+79660612828',
  street: '1 Bratyev Vesninykh Boulevard, Office 151K',
  city: 'Moscow',
  postalCode: '115432',
  country: 'RU'
} as const;

export const siteOrganization = {
  legalName: 'ООО «СЕХА»',
  taxID: '9725204216',
  ogrn: '1267700116903',
  kpp: '772501001',
  sameAs: ['https://vk.ru/seha.group'],
  logo: {
    ru: '/assets/images/common/organization-logo-ru.png',
    en: '/assets/images/common/organization-logo-en.png'
  }
} as const;
