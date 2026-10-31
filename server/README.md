# Product inquiry email service

The Astro website stays static. This separate Node.js service accepts product inquiries at `POST /api/product-inquiry` and sends plain-text email using the company's authenticated SMTP account. It does not change or process the footer form.

## Configure on the hosting server

1. Install Node.js 24. Deploy `server/`, `package.json` and `package-lock.json`, then run `npm ci --omit=dev --ignore-scripts` in the project directory. Build the Astro frontend separately with development dependencies installed and upload `dist/` as the static website.
2. Copy `server/.env.example` to `server/.env`. Set `SMTP_HOST`, `SMTP_PORT` (normally 465 for implicit TLS or 587 for STARTTLS), `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` and `MAIL_TO`. For Mail, use a dedicated app password. `MAIL_FROM` must be an address permitted by the SMTP account. `MAIL_TO` is the company mailbox that receives inquiries; the template uses the site's current address, `seha.info@inbox.ru`. Customer email is used only as Reply-To.
3. Set `INQUIRY_ALLOWED_ORIGINS` to exact website origins, without paths or trailing slashes. Keep the GitHub Pages origin only while that website should be allowed to submit inquiries. The browser calls the endpoint without login or secret keys.
4. Start with `npm run inquiry:start`. Startup checks the settings and verifies SMTP connectivity/authentication; this does not send a message. Use the host's Node.js process manager or a service manager for automatic restart. Keep the service on localhost behind the site's HTTPS reverse proxy.
5. In the existing HTTPS virtual host, proxy the endpoint to the local Node.js process. For example, in Nginx:

```nginx
location = /api/product-inquiry {
    client_max_body_size 16k;
    proxy_pass http://127.0.0.1:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_read_timeout 30s;
}
```

`INQUIRY_TRUST_PROXY=true` trusts X-Real-IP only from a loopback connection. The reverse proxy must overwrite that header; set this variable to `false` when exposing Node.js directly. There is a bounded in-memory rate limiter (20 submissions per IP per 10 minutes), request-size limit, field validation, honeypot and sending-concurrency limit. For multiple server processes, use a shared rate limiter at the hosting/reverse-proxy layer as well.

6. Set frontend `PUBLIC_PRODUCT_INQUIRY_ENDPOINT=https://seha-group.ru/api/product-inquiry` (use the real API address), then rebuild and publish the frontend. While testing on GitHub Pages, set the repository variable with this same name. This public setting contains only an endpoint URL. Keep SMTP settings exclusively in the server environment. Do not set `PUBLIC_FORM_ENDPOINT` to this JSON endpoint: the unchanged footer form has its own multipart integration.
7. Submit an inquiry from each language and verify receipt in the company mailbox, product, pack size and Reply-To. Test an invalid SMTP configuration and confirm that the website reports failure and preserves entered data. A successful API result means the SMTP server accepted the recipient; it cannot guarantee inbox placement.

## Payload and checks

The JSON request contains `locale`, `product`, `productId`, optional `packaging` / `packagingId`, `quantity`, `company`, `contact`, `email`, `phone`, `comment`, boolean `consent` and an empty `website` honeypot field. Names and pack sizes are informational inquiry text; this endpoint does not price products, create paid orders, reserve inventory or promise stock per pack size.

Responses are JSON `{ "success": true }` only after SMTP acceptance; invalid input, disallowed origins, rate limits and delivery failures return non-2xx with `{ "success": false }`. No customer information or credentials are logged or stored in a database. Run `npm run test:server` for validation and SMTP-acceptance checks with a fake transport; these checks do not send real email.
