import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import russianTypography from './scripts/russian-typography.mjs';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), ['SITE_URL']);

export default defineConfig({
  integrations: [russianTypography()],
  site: process.env.SITE_URL || env.SITE_URL || 'https://seha-group.ru',
  base: '/',
  output: 'static',
  redirects: {
    '/analytics-consent/': '/ru/consent/#analytics',
    '/ru/analytics-consent/': '/ru/consent/#analytics',
    '/en/analytics-consent/': '/en/consent/#analytics'
  },
  outDir: process.env.ASTRO_OUT_DIR || './dist',
  publicDir: './public',
  vite: {
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url))
      }
    }
  },
  build: {
    format: 'directory',
    assets: 'assets'
  }
});
