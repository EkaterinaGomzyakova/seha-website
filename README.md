# SEHA website

Static bilingual B2B catalog built with Astro. Russian and English pages are generated at `/ru/` and `/en/`; existing root URLs reuse the Russian templates and point to their localized canonical URLs.

## Development

Use Node.js 24 (see `.nvmrc`). The previous local Node 18 installation is not compatible with the updated toolchain.

```sh
npm ci
npm run dev
```

Copy `.env.example` to `.env` if deployment settings are needed. `SITE_URL` is the canonical origin, `BASE_PATH` is `/` for a custom domain or `/seha-website/` for a GitHub project URL. Shared helpers in `src/lib/paths.ts` handle localized links and deployment paths.

## Architecture

- `src/pages/`: small route wrappers and generated SEO endpoints.
- `src/components/pages/`: shared templates for each page type.
- `src/components/`: header, footer, form, logo, language switcher, category template and SEO. `ui/` contains reusable HTML primitives.
- `src/data/*-page.ts`: complete RU/EN dictionaries rendered at build time. English copy is a draft for manual editorial review before release.
- `src/data/products.ts`: the single catalog source, with 28 products, stable IDs/slugs, translated descriptions, and images. `product-category-pages.ts` supplies category presentation metadata and uses the canonical catalog.
- `src/data/site.ts`: shared contact and organization details.
- `src/scripts/`: bundled interaction modules. Light-DOM Web Components enhance server-rendered menu and browser-storage notice; other small interactions use native HTML and TypeScript.
- `src/styles/`: one entrypoint, semantic cascade layers, component ownership and per-page styles. See `src/styles/README.md`.
- `public/assets/images/`: original assets organized by usage. `generated/` contains responsive derivatives and their manifest. Original assets are never recompressed by the optimizer.

Fonts are served locally through Fontsource. Page content, contact labels, logos and language links do not depend on client-side translation.

## Quality checks

```sh
npm run check
npm run lint
npm run format:check
npm run test:functional
npm run test:visual
```

Browser tests build fresh output and start their own preview. Install Chromium with `npx playwright install chromium` before the first run. Tests cover routes, image decoding, language consistency, no-JavaScript content, form responses, selected products, keyboard navigation, SEO and accessibility.

Visual baselines are captured on Windows and verified by a separate Windows CI job. Ubuntu CI runs functional/accessibility checks both at the root and under `/seha-website/`. Never automatically accept changed baselines in CI; inspect intentional visual changes before updating them with `npm run test:update -- --grep "@visual"`.

```sh
npm run images:optimize
```

The optimizer hashes sources and settings, produces WebP/AVIF sizes, preserves originals, and skips unchanged derivatives. Review reported decoding errors instead of treating a skipped image as valid.

## Form delivery

Direct email delivery requires a separately configured server endpoint. GitHub Pages hosts static files and cannot send email itself. No endpoint has been configured yet.

Set `PUBLIC_FORM_ENDPOINT` locally or as a GitHub repository variable when a handler is ready. It must accept `POST` with `multipart/form-data`, allow the site's origin, validate the fields, enforce abuse protection, and send email using credentials stored only on the server. Fields are `locale`, `company`, `contact`, `email`, `phone`, `business`, `comment`, `product`, `productId`, and `consent`.

Return a successful 2xx response after accepting the inquiry (optionally JSON `{ "success": true }`); return a non-2xx response or JSON `{ "success": false }` on failure. The form distinguishes sending, success, failure and a prepared email draft, blocks duplicate submissions and retains entered data on failure.

Until a handler is configured, the form prepares a localized draft and offers copying or an explicit button to open an email application. It never opens an email application automatically or claims that the website has sent an email. SMTP credentials must never be placed in `PUBLIC_*` variables or browser code.

## Publication

GitHub checks pull requests and main-branch pushes. Deployment waits for type, lint, formatting, functional/accessibility and Windows visual checks, then builds with the actual Pages origin/base. There is no post-build text rewriting.

An alternative static host serves `dist/`, preserves directory URLs and serves `404.html` with a 404 status for unknown paths. SEO includes localized canonical/hreflang, Open Graph, sitemap, robots, organization data and collection/item-list markup for categories. Error pages are not indexed.

The storage notice records only dismissal in `localStorage`. No analytics/tracking scripts are installed. Adding analytics requires updating both its implementation and the policy text.

Before public release, manually review RU/EN copy and company details, configure and test direct email delivery, and review the refreshed visual baselines against the approved designs.
