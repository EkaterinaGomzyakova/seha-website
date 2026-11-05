import { text, type LocalizedText } from './products';
interface Application {
  label: LocalizedText;
  image: string;
}
const application = (ru: string, en: string, image: string): Application => ({
  label: text(ru, en),
  image: `/assets/images/common/applications/${image}.webp`
});
const crop = (ru: string, en: string, image: string): Application => ({
  label: { ru, en },

  image: `/assets/images/common/crops/${image}.png`
});

// Substrates show crops or a propagation stage; other ranges show industries.
export const applications = {
  berries: application('Выращивание ягод', 'Soft fruit growing', 'berries'),
  seedlings: crop('Рассада', 'Seedlings', 'seedlings'),
  propagation: crop('Рассада и черенки', 'Seedlings and cuttings', 'seedlings'),
  tomatoes: crop('Томаты', 'Tomatoes', 'tomato'),
  cucumbers: crop('Огурцы', 'Cucumbers', 'cucumber'),
  aubergines: crop('Баклажаны', 'Aubergines', 'aubergine'),
  peppers: crop('Сладкий перец', 'Sweet peppers', 'pepper'),
  blueberries: crop('Голубика', 'Blueberries', 'blueberry'),
  raspberries: crop('Малина', 'Raspberries', 'raspberry'),
  lettuce: crop('Листовой салат', 'Leaf lettuce', 'lettuce'),
  basil: crop('Базилик', 'Basil', 'basil'),
  petunias: crop('Петунии', 'Petunias', 'petunia'),
  orchards: application('Плодовые сады', 'Fruit orchards', 'orchards'),
  landscaping: application('Озеленение', 'Landscaping', 'landscaping'),
  drinks: application('Напитки', 'Beverages', 'drinks'),
  bakery: application('Выпечка', 'Bakery products', 'bakery'),
  confectionery: application('Кондитерские изделия', 'Confectionery', 'confectionery'),
  desserts: application('Десерты', 'Desserts', 'desserts'),
  snacks: application('Снеки и завтраки', 'Snacks and breakfast foods', 'snacks'),
  preparedFood: application('Соусы и готовые блюда', 'Sauces and prepared foods', 'preparedFood'),
  cosmetics: application('Косметические средства', 'Personal-care products', 'cosmetics'),
  fresh: application('Свежие продукты', 'Fresh produce', 'fresh'),
  edibleOils: application('Пищевые масла', 'Edible oils', 'edibleOils'),
  driedIngredients: application('Сушёные ингредиенты', 'Dried ingredients', 'driedIngredients'),
  ropes: application('Канаты и шпагат', 'Ropes and twine', 'ropes'),
  brushes: application('Щёточные изделия', 'Brush products', 'brushes'),
  mats: application('Маты и покрытия', 'Mats and coverings', 'mats'),
  erosionMesh: application('Противоэрозионные сетки', 'Erosion-control netting', 'erosionMesh'),
  slopes: application('Защита склонов', 'Slope protection', 'slopes'),
  riverbanks: application('Укрепление берегов', 'Riverbank protection', 'riverbanks'),
  water: application('Очистка воды', 'Water treatment', 'water'),
  air: application('Очистка воздуха и газов', 'Air and gas treatment', 'air'),
  solvents: application('Регенерация растворителей', 'Solvent recovery', 'solvents'),
  hookah: application('Кальяны', 'Hookah', 'hookah'),
  nurseries: application('Питомники', 'Nurseries', 'nurseries'),
  vegetables: application('Выращивание овощей', 'Vegetable growing', 'vegetables'),
  barbecue: application('Гриль и барбекю', 'Grilling and barbecue', 'barbecue'),
  orchids: {
    label: { ru: 'Орхидеи', en: 'Orchids' },

    image: '/assets/images/common/crops/orchid.png'
  },
  anthuriums: {
    label: { ru: 'Антуриумы', en: 'Anthuriums' },

    image: '/assets/images/common/crops/anthurium.png'
  },
  bromeliads: {
    label: { ru: 'Бромелиевые', en: 'Bromeliads' },

    image: '/assets/images/common/crops/bromeliad.png'
  },
  strawberries: crop('Клубника', 'Strawberries', 'strawberry')
} as const;

