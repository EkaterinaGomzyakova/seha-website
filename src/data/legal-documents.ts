import type { Locale } from './translations';
import { privacyVersion } from './privacy-settings';

type Section = { title: string; paragraphs: string[]; links?: { label: string; href: string }[] };
export type LegalKind = 'policy' | 'inquiry' | 'analytics';
type Document = { title: string; intro: string; sections: Section[] };
export const legalPaths = {
  policy: '/privacy/',
  inquiry: '/consent/',
  analytics: '/analytics-consent/'
} as const;
export const legalVersion = privacyVersion;
const operatorRu =
  'ООО «СЕХА», ИНН 9725204216, ОГРН 1267700116903. Адрес: 115432, Россия, г. Москва, б-р Братьев Весниных, д. 1, пом. 151К. Email для обращений по персональным данным: seha.info@inbox.ru. Телефон: +7 966 061-28-28.';
const operatorEn =
  'SEHA LLC, INN 9725204216, OGRN 1267700116903. Address: Office 151K, 1 Bratyev Vesninykh Boulevard, Moscow, 115432, Russia. Personal data requests: seha.info@inbox.ru. Phone: +7 966 061-28-28.';
const actionsRu =
  'Обработка включает сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление доступа уполномоченным лицам, блокирование, удаление и уничтожение данных. Используются автоматизированные средства и обработка без них.';
const actionsEn =
  'Processing includes collection, recording, organisation, accumulation, storage, correction, retrieval, use, access by authorised persons, blocking, erasure and destruction, using automated and non-automated methods.';
const yandexLinks = [
  {
    label: 'Яндекс Метрика: состав данных / Data collected',
    href: 'https://yandex.ru/support/metrica/ru/code/data-collected'
  },
  {
    label: 'Яндекс Метрика: cookies и хранилище / Cookies and storage',
    href: 'https://yandex.ru/support/metrica/ru/general/cookie-usage'
  },
  {
    label: 'Условия Яндекс Метрики / Yandex Metrica terms',
    href: 'https://yandex.ru/legal/metrica_termsofuse/ru/'
  },
  {
    label: 'Политика Яндекса / Yandex privacy policy',
    href: 'https://yandex.ru/legal/confidential/ru/'
  }
];

