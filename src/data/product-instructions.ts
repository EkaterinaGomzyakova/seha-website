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
      'Выберите конфигурацию',
      'Choose the configuration',
      'Согласуйте состав, размеры и отверстия под культуру и систему полива. Буферизация доступна по запросу.',
      'Agree the blend, dimensions and holes for the crop and irrigation system. Buffering is available on request.'
    ),
    step(
      'Разложите маты',
      'Position the slabs',
      'Установите маты на ровную поверхность с отводом воды. Разместите капельницы по выбранной схеме.',
      'Place slabs on a level surface with drainage. Position drippers to the agreed layout.'
    ),
    step(
      'Увлажните субстрат',
      'Hydrate the substrate',
      'Подавайте воду или согласованный питательный раствор постепенно. Дождитесь равномерного раскрытия, без сухих участков.',
      'Apply water or the agreed nutrient solution gradually. Allow the medium to expand evenly, without dry areas.'
    ),
    step(
      'Проверьте дренаж',
      'Check drainage',
      'Убедитесь, что дренажные отверстия открыты, и дайте лишней воде стечь.',
      'Check that drainage holes are clear and allow excess water to drain.'
    ),
    step(
      'Высадите рассаду',
      'Transplant seedlings',
      'Сохраните корневой ком при посадке. Настройте полив и питание под культуру, контролируйте влажность, pH и EC.',
      'Keep the root ball intact when transplanting. Set irrigation and nutrition for the crop, monitoring moisture, pH and EC.'
    )
  ],
  'open-top-grow-bag': [
    step(
      'Выберите вариант под культуру',
      'Choose the crop-specific grade',
      'Подберите состав, объём и pH под культуру. Для голубики требуется кислая среда. Буферизация доступна по запросу.',
      'Choose the blend, volume and pH for the crop. Blueberries require an acidic growing medium. Buffering is available on request.'
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
      'Равномерно увлажните субстрат перед посадкой, дайте лишней воде стечь и не уплотняйте смесь.',
      'Moisten the medium evenly before planting, allow excess water to drain and do not compact it.'
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
      'Подберите режим полива и питание под культуру. Проверяйте влажность, pH и EC, не допускайте застоя воды и полного пересыхания.',
      'Set irrigation and nutrition for the crop. Check moisture, pH and EC, avoiding standing water and complete drying.'
    )
  ],
  'coco-peat': [
    step(
      'Проверьте марку',
      'Check the grade',
      'Субстрат тщательно промыт. Выберите Fine — просев через сито 4–6 мм — или Medium/Coarse — до 8–10 мм, с большей долей коротких волокон и мелких чипсов. Фракцию можно подобрать под заказ; россыпной торф не нужно раскрывать как прессованный блок.',
      'The substrate is thoroughly washed. Choose Fine, screened through a 4–6 mm sieve, or Medium/Coarse, screened up to 8–10 mm with more short fibres and small chips. Particle grade can be customised; loose pith does not need expansion like a compressed block.'
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
      'Равномерно смочите чипсы и дайте воде стечь. Чипсы промыты пресной водой. Буферизация доступна по запросу.',
      'Wet the chips evenly and let them drain. The chips are fresh-water washed. Buffering is available on request.'
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
      'Установите рассадную пробку',
      'Insert the transplant plug',
      'Поместите укоренённое растение в кокосовой или минераловатной пробке в центральное отверстие. Обеспечьте плотный контакт без повреждения корней; размер отверстия согласуют под пробку.',
      'Insert a rooted plant in its coir or stonewool plug into the central opening. Ensure close contact without root damage; the hole is sized for the plug.'
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
      'Подберите диск под диаметр дна горшка или стаканчика с дренажом. Наружной оболочки у диска нет, поэтому отдельная ёмкость удерживает рыхлый субстрат после раскрытия.',
      'Match the disc to the base of a draining pot or cup. There is no outer sleeve, so the container holds the loose medium after expansion.'
    ),
    step(
      'Раскройте водой',
      'Expand with water',
      'Положите диск внутрь и добавляйте воду порциями до полного раскрытия. Разрыхлите влажный торф с короткими волокнами и дайте избытку воды стечь; не пытайтесь сохранить форму отдельной таблетки.',
      'Place the disc inside and add water in stages until fully expanded. Loosen the damp pith and short fibres, then drain excess water; do not try to preserve a freestanding pellet shape.'
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
      'Пересаживайте, когда корни освоят субстрат, сохраняя корневой ком. Диск не имеет оболочки, которую нужно снимать перед пересадкой.',
      'Transplant once roots establish, preserving the root ball. There is no disc sleeve to remove before transplanting.'
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
      'Подберите фракцию',
      'Choose the particle grade',
      'Это чистый переработанный кокосовый торф без других компостов. Выберите фракцию под культуру, уточните pH, EC и наличие стартовых удобрений.',
      'This is pure processed coco pith with no other composts. Match particle grade to the crop and check pH, EC and any starter fertiliser.'
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
      'Настройте питание',
      'Set nutrition',
      'Не считайте название «компост» признаком готового питания. Подберите полноценные удобрения по культуре, воде и фактической начальной заправке субстрата.',
      'Do not assume that the name compost means the medium contains a complete feed. Select nutrition for the crop, water quality and any actual initial nutrient charge.'
    )
  ],
  'seeding-tray-media': [
    step(
      'Проверьте совместимость',
      'Check compatibility',
      'Подберите вкладыш под точную модель пластиковой или пенопластовой кассеты. Лоток не входит в поставку; его размеры и перегородки должны соответствовать матрице.',
      'Match the insert to the exact plastic or foam tray model. The tray is not supplied; dimensions and dividers must match the matrix.'
    ),
    step(
      'Уложите сухую плиту',
      'Position the dry plate',
      'Положите цельный сухой блок в чистый лоток, совместив формованные ячейки с перегородками. Не разламывайте матрицу и не заполняйте ячейки россыпным торфом.',
      'Place the one-piece dry block in a clean tray, aligning cell forms with the dividers. Do not break up the matrix or fill cells with loose pith.'
    ),
    step(
      'Равномерно увлажните',
      'Hydrate evenly',
      'Подавайте воду или согласованный стартовый раствор капельно либо подтоплением. Дождитесь раскрытия всей плиты, проверьте отсутствие сухих участков и дайте избытку стечь.',
      'Apply water or the agreed starter solution by drip or subirrigation. Let the whole plate expand, check for dry areas and allow excess water to drain.'
    ),
    step(
      'Посейте и выращивайте рассаду',
      'Sow and raise seedlings',
      'Выполните ручной или машинный посев на глубину, подходящую культуре. Поддерживайте равномерную влажность ячеек, освещение и питание без постоянного застоя воды.',
      'Sow manually or by machine at the crop-appropriate depth. Maintain even cell moisture, light and feeding without continuous standing water.'
    ),
    step(
      'Разделите корневые комы',
      'Separate rooted plugs',
      'Когда рассада готова, аккуратно разделите субстрат по границам ячеек руками или чистыми ножницами, не повреждая корни. Поддерживайте корневой ком снизу при извлечении.',
      'When seedlings are ready, carefully separate medium along cell boundaries by hand or with clean scissors without damaging roots. Support each root plug from beneath during removal.'
    )
  ]
};