const chipsCropDescriptions: Partial<Record<keyof typeof applications, LocalizedText>> = {
  tomatoes: text(
    'В смеси с кокосовым торфом для тепличного выращивания.',
    'Blended with coco pith for greenhouse cultivation.'
  ),
  cucumbers: text(
    'В составе влагоёмких смесей с хорошим дренажем.',
    'In moisture-retentive blends with good drainage.'
  ),
  raspberries: text(
    'Компонент рыхлых смесей для контейнерного выращивания.',
    'A component of open mixes for container growing.'
  ),
  blueberries: text(
    'В составе кислых смесей для контейнеров.',
    'In acidic blends for container cultivation.'
  ),
  orchids: text(
    'Крупные чипсы сохраняют воздушные промежутки вокруг корней.',
    'Coarse chips maintain air spaces around the roots.'
  ),
  anthuriums: text(
    'Для рыхлых смесей, которые удерживают влагу и отводят лишнюю воду.',
    'For open growing mixes that retain moisture and drain excess water.'
  ),
  bromeliads: text(
    'Для эпифитных видов, которым нужен рыхлый субстрат.',
    'For epiphytic species that need an open growing medium.'
  ),
  strawberries: text(
    'Добавляют в кокосовый торф для улучшения аэрации и дренажа.',
    'Blended with coco pith to improve aeration and drainage.'
  )
};
export const productApplicationDescriptions: Record<
  string,
  Partial<Record<keyof typeof applications, LocalizedText>>
