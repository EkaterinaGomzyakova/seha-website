import type { Locale } from './translations';
import { privacyVersion } from './privacy-settings';

type Section = {
  id?: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  links?: { label: string; href: string }[];
  wide?: boolean;
};
export type LegalKind = 'policy' | 'inquiry';
type Document = { title: string; intro: string; sections: Section[] };
export const legalPaths = { policy: '/privacy/', inquiry: '/consent/' } as const;
export const legalVersion = privacyVersion.split('.')[0];
export const legalDocuments: Record<Locale, Record<LegalKind, Document>> = {
  ru: {
    policy: {
      title: 'Политика обработки персональных данных',
      intro:
        'Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта seha-group.ru (далее — Сайт).',
      sections: [
        {
          title: 'Общие положения',
          paragraphs: [
            'ООО «СЕХА», ИНН 9725204216, ОГРН 1267700116903. Адрес: 115432, Россия, г. Москва, б-р Братьев Весниных, д. 1, пом. 151К. Email для обращений по персональным данным: seha.info@inbox.ru. Телефон: +7 966 061-28-28.',
            'Настоящая Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных». Она распространяется на посетителей Сайта и лиц, направляющих обращения, в том числе представителей организаций. Порядок обработки данных работников регулируется отдельными документами.',
            'Использование Сайта и ознакомление с Политикой не являются согласием на обработку персональных данных. Согласие на обработку заявки и согласие на аналитику предоставляются независимо друг от друга.'
          ],
          wide: true
        },
        {
          title: 'Какие данные обрабатываются',
          paragraphs: [
            'Оператор обрабатывает данные в объёме, необходимом для соответствующей цели:'
          ],
          items: [
            'При обращении: имя контактного лица, телефон, email, название и тип компании, выбранный товар, фасовка, количество, город доставки и иные сведения, добровольно указанные в сообщении. Обязательные поля обозначены в форме; компания и email в общей форме необязательны.',
            'При разрешённой аналитике: IP-адрес, cookie-идентификаторы, сведения о браузере и устройстве, языке и экране, примерном регионе, страницах и времени посещения, источнике перехода и взаимодействии с Сайтом.',
            'Для работы и защиты Сайта: технические сведения о запросах к серверу и подтверждения выбора пользователя. Данные о здоровье, паспортные сведения, платёжные реквизиты и иные сведения, не относящиеся к обращению, в формах не запрашиваются.'
          ]
        },
        {
          title: 'Цели и правовые основания',
          paragraphs: ['Персональные данные используются только для заранее определённых целей:'],
          items: [
            'Рассмотрение обращения, обратная связь, подбор продукции, подготовка коммерческого предложения и согласование заказа — на основании отдельного согласия пользователя.',
            'Заключение и исполнение договора — при наличии применимого основания статьи 6 Федерального закона № 152-ФЗ. Основание, связанное с договором, применяется к данным его стороны, выгодоприобретателя или поручителя; для представителей организаций определяется самостоятельное применимое основание.',
            'Анализ посещаемости, источников переходов и удобства Сайта — на основании отдельного согласия на аналитику.',
            'Обеспечение работы и безопасности Сайта, учёт согласий и исполнение законных обязанностей — на соответствующих основаниях статьи 6 Федерального закона № 152-ФЗ с соблюдением прав пользователя. Согласие на заявку или аналитику не включает рекламные рассылки.'
          ]
        },
        {
          title: 'Порядок обработки',
          paragraphs: [
            'Обработка включает сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление доступа уполномоченным лицам, блокирование, удаление и уничтожение данных. Используются автоматизированные средства и обработка без них.',
            'Оператор ограничивает обработку необходимым объёмом данных, не объединяет несовместимые цели и предоставляет доступ только уполномоченным лицам. Предоставленные контакты не включаются в общедоступные страницы Сайта. Решения, порождающие юридические последствия для пользователя, исключительно на основании автоматизированной обработки на Сайте не принимаются.'
          ]
        },
        {
          title: 'Защита персональных данных',
          paragraphs: [
            'При передаче данных используется HTTPS. Формы проверяют обязательные поля; сервер ограничивает частоту обращений. Журнал подтверждений согласия закрыт от доступа посетителей. Контактные данные и содержание заявок не включаются в технические сообщения об ошибках.',
            'Оператор принимает организационные и технические меры, необходимые для предотвращения неправомерного доступа, утраты, изменения и распространения данных. При выявлении нарушений применяются меры и процедуры уведомления, предусмотренные законодательством РФ.'
          ]
        },
        {
          title: 'Cookies и Яндекс Метрика',
          paragraphs: [
            'Сайт использует Яндекс Метрику, счётчик 114242284, включая Вебвизор, карту кликов и учёт переходов по ссылкам. Счётчик загружается только после нажатия «Разрешить аналитику». Отказ не ограничивает просмотр Сайта и отправку заявок.',
            'Метрика обрабатывает сведения о посещениях, перечисленные выше, а также UTM-метки и yclid, клики, прокрутку, открытие формы, факт успешной отправки и идентификатор товара. Поля заявок скрыты от Вебвизора. В настроенные Сайтом события не включаются имя, телефон, email и текст обращения; произвольные параметры и фрагменты адресов удаляются из настроенного просмотра, кроме меток источника перехода.',
            'Техническая запись seha-analytics-choice в localStorage сохраняет выбор, его время, версию согласия и случайный номер подтверждения. Метрика может использовать _ym_uid, _ym_d, _ym_isad, _ym_visorc_* и другие cookies и записи хранилища, указанные в документации сервиса.',
            'Пользователь также может ограничить сбор данных с помощью расширения «Блокировщик Яндекс Метрики». Установка расширения и удаление cookies доступны независимо от отправки заявки.'
          ],
          links: [
            {
              label: 'Состав данных Яндекс Метрики / Data collected by Yandex Metrica',
              href: 'https://yandex.ru/support/metrica/ru/code/data-collected'
            },
            {
              label: 'Cookies и хранилище / Cookies and storage',
              href: 'https://yandex.ru/support/metrica/ru/general/cookie-usage'
            },
            {
              label: 'Условия использования Метрики / Yandex Metrica terms',
              href: 'https://yandex.ru/legal/metrica_termsofuse/ru/'
            },
            {
              label: 'Блокировщик Яндекс Метрики / Yandex Metrica opt-out',
              href: 'https://yandex.ru/support/metrica/ru/general/opt-out'
            },
            {
              label: 'Политика Яндекса / Yandex privacy policy',
              href: 'https://yandex.ru/legal/confidential/ru/'
            }
          ]
        },
        {
          title: 'Сроки хранения',
          paragraphs: [
            'Персональные данные хранятся не дольше, чем этого требуют цели обработки и применимые законные основания. Для Сайта установлены следующие условия:'
          ],
          items: [
            'Обращения, не перешедшие в договор, — не более 12 месяцев после завершения общения; ранее — при достижении цели или отзыве согласия, если отсутствует иное законное основание. Этот порядок распространяется на рабочую переписку и её копии.',
            'Договорные и учётные документы — в сроки, установленные законодательством для соответствующего вида документа.',
            'Выбор по аналитике действует 180 дней. Истечение этого срока требует нового выбора при следующем посещении; оно не определяет срок хранения ранее собранной статистики.',
            'Записи Вебвизора доступны 15 дней, включая текущий день. Основные cookies Метрики действуют от 30 минут до одного года; отдельные технические cookies могут действовать до двух лет. Состав и сроки зависят от функций сервиса и указаны в документации Яндекса.',
            'Закрытый журнал выбора содержит случайный номер, выбор, версию согласия и серверное время, без контактов, текста заявки и IP-адреса. Записи старше 365 дней удаляются при следующей записи в журнал.'
          ]
        },
        {
          title: 'Получатели персональных данных',
          paragraphs: [
            'Заявки поступают уполномоченной команде СЕХА в Москве на seha.info@inbox.ru. Для размещения Сайта и доставки сообщений используются хостинг REG.RU и почтовая инфраструктура inbox.ru. Поставщики услуг получают необходимые для их оказания технические данные и сообщения.',
            'Получатель данных аналитики — ООО «ЯНДЕКС», адрес: 119021, Россия, г. Москва, ул. Льва Толстого, д. 16. Обработка по поручению Оператора осуществляется на условиях Яндекс Метрики. Самостоятельная обработка Яндексом допускается в случаях, предусмотренных его политикой и настройками сервиса, при наличии необходимых правовых оснований.',
            'Персональные данные не продаются и не размещаются для неограниченного круга лиц. Предоставление государственным органам и иным получателям допускается при наличии предусмотренного законом основания.'
          ]
        },
        {
          title: 'Локализация и передача за рубеж',
          paragraphs: [
            'При сборе персональных данных граждан РФ Оператор соблюдает требования части 5 статьи 18 Федерального закона № 152-ФЗ к использованию баз данных на территории России. Заявки с Сайта первично поступают команде в Москве; автоматическая отправка заявок на производственную площадку в Индии не предусмотрена.',
            'При согласовании производства или поставки может потребоваться передача отдельных сведений из обращения в Индию, в том числе предоставление доступа иностранному получателю. Такая передача допускается только при наличии законного основания и соблюдении статьи 12 Федерального закона № 152-ФЗ: после определения получателя, цели и состава данных, получения необходимых сведений о защите данных, направления отдельного уведомления Роскомнадзору и соблюдения применимых сроков и ограничений. Согласие на заявку само по себе не разрешает такую передачу. Если основанием является согласие, оно оформляется для соответствующей передачи отдельно.'
          ]
        },
        {
          title: 'Права пользователя и обращения',
          paragraphs: [
            'Пользователь вправе получать сведения об обработке своих данных и получателях, требовать уточнения, блокирования или уничтожения данных, отзывать согласие и обращаться в Роскомнадзор или суд. Запрос направляется на seha.info@inbox.ru или по почтовому адресу Оператора. Для исполнения запроса Оператор вправе проверить личность заявителя в установленном законом порядке.'
          ],
          items: [
            'Предоставление сведений об обработке — в течение 10 рабочих дней; мотивированное продление допускается не более чем на 5 рабочих дней.',
            'Исправление подтверждённой неточности — в течение 7 рабочих дней после предоставления необходимых сведений.',
            'Прекращение обработки по требованию — в течение 10 рабочих дней с возможным мотивированным продлением не более чем на 5 рабочих дней, кроме предусмотренных законом случаев.'
          ]
        },
        {
          title: 'Отзыв согласия и уничтожение данных',
          paragraphs: [
            'Согласие на обработку заявки можно отозвать письмом на seha.info@inbox.ru или по почтовому адресу Оператора. Достаточно обозначить обращение и требование об отзыве; при необходимости запрашиваются сведения для подтверждения личности.',
            'Изменить выбор или отозвать согласие на аналитику можно с помощью кнопки «Настройки аналитики» в конце настоящего документа или на странице согласия. При отказе сайт прекращает работу своего счётчика, удаляет доступные ему записи Метрики и перезагружает страницу. Cookies на доменах Яндекса удаляются в настройках браузера.',
            'При достижении цели или отзыве согласия данные уничтожаются в срок не более 30 дней, если отсутствует предусмотренное законом основание для продолжения обработки. Специальные сроки, исключения и порядок блокирования при невозможности своевременного уничтожения определяются статьёй 21 Федерального закона № 152-ФЗ. Прекращение будущего сбора Метрикой не означает автоматического удаления ранее собранных данных: запрос об их обработке и удалении направляется Оператору.'
          ]
        },
        {
          title: 'Изменение Политики',
          paragraphs: [
            'Действующая редакция размещается на этой странице с датой её обновления. Изменение текста не расширяет ранее предоставленное согласие. При изменении целей или состава обработки, требующем нового согласия, Оператор получает его отдельно.'
          ],
          wide: true
        }
      ]
    },
    inquiry: {
      title: 'Согласие на обработку персональных данных',
      intro:
        'Настоящий документ содержит два самостоятельных согласия: на обработку заявки и на веб-аналитику. Каждое согласие предоставляется отдельным действием пользователя.',
      sections: [
        {
          title: 'Оператор и условия предоставления согласия',
          paragraphs: [
            'ООО «СЕХА», ИНН 9725204216, ОГРН 1267700116903. Адрес: 115432, Россия, г. Москва, б-р Братьев Весниных, д. 1, пом. 151К. Email для обращений по персональным данным: seha.info@inbox.ru. Телефон: +7 966 061-28-28.',
            'Обработка включает сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, предоставление доступа уполномоченным лицам, блокирование, удаление и уничтожение данных. Используются автоматизированные средства и обработка без них.',
            'Согласие на заявку предоставляется отдельной отметкой в форме и её отправкой. Согласие на аналитику — нажатием «Разрешить аналитику». Отметки заранее не установлены. Предоставление одного согласия не означает предоставления другого; отказ от аналитики не препятствует отправке заявки.'
          ],
          wide: true
        },
        {
          title: 'Согласие на обработку заявки',
          paragraphs: [
            'Проставляя отметку о согласии и направляя обращение через форму на seha-group.ru, я свободно, своей волей и в своём интересе даю ООО «СЕХА» согласие на обработку предоставленных мною персональных данных с использованием средств автоматизации и без их использования.',
            'Цели обработки: рассмотрение обращения, подготовка ответа, обратная связь, подбор продукции, подготовка коммерческого предложения и согласование заказа. Состав данных: имя, телефон, email, название и тип компании, выбранный товар, фасовка, количество, город доставки и содержание сообщения — в объёме, указанном мною в форме.',
            'Обращение получает уполномоченная команда СЕХА в Москве. Для передачи и хранения сообщения используются хостинг REG.RU и почтовая инфраструктура inbox.ru. Вместе с обращением сохраняются отметка согласия, версия текста, случайный номер подтверждения и время получения.',
            'Согласие действует до достижения цели обработки или отзыва, но не более 12 месяцев после завершения общения по обращению, не перешедшему в договор. Продолжение обработки для договора, обязательного учёта или иных целей допускается только при наличии самостоятельного законного основания.',
            'Отзыв направляется на seha.info@inbox.ru или по почтовому адресу Оператора. При отсутствии другого законного основания данные уничтожаются в срок не более 30 дней после получения отзыва с учётом исключений статьи 21 Федерального закона № 152-ФЗ.',
            'Настоящее согласие не включает рекламные рассылки, аналитику, распространение данных неограниченному кругу лиц и само по себе не разрешает передачу персональных данных в Индию. Для трансграничной передачи требуется самостоятельное законное основание и соблюдение статьи 12 Федерального закона № 152-ФЗ.'
          ],
          id: 'inquiry'
        },
        {
          title: 'Согласие на аналитику',
          paragraphs: [
            'Нажимая «Разрешить аналитику», я свободно, своей волей и в своём интересе даю ООО «СЕХА» согласие на обработку данных посещений seha-group.ru с использованием Яндекс Метрики, включая cookies и Вебвизор, для оценки посещаемости, источников переходов, интереса к продукции и удобства Сайта.',
            'Состав данных: IP-адрес, cookie-идентификаторы, сведения о браузере, устройстве, экране, языке, примерном регионе, времени и длительности посещения, страницах и источнике перехода, UTM-метки и yclid, клики, прокрутка, открытие формы, факт успешной отправки и идентификатор товара. Поля заявок скрыты от Вебвизора; имя, телефон, email и сообщение не включаются в настроенные Сайтом события.',
            'Получатель данных — ООО «ЯНДЕКС», 119021, Россия, г. Москва, ул. Льва Толстого, д. 16, сервис Яндекс Метрика, счётчик 114242284. Обработка по поручению Оператора осуществляется на условиях сервиса. Согласие не предназначено для передачи содержания заявок в аналитику.',
            'Согласие действует до отзыва или истечения 180 дней с момента выбора. Записи Вебвизора доступны 15 дней; сроки cookies и хранилища зависят от их назначения и приведены в Политике и документации Яндекса. Срок действия выбора не совпадает со сроком хранения ранее собранной статистики.',
            'Для подтверждения выбора в закрытом журнале сохраняются случайный номер, выбор, версия согласия и серверное время. Контакты, сообщения и IP-адрес в журнал не записываются. Записи старше 365 дней удаляются при следующей записи в журнал.',
            'Я могу выбрать «Без аналитики» или закрыть уведомление без разрешения. Изменить выбор можно через «Настройки аналитики» в конце настоящего документа или Политики. Отзыв прекращает будущий сбор; запрос об обработке и удалении ранее собранных данных направляется на seha.info@inbox.ru. При отсутствии иного законного основания применяются сроки уничтожения по статье 21 Федерального закона № 152-ФЗ.',
            'Для ограничения сбора также доступен «Блокировщик Яндекс Метрики». Отказ от аналитики не ограничивает работу Сайта и форм. Настоящее согласие не заменяет согласие на заявку и не разрешает рекламные рассылки.'
          ],
          id: 'analytics',
          links: [
            {
              label: 'Состав данных Яндекс Метрики / Data collected by Yandex Metrica',
              href: 'https://yandex.ru/support/metrica/ru/code/data-collected'
            },
            {
              label: 'Cookies и хранилище / Cookies and storage',
              href: 'https://yandex.ru/support/metrica/ru/general/cookie-usage'
            },
            {
              label: 'Условия использования Метрики / Yandex Metrica terms',
              href: 'https://yandex.ru/legal/metrica_termsofuse/ru/'
            },
            {
              label: 'Блокировщик Яндекс Метрики / Yandex Metrica opt-out',
              href: 'https://yandex.ru/support/metrica/ru/general/opt-out'
            },
            {
              label: 'Политика Яндекса / Yandex privacy policy',
              href: 'https://yandex.ru/legal/confidential/ru/'
            }
          ]
        }
      ]
    }
  },
  en: {
    policy: {
      title: 'Personal Data Processing Policy',
      intro:
        'This Policy sets out how personal data of visitors to seha-group.ru (the Website) is processed and protected.',
      sections: [
        {
          title: 'General provisions',
          paragraphs: [
            'SEHA LLC, INN 9725204216, OGRN 1267700116903. Address: Office 151K, 1 Bratyev Vesninykh Boulevard, Moscow, 115432, Russia. Personal data requests: seha.info@inbox.ru. Phone: +7 966 061-28-28.',
            'This Policy is prepared under Russian Federal Law No. 152-FZ of 27 July 2006 on Personal Data. It applies to Website visitors and people submitting inquiries, including company representatives. Employee data is governed by separate documents.',
            'Using the Website or reading this Policy does not constitute consent. Inquiry processing and website analytics are independent choices.'
          ],
          wide: true
        },
        {
          title: 'Personal data processed',
          paragraphs: [
            'The controller processes only the information needed for the relevant purpose:'
          ],
          items: [
            'Inquiries: contact name, phone number, email, company name and type, selected product, packaging, quantity, delivery city and other information voluntarily included in the message. Required fields are indicated in the form; company and email are optional in the general form.',
            'Permitted analytics: IP address, cookie identifiers, browser, device, language and screen details, approximate region, pages, visit time, referrer and interactions with the Website.',
            'Website operation and security: technical request information and evidence of the visitor’s choice. Forms do not request health information, identity document details, payment credentials or information unrelated to an inquiry.'
          ]
        },
        {
          title: 'Purposes and legal grounds',
          paragraphs: ['Personal data is used only for defined purposes:'],
          items: [
            'Reviewing inquiries, responding, selecting products, preparing quotations and agreeing on orders: separate visitor consent.',
            'Entering into and performing contracts: an applicable ground under Article 6 of Law No. 152-FZ. The contractual ground applies to data of a party, beneficiary or guarantor; an independently applicable ground is identified for company representatives.',
            'Measuring traffic, referral sources and Website usability: separate analytics consent.',
            'Website operation and security, recording choices and complying with legal duties: applicable grounds under Article 6 of Law No. 152-FZ, respecting the visitor’s rights. Inquiry and analytics consent do not authorise advertising emails.'
          ]
        },
        {
          title: 'Processing procedures',
          paragraphs: [
            'Processing includes collection, recording, organisation, accumulation, storage, correction, retrieval, use, access by authorised persons, blocking, erasure and destruction, using automated and non-automated methods.',
            'The controller limits processing to the necessary data, keeps incompatible purposes separate and grants access only to authorised persons. Submitted contacts are not published on Website pages. The Website does not make decisions producing legal consequences for visitors solely through automated processing.'
          ]
        },
        {
          title: 'Data protection',
          paragraphs: [
            'HTTPS protects transmission. Forms validate required fields; the server limits request frequency. Consent journals cannot be accessed by visitors. Inquiry contacts and messages are excluded from technical error messages.',
            'The controller takes organisational and technical measures required to prevent unauthorised access, loss, alteration and disclosure. Incidents are handled and reported as required by Russian law.'
          ]
        },
        {
          title: 'Cookies and Yandex Metrica',
          paragraphs: [
            'The Website uses Yandex Metrica counter 114242284, including session replay, click maps and link tracking. It loads only after “Allow analytics” is selected. Refusal does not restrict browsing or inquiry submission.',
            'Metrica processes the visit information listed above, UTM tags, yclid, clicks, scrolling, form opening, successful submission and product identifiers. Inquiry fields are hidden from session replay. Website-configured events exclude contact names, phone numbers, emails and messages. Arbitrary URL parameters and fragments are removed from the configured page view, apart from referral campaign tags.',
            'The technical localStorage entry seha-analytics-choice stores the choice, its time, consent version and a random receipt. Metrica may use _ym_uid, _ym_d, _ym_isad, _ym_visorc_* and other cookies and storage entries described in its documentation.',
            'Visitors can also restrict collection using the Yandex Metrica opt-out browser extension. Installing the extension and deleting cookies are independent of submitting an inquiry.'
          ],
          links: [
            {
              label: 'Состав данных Яндекс Метрики / Data collected by Yandex Metrica',
              href: 'https://yandex.ru/support/metrica/ru/code/data-collected'
            },
            {
              label: 'Cookies и хранилище / Cookies and storage',
              href: 'https://yandex.ru/support/metrica/ru/general/cookie-usage'
            },
            {
              label: 'Условия использования Метрики / Yandex Metrica terms',
              href: 'https://yandex.ru/legal/metrica_termsofuse/ru/'
            },
            {
              label: 'Блокировщик Яндекс Метрики / Yandex Metrica opt-out',
              href: 'https://yandex.ru/support/metrica/ru/general/opt-out'
            },
            {
              label: 'Политика Яндекса / Yandex privacy policy',
              href: 'https://yandex.ru/legal/confidential/ru/'
            }
          ]
        },
        {
          title: 'Retention periods',
          paragraphs: [
            'Data is retained no longer than required by its purposes and applicable legal grounds. The following conditions apply:'
          ],
          items: [
            'Inquiries that do not result in a contract: no more than 12 months after communication ends; earlier when the purpose is achieved or consent withdrawn, unless another legal ground remains. This also applies to working correspondence and its copies.',
            'Contract and accounting records: the statutory period for the relevant type of document.',
            'Analytics choice: valid for 180 days, after which another choice is requested on the next visit. This does not determine how long previously collected statistics is retained.',
            'Session replay recordings: available for 15 days including the current day. Principal Metrica cookies last from 30 minutes to one year; some technical cookies may last up to two years. Their set and duration depend on the service functions and are described by Yandex.',
            'The protected choice journal contains a random receipt, choice, consent version and server time, without contacts, inquiry messages or IP addresses. Records older than 365 days are removed on the next journal write.'
          ]
        },
        {
          title: 'Recipients of personal data',
          paragraphs: [
            'Inquiries reach authorised SEHA staff in Moscow at seha.info@inbox.ru. REG.RU hosting and inbox.ru mail infrastructure are used to operate the Website and deliver messages. Service providers receive the technical data and messages needed to provide their services.',
            'The analytics recipient is YANDEX LLC, 16 Lva Tolstogo Street, Moscow, 119021, Russia. Processing on behalf of the controller follows the Yandex Metrica terms. Independent processing by Yandex is permitted where provided by its policy and service settings and supported by the necessary legal grounds.',
            'Personal data is not sold or made available to an unrestricted audience. Disclosure to public authorities or other recipients requires a lawful ground.'
          ]
        },
        {
          title: 'Localisation and international transfers',
          paragraphs: [
            'When collecting Russian citizens’ personal data, the controller complies with Article 18(5) of Law No. 152-FZ concerning databases in Russia. Website inquiries first reach the Moscow team; automatic forwarding to the production facility in India is not implemented.',
            'Production or shipment coordination may require disclosure of selected inquiry information to a recipient in India, including remote access. Such disclosure is permitted only on a lawful ground and subject to Article 12 of Law No. 152-FZ: identification of the recipient, purpose and data, collection of the required data protection information, a separate notification to Roskomnadzor, and compliance with applicable waiting periods and restrictions. Inquiry consent alone does not authorise this transfer. If consent is the legal ground, it is obtained separately for the relevant transfer.'
          ]
        },
        {
          title: 'Visitor rights and requests',
          paragraphs: [
            'Visitors may obtain processing and recipient information, request correction, blocking or destruction, withdraw consent, and complain to Roskomnadzor or a court. Requests may be sent to seha.info@inbox.ru or the controller’s postal address. The controller may verify the applicant’s identity in accordance with law.'
          ],
          items: [
            'Processing information: within 10 working days, with a reasoned extension of no more than 5 working days where permitted.',
            'Correction of confirmed inaccuracies: within 7 working days after the necessary information is provided.',
            'Stopping processing on request: within 10 working days, with a reasoned extension of no more than 5 working days where permitted, subject to statutory exceptions.'
          ]
        },
        {
          title: 'Withdrawal and destruction',
          paragraphs: [
            'Inquiry consent may be withdrawn by writing to seha.info@inbox.ru or the controller’s postal address. Identify the inquiry and state the withdrawal request; further identity verification may be required.',
            'Use “Analytics settings” at the end of this document or on the consent page to change your choice or withdraw analytics consent. On refusal, the website stops its counter, clears accessible Metrica records and reloads the page. Cookies on Yandex domains can be removed in browser settings.',
            'When the purpose is achieved or consent withdrawn, data is destroyed within 30 days unless a statutory ground permits continued processing. Special deadlines, exceptions and blocking where timely destruction is impossible follow Article 21 of Law No. 152-FZ. Stopping future Metrica collection does not automatically erase previously collected data; processing and erasure requests should be addressed to the controller.'
          ]
        },
        {
          title: 'Policy updates',
          paragraphs: [
            'The current version is published on this page with its revision date. Updating the text does not expand an earlier consent. Where a change of purposes or data requires new consent, the controller obtains it separately.'
          ],
          wide: true
        }
      ]
    },
    inquiry: {
      title: 'Consent to Personal Data Processing',
      intro:
        'This document contains two independent consents: inquiry processing and website analytics. Each is provided through a separate visitor action.',
      sections: [
        {
          title: 'Controller and consent conditions',
          paragraphs: [
            'SEHA LLC, INN 9725204216, OGRN 1267700116903. Address: Office 151K, 1 Bratyev Vesninykh Boulevard, Moscow, 115432, Russia. Personal data requests: seha.info@inbox.ru. Phone: +7 966 061-28-28.',
            'Processing includes collection, recording, organisation, accumulation, storage, correction, retrieval, use, access by authorised persons, blocking, erasure and destruction, using automated and non-automated methods.',
            'Inquiry consent is provided by selecting a separate checkbox and submitting the form. Analytics consent is provided by selecting “Allow analytics”. No choice is preselected. One consent does not imply the other, and refusing analytics does not prevent inquiry submission.'
          ],
          wide: true
        },
        {
          title: 'Inquiry processing consent',
          paragraphs: [
            'By selecting the consent checkbox and submitting an inquiry through seha-group.ru, I freely and in my own interest consent to SEHA LLC processing the personal data I provide, by automated and non-automated means.',
            'Purposes: reviewing the inquiry, preparing a response, contacting me, selecting products, preparing a quotation and agreeing on an order. Data: name, phone number, email, company name and type, selected product, packaging, quantity, delivery city and message content, to the extent I provide them.',
            'Authorised SEHA staff in Moscow receive the inquiry. REG.RU hosting and inbox.ru mail infrastructure are used to transmit and store the message. The consent indication, text version, random receipt and receipt time are retained with the inquiry.',
            'Consent lasts until its purpose is achieved or it is withdrawn, but no longer than 12 months after communication ends for an inquiry that does not result in a contract. Continued processing for contracts, mandatory records or other purposes requires an independent lawful ground.',
            'Withdrawal may be sent to seha.info@inbox.ru or the controller’s postal address. In the absence of another lawful ground, data is destroyed within 30 days of receipt, subject to the exceptions in Article 21 of Law No. 152-FZ.',
            'This consent does not authorise advertising emails, analytics, disclosure to an unrestricted audience or, by itself, personal data transfers to India. An international transfer requires an independent lawful ground and compliance with Article 12 of Law No. 152-FZ.'
          ],
          id: 'inquiry'
        },
        {
          title: 'Analytics consent',
          paragraphs: [
            'By selecting “Allow analytics”, I freely and in my own interest consent to SEHA LLC processing visit data from seha-group.ru using Yandex Metrica, including cookies and session replay, to measure traffic, referral sources, product interest and Website usability.',
            'Data: IP address, cookie identifiers, browser, device, screen, language, approximate region, visit time and duration, pages, referrer, UTM tags, yclid, clicks, scrolling, form opening, successful submission and product identifiers. Inquiry fields are hidden from session replay; names, phone numbers, emails and messages are excluded from Website-configured events.',
            'The recipient is YANDEX LLC, 16 Lva Tolstogo Street, Moscow, 119021, Russia, through Yandex Metrica counter 114242284. Processing on behalf of the controller follows the service terms. This consent is not intended to transmit inquiry messages to analytics.',
            'Consent lasts until withdrawal or 180 days after the choice. Session replay recordings are available for 15 days; cookie and storage durations depend on their purpose and are described in the Policy and Yandex documentation. Choice validity differs from the retention of previously collected statistics.',
            'A protected journal retains a random receipt, choice, consent version and server time as evidence. It does not record contact details, messages or IP addresses. Records older than 365 days are removed on the next journal write.',
            'I may select “Without analytics” or close the notice without permission. I may change my choice using “Analytics settings” at the end of this document or the Policy. Withdrawal stops future collection; requests about processing or erasing previously collected data may be sent to seha.info@inbox.ru. Without another lawful ground, the destruction periods in Article 21 of Law No. 152-FZ apply.',
            'The Yandex Metrica opt-out extension provides another way to restrict collection. Refusal does not restrict browsing or forms. This consent does not replace inquiry consent or authorise advertising emails.'
          ],
          id: 'analytics',
          links: [
            {
              label: 'Состав данных Яндекс Метрики / Data collected by Yandex Metrica',
              href: 'https://yandex.ru/support/metrica/ru/code/data-collected'
            },
            {
              label: 'Cookies и хранилище / Cookies and storage',
              href: 'https://yandex.ru/support/metrica/ru/general/cookie-usage'
            },
            {
              label: 'Условия использования Метрики / Yandex Metrica terms',
              href: 'https://yandex.ru/legal/metrica_termsofuse/ru/'
            },
            {
              label: 'Блокировщик Яндекс Метрики / Yandex Metrica opt-out',
              href: 'https://yandex.ru/support/metrica/ru/general/opt-out'
            },
            {
              label: 'Политика Яндекса / Yandex privacy policy',
              href: 'https://yandex.ru/legal/confidential/ru/'
            }
          ]
        }
      ]
    }
  }
};