const ru: Record<LegalKind, Document> = {
  policy: {
    title: 'Политика обработки персональных данных',
    intro: 'Как СЕХА обрабатывает обращения с сайта, защищает данные и использует веб-аналитику.',
    sections: [
      {
        title: 'Оператор и область действия',
        paragraphs: [
          operatorRu,
          'Политика действует для посетителей seha-group.ru, покупателей и представителей организаций, направляющих обращения через сайт. Она разработана с учётом Федерального закона № 152-ФЗ «О персональных данных» и не заменяет документы об обработке данных работников. Ознакомление с политикой само по себе не означает согласия на обработку данных.'
        ]
      },
      {
        title: 'Заявки и обратная связь',
        paragraphs: [
          'Цели: рассмотреть обращение, ответить на вопросы, подобрать продукцию, подготовить коммерческое предложение и согласовать заказ. Обрабатываются имя контактного лица, телефон и email, название и тип компании, выбранный товар, фасовка, количество и содержание сообщения — в том объёме, в котором они предоставлены посетителем. Компания и email в общей форме необязательны; обязательные поля отмечены в форме.',
          'Основания: отдельное согласие на обработку обращения, а при подготовке и исполнении договора — соответствующее основание, предусмотренное статьёй 6 № 152-ФЗ. Согласие не включает рекламные рассылки и не является согласием на аналитику.',
          actionsRu,
          'Обращения, не перешедшие в договор, хранятся не более 12 месяцев после завершения общения, если раньше не достигнута цель обработки или не поступил отзыв и нет другого законного основания для хранения. Договорные и учётные документы хранятся в сроки, установленные применимым законодательством.'
        ]
      },
      {
        title: 'Яндекс Метрика и Вебвизор',
        paragraphs: [
          'Цели: оценивать посещаемость, источники переходов и удобство сайта, находить ошибки и измерять интерес к товарам и обращениям. Аналитика включается только после выбора «Разрешить аналитику». Отказ не препятствует просмотру сайта и отправке заявки.',
          'Используется счётчик Яндекс Метрики 114242284, включая Вебвизор, карту кликов и учёт переходов по ссылкам. Могут обрабатываться IP-адрес, cookie-идентификаторы, сведения о браузере, устройстве, языке и экране, примерный регион, время и длительность посещения, страницы, источник перехода, UTM-метки, yclid, клики, прокрутка, открытие формы и факт её успешной отправки. В событиях товара передаётся его идентификатор.',
          'Поля форм скрыты от Вебвизора. В настроенные сайтом события не включаются имя, телефон, email и текст обращения. Произвольные параметры и фрагменты адресов страниц удаляются перед передачей настроенного просмотра; UTM-метки и yclid используются для определения источников. Не указывайте персональные данные в метках и адресах ссылок.',
          'Получатель аналитических данных — ООО «ЯНДЕКС», 119021, Россия, г. Москва, ул. Льва Толстого, д. 16. Яндекс обрабатывает данные по поручению оператора на условиях сервиса; отдельные случаи самостоятельной обработки Яндексом определяются его политикой и настройками сервиса. Контактные данные заявок не передаются в специально настроенные события Метрики.',
          'Основание — отдельное согласие на аналитику. Записи Вебвизора доступны 15 дней, включая текущий день. Сроки cookie и записей браузерного хранилища описаны ниже. Срок доступности отчётов сервиса отличается от срока cookie; прекращение будущего сбора не означает автоматического удаления ранее собранных данных. По вопросам их обработки и удаления можно обратиться к оператору.'
        ],
        links: yandexLinks
      },
      {
        title: 'Cookies, локальное хранилище и выбор посетителя',
        paragraphs: [
          'Техническая запись seha-analytics-choice хранит разрешение или отказ, время выбора, версию документа и случайный номер подтверждения. Выбор действует 180 дней; при следующем посещении после истечения срока сайт вновь предлагает его сделать. Запись можно удалить в настройках браузера. Старое закрытие уведомления не считается разрешением аналитики.',
          'Метрика может сохранять аналитические cookie: _ym_uid и _ym_d — до одного года, _ym_isad — до 20 часов, _ym_visorc_* — до 30 минут, _ym_metrika_enabled — до 60 минут. Также используются служебные записи Метрики в localStorage и cookie на доменах Яндекса. Состав зависит от браузера и функций сервиса; актуальный перечень приведён в документации Яндекса.',
          'Для подтверждения выбора сайт хранит в закрытом журнале случайный номер, разрешение или отказ, версию согласия и серверное время. Журнал не содержит введённых контактов, текста заявки или IP-адреса; записи старше 365 дней удаляются при следующем обращении к журналу. Цель журнала — учёт выбора и подтверждение правомерности обработки.',
          'Изменить выбор можно через «Настройки аналитики» в подвале. При отказе сайт прекращает работу своего счётчика, удаляет доступные ему записи Метрики и перезагружает страницу. Cookie на доменах Яндекса можно удалить через настройки браузера. Удаление всех данных браузера стирает и сохранённый выбор.'
        ]
      },
      {
        title: 'Обработка заявок и доступ к данным',
        paragraphs: [
          'Заявки поступают команде СЕХА в Москве на seha.info@inbox.ru. Для работы сайта и доставки обращений используются хостинг REG.RU и почтовая инфраструктура адреса inbox.ru. Соответствующие поставщики обрабатывают необходимые технические данные и сообщения в рамках оказания услуг. Уполномоченным сотрудникам предоставляется доступ в объёме, необходимом для их задач.',
          'Данные не публикуются и не продаются. Предоставление государственным органам и иным получателям допускается при наличии предусмотренного законом основания. Согласие на обращение не разрешает распространение данных неограниченному кругу лиц.'
        ]
      },
      {
        title: 'Локализация и трансграничная передача',
        paragraphs: [
          'При сборе персональных данных граждан РФ оператор обеспечивает выполнение требований части 5 статьи 18 № 152-ФЗ об использовании баз данных на территории России. Сайт не отправляет заявки напрямую на производственную площадку в Индии: первично они поступают команде в Москве.',
          'При согласовании производства или поставки может потребоваться передача части данных из обращения в Индию. Такая передача проводится только при наличии самостоятельного законного основания и выполнении требований статьи 12 № 152-ФЗ, включая предварительное уведомление Роскомнадзора и соблюдение применимых ограничений. Получатель, цель и необходимый состав данных определяются для конкретного согласования; сведения об обработке можно запросить у оператора. Если основанием служит согласие, оно оформляется отдельно для соответствующей передачи.'
        ]
      },
      {
        title: 'Защита, прекращение обработки и удаление',
        paragraphs: [
          'Сайт использует HTTPS, проверку обязательных полей и ограничения частоты обращений. Доступ к серверным журналам выбора закрыт для посетителей. Данные заявок не включаются в общедоступные страницы и технические сообщения об ошибках.',
          'При достижении цели, истечении срока или отзыве согласия обработка прекращается, а данные удаляются или уничтожаются в установленные законом сроки, если отсутствует другое законное основание для продолжения обработки. Для обращений и копий в почте порядок хранения распространяется и на используемые оператором рабочие системы.'
        ]
      },
      {
        title: 'Права и обращение к оператору',
        paragraphs: [
          'Вы вправе получить сведения об обработке и получателях данных, потребовать уточнения, блокирования или удаления, отозвать согласие и обратиться за защитой прав в Роскомнадзор или суд. Направляйте запрос на seha.info@inbox.ru либо по почтовому адресу оператора. Для поиска обращения достаточно указать использованный контакт и суть запроса; оператор может запросить сведения, необходимые для подтверждения личности.',
          'Ответы и необходимые действия выполняются в сроки, установленные № 152-ФЗ. Отзыв согласия не делает незаконной предшествующую обработку и не отменяет обработку, для которой сохраняется другое законное основание. Согласие на аналитику можно отозвать независимо от обработки заявки.',
          'Актуальная редакция размещается на этой странице с датой вступления в силу. Существенное изменение целей или состава обработки, основанной на согласии, требует нового согласия; публикация обновлённого текста сама по себе его не заменяет.'
        ]
      }
    ]
  },
  inquiry: {
    title: 'Согласие на обработку персональных данных',
    intro:
      'Согласие для рассмотрения заявки и обратной связи с командой СЕХА: состав данных, цели, сроки обработки и порядок отзыва.',
    sections: [
      {
        title: 'Кому и для чего я даю согласие',
        paragraphs: [
          operatorRu,
          'Проставляя отдельную незаполненную заранее отметку в форме и отправляя обращение на seha-group.ru, я свободно, своей волей и в своём интересе даю согласие оператору на обработку предоставленных данных для рассмотрения обращения, ответа, подбора товара, подготовки предложения и согласования заказа.'
        ]
      },
      {
        title: 'Какие данные обрабатываются',
        paragraphs: [
          'Имя контактного лица, номер телефона, email, название и тип компании, сведения о выбранном товаре, фасовке, количестве и содержание сообщения — только в объёме, который я указываю в форме. Данные о здоровье, паспортные сведения, платёжные реквизиты и другие не относящиеся к обращению сведения предоставлять не нужно.',
          actionsRu
        ]
      },
      {
        title: 'Срок и участники обработки',
        paragraphs: [
          'Согласие действует до достижения цели или отзыва, но не более 12 месяцев после завершения общения по обращению, не перешедшему в договор. При подготовке и исполнении договора обработка может продолжаться на предусмотренном законом основании.',
          'Обращение получает команда СЕХА в Москве. Для передачи и хранения сообщения задействованы хостинг REG.RU и почтовая инфраструктура адреса seha.info@inbox.ru. Доступ предоставляется уполномоченным сотрудникам в объёме их задач. Отметка согласия, версия текста, случайный номер подтверждения и время получения сохраняются вместе с обращением.'
        ]
      },
      {
        title: 'Границы согласия и отзыв',
        paragraphs: [
          'Это согласие не включает рекламные рассылки, веб-аналитику, распространение данных и само по себе не разрешает трансграничную передачу данных в Индию. При необходимости такой передачи применяется самостоятельное законное основание и выполняются требования статьи 12 № 152-ФЗ.',
          'Отозвать согласие можно письмом на seha.info@inbox.ru или по почтовому адресу оператора. Оператор прекращает обработку и удаляет данные в предусмотренные законом сроки, кроме случаев, когда сохраняется другое законное основание. Отказ не ограничивает просмотр сайта; без необходимых контактов оператор не сможет ответить через форму.'
        ]
      }
    ]
  },
  analytics: {
    title: 'Согласие на аналитику',
    intro:
      'Добровольное разрешение использовать Яндекс Метрику, cookies и Вебвизор: какие данные обрабатываются и как изменить свой выбор.',
    sections: [
      {
        title: 'Оператор, цель и действие согласия',
        paragraphs: [
          operatorRu,
          'Нажимая «Разрешить аналитику», я свободно, своей волей и в своём интересе разрешаю обработку данных посещений seha-group.ru для оценки посещаемости, источников переходов, интереса к товарам и удобства сайта. До моего разрешения счётчик сайта не загружается. Согласие действует до отзыва или истечения 180 дней с момента выбора, после чего требуется новый выбор.'
        ]
      },
      {
        title: 'Данные и получатель',
        paragraphs: [
          'IP-адрес, cookie-идентификаторы, сведения о браузере, устройстве, экране и языке, примерный регион, время, длительность и страницы посещения, источник перехода, UTM-метки и yclid, клики, прокрутка, открытие формы, факт отправки обращения и идентификатор товара. Вебвизор записывает взаимодействие со страницами; поля заявок скрыты от записи. В настроенные события не включаются имя, телефон, email и содержание сообщения.',
          'Данные передаются ООО «ЯНДЕКС» (119021, Россия, г. Москва, ул. Льва Толстого, д. 16) для обработки сервисом Яндекс Метрика, счётчик 114242284, на условиях сервиса. Сайт не использует это согласие для передачи содержания заявок в аналитику.',
          actionsRu
        ],
        links: yandexLinks
      },
      {
        title: 'Хранение и подтверждение выбора',
        paragraphs: [
          'Выбор в браузере сохраняется до 180 дней. Сроки аналитических cookie составляют от 30 минут до одного года в зависимости от назначения; служебные записи сервиса описаны в политике и документации Яндекса. Записи Вебвизора доступны 15 дней, включая текущий день. Срок доступности статистических отчётов отличается от срока действия cookie.',
          'В закрытом журнале хранится случайный номер подтверждения, выбор, версия текста и серверное время. Записи старше 365 дней удаляются при следующем обращении к журналу. Эти сведения используются для подтверждения выбора; введённые контакты, текст заявки и IP-адрес в журнал не записываются.'
        ]
      },
      {
        title: 'Отказ и отзыв согласия',
        paragraphs: [
          'Можно выбрать «Без аналитики», закрыть уведомление без разрешения либо в любой момент изменить выбор через «Настройки аналитики» в подвале. Просмотр сайта и формы остаются доступны. При отзыве страница перезагружается, чтобы прекратить работу ранее загруженного счётчика. Ранее полученные данные не удаляются автоматически: запрос об их обработке и удалении можно направить на seha.info@inbox.ru.',
          'Это разрешение не заменяет отдельное согласие на обработку обращения и не означает согласия на рекламные рассылки.'
        ]
      }
    ]
  }
};