> = {
  'grow-bag': {
    tomatoes: text(
      'Для тепличного выращивания с капельным поливом.',
      'For greenhouse cultivation with drip irrigation.'
    ),
    cucumbers: text(
      'Субстрат удерживает влагу между поливами и отводит её избыток.',
      'The growing medium retains moisture between irrigations and drains excess water.'
    ),
    peppers: text(
      'Для высадки рассады и дальнейшего выращивания в теплице.',
      'For transplanting seedlings and growing them on in the greenhouse.'
    ),
    strawberries: text(
      'Для беспочвенного выращивания в теплицах и туннелях.',
      'For soilless cultivation in greenhouses and polytunnels.'
    )
  },
  'open-top-grow-bag': {
    blueberries: text(
      'Кислый субстрат для выращивания кустов в контейнерах.',
      'An acidic growing medium for container-grown bushes.'
    ),
    raspberries: text(
      'Для контейнерного выращивания в смеси с хорошим дренажем.',
      'For container cultivation in a free-draining growing mix.'
    )
  },
  'coco-peat': {
    tomatoes: text(
      'Основа субстратных смесей для тепличного выращивания.',
      'A base for growing-media blends used in greenhouses.'
    ),
    cucumbers: text(
      'Влагоёмкий субстрат для выращивания в теплицах.',
      'A moisture-retentive medium for greenhouse cultivation.'
    ),
    lettuce: text(
      'Для выращивания листовой зелени в контейнерах.',
      'For growing leafy greens in containers.'
    ),
    petunias: text(
      'Компонент лёгких горшечных смесей для цветов.',
      'A component of light potting mixes for flowering plants.'
    )
  },
  'coco-peat-briquettes': {
    tomatoes: text(
      'После увлажнения — основа субстрата для теплиц.',
      'Once hydrated, a base for greenhouse growing media.'
    ),
    strawberries: text(
      'После увлажнения используют в контейнерных смесях.',
      'Used in container growing mixes after hydration.'
    ),
    lettuce: text(
      'Разрыхлённый субстрат для горшков и контейнеров.',
      'The expanded medium is used in pots and containers.'
    ),
    basil: text(
      'Для горшечного выращивания после увлажнения брикета.',
      'For pot cultivation after hydrating the brick.'
    )
  },
  'coconut-chips': chipsCropDescriptions,
  'coco-husk-chips-bricks': chipsCropDescriptions,
  'grow-cube-sleeve': {
    tomatoes: text(
      'Для рассады с последующей пересадкой целым кубом.',
      'For seedlings transplanted as a complete cube.'
    ),
    cucumbers: text(
      'Для проращивания и выращивания рассады до высадки.',
      'For germination and raising seedlings before transplanting.'
    ),
    peppers: text(
      'Для проращивания семян и выращивания рассады.',
      'For seed germination and seedling propagation.'
    ),
    aubergines: text(
      'Для рассады и прививки в питомниках.',
      'For seedlings and grafting in nurseries.'
    ),
    strawberries: text('Для укоренения посадочного материала.', 'For rooting young plants.'),
    propagation: text(
      'Для доращивания укоренённых растений в пробках с последующей пересадкой целым кубом.',
      'For growing on rooted plug plants before transplanting the complete cube.'
    )
  },
  'coco-coir-discs': {
    seedlings: text(
      'Для посева семян в горшки; диск раскрывается после увлажнения.',
      'For sowing seeds in pots; the disc expands when hydrated.'
    )
  },
  'coco-peat-tablets': {
    seedlings: text(
      'Для проращивания семян в рассадных лотках и горшках.',
      'For seed germination in propagation trays and pots.'
    )
  },
  'coco-peat-compost': {
    tomatoes: text(
      'Компонент смесей для овощей в горшках и контейнерах.',
      'A component of mixes for vegetables grown in pots and containers.'
    ),
    lettuce: text(
      'Помогает удерживать влагу в контейнерных смесях.',
      'Helps retain moisture in container growing mixes.'
    ),
    basil: text(
      'В составе смесей для горшечной зелени.',
      'Used in potting mixes for culinary herbs.'
    ),
    petunias: text(
      'Компонент смесей для кашпо и балконных ящиков.',
      'A component of mixes for planters and window boxes.'
    )
  },
  'seeding-tray-media': {
    seedlings: text(
      'Цельный вкладыш увлажняют в совместимой кассете, затем высевают семена.',
      'Hydrate the one-piece insert in a compatible tray, then sow seeds.'
    )
  },
  'coir-fiber-bales': {
    ropes: text(
      'Волокно прядут в нити для изготовления канатов и шпагата.',
      'The fibre is spun into yarn for ropes and twine.'
    ),
    brushes: text(
      'Жёсткие волокна используют как ворс для хозяйственных щёток.',
      'Stiff fibres form the bristles of cleaning brushes.'
    ),
    mats: text(
      'Из волокна формируют полотно для матов и покрытий.',
      'The fibre is formed into sheets for mats and coverings.'
    ),
    erosionMesh: text(
      'Из волокна делают пряжу для сеток, защищающих почву от смыва.',
      'The fibre is spun into yarn for nets that help protect soil from runoff.'
    )
  },
  'machine-twisted-fiber': {
    ropes: text(
      'Скрученные пряди соединяют в канаты или используют для шпагата.',
      'Twisted strands are combined into ropes or used to make twine.'
    ),
    brushes: text(
      'Волокно из прядей используют для набивки щёточного ворса.',
      'Fibre from the strands is used to fill brush heads.'
    ),
    mats: text(
      'Из прядей ткут маты и напольные покрытия.',
      'The strands are woven into mats and floor coverings.'
    ),
    erosionMesh: text(
      'Из прядей плетут сетки с открытыми ячейками для защиты грунта.',
      'The strands are woven into open-mesh nets for soil protection.'
    )
  },
  'coir-weed-mat': {
    berries: text(
      'Маты закрывают почву между ягодными кустами и сдерживают рост сорняков.',
      'Mats cover soil between berry plants and help suppress weeds.'
    ),
    vegetables: text(
      'Рулоны укладывают вдоль грядок, оставляя отверстия для растений.',
      'Rolls are laid along beds with openings for plants.'
    ),
    orchards: text(
      'Круглый мат укладывают вокруг дерева, оставляя зазор у ствола.',
      'A round mat is placed around the tree with clearance at the trunk.'
    ),
    nurseries: text(
      'Круглые маты закрывают поверхность грунта в горшках.',
      'Round mats cover the growing medium in nursery pots.'
    ),
    landscaping: text(
      'Покрытие укладывают между декоративными растениями, чтобы снизить испарение влаги.',
      'The covering goes between ornamental plants to reduce moisture loss.'
    )
  },
  'coir-geo-textile': {
    slopes: text(
      'Сетку крепят к грунту, чтобы уменьшить смыв, пока приживается растительность.',
      'The mesh is anchored to reduce soil loss while vegetation establishes.'
    ),
    riverbanks: text(
      'Полотно защищает поверхность берега от размыва в составе проекта укрепления.',
      'The mesh helps protect the bank surface from erosion as part of a bank protection design.'
    ),
    landscaping: text(
      'Сетка удерживает верхний слой грунта на участках, где высаживают растения.',
      'The mesh helps hold topsoil in place on newly planted areas.'
    )
  },
  'veymur-mct-oil': {
    drinks: text(
      'Масло смешивают с другими ингредиентами в смузи и коктейлях.',
      'The oil is blended into smoothies and shakes.'
    ),
    snacks: text(
      'Масло добавляют в смеси для батончиков и других снеков.',
      'The oil is added to mixes for snack bars and other snacks.'
    )
  },
  'veymur-virgin-coconut-oil': {
    bakery: text(
      'Масло добавляют в тесто и начинки для кокосового аромата.',
      'The oil adds coconut aroma to dough and fillings.'
    ),
    preparedFood: text(
      'Используют в соусах и блюдах, где уместен кокосовый вкус.',
      'Used in sauces and dishes where coconut flavour suits the recipe.'
    ),
    cosmetics: text(
      'Масло вводят в жировую фазу кремов, бальзамов и средств для волос.',
      'The oil is added to the oil phase of creams, balms and hair products.'
    )
  },
  'veymur-coconut-sugar': {
    drinks: text(
      'Сахар растворяют в напитках для сладости и карамельного оттенка.',
      'The sugar is dissolved in drinks for sweetness and caramel notes.'
    ),
    bakery: text(
      'Добавляют в тесто для печенья и кексов.',
      'Added to cookie dough and cake batter.'
    ),
    confectionery: text(
      'Используют для сладости в начинках и конфетных массах.',
      'Used to sweeten fillings and confectionery mixtures.'
    ),
    desserts: text(
      'Добавляют в кремы, пудинги и десертные соусы.',
      'Added to creams, puddings and dessert sauces.'
    )
  },
  'veymur-desiccated-coconut': {
    bakery: text(
      'Стружку вмешивают в тесто или используют как посыпку.',
      'The coconut is mixed into dough or sprinkled on top.'
    ),
    confectionery: text(
      'Стружка даёт кокосовый вкус и текстуру начинкам и конфетам.',
      'The coconut adds flavour and texture to fillings and sweets.'
    ),
    desserts: text(
      'Ею посыпают пудинги и кремовые десерты.',
      'Used as a topping for puddings and creamy desserts.'
    ),
    snacks: text(
      'Добавляют в гранолу и батончики для выраженной текстуры.',
      'Added to granola and snack bars for texture.'
    )
  },
  'veymur-coconut-milk': {
    drinks: text(
      'Молоко используют как основу для смузи и коктейлей.',
      'The milk forms a base for smoothies and shakes.'
    ),
    bakery: text(
      'Добавляют в жидкую часть теста и кремовые начинки.',
      'Added to the liquid ingredients in batters and to creamy fillings.'
    ),
    desserts: text(
      'Используют как основу для пудингов и мороженого.',
      'Used as a base for puddings and ice cream.'
    ),
    preparedFood: text(
      'Молоко придаёт соусам, супам и карри сливочную текстуру.',
      'The milk gives sauces, soups and curries a creamy texture.'
    )
  },
  'young-coconut': {
    drinks: text(
      'Кокосовую воду подают отдельно или добавляют в коктейли.',
      'The coconut water is served on its own or mixed into drinks.'
    ),
    fresh: text(
      'Молодые плоды подают свежими, а мягкую мякоть едят ложкой.',
      'Young coconuts are served fresh and the soft flesh is eaten with a spoon.'
    )
  },
  'mature-coconut': {
    drinks: text(
      'Из измельчённой мякоти получают кокосовое молоко для напитков.',
      'The grated kernel is used to make coconut milk for drinks.'
    ),
    edibleOils: text(
      'Из зрелой мякоти получают кокосовое масло.',
      'Coconut oil is extracted from the mature kernel.'
    ),
    driedIngredients: text(
      'Мякоть измельчают и сушат для получения кокосовой стружки.',
      'The kernel is grated and dried to make desiccated coconut.'
    )
  },
  'rbd-coconut-oil': {
    bakery: text(
      'Масло используют как жир в тесте и начинках, где нужен нейтральный вкус.',
      'Used as the fat in dough and fillings where a neutral flavour is needed.'
    ),
    preparedFood: text(
      'Добавляют в соусы и готовые блюда без выраженного кокосового вкуса.',
      'Added to sauces and prepared dishes that call for a neutral-flavoured oil.'
    )
  },
  'coco-shell-charcoal-briquettes': {
    hookah: text(
      'Для кальяна выбирают брикеты, предназначенные для этого применения.',
      'Choose briquettes specifically intended for hookah use.'
    ),
    barbecue: text(
      'Брикеты для гриля разжигают и распределяют под решёткой для прямого или непрямого жара.',
      'Grill briquettes are lit and arranged beneath the grate for direct or indirect heat.'
    )
  },
  'coco-shell-activated-carbon': {
    water: text(
      'Уголь используют в системах фильтрации для удаления отдельных примесей из воды.',
      'The carbon is used in filtration systems to remove selected impurities from water.'
    ),
    air: text(
      'Угольные фильтры улавливают запахи и отдельные пары из воздушного потока.',
      'Carbon filters capture odours and selected vapours from the airstream.'
    ),
    solvents: text(
      'Уголь улавливает пары растворителей в установках, рассчитанных на их извлечение.',
      'The carbon captures solvent vapours in systems designed for their recovery.'
    )
  }
};

