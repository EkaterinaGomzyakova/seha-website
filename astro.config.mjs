import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: './dist',
  publicDir: './public',
  vite: {
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname
      }
    }
  },
  build: {
    format: 'directory',
    assets: 'assets'
  }
});
