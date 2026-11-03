import { text, type LocalizedText } from './products';

export interface InstructionStep {
  title: LocalizedText;
  description: LocalizedText;
}
const step = (ru: string, en: string, bodyRu: string, bodyEn: string): InstructionStep => ({
  title: text(ru, en),
  description: text(bodyRu, bodyEn)
});

// General preparation guidance, not a substitute for the supplied grade's growing protocol.
// References and product-specific open questions are maintained in docs/substrate-review.md.
export const productInstructions: Record<string, readonly InstructionStep[]> = {
  'grow-bag': [
    step(
      'Подберите конфигурацию',
      'Choose the configuration',
      'Согласуйте культуру, сорт, состав смеси, размеры после увлажнения и схему посадки. Размеры 100 × 20 × 9 см для клубники и 100 × 15 × 12 см для томата — примеры, а не обязательный стандарт.',
      'Agree the crop, variety, blend, hydrated dimensions and planting layout. Strawberry bags of 100 × 20 × 9 cm and tomato bags of 100 × 15 × 12 cm are examples, not fixed standards.'
    ),
    step(
      'Разложите и увлажните',
      'Position and hydrate',
      'Установите мешки на ровную опору со свободным отводом воды. Увлажняйте постепенно через предусмотренные отверстия, пока субстрат не раскроется равномерно. Объём воды подбирайте по размеру и степени прессования.',
      'Place bags on level supports with free drainage. Add water gradually through the intended openings until the medium expands evenly. Water volume depends on bag size and compression.'
    ),
    step(
      'Проверьте подготовку и дренаж',
      'Check preparation and drainage',
      'Проверьте, промыт и буферизирован ли субстрат: это разные виды обработки. Нужную подготовку проводите по паспорту партии. Проверьте посадочные и дренажные отверстия; не делайте произвольные разрезы до согласования схемы.',
      'Check whether the medium is washed and buffered: these are different treatments. Follow the supplied batch instructions for any preparation needed. Check planting and drainage openings; agree the layout before making additional cuts.'
    ),
    step(
      'Высадите растения',
      'Transplant',
      'Перенесите укоренённую рассаду в посадочные отверстия, сохранив корневой ком. Установите капельницы рядом с ним и убедитесь, что вода доходит до каждого растения.',
      'Place rooted transplants in the planting openings without breaking up the root ball. Position drippers beside it and check that water reaches every plant.'
    ),
    step(
      'Настройте полив и питание',
      'Set irrigation and feeding',
      'Подавайте воду и раствор удобрений под культуру и стадию роста. Проверяйте влажность, pH и EC в корневой зоне и отводимой воде. EC исходного субстрата не является целевым EC питательного раствора.',
      'Match water and nutrient solution to the crop and growth stage. Monitor moisture, pH and EC in the root zone and drainage. The initial substrate EC is not the target EC of the feed solution.'
    )
  ],
  'open-top-grow-bag': [
    step(
      'Выберите вариант под культуру',
      'Choose the crop-specific grade',
      'Для голубики предусмотрен pH 4,5–5,5; для малины кислотность согласуется отдельно. Уточните рабочий объём мешка и состав поставки: смесь — 60% кокосового торфа и 40% чипсов.',
      'The blueberry grade has pH 4.5–5.5; raspberry acidity is agreed separately. Confirm the working bag volume and supplied format. The blend contains 60% coco pith and 40% chips.'
    ),
    step(
      'Установите мешок',
      'Position the bag',
      'Расправьте открытый верх и поставьте мешок на устойчивую поверхность. Дренажные отверстия должны оставаться открытыми; вода не должна скапливаться под дном.',
      'Open out the top and place the bag on a stable surface. Keep drainage holes clear and prevent water from collecting beneath the base.'
    ),
    step(
      'Равномерно увлажните',
      'Moisten evenly',
      'Если субстрат спрессован, добавляйте воду порциями до полного разрыхления. Если поставлен рыхлым — увлажните весь объём перед посадкой. Дайте избытку воды стечь, не утрамбовывайте смесь.',
      'If compressed, add water in stages until the medium fully loosens. If supplied loose, moisten the whole volume before planting. Allow excess water to drain and avoid compacting the mix.'
    ),
    step(
      'Посадите саженец',
      'Plant the young bush',
      'Разместите корневой ком на той же глубине, на которой растение росло до пересадки. Заполните пространство вокруг него субстратом без сильного уплотнения и установите капельницу.',
      'Set the root ball at its previous growing depth. Fill around it without firm compaction and install the dripper.'
    ),
    step(
      'Контролируйте корневую зону',
      'Monitor the root zone',
      'Подбирайте полив и питание отдельно для голубики и малины. Следите за влажностью, свободным дренажом и pH. Промывка и низкий EC сами по себе не означают буферизацию или нужную голубике кислотность.',
      'Manage irrigation and feeding separately for blueberries and raspberries. Check moisture, free drainage and pH. Washing and low EC alone do not establish buffering or blueberry-specific acidity.'
    )
  ],
  'coco-peat': [
    step(
      'Проверьте марку',
      'Check the grade',
      'Уточните фракцию, промывку, буферизацию и наличие удобрений. Россыпной кокосовый торф не нужно размачивать как прессованный блок.',
      'Check particle grade, washing, buffering and any added fertiliser. Loose coco pith does not need to be expanded like a compressed block.'
    ),
    step(
      'Увлажните торф',
      'Moisten the pith',
      'Перемешивайте материал, добавляя чистую воду небольшими порциями. Добейтесь равномерной влажности без сухих участков и застоя воды.',
      'Mix while adding clean water in small amounts. Aim for even moisture without dry pockets or standing water.'
    ),
    step(
      'Подготовьте смесь',
      'Prepare the blend',
      'Используйте торф самостоятельно или смешайте с чипсами и другими компонентами под культуру. Сначала приготовьте небольшую пробную партию; не переносите одну пропорцию на все растения.',
      'Use on its own or blend with chips and other components for the crop. Prepare a small trial batch first; one blend ratio does not suit every plant.'
    ),
    step(
      'Заполните ёмкости и посадите',
      'Fill containers and plant',
      'Выберите ёмкости с дренажом, заполните их без сильной трамбовки. Высадите рассаду или посейте семена на глубину, рекомендованную для культуры.',
      'Use containers with drainage and fill without firm compaction. Transplant or sow at the depth recommended for the crop.'
    ),
    step(
      'Поддерживайте влажность и питание',
      'Maintain moisture and nutrition',
      'Проверяйте влажность по всему корневому объёму. Для чистого кокосового торфа предусмотрите полноценное питание; он не заменяет удобрения.',
      'Check moisture throughout the root volume. Provide a complete feeding programme for pure coco pith; it is not a replacement for fertiliser.'
    )
  ],
  'coco-peat-briquettes': [
    step(
      'Выберите массу блока',
      'Choose the block weight',
      'Выберите 650 г или 5 кг и подготовьте чистую ёмкость с запасом для расширения. Размер 30 × 30 × 12 см указан только для блока 5 кг.',
      'Choose 650 g or 5 kg and use a clean container with room for expansion. The 30 × 30 × 12 cm dimensions apply only to the 5 kg block.'
    ),
    step(
      'Добавляйте воду постепенно',
      'Add water gradually',
      'Снимите транспортную упаковку и смачивайте блок порциями. Дождитесь раскрытия внутренних слоёв; не задавайте объём воды только по коэффициенту расширения.',
      'Remove transport wrapping and wet the block in stages. Let the inner layers expand; do not calculate water volume from the expansion ratio alone.'
    ),
    step(
      'Разрыхлите и проверьте',
      'Loosen and inspect',
      'Аккуратно разберите размягчённые участки, перемешайте и проверьте, не осталось ли сухого ядра. Дайте лишней воде стечь.',
      'Gently separate softened material, mix it and check for a dry centre. Let excess water drain.'
    ),
    step(
      'Подготовьте к посадке',
      'Prepare for planting',
      'Проверьте обработку партии и при необходимости выполните подготовку по её инструкции. Используйте рыхлый торф отдельно или в согласованной смеси; наполните ёмкости с дренажом.',
      'Check the batch treatment and complete any preparation required by its instructions. Use the loosened pith alone or in the agreed blend, in containers with drainage.'
    ),
    step(
      'Посадите и настройте уход',
      'Plant and manage',
      'Посейте семена или пересадите растения. Подберите полив и удобрения под культуру, контролируя влажность, pH и EC.',
      'Sow or transplant, then match irrigation and fertiliser to the crop while monitoring moisture, pH and EC.'
    )
  ],
  'coconut-chips': [
    step(
      'Подберите фракцию',
      'Choose the chip grade',
      'Выберите чипсы 6–12 или 12–18 мм с учётом растения, размера ёмкости и полива. Для мелких корней обычно нужна более однородная мелкая смесь.',
      'Choose 6–12 or 12–18 mm chips for the plant, container and irrigation system. Fine roots generally need a finer, more uniform blend.'
    ),
    step(
      'Увлажните и проверьте обработку',
      'Moisten and check treatment',
      'Равномерно смочите чипсы и дайте воде стечь. Эта марка промыта пресной водой, но не буферизирована; необходимость дополнительной подготовки согласуйте под культуру.',
      'Wet the chips evenly and let them drain. This grade is fresh-water washed but not buffered; agree any further preparation for the crop.'
    ),
    step(
      'Выберите способ применения',
      'Choose how to use them',
      'Для подходящих орхидей и других эпифитов чипсы можно использовать самостоятельно. В торф или грунт их добавляют примерно в доле 20–40% по объёму; точную долю подбирают под культуру.',
      'Chips can be used on their own for suitable orchids and other epiphytes. In pith or potting mixes, approximately 20–40% by volume can be used, with the final ratio matched to the crop.'
    ),
    step(
      'Заполните ёмкость',
      'Fill the container',
      'Используйте ёмкость со свободным дренажом. Распределите чипсы вокруг корней без сильного прижатия, сохраняя воздушные промежутки.',
      'Use a freely draining container. Distribute chips around the roots without pressing firmly, preserving air spaces.'
    ),
    step(
      'Подберите полив',
      'Adjust irrigation',
      'Крупные чипсы и мелкий торф высыхают по-разному. Проверяйте влагу внутри ёмкости, а не только на поверхности; питание подбирайте по растению.',
      'Coarse chips and fine pith dry differently. Check moisture inside the container rather than only at the surface, and feed for the plant being grown.'
    )
  ],
  'coco-husk-chips-bricks': [
    step(
      'Подготовьте блок и ёмкость',
      'Prepare the block and container',
      'Снимите транспортную упаковку с блока 5 кг. Используйте чистую ёмкость с запасом места: размер сухого блока 30 × 30 × 12 см не равен объёму после увлажнения.',
      'Remove transport wrapping from the 5 kg block. Use a clean container with expansion space: the dry block size of 30 × 30 × 12 cm is not its hydrated volume.'
    ),
    step(
      'Увлажните до разрыхления',
      'Hydrate until loose',
      'Добавляйте воду порциями, давая ей проникнуть в середину. Осторожно разделяйте размягчённые слои, пока не останется спрессованных участков.',
      'Add water in stages, allowing it to reach the centre. Gently separate softened layers until no compressed areas remain.'
    ),
    step(
      'Дайте воде стечь',
      'Allow drainage',
      'Перемешайте чипсы для равномерного увлажнения и удалите избыток воды. Проверьте, нужна ли дополнительная подготовка выбранной марки перед посадкой.',
      'Mix for even hydration and drain excess water. Check whether the supplied grade needs any further preparation before planting.'
    ),
    step(
      'Используйте отдельно или в смеси',
      'Use alone or in a blend',
      'Для подходящих эпифитов используйте разрыхлённые чипсы отдельно. Для ягодных и овощных культур подберите смесь с кокосовым торфом; заполните ёмкости без сильного уплотнения.',
      'Use the loose chips alone for suitable epiphytes. For berries and vegetables, select a blend with coco pith and fill containers without firm compaction.'
    ),
    step(
      'Посадите и настройте полив',
      'Plant and set irrigation',
      'Разместите корни в подготовленном субстрате. Отрегулируйте полив и питание по культуре, размеру чипсов и фактической влажности.',
      'Place roots in the prepared medium. Adjust irrigation and feeding to the crop, chip size and measured moisture.'
    )
  ],
  'grow-cube-sleeve': [
    step(
      'Разместите кубики',
      'Position the cubes',
      'Поставьте кубики посадочным отверстием вверх в чистый лоток с дренажом. Защитную оболочку сохраняйте, если для выбранной модели не указано иное.',
      'Place cubes planting-hole up in a clean draining tray. Retain the protective sleeve unless the supplied model specifies otherwise.'
    ),
    step(
      'Равномерно увлажните',
      'Hydrate evenly',
      'Добавляйте воду постепенно до полного увлажнения и раскрытия куба. Дайте избытку воды стечь; не сдавливайте куб для удаления воды.',
      'Add water gradually until the cube is fully hydrated and expanded. Let excess water drain; do not squeeze the cube to remove water.'
    ),
    step(
      'Посейте или укорените',
      'Sow or root cuttings',
      'Поместите семя или подготовленный черенок в отверстие на глубину, подходящую культуре. Не увеличивайте отверстие настолько, чтобы посадочный материал потерял контакт с субстратом.',
      'Place a seed or prepared cutting in the hole at the crop-appropriate depth. Avoid enlarging the hole so much that the seed or cutting loses contact with the medium.'
    ),
    step(
      'Ухаживайте за рассадой',
      'Care for young plants',
      'Поддерживайте влажность без застоя воды. Свет, температуру и начало подкормок подбирайте под культуру и стадию развития.',
      'Maintain moisture without standing water. Match light, temperature and the start of feeding to the crop and development stage.'
    ),
    step(
      'Пересадите целым кубом',
      'Transplant the whole cube',
      'Когда корни освоят куб и рассада будет готова, перенесите его в гроубэг или субстратный мат. Обеспечьте контакт с увлажнённым субстратом и не разбирайте корневой ком.',
      'When roots have established and the plant is ready, move the whole cube into a grow bag or slab. Ensure contact with moist medium without breaking up the root ball.'
    )
  ],
  'coco-coir-discs': [
    step(
      'Подберите диск под ёмкость',
      'Match the disc to the container',
      'Выберите диаметр диска и ёмкость с дренажом, оставив место для расширения. Проверьте, есть ли у поставленной модели оболочка.',
      'Choose a disc diameter and draining container with room for expansion. Check whether the supplied model has a sleeve.'
    ),
    step(
      'Раскройте водой',
      'Expand with water',
      'Положите диск в ёмкость и добавляйте воду постепенно. Дождитесь равномерного расширения, аккуратно разрыхлите, если это предусмотрено форматом, и слейте лишнюю воду.',
      'Place the disc in the container and add water gradually. Allow even expansion, gently loosen if appropriate for the format, and drain excess water.'
    ),
    step(
      'Посейте семена',
      'Sow seeds',
      'Разместите семена на глубине, указанной для культуры. Мелкие семена не заглубляйте автоматически: условия прорастания у разных растений отличаются.',
      'Sow at the depth specified for the crop. Do not automatically bury fine seeds; germination requirements differ between plants.'
    ),
    step(
      'Следите за влажностью',
      'Monitor moisture',
      'До всходов не допускайте пересыхания посевного слоя. После всходов обеспечьте свет и проветривание, постепенно подберите полив и питание.',
      'Keep the sowing layer moist until emergence. Afterwards provide light and ventilation, then adjust irrigation and feeding.'
    ),
    step(
      'Пересадите рассаду',
      'Transplant seedlings',
      'Пересадите растение, когда корни освоят субстрат. Сохраните корневой ком; обращение с оболочкой определяйте по её материалу и инструкции модели.',
      'Transplant once roots have established in the medium. Preserve the root ball and handle any sleeve according to its material and model instructions.'
    )
  ],
  'coco-peat-tablets': [
    step(
      'Подберите таблетку',
      'Choose the tablet size',
      'Выберите диаметр под растение и ячейку лотка. Оставьте место для расширения; наличие и тип оболочки уточните для выбранной модели.',
      'Choose the diameter for the plant and tray cell. Leave expansion space and check the sleeve type, if any, for the supplied model.'
    ),
    step(
      'Увлажните таблетку',
      'Hydrate the tablet',
      'Поставьте таблетку на чистый поддон и добавляйте воду до равномерного раскрытия. Убедитесь, что середина тоже влажная; лишнюю воду слейте.',
      'Place the tablet in a clean tray and add water until it expands evenly. Check that the centre is moist too, then drain excess water.'
    ),
    step(
      'Посейте или разместите черенок',
      'Sow or insert a cutting',
      'Сделайте небольшое углубление под семя или черенок. Глубину и способ укрытия выбирайте по культуре, не уплотняйте таблетку целиком.',
      'Make a small opening for the seed or cutting. Select sowing depth and covering for the crop without compacting the whole tablet.'
    ),
    step(
      'Поддерживайте условия прорастания',
      'Maintain propagation conditions',
      'Проверяйте влажность отдельных таблеток: крайние могут высыхать быстрее. Не оставляйте их постоянно в воде; свет, температуру и подкормки подбирайте по растению.',
      'Check individual tablets; edge positions may dry faster. Do not leave them standing in water. Match light, temperature and feeding to the plant.'
    ),
    step(
      'Пересадите без разрушения кома',
      'Transplant without disturbing roots',
      'Когда рассада готова, перенесите таблетку вместе с корневым комом в увлажнённую смесь. Если есть оболочка, следуйте инструкции по её материалу.',
      'When ready, move the tablet and root ball into moist growing mix. If a sleeve is present, follow the instructions for its material.'
    )
  ],
  'coco-peat-compost': [
    step(
      'Проверьте состав',
      'Check the formulation',
      'Уточните, поставляется чистый кокосовый торф или смесь с компостом, есть ли удобрения и какие pH и EC у партии. Название продукта само по себе не определяет питательность.',
      'Confirm whether the product is pure coco pith or a compost blend, whether fertiliser is included, and the batch pH and EC. The product name alone does not establish nutrient content.'
    ),
    step(
      'Подготовьте материал',
      'Prepare the medium',
      'Рыхлую смесь перемешайте и равномерно увлажните. Если поставлен прессованный блок, сначала постепенно разрыхлите его водой и дайте избытку стечь.',
      'Mix loose material and moisten evenly. If supplied as a compressed block, expand it gradually with water first and allow excess water to drain.'
    ),
    step(
      'Подберите применение',
      'Choose the application',
      'Используйте как готовую смесь только при подходящем составе. Для посева семян проверьте, что фракция и EC подходят рассаде; смесь с неизвестным питанием не используйте вслепую.',
      'Use as a complete growing mix only when its formulation suits the purpose. For sowing, check that particle size and EC are suitable for seedlings; do not assume an unknown nutrient content is appropriate.'
    ),
    step(
      'Заполните ёмкости',
      'Fill containers',
      'Используйте горшки или лотки с дренажом. Заполняйте без сильного уплотнения, затем посейте или пересадите растения на подходящую глубину.',
      'Use pots or trays with drainage. Fill without firm compaction, then sow or transplant at the appropriate depth.'
    ),
    step(
      'Согласуйте подкормки',
      'Plan feeding',
      'Учитывайте удобрения, уже входящие в смесь. Проверяйте влажность и состояние растений; не добавляйте одинаковую дозу питания к чистому торфу и к удобренному компостному субстрату.',
      'Account for nutrients already present in the blend. Check moisture and plant condition; pure pith and fertilised compost mixes should not automatically receive the same feed dose.'
    )
  ],
  'seeding-tray-media': [
    step(
      'Подготовьте лоток',
      'Prepare the tray',
      'Выберите размер ячеек под культуру и срок выращивания рассады. Вымойте многоразовый лоток, подготовьте его по принятой схеме гигиены и проверьте дренаж.',
      'Choose cell size for the crop and propagation period. Clean reusable trays, follow the nursery hygiene procedure and check drainage.'
    ),
    step(
      'Увлажните и заполните',
      'Moisten and fill',
      'Перемешайте мелкий субстрат до равномерной влажности. Заполните ячейки одинаково, без сильной трамбовки и крупных пустот; уберите излишки с поверхности.',
      'Mix the fine medium to an even moisture level. Fill cells consistently without firm compaction or large voids, and level off excess material.'
    ),
    step(
      'Посейте семена',
      'Sow seeds',
      'Разместите семена по одному или по схеме культуры. Глубину посева, укрытие и маркировку подбирайте под сорт и требования к прорастанию.',
      'Place one seed per cell or follow the crop sowing plan. Match sowing depth, covering and labelling to the variety and germination requirements.'
    ),
    step(
      'Ведите рассаду',
      'Raise the seedlings',
      'Поддерживайте равномерную влажность всех ячеек, следите за крайними рядами. После всходов обеспечьте свет, проветривание и питание под стадию развития.',
      'Maintain even moisture across cells, paying attention to edge rows. After emergence provide light, ventilation and stage-appropriate nutrition.'
    ),
    step(
      'Извлеките корневой ком',
      'Remove the rooted plug',
      'Пересаживайте, когда корни удерживают субстрат в ячейке. Перед извлечением равномерно увлажните лоток и вынимайте ком снизу, не вытягивая растение за стебель.',
      'Transplant when roots hold the medium together in the cell. Moisten the tray evenly beforehand and push plugs up from beneath rather than pulling plants by the stem.'
    )
  ]
};
