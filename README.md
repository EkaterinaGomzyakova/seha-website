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

## Source architecture

- `src/components/` contains the shared Astro composition layer. `Header`, `Footer`, and `ContactForm` are used by the localized pages; the smaller primitives live in `src/components/ui/`.
- `public/assets/components.js` still owns the browser-only Web Components for the cookie banner and mobile menu. They are kept there because their behavior is progressively enhanced after static HTML is rendered.
- `src/data/translations.ts` and `src/data/products.ts` are the typed source of shared labels and catalog metadata. Product-page copy is kept separately in `src/data/product-pages.ts`, while `public/assets/app.js` contains only browser-side shell translation and interaction logic.
- `src/data/product-pages.ts` is the complete localized content model for the four product-category pages. `src/components/ProductCategoryPage.astro` and `src/layouts/SiteLayout.astro` render all Russian, English, and legacy category URLs, so route files only provide locale and category parameters.
- `src/styles/` contains the shared token and global-style entrypoint. The existing page styles remain in `public/assets/` for now to avoid a visual rewrite; new pages should import the shared source styles and old files can be retired page by page.
- `public/favicon.svg` is the reusable public favicon. Some legacy pages still contain an inline fallback icon and do not need to be rewritten to use the same asset immediately.

## Production notes

- `sitemap.xml`, `robots.txt` and JSON-LD are generated during the Astro build.
- The form supports an optional `PUBLIC_FORM_ENDPOINT` environment variable. When it is set, the form sends `multipart/form-data` with `fetch`; if the endpoint is unavailable, it falls back to a `mailto:` draft so the static GitHub Pages deployment remains usable.
- The cookie banner stores only the user's consent state in `localStorage`. No analytics or third-party tracking scripts are loaded before consent.
- GitHub Pages uses the current workflow. An alternative host must serve the `dist/` directory and preserve clean URL fallback to `404.html`.