const en: Record<LegalKind, Document> = {
  policy: {
    title: 'Personal Data Processing Policy',
    intro: 'How SEHA handles website inquiries, protects data and uses web analytics.',
    sections: [
      {
        title: 'Controller and scope',
        paragraphs: [
          operatorEn,
          'This policy covers visitors to seha-group.ru, customers and company representatives submitting inquiries through the website. It follows Russian Federal Law No. 152-FZ and does not replace employee data policies. Reading this policy does not constitute consent.'
        ]
      },
      {
        title: 'Inquiries and communication',
        paragraphs: [
          'Purposes: handling inquiries, answering questions, selecting products, preparing quotations and agreeing orders. Data may include contact name, phone, email, company name and type, selected product, packaging, quantity and message, to the extent provided. Company and email are optional in the general form; required fields are indicated.',
          'Grounds: separate inquiry consent and, where applicable, preparation or performance of a contract under Article 6 of Law No. 152-FZ. Inquiry consent does not include advertising or analytics.',
          actionsEn,
          'Inquiries that do not result in a contract are retained for no more than 12 months after communication ends, or for a shorter period if the purpose is achieved or consent is withdrawn and no other legal ground remains. Contract and accounting records follow statutory retention periods.'
        ]
      },
      {
        title: 'Yandex Metrica and session replay',
        paragraphs: [
          'Purposes: evaluating visits, traffic sources, product interest, usability and errors. Analytics starts only after “Allow analytics”. Refusal does not prevent browsing or sending inquiries.',
          'Counter 114242284 uses session replay, click maps and link tracking. Data may include IP address, cookie identifiers, browser, device, language and screen details, approximate region, visit time and duration, pages, referrer, UTM tags, yclid, clicks, scrolling, form opening, successful submission and product identifiers.',
          'Inquiry fields are hidden from session replay. Website-configured events exclude names, phone numbers, email addresses and message content. Arbitrary query parameters and fragments are removed from configured page views; UTM tags and yclid identify traffic sources. Do not place personal data in campaign tags or link addresses.',
          'Analytics data is received by YANDEX LLC, 16 Lva Tolstogo Street, Moscow, 119021, Russia, acting on the controller’s instructions under the service terms. Separate processing by Yandex is governed by its privacy policy and service settings. Contact information from inquiries is not included in website-configured Metrica events.',
          'Ground: separate analytics consent. Session replay records are available for 15 days including the current day. Cookie lifetimes are described below and differ from report availability. Stopping future collection does not automatically erase previously collected data. Contact the controller about processing or erasure.'
        ],
        links: yandexLinks
      },
      {
        title: 'Cookies, storage and visitor choice',
        paragraphs: [
          'The technical seha-analytics-choice record stores permission or refusal, choice time, document version and a random receipt. The choice is valid for 180 days; a new choice is requested on the next visit after expiry. The record can be removed in browser settings. Dismissing an earlier notice is not treated as analytics permission.',
          'Metrica may set _ym_uid and _ym_d for up to one year, _ym_isad for up to 20 hours, _ym_visorc_* for up to 30 minutes and _ym_metrika_enabled for up to 60 minutes. It also uses service records in localStorage and cookies on Yandex domains. The actual set depends on the browser and service functions; see Yandex documentation.',
          'A protected journal stores only a random receipt, choice, consent version and server timestamp to document the choice and lawful processing. It contains no submitted contact details, messages or IP address. Records older than 365 days are removed on the next journal request.',
          'Use “Analytics settings” in the footer to change your choice. On refusal, the website stops its counter, clears accessible Metrica records and reloads the page. Cookies on Yandex domains can be cleared in browser settings. Clearing all browser data also removes your saved choice.'
        ]
      },
      {
        title: 'Inquiry processing and access',
        paragraphs: [
          'Inquiries reach the SEHA team in Moscow at seha.info@inbox.ru. REG.RU hosting and the mail infrastructure for inbox.ru support website operation and message delivery and process the technical data and messages needed to provide those services. Authorised staff receive access required for their duties.',
          'Data is not published or sold. Disclosure to authorities or other recipients requires a legal ground. Inquiry consent does not authorise public dissemination.'
        ]
      },
      {
        title: 'Localisation and international transfers',
        paragraphs: [
          'When collecting Russian citizens’ personal data, the controller fulfils the Russian database requirements of Article 18(5) of Law No. 152-FZ. The website does not send inquiries directly to the Indian production facility: they are initially received by the Moscow team.',
          'Production or supply coordination may require some inquiry data to be transferred to India. Such transfers require a separate legal ground and compliance with Article 12, including prior notification to Roskomnadzor and applicable restrictions. The recipient, purpose and necessary data are determined for the specific coordination; processing information can be requested from the controller. Where consent is the ground, a separate consent is obtained for that transfer.'
        ]
      },
      {
        title: 'Protection and erasure',
        paragraphs: [
          'The website uses HTTPS, required-field validation and request rate limits. Visitor access to consent journals is blocked. Inquiry content is not included in public pages or technical error messages.',
          'Processing stops and data is erased or destroyed within statutory periods when the purpose is achieved, retention expires or consent is withdrawn, unless another legal ground remains. Inquiry retention also applies to copies in the controller’s working systems and mail.'
        ]
      },
      {
        title: 'Rights and requests',
        paragraphs: [
          'You may request processing and recipient information, correction, blocking or erasure, withdraw consent and complain to Roskomnadzor or a court. Contact seha.info@inbox.ru or the controller’s postal address. Provide the contact used for the inquiry and the nature of your request; identity verification information may be requested if necessary.',
          'Responses and actions follow the time limits of Law No. 152-FZ. Withdrawal does not invalidate earlier lawful processing or processing on another legal ground. Analytics consent can be withdrawn independently of inquiry processing.',
          'The current version and effective date appear on this page. Material changes to consent-based purposes or data require renewed consent; publishing a revised policy does not replace it.'
        ]
      }
    ]
  },
  inquiry: {
    title: 'Consent to Personal Data Processing',
    intro:
      'Consent for handling your inquiry and communication with SEHA: data categories, purposes, duration and withdrawal.',
    sections: [
      {
        title: 'Controller and purpose',
        paragraphs: [
          operatorEn,
          'By ticking the separate, initially unchecked box and submitting an inquiry on seha-group.ru, I freely consent to processing the supplied data to handle my inquiry, answer questions, select products, prepare a quotation and agree an order.'
        ]
      },
      {
        title: 'Data and processing',
        paragraphs: [
          'Contact name, phone, email, company name and type, product, packaging, quantity and message, only as provided in the form. Do not submit health information, passport details, payment credentials or unrelated information.',
          actionsEn
        ]
      },
      {
        title: 'Duration and participants',
        paragraphs: [
          'Consent lasts until its purpose is achieved or withdrawal, and no longer than 12 months after communication ends for an inquiry that does not result in a contract. Contract preparation or performance may continue on the applicable legal ground.',
          'The Moscow SEHA team receives the inquiry. REG.RU hosting and the mail infrastructure for seha.info@inbox.ru support message delivery and storage. Authorised staff access data required for their tasks. The consent indication, text version, random receipt and server receipt time are kept with the inquiry.'
        ]
      },
      {
        title: 'Limits and withdrawal',
        paragraphs: [
          'This consent does not include advertising, analytics, public dissemination or, by itself, a transfer to India. Any international transfer requires a separate legal ground and compliance with Article 12 of Law No. 152-FZ.',
          'Withdraw by emailing seha.info@inbox.ru or writing to the controller’s postal address. Processing and erasure follow statutory periods unless another legal ground remains. Refusal does not limit browsing; without necessary contact details the controller cannot respond through the form.'
        ]
      }
    ]
  },
  analytics: {
    title: 'Analytics Consent',
    intro:
      'Voluntary permission for Yandex Metrica, cookies and session replay: data collected, processing purposes and changing your choice.',
    sections: [
      {
        title: 'Controller, purpose and duration',
        paragraphs: [
          operatorEn,
          'By choosing “Allow analytics”, I freely permit processing visit data on seha-group.ru to evaluate traffic, sources, product interest and usability. The website counter is not loaded before permission. Consent lasts until withdrawal or 180 days after the choice, when a new choice is requested.'
        ]
      },
      {
        title: 'Data and recipient',
        paragraphs: [
          'IP address, cookie identifiers, browser, device, screen and language details, approximate region, visit time, duration and pages, referrer, UTM tags and yclid, clicks, scrolling, form opening, successful submission and product identifiers. Session replay records page interactions; inquiry fields are hidden. Website-configured events exclude names, phone numbers, email addresses and message content.',
          'Data is transmitted to YANDEX LLC, 16 Lva Tolstogo Street, Moscow, 119021, Russia, for Yandex Metrica counter 114242284 under the service terms. This consent is not used to transmit inquiry contents to analytics.',
          actionsEn
        ],
        links: yandexLinks
      },
      {
        title: 'Storage and choice evidence',
        paragraphs: [
          'Browser choice is saved for up to 180 days. Analytics cookies last from 30 minutes to one year depending on purpose; service records are described in the policy and Yandex documentation. Session replay is available for 15 days including the current day. Report availability differs from cookie lifetime.',
          'A protected journal records a random receipt, choice, text version and server timestamp as evidence of the choice. Records older than 365 days are removed on the next journal request. It contains no submitted contact details, inquiry text or IP address.'
        ]
      },
      {
        title: 'Refusal and withdrawal',
        paragraphs: [
          'Choose “Without analytics”, close the notice without permission or use “Analytics settings” in the footer at any time. Browsing and inquiry forms remain available. Withdrawal reloads the page to stop a previously loaded counter. Previously collected data is not automatically erased: contact seha.info@inbox.ru about processing and erasure.',
          'This permission does not replace separate inquiry consent and does not authorise advertising emails.'
        ]
      }
    ]
  }
};
export const legalDocuments: Record<Locale, Record<LegalKind, Document>> = { ru, en };
