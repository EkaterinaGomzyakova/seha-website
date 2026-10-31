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
- `src/data/products.ts`: the single catalog source, with stable IDs/slugs, translated descriptions, and images. `product-category-pages.ts` supplies category presentation metadata and uses the canonical catalog.
- `src/data/site.ts`: shared contact and organization details.
- `src/scripts/`: bundled interaction modules. Light-DOM Web Components enhance server-rendered menu and browser-storage notice; other small interactions use native HTML and TypeScript.
- `src/styles/`: one entrypoint, semantic cascade layers, component ownership and per-page styles. See `src/styles/README.md`.
- `public/assets/images/`: original assets organized by usage. `generated/` contains responsive derivatives and their manifest. Original assets are never recompressed by the optimizer.

Fonts are served locally through Fontsource. Page content, contact labels, logos and language links do not depend on client-side translation.

Public-facing copy uses **fibre/fibres**, including English product names on Russian pages, metadata, and accessible labels. Technical identifiers, filenames, CSS classes, and existing URLs retain **fiber** for stability.

## Quality checks

```sh
npm run check
npm run lint
npm run format:check
npm run test:functional
```

Browser tests build fresh output and start their own preview. Install Chromium with `npx playwright install chromium` before the first run. Tests cover routes, image decoding, language consistency, no-JavaScript content, form responses, selected products, keyboard navigation, SEO and accessibility.

Ubuntu CI runs the basic functional/accessibility suite on desktop and mobile, both at the root and under `/seha-website/`. Pixel-by-pixel snapshots and repeated viewport matrices are not deployment gates; review visual changes manually against the approved designs.

```sh
npm run images:optimize
```

The optimizer hashes sources and settings, produces WebP/AVIF sizes, preserves originals, and skips unchanged derivatives. Review reported decoding errors instead of treating a skipped image as valid.

## Form delivery

Direct email delivery requires a separately configured server endpoint. GitHub Pages hosts static files and cannot send email itself. No endpoint has been configured yet.

Set `PUBLIC_FORM_ENDPOINT` locally or as a GitHub repository variable when a handler is ready. It must accept `POST` with `multipart/form-data`, allow the site's origin, validate the fields, enforce abuse protection, and send email using credentials stored only on the server. Fields are `locale`, `company`, `contact`, `email`, `phone`, `business`, `comment`, `product`, `productId`, and `consent`.

Return a successful 2xx response after accepting the inquiry (optionally JSON `{ "success": true }`); return a non-2xx response or JSON `{ "success": false }` on failure. The form distinguishes sending, success, failure and a prepared email draft, blocks duplicate submissions and retains entered data on failure.

Until a handler is configured, the form prepares a localized draft and offers copying or an explicit button to open an email application. It never opens an email application automatically or claims that the website has sent an email. SMTP credentials must never be placed in `PUBLIC_*` variables or browser code.

## Product packaging and inquiries

Product-card order buttons open the separate `ProductInquiry.astro` dialog. `src/data/product-packaging.ts` is the shared source for the six food products' retail/bulk choices and specification rows. Selected product, pack size and requested quantity are included in the inquiry. Fresh coconuts and non-food products have no invented pack sizes. Stock remains a product-wide total, not per-variant inventory.

The footer form is unchanged. For direct product inquiries, deploy the standalone Node.js + SMTP service and set `PUBLIC_PRODUCT_INQUIRY_ENDPOINT`; see [server setup](server/README.md). Without that configured endpoint, the dialog reports that sending is unavailable and never claims to have sent an email.

## Product availability

`src/data/inventory.ts` connects the public inventory spreadsheet to the shared `ProductStock.astro` component. Both product detail pages and category cards read it in the browser; changing quantities does not require rebuilding the site. One request serves every card on a page. Visible pages refresh once a minute; Google may cache recent edits briefly.

On the `Inventory` tab (`gid=0`), keep these English-only columns in order: **A** Product ID, **B** Product, **C** Category, **D** Quantity, **E** Unit. Products are grouped as Substrates, Veymur, Coir Fibre, Coconut Shell. Names and categories are for the editor; the website matches column A to `src/data/products.ts`. Rows may be reordered, but do not rename IDs or reorder columns. The configured range supports up to 999 products.

Edit D as a non-negative number and E separately as `pcs`, `kg`, `L` or `m²`. The website localizes units and numbers. Zero means out of stock; an empty/invalid quantity, unknown unit, duplicate ID, missing row or failed request displays “Наличие уточняется” / “Availability on request”. Stock is informational; the inquiry form does not reserve or decrement quantities.

The sheet must remain readable without signing in to Google. The browser uses Google's public Visualization data-source protocol with a fixed JSONP callback, a timeout, and strict row validation; API keys and a server are unnecessary. Only columns A, D and E are requested. Keep customer details, orders and other private information in a separate spreadsheet.

## Publication

GitHub checks pull requests and main-branch pushes. Deployment waits for type, lint, formatting, functional/accessibility checks, then builds with the actual Pages origin/base. There is no post-build text rewriting.

An alternative static host serves `dist/`, preserves directory URLs and serves `404.html` with a 404 status for unknown paths. SEO includes localized canonical/hreflang, Open Graph, sitemap, robots, organization data and collection/item-list markup for categories. Error pages are not indexed.

The storage notice records only dismissal in `localStorage`. No analytics/tracking scripts are installed. Adding analytics requires updating both its implementation and the policy text.

Before public release, manually review RU/EN copy and company details, configure and test direct email delivery, and review desktop and mobile layouts against the approved designs.
