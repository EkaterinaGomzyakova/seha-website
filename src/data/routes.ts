import { products } from './products';
/** Indexable routes, shared by sitemap generation and deployment checks. */
export const publicRoutes = [
  '/',
  '/about/',
  '/production/',
  '/quality/',
  '/privacy/',
  '/products/',
  '/products/fiber/',
  '/products/shell/',
  '/products/substrates/',
  '/products/veymur/',
  ...products.map((product) => `/products/${product.category}/${product.slug}/`)
] as const;
