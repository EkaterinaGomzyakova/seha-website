import { test, expect } from '@playwright/test';

const base = (process.env.TEST_BASE_PATH || '').replace(/\/$/, '');
const paths = [
  '/',
  '/about/',
  '/production/',
  '/quality/',
  '/privacy/',
  '/products/',
  '/products/food/',
  '/products/substrates/',
  '/products/fiber/',
  '/products/shell/',
  '/products/veymur/'
];

test('public copy uses fibre while technical fiber URLs stay unchanged', async ({ request }) => {
  for (const locale of ['ru', 'en']) {
    for (const path of paths) {
      const response = await request.get(`${base}/${locale}${path}`);
      expect(response.ok()).toBe(true);
      const html = await response.text();
      const copy = html
        .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
        .replace(/<[^>]+>/g, ' ');
      expect(copy, `${locale}${path} visible text`).not.toMatch(/\bfibers?\b/i);
      const accessibleCopy = Array.from(
        html.matchAll(/\b(?:alt|aria-label)="([^"]*)"/g),
        (match) => match[1]
      );
      expect(accessibleCopy.join(' '), `${locale}${path} accessibility labels`).not.toMatch(
        /\bfibers?\b/i
      );
      const metadata = Array.from(html.matchAll(/<meta\b[^>]+>/g), (match) => match[0]).filter(
        (tag) => /(?:name="description"|property="og:(?:title|description|image:alt)")/.test(tag)
      );
      expect(metadata.join(' '), `${locale}${path} metadata`).not.toMatch(/\bfibers?\b/i);
      for (const script of html.matchAll(
        /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
      )) {
        const schemaCopy = [];
        JSON.parse(script[1], (key, value) => {
          if (['name', 'description', 'caption'].includes(key) && typeof value === 'string')
            schemaCopy.push(value);
          return value;
        });
        expect(schemaCopy.join(' '), `${locale}${path} structured copy`).not.toMatch(
          /\bfibers?\b/i
        );
      }
      if (path === '/products/fiber/') {
        expect(html).toContain(`${base}/${locale}/products/fiber/`);
        expect(copy).toContain('Coir Fibre Bales');
        expect(copy).toContain('Bristle Fibre');
        expect(copy).toContain('Machine Twisted Fibre');
      }
    }
  }
});
