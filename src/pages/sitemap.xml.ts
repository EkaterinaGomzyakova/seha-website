import type { APIRoute } from 'astro';

const paths = [
  '/',
  '/about/',
  '/production/',
  '/quality/',
  '/privacy/',
  '/products/',
  '/products/food/',
  '/products/fiber/',
  '/products/shell/',
  '/products/substrates/'
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://seha-group.ru');
  const urls = paths.flatMap((path) => [`/ru${path}`, `/en${path}`]);
  const body = urls.map((path) => `  <url><loc>${new URL(path, base)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
