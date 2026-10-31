import type { LocalizedText } from './products';
import type { ApplicationIconName } from './application-icons';

const application = (ru: string, en: string, icon: ApplicationIconName, note?: LocalizedText) => ({
  label: { ru, en },
  icon,
  note
});
export const applications = {
  tomatoes: application('Томаты', 'Tomatoes', 'tomato'),
  strawberries: application('Клубника', 'Strawberries', 'strawberry'),
  cucumbers: application('Огурцы', 'Cucumbers', 'cucumber'),
  peppers: application('Перец', 'Peppers', 'pepper'),
  eggplants: application('Баклажаны', 'Aubergines', 'eggplant'),
  blueberries: application('Голубика', 'Blueberries', 'blueberry'),
  raspberries: application('Малина', 'Raspberries', 'raspberry'),
  orchids: application('Орхидеи', 'Orchids', 'flower'),
  vegetables: application('Овощные культуры', 'Vegetable crops', 'seedling'),
  flowers: application('Цветочные культуры', 'Flower crops', 'flower'),
  propagation: application('Рассада и черенки', 'Seedlings and cuttings', 'seedling'),
  nursery: application('Питомники', 'Nurseries', 'pot'),
  potting: application('Горшечные смеси', 'Potting mixes', 'pot'),
  greenhouse: application('Теплицы', 'Greenhouses', 'greenhouse'),
  orchards: application('Сады и плантации', 'Orchards and plantations', 'tree'),
  landscaping: application('Озеленение', 'Landscaping', 'tree'),
  drinks: application('Напитки', 'Beverages', 'drink'),
  granola: application('Гранола', 'Granola', 'bowl'),
  bars: application('Батончики', 'Snack bars', 'bar'),
  bakery: application('Выпечка', 'Bakery', 'bread'),
  confectionery: application('Кондитерские изделия', 'Confectionery', 'cake'),
  desserts: application('Десерты', 'Desserts', 'cake'),
  sauces: application('Соусы и супы', 'Sauces and soups', 'cooking'),
  cooking: application('Приготовление пищи', 'Cooking', 'cooking'),
  food: application('Пищевое производство', 'Food manufacturing', 'factory'),
  cosmetics: application('Косметика', 'Personal care', 'bottle', {
    ru: 'Для подходящих марок масла.',
    en: 'For suitable oil grades.'
  }),
  fresh: application('Свежее употребление', 'Fresh consumption', 'coconut'),
  milk: application('Производство молока', 'Coconut milk production', 'bottle'),
  oil: application('Производство масла', 'Coconut oil production', 'oil'),
  desiccated: application('Производство стружки', 'Desiccated coconut production', 'coconut'),
  ropes: application('Канаты и шпагат', 'Ropes and twine', 'rope'),
  brushes: application('Щётки', 'Brushes', 'brush'),
  mats: application('Маты и сетки', 'Mats and nets', 'mat'),
  erosion: application('Защита почвы от эрозии', 'Soil erosion control', 'slope'),
  slopes: application('Укрепление склонов', 'Slope protection', 'slope'),
  riverbanks: application('Защита берегов', 'Riverbank protection', 'water'),
  water: application('Очистка воды', 'Water treatment', 'water'),
  air: application('Очистка воздуха и газов', 'Air and gas treatment', 'air'),
  filtration: application('Промышленная фильтрация', 'Industrial filtration', 'filter'),
  solvents: application('Регенерация растворителей', 'Solvent recovery', 'factory'),
  barbecue: application('Гриль и барбекю', 'Grilling and barbecue', 'grill'),
  shisha: application('Кальяны', 'Shisha heating', 'flame', {
    ru: 'Применение зависит от марки и связующего.',
    en: 'Use depends on the grade and binder.'
  })
} as const;

// Product-specific applications drawn from client descriptions, not category-wide assumptions.
export const productApplications: Record<string, readonly (keyof typeof applications)[]> = {
  'grow-bag': ['tomatoes', 'cucumbers', 'peppers', 'eggplants', 'strawberries'],
  'open-top-grow-bag': ['blueberries', 'raspberries'],
  'coco-peat': ['vegetables', 'flowers', 'potting', 'nursery'],
  'coco-peat-briquettes': ['greenhouse', 'propagation', 'potting'],
  'coconut-chips': ['orchids', 'strawberries', 'tomatoes', 'cucumbers', 'nursery'],
  'coco-husk-chips-bricks': ['orchids', 'strawberries', 'tomatoes', 'cucumbers', 'nursery'],
  'grow-cube-sleeve': ['tomatoes', 'cucumbers', 'peppers', 'eggplants', 'propagation'],
  'coco-coir-discs': ['vegetables', 'flowers', 'nursery'],
  'coco-peat-tablets': ['vegetables', 'flowers', 'propagation'],
  'coco-peat-compost': ['potting', 'nursery', 'greenhouse', 'flowers'],
  'seeding-tray-media': ['vegetables', 'flowers', 'propagation'],
  'coir-fiber-bales': ['ropes', 'brushes', 'mats', 'erosion'],
  'machine-twisted-fiber': ['ropes', 'mats', 'brushes', 'erosion'],
  'coir-weed-mat': ['strawberries', 'orchards', 'nursery', 'landscaping'],
  'coir-geo-textile': ['slopes', 'riverbanks', 'landscaping'],
  'veymur-mct-oil': ['drinks', 'granola', 'bars', 'food'],
  'veymur-virgin-coconut-oil': ['cooking', 'bakery', 'food', 'cosmetics'],
  'veymur-coconut-sugar': ['drinks', 'bakery', 'confectionery', 'desserts'],
  'veymur-desiccated-coconut': ['bakery', 'confectionery', 'granola', 'bars', 'desserts'],
  'veymur-coconut-milk': ['drinks', 'sauces', 'desserts', 'bakery'],
  'young-coconut': ['fresh', 'drinks'],
  'mature-coconut': ['milk', 'oil', 'desiccated'],
  'rbd-coconut-oil': ['cooking', 'bakery', 'food'],
  'coco-shell-charcoal-briquettes': ['barbecue', 'shisha'],
  'coco-shell-activated-carbon': ['water', 'air', 'filtration', 'solvents']
};
