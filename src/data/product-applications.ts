import type { ApplicationIconName } from './application-icons';
import type { LocalizedText } from './products';
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
  barbecue: application('Гриль и барбекю', 'Grilling and barbecue', 'grill'),
  orchids: {
    label: { ru: 'Орхидеи', en: 'Orchids' },
    icon: 'flower',
    image: '/assets/images/common/crops/orchid.png',
    description: {
      ru: 'Самостоятельный субстрат или компонент смеси.',
      en: 'A standalone medium or a component of growing mixes.'
    }
  },
  anthuriums: {
    label: { ru: 'Антуриумы', en: 'Anthuriums' },
    icon: 'flower',
    image: '/assets/images/common/crops/anthurium.png',
    description: {
      ru: 'Самостоятельный субстрат или компонент смеси.',
      en: 'A standalone medium or a component of growing mixes.'
    }
  },
  bromeliads: {
    label: { ru: 'Бромелиевые', en: 'Bromeliads' },
    icon: 'flower',
    image: '/assets/images/common/crops/bromeliad.png',
    description: {
      ru: 'Самостоятельный субстрат или компонент смеси.',
      en: 'A standalone medium or a component of growing mixes.'
    }
  },
  strawberries: crop('Клубника', 'Strawberries', 'strawberry')
} as const;

const chipsCropDescriptions: Partial<Record<keyof typeof applications, LocalizedText>> = {
  strawberries: { ru: 'В смеси с кокосовым торфом.', en: 'Blended with coco pith.' }
};
export const productApplicationDescriptions: Record<
  string,
  Partial<Record<keyof typeof applications, LocalizedText>>
> = {
  'coconut-chips': chipsCropDescriptions,
  'coco-husk-chips-bricks': chipsCropDescriptions
};

// Client descriptions take priority; extra crop examples follow producer guidance and research.
export const productApplications: Record<string, readonly (keyof typeof applications)[]> = {
  'grow-bag': ['tomatoes', 'cucumbers', 'peppers', 'strawberries'],
  'open-top-grow-bag': ['blueberries', 'raspberries'],
  'coco-peat': ['tomatoes', 'cucumbers', 'lettuce', 'petunias'],
  'coco-peat-briquettes': ['tomatoes', 'strawberries', 'lettuce', 'basil'],
  'coconut-chips': ['orchids', 'anthuriums', 'bromeliads', 'strawberries'],
  'coco-husk-chips-bricks': ['orchids', 'anthuriums', 'bromeliads', 'strawberries'],
  'grow-cube-sleeve': ['propagation'],
  'coco-coir-discs': ['seedlings'],
  'coco-peat-tablets': ['seedlings'],
  'coco-peat-compost': ['tomatoes', 'lettuce', 'basil', 'petunias'],
  'seeding-tray-media': ['seedlings'],
  'coir-fiber-bales': ['ropes', 'brushes', 'mats', 'erosionMesh'],
  'machine-twisted-fiber': ['ropes', 'brushes', 'mats', 'erosionMesh'],
  'coir-weed-mat': ['berries', 'orchards', 'landscaping'],
  'coir-geo-textile': ['slopes', 'riverbanks', 'landscaping'],
  'veymur-mct-oil': ['drinks', 'snacks'],
  'veymur-virgin-coconut-oil': ['bakery', 'preparedFood', 'cosmetics'],
  'veymur-coconut-sugar': ['drinks', 'bakery', 'confectionery', 'desserts'],
  'veymur-desiccated-coconut': ['bakery', 'confectionery', 'desserts', 'snacks'],
  'veymur-coconut-milk': ['drinks', 'bakery', 'desserts', 'preparedFood'],
  'young-coconut': ['drinks', 'fresh'],
  'mature-coconut': ['drinks', 'edibleOils', 'driedIngredients'],
  'rbd-coconut-oil': ['bakery', 'preparedFood'],
  'coco-shell-charcoal-briquettes': ['barbecue'],
  'coco-shell-activated-carbon': ['water', 'air', 'solvents']
};
