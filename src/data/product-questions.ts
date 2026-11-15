import type { LocalizedText } from './products';

interface ProductQuestions {
  heading: LocalizedText;
  questions: { question: LocalizedText; answer: LocalizedText }[];
}

export const productQuestions: Record<string, ProductQuestions> = {
  'grow-bag': {
    heading: { ru: 'Кокосовый мат — гроубэг', en: 'Coco Coir Grow Bag' },
    questions: [
      {
        question: {
          ru: 'Гроубэг и кокосовый мат — это один формат?',
          en: 'Is this a coir slab or a grow bag?'
        },
        answer: {
          ru: 'Этот гроубэг представляет собой кокосовый субстрат в мешке для горизонтального размещения в теплице. Такой формат также называют кокосовым матом. Состав, размеры, посадочные и дренажные отверстия подбирают под культуру и систему выращивания.',
          en: 'This grow bag contains coconut substrate for horizontal placement in a greenhouse and is also called a coir slab. The blend, dimensions, planting holes and drainage layout are tailored to the crop and growing system.'
        }
      },
      {
        question: {
          ru: 'Подходит ли кокосовый мат для клубники?',
          en: 'Can the grow bag be used for strawberries?'
        },
        answer: {
          ru: 'Гроубэг предназначен для беспочвенного выращивания клубники, томатов, огурцов и других культур с капельным поливом. Для подбора формата сообщите культуру, схему посадки и требования к субстрату.',
          en: 'The grow bag is intended for soilless cultivation of strawberries, tomatoes, cucumbers and other crops with drip irrigation. Specify the crop, planting layout and substrate requirements to select a format.'
        }
      },
      {
        question: {
          ru: 'Промывка и буферизация входят в поставку?',
          en: 'Is the substrate washed and buffered?'
        },
        answer: {
          ru: 'Субстрат промыт; буферизация доступна по запросу. Промывка не означает, что субстрат уже буферизирован. Нужную подготовку согласуют при заказе.',
          en: 'The substrate is washed; buffering is available on request. Washing does not mean the substrate has also been buffered. The required preparation is agreed with the order.'
        }
      }
    ]
  },
  'open-top-grow-bag': {
    heading: { ru: 'Открытый гроубэг с субстратом', en: 'Open-Top Grow Bag with Coir' },
    questions: [
      {
        question: {
          ru: 'Это пустой мешок или готовый субстрат?',
          en: 'Is this an empty bag or a bag with substrate?'
        },
        answer: {
          ru: 'В поставку входит вертикальный мешок с сухим прессованным кокосовым субстратом. После увлажнения субстрат раскрывается внутри мешка. Открытая верхняя часть предназначена для посадки, снизу предусмотрен дренаж.',
          en: 'The upright bag is supplied with dry compressed coconut substrate, which expands inside it when hydrated. The open top provides access for planting, and the bag has drainage holes.'
        }
      },
      {
        question: {
          ru: 'Как подобрать субстрат для голубики или малины?',
          en: 'How do I specify coir for blueberries or raspberries?'
        },
        answer: {
          ru: 'Состав, фракцию, рабочий объём и pH подбирают под требования культуры и систему полива. Приведённые в характеристиках 10 л и смесь 60% coco peat и 40% чипсов — пример исполнения, а не универсальная рекомендация для любого растения.',
          en: 'The blend, particle grade, working volume and pH are tailored to the crop requirements and irrigation system. The listed 10 L format and 60% coco peat / 40% chip blend are an example specification, not a universal recommendation for every plant.'
        }
      },
      {
        question: {
          ru: 'Чем открытый гроубэг отличается от горизонтального мата?',
          en: 'How does it differ from a horizontal grow slab?'
        },
        answer: {
          ru: 'Открытый гроубэг размещают вертикально и используют для отдельных растений. Горизонтальный кокосовый мат размещают вдоль ряда с посадочными отверстиями. Выбор зависит от культуры, схемы посадки и нужного объёма корневой зоны.',
          en: 'An open-top grow bag stands upright and accommodates individual plants. A horizontal coir slab is placed along a row and has planting holes. The choice depends on the crop, planting layout and required root-zone volume.'
        }
      }
    ]
  },
  'veymur-mct-oil': {
    heading: { ru: 'Кокосовое МСТ-масло (MCT)', en: 'Organic Coconut MCT Oil' },
    questions: [
      {
        question: { ru: 'Что такое МСТ-масло и как связано с MCT?', en: 'What is MCT oil?' },
        answer: {
          ru: 'МСТ и MCT — русское и английское обозначения среднецепочечных триглицеридов. МСТ-масло СЕХА получают из кокосового масла с концентрированием фракций C8 и C10. Это прозрачная бесцветная жидкость без вкуса и запаха для пищевых рецептур.',
          en: 'MCT stands for medium-chain triglycerides. SEHA MCT oil is derived from coconut oil and processed to concentrate C8 and C10 fractions. It is a clear, colourless, odourless and tasteless liquid for food formulations.'
        }
      },
      {
        question: {
          ru: 'Чем оно отличается от обычного кокосового масла?',
          en: 'How does it differ from regular coconut oil?'
        },
        answer: {
          ru: 'МСТ-масло имеет специально подобранный профиль жирных кислот: C8 — 55–65%, C10 — 35–45%, C12 — не более 1%. Это смесь C8/C10, а не чистое C8. При выборе ингредиента ориентируйтесь на спецификацию и требования рецептуры.',
          en: 'This MCT oil has a specified fatty acid profile: C8 55–65%, C10 35–45% and C12 no more than 1%. It is a C8/C10 blend, not pure C8. Select the ingredient using its specification and your formulation requirements.'
        }
      },
      {
        question: {
          ru: 'Как купить МСТ-масло оптом или в розницу?',
          en: 'How can I place a wholesale or retail MCT oil order?'
        },
        answer: {
          ru: 'Варианты фасовки включают 500 мл и транспортную тару 25, 200 и 1000 л; другую упаковку согласуют по запросу. Выберите формат, укажите количество и отправьте запрос цены. Производство находится в Индии; органическая сертификация подтверждена документами.',
          en: 'Packaging options include 500 ml and bulk formats of 25, 200 and 1000 L; other packaging can be agreed on request. Select a format, enter the quantity and request a quote. The oil is manufactured in India, with organic certification supported by documents.'
        }
      }
    ]
  }
};
