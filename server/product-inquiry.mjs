import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';
import { isIP } from 'node:net';
import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const quantityUnits = { packs: 'packs', pcs: 'pcs', kg: 'kg', m2: 'm²' };
const singleLine = (value, max) =>
  typeof value === 'string' && value.trim().length <= max && !/[\r\n\0]/.test(value);

export function validateInquiry(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  if (data.quantityUnit) {
    if (
      !Object.hasOwn(quantityUnits, data.quantityUnit) ||
      typeof data.quantity !== 'string' ||
      !/^\d+(\.\d{1,2})?$/.test(data.quantity)
    )
      return false;
    const quantity = Number(data.quantity);
    if (!Number.isFinite(quantity) || quantity <= 0 || quantity > 999999999) return false;
    if (['packs', 'pcs'].includes(data.quantityUnit) && !Number.isInteger(quantity)) return false;
  }
  if (data.supplyFormat !== undefined && !['consumer', 'industrial'].includes(data.supplyFormat))
    return false;
  if (!['ru', 'en'].includes(data.locale) || data.consent !== true || data.website) return false;
  for (const [name, max] of [
    ['company', 160],
    ['contact', 120],
    ['product', 200],
    ['productId', 100]
  ]) {
    if (!singleLine(data[name], max) || !data[name].trim()) return false;
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.productId)) return false;
  if (!singleLine(data.email, 254) || !emailPattern.test(data.email.trim())) return false;
  for (const [name, max] of [
    ['phone', 40],
    ['quantity', 100],
    ['packaging', 160],
    ['packagingId', 80]
  ]) {
    if (data[name] !== undefined && !singleLine(data[name], max)) return false;
  }
  if (data.phone && !/^\+?[\d\s().-]+$/.test(data.phone)) return false;
  if (
    data.comment !== undefined &&
    (typeof data.comment !== 'string' || data.comment.length > 1500 || data.comment.includes('\0'))
  )
    return false;
  return true;
}

/** Transport is injected so delivery failures can be tested without sending real mail. */
export function createInquiryServer(config, transport) {
  const origins = new Set(config.origins);
  const attempts = new Map();
  let sending = 0;
  const server = createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Vary', 'Origin');
    const reply = (status, success) => {
      res.writeHead(status);
      res.end(JSON.stringify({ success }));
    };
    if (req.url !== '/api/product-inquiry') return reply(404, false);
    const origin = req.headers.origin;
    if (!origin || !origins.has(origin)) return reply(403, false);
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST, OPTIONS');
      return reply(405, false);
    }
    if (req.headers['content-type']?.split(';')[0].trim() !== 'application/json')
      return reply(415, false);
    const now = Date.now();
    for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
    const remote = req.socket.remoteAddress || 'unknown';
    const forwarded = req.headers['x-real-ip'];
    const ip =
      config.trustProxy &&
      ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remote) &&
      typeof forwarded === 'string' &&
      isIP(forwarded)
        ? forwarded
        : remote;
    const rate = attempts.get(ip) || { count: 0, expires: now + 600_000 };
    if (rate.count >= 20 || attempts.size >= 10_000) {
      res.setHeader('Retry-After', '600');
      return reply(429, false);
    }
    rate.count++;
    attempts.set(ip, rate);
    if (sending >= 3) return reply(503, false);
    let data;
    try {
      let length = 0;
      const chunks = [];
      for await (const chunk of req) {
        length += chunk.length;
        if (length > 16_384) return reply(413, false);
        chunks.push(chunk);
      }
      data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      return reply(400, false);
    }
    if (!validateInquiry(data)) return reply(400, false);
    // Recheck after reading: other requests may have started sending meanwhile.
    if (sending >= 3) return reply(503, false);
    sending++;
    try {
      const text = [
        'SEHA wholesale product inquiry',
        `Language: ${data.locale}`,
        `Product: ${data.product.trim()}`,
        `Product ID: ${data.productId}`,
        `Supply format: ${data.supplyFormat === 'industrial' ? 'Industrial packaging, without Veymur branding' : data.supplyFormat === 'consumer' ? 'Consumer packaging supplied in wholesale quantities' : 'Agreed with the buyer'}`,
        `Pack size: ${data.packaging || 'Not specified'}`,
        `Packaging ID: ${data.packagingId || 'Not specified'}`,
        `Order quantity: ${data.quantity ? `${data.quantity}${data.quantityUnit ? ` ${quantityUnits[data.quantityUnit]}` : ''}` : 'Not specified'}`,
        '',
        `Company: ${data.company.trim()}`,
        `Contact: ${data.contact.trim()}`,
        `Email: ${data.email.trim()}`,
        `Phone: ${data.phone || 'Not specified'}`,
        '',
        `Message: ${data.comment || 'None'}`,
        '',
        'The sender consented to personal data processing for this inquiry.'
      ].join('\n');
      const result = await transport.sendMail({
        from: { name: 'SEHA website', address: config.from },
        to: config.to,
        replyTo: { name: data.contact.trim(), address: data.email.trim() },
        subject: `SEHA — ${data.product.trim()}`,
        text,
        disableFileAccess: true,
        disableUrlAccess: true
      });
      if (
        !result.accepted?.some(
          (address) =>
            typeof address === 'string' && address.toLowerCase() === config.to.toLowerCase()
        )
      )
        throw new Error('Recipient not accepted');
      reply(200, true);
    } catch {
      // Do not log customer data, SMTP credentials or provider responses.
      console.error('Product inquiry SMTP delivery failed');
      reply(502, false);
    } finally {
      sending--;
    }
  });
  server.requestTimeout = 15_000;
  server.headersTimeout = 10_000;
  return server;
}

async function start() {
  const required = [
    'SMTP_HOST',
    'SMTP_USER',
    'SMTP_PASS',
    'MAIL_FROM',
    'MAIL_TO',
    'INQUIRY_ALLOWED_ORIGINS'
  ];
  const missing = required.filter((name) => !process.env[name]);
  if (missing.length) throw new Error(`Missing server settings: ${missing.join(', ')}`);
  if (![process.env.MAIL_FROM, process.env.MAIL_TO].every((value) => emailPattern.test(value)))
    throw new Error('MAIL_FROM and MAIL_TO must be email addresses');
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const port = Number(process.env.INQUIRY_PORT || 3001);
  if (![smtpPort, port].every((value) => Number.isInteger(value) && value > 0 && value <= 65535))
    throw new Error('Invalid port');
  const origins = process.env.INQUIRY_ALLOWED_ORIGINS.split(',').map((value) => value.trim());
  if (
    !origins.every(
      (value) =>
        new URL(value).origin === value &&
        /^(https:|http:\/\/localhost(?=:)|http:\/\/127\.0\.0\.1(?=:))/.test(value)
    )
  )
    throw new Error('Use explicit HTTPS origins (or local development origins)');
  const secure = smtpPort === 465;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure,
    requireTLS: !secure,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    disableFileAccess: true,
    disableUrlAccess: true
  });
  await transport.verify();
  const server = createInquiryServer(
    {
      origins,
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      trustProxy: process.env.INQUIRY_TRUST_PROXY === 'true'
    },
    transport
  );
  server.listen(port, process.env.INQUIRY_HOST || '127.0.0.1', () =>
    console.info(`Product inquiry server listening on port ${port}`)
  );
  const stop = () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 25_000).unref();
  };
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  start().catch(() => {
    console.error('Inquiry server could not start. Check server settings and SMTP access.');
    process.exitCode = 1;
  });
}
