# Seha Website

Static website for Seha organic coconut products.

## Structure

- `dist/` contains the full published static site.
- `index.html` and `404.html` are duplicated at the repository root for simple static hosts.
- Main routes are available inside `dist/`:
  - `/products/`
  - `/production/`
  - `/quality/`
  - `/about/`
  - `/products/food/`
  - `/products/veymur/`

## Local Preview

```bash
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173`.

## Deploy

For Vercel, Netlify, or Cloudflare Pages, use `dist` as the publish/output directory.
