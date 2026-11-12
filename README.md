# SEHA website

Bilingual B2B website for SEHA, built with Astro. The catalog covers coconut growing media, Veymur food products, coir fibre and coconut shell products.

Includes product specifications, consumer and industrial packaging formats, availability from Google Sheets, and a shared PHP handler for general and product inquiries via SMTP.

## Publication

The only published website is https://seha-group.ru, hosted on REG.RU. A push to `main` runs the checks in `.github/workflows/deploy.yml`, then publishes the site and PHP inquiry handler to REG.RU. Existing private SMTP settings are preserved.

Local previews use `npm run build` and `npm run preview`. The site is built at the domain root; no separate preview deployment is configured.
