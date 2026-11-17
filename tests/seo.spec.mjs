import { test, expect } from '@playwright/test';
import { parse } from 'parse5';

function elements(root, tag) {
  const result = [];
  function visit(node) {
    if (node.tagName === tag) result.push(node);
    for (const child of node.childNodes ?? []) visit(child);
  }
  visit(root);
  return result;
}
const attribute = (node, name) => node.attrs?.find((entry) => entry.name === name)?.value;
const text = (node) => node.value ?? (node.childNodes ?? []).map(text).join('');

test('all sitemap pages contain unique metadata and linked schema in prerendered HTML', async ({
  request
}, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'HTML metadata is independent of viewport.');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  expect(urls.length).toBeGreaterThan(60);
  const titles = new Set();
  const descriptions = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = parse(await response.text());
    const titleNodes = elements(html, 'title');
    expect(titleNodes, path).toHaveLength(1);
    const title = text(titleNodes[0]).trim();
    expect(title.length, path).toBeGreaterThan(15);
    expect(titles.has(title), `Duplicate title: ${path}`).toBeFalsy();
    titles.add(title);
    const meta = elements(html, 'meta');
    const descriptionNodes = meta.filter((node) => attribute(node, 'name') === 'description');
    expect(descriptionNodes, path).toHaveLength(1);
    const description = attribute(descriptionNodes[0], 'content');
    expect(description.length, path).toBeGreaterThan(60);
    expect(descriptions.has(description), `Duplicate description: ${path}`).toBeFalsy();
    descriptions.add(description);
    expect(
      meta.some((node) => attribute(node, 'name') === 'keywords'),
      path
    ).toBeFalsy();
    expect(
      attribute(
        meta.find((node) => attribute(node, 'property') === 'og:title'),
        'content'
      ),
      path
    ).toBe(title);
    const links = elements(html, 'link');
    expect(
      attribute(
        links.find((node) => attribute(node, 'rel') === 'canonical'),
        'href'
      ),
      path
    ).toBe(url);
    expect(
      links.filter((node) => attribute(node, 'hreflang') && attribute(node, 'rel') === 'alternate'),
      path
    ).toHaveLength(3);
    const h1 = elements(html, 'h1');
    expect(h1, path).toHaveLength(1);
    expect(text(h1[0]).trim().length, path).toBeGreaterThan(0);
    const schema = elements(html, 'script').find(
      (node) => attribute(node, 'type') === 'application/ld+json'
    );
    expect(schema, path).toBeTruthy();
    const graph = JSON.parse(text(schema))['@graph'];
    const organization = graph.find((entry) => entry['@id'].endsWith('#organization'));
    expect(organization.legalName, path).toBe('ООО «СЕХА»');
    expect(organization.taxID, path).toBe('9725204216');
    expect(organization.address.addressCountry, path).toBe('RU');
    expect(organization.identifier, path).toContainEqual({
      '@type': 'PropertyValue',
      propertyID: 'OGRN',
      value: '1267700116903'
    });
    expect(organization.sameAs, path).toContain('https://vk.ru/seha.group');
    expect(organization.logo.width, path).toBe(512);
    expect(organization.logo.height, path).toBe(512);
    const manufacturer = graph.find((entry) => entry['@id'].endsWith('#manufacturer'));
    expect(manufacturer.address.addressCountry, path).toBe('IN');
    expect(manufacturer.taxID, path).toBeUndefined();
    expect(manufacturer.identifier, path).toBeUndefined();
    const webpage = graph.find((entry) => entry['@id'] === `${url}#webpage`);
    expect(webpage.name, path).toBe(title);
    expect(webpage.description, path).toBe(description);
    if (!/^\/(ru|en)\/$/.test(path)) {
      const breadcrumbs = graph.find((entry) => entry['@type'] === 'BreadcrumbList');
      expect(breadcrumbs.itemListElement.at(-1).item, path).toBe(url);
    }
    if (/\/products\/[^/]+\/[^/]+\/$/.test(path)) {
      const product = graph.find((entry) => entry['@type'] === 'Product');
      expect(product.productID, path).toBeTruthy();
      const specifications = elements(html, 'section').find(
        (node) => attribute(node, 'aria-labelledby') === 'specifications-title'
      );
      const labels = elements(specifications, 'dt');
      const values = elements(specifications, 'dd');
      const normalize = (value) => value.replace(/\s+/g, ' ').trim();
      expect(product.additionalProperty, path).toHaveLength(labels.length);
      expect(product.additionalProperty.length, path).toBeGreaterThan(0);
      product.additionalProperty.forEach((property, index) => {
        expect(property['@type'], path).toBe('PropertyValue');
        expect(normalize(property.name), path).toBe(normalize(text(labels[index])));
        expect(normalize(property.value), path).toBe(normalize(text(values[index])));
        expect(property.value, path).not.toMatch(/уточнить|to be confirmed/i);
      });
      expect(product.image.length, path).toBeGreaterThan(0);
      expect(product.brand.name, path).toBeTruthy();
      expect(product.manufacturer['@id'], path).toBe(manufacturer['@id']);
      expect(product.offers, path).toBeUndefined();
      expect(product.aggregateRating, path).toBeUndefined();
      expect(webpage.mainEntity['@id'], path).toBe(product['@id']);
      expect(
        graph.find((entry) => entry['@type'] === 'BreadcrumbList').itemListElement,
        path
      ).toHaveLength(4);
    }
  }
});
