import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  outDir: './dist',
  publicDir: './public',
  build: {
    format: 'directory',
    assets: 'assets'
  }
});
