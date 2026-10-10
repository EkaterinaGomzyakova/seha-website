import type { Locale } from './translations';

interface ListSection {
  title: string;
  lead: string;
  items: readonly string[];
}

export interface PrivacyPageCopy {
  title: string;
  description: string;
  skipText: string;
  breadcrumbs: string;
  home: string;
  heading: string;
  intro: string;
  active: string;
  since: string;
  generalTitle: string;
  controller: string;
  company: string;
  addressLabel: string;
  address: string;
  emailLabel: string;
  phoneLabel: string;
  generalText: string;
  data: ListSection;
  goals: ListSection;
  legal: ListSection;
  storageTitle: string;
  storageLead: string;
  storageText: string;
  storageOptout: string;
  sharing: ListSection;
  retentionTitle: string;
  retentionText: string;
  rightsTitle: string;
  rightsLead: string;
  rights: readonly string[];
  withdrawTitle: string;
  withdrawText: string;
  contactTitle: string;
  contactText: string;
}

const ru = {
  title: 'Политика конфиденциальности — Сеха',
  description:
    'Политика конфиденциальности Сеха: обработка обращений и хранение настройки закрытия уведомления в браузере.',
  skipText: 'К содержанию',
  breadcrumbs: 'Хлебные крошки',
  home: 'Главная',
  heading: 'Политика конфиденциальности',
  intro:
    'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта seha-group.ru (далее — «сайт»).',
  active: 'Действует',
  since: 'с 2026 года',
  generalTitle: 'Общие положения',
  controller: 'Оператор персональных данных:',
  company: 'ООО «СЕХА»',
  addressLabel: 'Адрес:',
  address: '115432, Россия, г. Москва, б-р Братьев Весниных, д. 1, пом. 151К',
  emailLabel: 'Email:',
  phoneLabel: 'Телефон:',
  generalText:
    'Используя сайт и отправляя данные через формы обратной связи, Пользователь выражает согласие с настоящей Политикой.',
  data: {
    title: 'Какие данные мы собираем',
    lead: 'При отправке обращения Пользователь может предоставить следующие данные:',
    items: [
      '• название компании;',
      '• имя контактного лица;',
      '• адрес электронной почты;',
      '• номер телефона;',
      '• тип компании;',
      '• содержание сообщения или запроса.'
    ]
  },
  goals: {
    title: 'Цели обработки персональных данных',
    lead: 'Персональные данные обрабатываются для следующих целей:',
    items: [
      '• обработка запросов пользователей;',
      '• предоставление прайс-листов и коммерческих предложений;',
      '• организация оптовых поставок продукции;',
      '• поддержание деловой коммуникации;',
      '• заключение и исполнение договоров.'
    ]
  },
  legal: {
    title: 'Правовые основания обработки',
    lead: 'Обработка персональных данных осуществляется на основании:',
    items: [
      '• согласия субъекта персональных данных;',
      '• необходимости исполнения договора или подготовки к его заключению;',
      '• требований законодательства Российской Федерации.'
    ]
  },
  storageTitle: 'Локальное хранение настройки уведомления',
  storageLead: 'На сайте не загружаются сервисы аналитики, в том числе Яндекс.Метрика.',
  storageText:
    'После закрытия уведомления сайт сохраняет в localStorage браузера только отметку о его закрытии (seha-cookie-consent). Это позволяет не показывать уведомление повторно. Эта настройка хранится на устройстве Пользователя и не отправляется сайтом на сервер.',
  storageOptout:
    'Пользователь может удалить эту настройку, очистив данные сайта в браузере. После очистки уведомление появится снова.',
  sharing: {
    title: 'Передача данных третьим лицам',
    lead: 'Персональные данные не продаются и не передаются третьим лицам, за исключением случаев:',
    items: [
      '• предусмотренных законодательством Российской Федерации;',
      '• необходимых для исполнения договора;',
      '• связанных с использованием сервисов, обеспечивающих работу сайта и передачу обращений.'
    ]
  },
  retentionTitle: 'Срок хранения данных',
  retentionText:
    'Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки, либо в течение срока, установленного законодательством Российской Федерации.',
  rightsTitle: 'Права пользователя',
  rightsLead: 'Пользователь имеет право:',
  rights: [
    '• получить информацию об обработке своих персональных данных;',
    '• требовать уточнения, блокирования или удаления персональных данных;',
    '• отозвать согласие на обработку персональных данных;',
    '• обращаться в Роскомнадзор или суд для защиты своих прав.'
  ],
  withdrawTitle: 'Отзыв согласия',
  withdrawText:
    'Для отзыва согласия на обработку персональных данных Пользователь может направить запрос на электронную почту',
  contactTitle: 'Контактная информация',
  contactText: 'По вопросам обработки персональных данных Пользователь может обратиться по адресу:'
} satisfies PrivacyPageCopy;

