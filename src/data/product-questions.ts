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
          ru: 'Да. Это мешок с кокосовым субстратом, который укладывают горизонтально вдоль посадочного ряда. Растения высаживают в отверстия на его верхней стороне.',
          en: 'Yes. It is a bag of coconut substrate placed horizontally along a planting row. Plants are transplanted into holes in the top of the bag.'
        }
      },
      {
        question: {
          ru: 'Подходит ли кокосовый мат для клубники?',
          en: 'Can the grow bag be used for strawberries?'
        },
        answer: {
          ru: 'Да, его используют для беспочвенного выращивания клубники с капельным поливом. Такой формат также подходит для томатов и огурцов.',
          en: 'Yes, it is used for soilless strawberry cultivation with drip irrigation. The format also suits tomatoes and cucumbers.'
        }
      },
      {
        question: {
          ru: 'Как подготовить мат к посадке?',
          en: 'How do I prepare the slab for planting?'
        },
        answer: {
          ru: 'Разложите мат, постепенно увлажните его и дождитесь равномерного раскрытия субстрата. Перед посадкой проверьте, что лишняя вода свободно уходит через дренажные отверстия.',
          en: 'Position the slab, hydrate it gradually and allow the substrate to expand evenly. Before planting, check that excess water can drain freely through the drainage holes.'
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
          ru: 'Какой объём выбрать?',
          en: 'Which bag volume should I choose?'
        },
        answer: {
          ru: 'Объём зависит от культуры, размера растения и системы выращивания. В характеристиках приведён вариант на 10 л; для выбора ориентируйтесь на требования к корневой зоне вашей культуры.',
          en: 'Volume depends on the crop, plant size and growing system. The specifications show a 10 L format; choose a volume suited to your crop’s root-zone requirements.'
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
    heading: { ru: 'Кокосовое МСТ-масло', en: 'Organic Coconut MCT Oil' },
    questions: [
      {
        question: { ru: 'Что такое МСТ-масло?', en: 'What is MCT oil?' },
        answer: {
          ru: 'Это масло со среднецепочечными триглицеридами. МСТ-масло СЕХА получают из кокосового масла с концентрированием фракций C8 и C10. Это прозрачная бесцветная жидкость без вкуса и запаха для пищевых рецептур.',
          en: 'MCT stands for medium-chain triglycerides. SEHA MCT oil is derived from coconut oil and processed to concentrate C8 and C10 fractions. It is a clear, colourless, odourless and tasteless liquid for food formulations.'
        }
      },
      {
        question: {
          ru: 'Чем оно отличается от обычного кокосового масла?',
          en: 'How does it differ from regular coconut oil?'
        },
        answer: {
          ru: 'При производстве МСТ-масла концентрируют среднецепочечные фракции. В продукте СЕХА это смесь C8 и C10. Точный состав приведён в характеристиках.',
          en: 'MCT oil production concentrates medium-chain fractions. SEHA’s product is a blend of C8 and C10. The detailed composition is listed in the specifications.'
        }
      },
      {
        question: {
          ru: 'Какая фасовка доступна?',
          en: 'Which pack sizes are available?'
        },
        answer: {
          ru: 'Есть бутылки 500 мл и транспортная тара 25, 200 и 1000 л. В карточке можно выбрать готовую упаковку или промышленную фасовку.',
          en: 'Options include 500 ml bottles and bulk formats of 25, 200 and 1000 L. Choose bottled or bulk packaging in the product card.'
        }
      }
    ]
  }
};
