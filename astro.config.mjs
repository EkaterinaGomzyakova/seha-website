import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), ['SITE_URL', 'BASE_PATH']);

export default defineConfig({
  site: process.env.SITE_URL || env.SITE_URL || 'https://seha-group.ru',
  base: process.env.BASE_PATH || env.BASE_PATH || '/',
  output: 'static',
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
