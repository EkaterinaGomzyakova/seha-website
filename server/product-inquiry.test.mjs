import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createInquiryServer } from './product-inquiry.mjs';

test('product inquiries validate data and acknowledge only SMTP-accepted messages', async (t) => {
  const messages = [];
  let mode = 'accepted';
  const server = createInquiryServer(
    { origins: ['https://seha-group.ru'], from: 'website@example.com', to: 'sales@example.com' },
    {
      async sendMail(message) {
        messages.push(message);
        return { accepted: mode === 'accepted' ? ['sales@example.com'] : [] };
      }
    }
  );
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => {
    server.closeAllConnections();
    server.close();
  });
  const url = `http://127.0.0.1:${server.address().port}/api/product-inquiry`;
  const data = {
    locale: 'en',
    company: 'Example Ltd',
    contact: 'Jane',
    email: 'jane@example.com',
    phone: '',
    product: 'Organic MCT Oil',
    productId: 'veymur-mct-oil',
    packaging: 'Bulk — 25 L',
    packagingId: 'bulk-25-l',
    quantity: '2 drums',
    comment: 'Delivery enquiry',
    consent: true,
    website: ''
  };
  const send = (payload, origin = 'https://seha-group.ru') =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: origin },
      body: JSON.stringify(payload)
    });
  let response = await send(data);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(messages[0].to, 'sales@example.com');
  assert.equal(messages[0].replyTo.address, 'jane@example.com');
  assert.match(messages[0].text, /Bulk — 25 L/);
  assert.match(messages[0].text, /2 drums/);
  for (const invalid of [
    { ...data, consent: false },
    { ...data, email: 'bad' },
    { ...data, website: 'bot' },
    { ...data, product: 'Product\nInjected header' }
  ])
    assert.equal((await send(invalid)).status, 400);
  assert.equal((await send(data, 'https://unrelated.example')).status, 403);
  assert.equal(messages.length, 1);
  mode = 'rejected';
  response = await send(data);
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { success: false });
});
