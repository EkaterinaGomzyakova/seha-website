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

## Production notes

- `sitemap.xml`, `robots.txt` and JSON-LD are generated during the Astro build.
- The form supports an optional `PUBLIC_FORM_ENDPOINT` environment variable. When it is set, the form sends `multipart/form-data` with `fetch`; if the endpoint is unavailable, it falls back to a `mailto:` draft so the static GitHub Pages deployment remains usable.
- The cookie banner stores only the user's consent state in `localStorage`. No analytics or third-party tracking scripts are loaded before consent.
- GitHub Pages uses the current workflow. An alternative host must serve the `dist/` directory and preserve clean URL fallback to `404.html`.
