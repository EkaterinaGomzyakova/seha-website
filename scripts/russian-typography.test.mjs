import { test } from 'node:test';
import assert from 'node:assert/strict';
import { russianHtml } from './russian-typography.mjs';

test('Russian typography changes only visible Russian text and remains idempotent', () => {
  const source =
    '<html lang="ru"><head><title>О компании</title></head><body><p>Из кокоса для бизнеса и производства</p><a href="/ru/products/?q=для бизнеса">О компании</a><script>const text="в коде";</script><textarea>в поле</textarea><span lang="en">in the garden</span></body></html>';
  const result = russianHtml(source);
  assert.ok(result.includes('Из\u00a0кокоса для\u00a0бизнеса и\u00a0производства'));
  assert.ok(result.includes('<title>О компании</title>'));
  assert.ok(result.includes('href="/ru/products/?q=для бизнеса"'));
  assert.ok(result.includes('const text="в коде"'));
  assert.ok(result.includes('<textarea>в поле</textarea>'));
  assert.equal(russianHtml(result), result);
  assert.equal(
    russianHtml(source.replace('lang="ru"', 'lang="en"')),
    source.replace('lang="ru"', 'lang="en"')
  );
});
