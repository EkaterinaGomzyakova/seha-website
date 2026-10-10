import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://seha-group.ru');
  const body = [
    `User-agent: *`,
    `Allow: /`,
    `Sitemap: ${new URL(withBase('/sitemap.xml'), base)}`
  ].join('\n');

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
