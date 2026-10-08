# Seha Website

Corporate B2B website for Seha, a Russian sales centre for premium organic coconut products and the Veymur retail line.

## Development

The project uses Astro for static generation. Source pages are stored in `src/pages`, while static assets are stored in `public/assets`.

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run build
npm run lint
npm run format:check
```

The production output is generated in `dist/`. It is ignored by Git and built by the GitHub Pages workflow before deployment.