const en = {
  title: 'Privacy Policy — Seha',
  description:
    'Seha privacy policy: processing inquiries and storing the notice dismissal preference in the browser.',
  skipText: 'Skip to content',
  breadcrumbs: 'Breadcrumbs',
  home: 'Home',
  heading: 'Privacy Policy',
  intro:
    'This Privacy Policy defines how the personal data of users of seha-group.ru (the “Website”) is processed and protected.',
  active: 'Effective',
  since: 'from 2026',
  generalTitle: 'General provisions',
  controller: 'Personal data controller:',
  company: 'SEHA LLC',
  addressLabel: 'Address:',
  address: '1 Bratyev Vesninykh Boulevard, Office 151K, Moscow, 115432, Russian Federation',
  emailLabel: 'Email:',
  phoneLabel: 'Phone:',
  generalText:
    'By using the Website and submitting data through its contact forms, the User agrees to this Policy.',
  data: {
    title: 'Personal data we collect',
    lead: 'When submitting an inquiry, the User may provide the following data:',
    items: [
      '• company name;',
      '• contact person’s name;',
      '• email address;',
      '• phone number;',
      '• company type;',
      '• message or inquiry content.'
    ]
  },
  goals: {
    title: 'Purposes of personal data processing',
    lead: 'Personal data is processed for the following purposes:',
    items: [
      '• handling user inquiries;',
      '• providing price lists and quotations;',
      '• arranging wholesale product supply;',
      '• maintaining business communication;',
      '• entering into and performing contracts.'
    ]
  },
  legal: {
    title: 'Legal grounds for processing',
    lead: 'Personal data is processed on the following grounds:',
    items: [
      '• the data subject’s consent;',
      '• the need to perform a contract or prepare to enter into one;',
      '• requirements of the legislation of the Russian Federation.'
    ]
  },
  storageTitle: 'Local storage of the notice preference',
  storageLead: 'The Website does not load analytics services, including Yandex.Metrica.',
  storageText:
    'After the notice is dismissed, the Website stores only a dismissal flag (seha-cookie-consent) in the browser’s localStorage. This prevents the notice from being shown again. This preference is stored on the User’s device and is not sent to a server by the Website.',
  storageOptout:
    'The User can delete this preference by clearing the Website’s data in the browser. The notice will appear again after the data is cleared.',
  sharing: {
    title: 'Sharing data with third parties',
    lead: 'Personal data is not sold or shared with third parties, except in cases:',
    items: [
      '• provided for by the legislation of the Russian Federation;',
      '• necessary to perform a contract;',
      '• involving services that support Website operation and delivery of inquiries.'
    ]
  },
  retentionTitle: 'Data retention period',
  retentionText:
    'Personal data is retained no longer than necessary to achieve the purposes of processing, or for the period established by the legislation of the Russian Federation.',
  rightsTitle: 'User rights',
  rightsLead: 'The User has the right to:',
  rights: [
    '• obtain information about the processing of their personal data;',
    '• request correction, blocking or deletion of personal data;',
    '• withdraw consent to personal data processing;',
    '• contact Roskomnadzor or a court to protect their rights.'
  ],
  withdrawTitle: 'Withdrawal of consent',
  withdrawText:
    'To withdraw consent to personal data processing, the User may send a request by email to',
  contactTitle: 'Contact information',
  contactText: 'For questions about personal data processing, the User may contact:'
} satisfies PrivacyPageCopy;

export const privacyPageCopy = { ru, en } satisfies Record<Locale, PrivacyPageCopy>;
