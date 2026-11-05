import type { ApplicationIconName } from './application-icons';
import { text, type LocalizedText } from './products';
interface Application {
  label: LocalizedText;
  icon: ApplicationIconName;
  image?: string;
  description?: LocalizedText;
}
const application = (ru: string, en: string, icon: ApplicationIconName): Application => ({
  label: { ru, en },
  icon
});
const crop = (ru: string, en: string, image: string): Application => ({
  label: { ru, en },
  icon: 'seedling',
  image: `/assets/images/common/crops/${image}.png`
});

// Substrates show crops or a propagation stage; other ranges show industries.
export const applications = {
  berries: application('Выращивание ягод', 'Soft fruit growing', 'strawberry'),
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
  orchards: application('Плодовые сады', 'Fruit orchards', 'tree'),
  landscaping: application('Озеленение', 'Landscaping', 'tree'),
  drinks: application('Напитки', 'Beverages', 'drink'),
  bakery: application('Выпечка', 'Bakery products', 'bread'),
  confectionery: application('Кондитерские изделия', 'Confectionery', 'cake'),
  desserts: application('Десерты', 'Desserts', 'cake'),
  snacks: application('Снеки и завтраки', 'Snacks and breakfast foods', 'bowl'),
  preparedFood: application('Соусы и готовые блюда', 'Sauces and prepared foods', 'cooking'),
  cosmetics: application('Косметические средства', 'Personal-care products', 'bottle'),
  fresh: application('Свежие продукты', 'Fresh produce', 'coconut'),
  edibleOils: application('Пищевые масла', 'Edible oils', 'oil'),
  driedIngredients: application('Сушёные ингредиенты', 'Dried ingredients', 'coconut'),
  ropes: application('Канаты и шпагат', 'Ropes and twine', 'rope'),
  brushes: application('Щёточные изделия', 'Brush products', 'brush'),
  mats: application('Маты и покрытия', 'Mats and coverings', 'mat'),
  erosionMesh: application('Противоэрозионные сетки', 'Erosion-control netting', 'mat'),
  slopes: application('Защита склонов', 'Slope protection', 'slope'),
  riverbanks: application('Укрепление берегов', 'Riverbank protection', 'water'),
  water: application('Очистка воды', 'Water treatment', 'water'),
  air: application('Очистка воздуха и газов', 'Air and gas treatment', 'air'),
  solvents: application('Регенерация растворителей', 'Solvent recovery', 'filter'),
  hookah: application('Кальяны', 'Hookah', 'flame'),
  nurseries: application('Питомники', 'Nurseries', 'seedling'),
  vegetables: application('Выращивание овощей', 'Vegetable growing', 'tomato'),
  barbecue: application('Гриль и барбекю', 'Grilling and barbecue', 'grill'),
  orchids: {
    label: { ru: 'Орхидеи', en: 'Orchids' },
    icon: 'flower',
    image: '/assets/images/common/crops/orchid.png'
  },
  anthuriums: {
    label: { ru: 'Антуриумы', en: 'Anthuriums' },
    icon: 'flower',
    image: '/assets/images/common/crops/anthurium.png'
  },
  bromeliads: {
    label: { ru: 'Бромелиевые', en: 'Bromeliads' },
    icon: 'flower',
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