// Client descriptions take priority; extra crop examples follow producer guidance and research.
export const productApplications: Record<string, readonly (keyof typeof applications)[]> = {
  'grow-bag': ['tomatoes', 'cucumbers', 'peppers', 'strawberries'],
  'open-top-grow-bag': ['blueberries', 'raspberries'],
  'coco-peat': ['tomatoes', 'cucumbers', 'lettuce', 'petunias'],
  'coco-peat-briquettes': ['tomatoes', 'strawberries', 'lettuce', 'basil'],
  'coconut-chips': [
    'orchids',
    'anthuriums',
    'bromeliads',
    'strawberries',
    'tomatoes',
    'cucumbers',
    'raspberries',
    'blueberries'
  ],
  'coco-husk-chips-bricks': [
    'orchids',
    'anthuriums',
    'bromeliads',
    'strawberries',
    'tomatoes',
    'cucumbers',
    'raspberries',
    'blueberries'
  ],
  'grow-cube-sleeve': [
    'tomatoes',
    'cucumbers',
    'peppers',
    'aubergines',
    'strawberries',
    'propagation'
  ],
  'coco-coir-discs': ['seedlings'],
  'coco-peat-tablets': ['seedlings'],
  'coco-peat-compost': ['tomatoes', 'lettuce', 'basil', 'petunias'],
  'seeding-tray-media': ['seedlings'],
  'coir-fiber-bales': ['ropes', 'brushes', 'mats', 'erosionMesh'],
  'machine-twisted-fiber': ['ropes', 'brushes', 'mats', 'erosionMesh'],
  'coir-weed-mat': ['berries', 'vegetables', 'orchards', 'nurseries', 'landscaping'],
  'coir-geo-textile': ['slopes', 'riverbanks', 'landscaping'],
  'veymur-mct-oil': ['drinks', 'snacks'],
  'veymur-virgin-coconut-oil': ['bakery', 'preparedFood', 'cosmetics'],
  'veymur-coconut-sugar': ['drinks', 'bakery', 'confectionery', 'desserts'],
  'veymur-desiccated-coconut': ['bakery', 'confectionery', 'desserts', 'snacks'],
  'veymur-coconut-milk': ['drinks', 'bakery', 'desserts', 'preparedFood'],
  'young-coconut': ['drinks', 'fresh'],
  'mature-coconut': ['drinks', 'edibleOils', 'driedIngredients'],
  'rbd-coconut-oil': ['bakery', 'preparedFood'],
  'coco-shell-charcoal-briquettes': ['hookah', 'barbecue'],
  'coco-shell-activated-carbon': ['water', 'air', 'solvents']
};
