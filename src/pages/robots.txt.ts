import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://seha-group.ru');
  const body = [`User-agent: *`, `Allow: /`, `Sitemap: ${new URL('/sitemap.xml', base)}`].join(
    '\n'
  );

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
