import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { bindRussianShortWords } from '../src/lib/russian-typography.mjs';

const excluded = new Set(['head', 'script', 'style', 'pre', 'code', 'textarea', 'svg', 'math']);

export function russianHtml(html) {
  const document = parse(html, { sourceCodeLocationInfo: true });
  const root = document.childNodes.find((node) => node.tagName === 'html');
  if (root?.attrs.find((attr) => attr.name === 'lang')?.value !== 'ru') return html;
  const edits = [];
  function visit(node) {
    if (excluded.has(node.tagName)) return;
    if (
      node.attrs?.some(
        (attr) =>
          (attr.name === 'lang' && attr.value !== 'ru') ||
          attr.name === 'contenteditable' ||
          attr.name === 'data-no-typography'
      )
    )
      return;
    if (node.nodeName === '#text' && node.sourceCodeLocation) {
      const { startOffset, endOffset } = node.sourceCodeLocation;
      const original = html.slice(startOffset, endOffset);
      const value = bindRussianShortWords(original);
      if (value !== original) edits.push({ startOffset, endOffset, value });
    }
    for (const child of node.childNodes || []) visit(child);
    if (node.content) visit(node.content);
  }
  visit(root);
  for (const edit of edits.sort((a, b) => b.startOffset - a.startOffset)) {
    html = html.slice(0, edit.startOffset) + edit.value + html.slice(edit.endOffset);
  }
  return html;
}

export default function russianTypography() {
  return {
    name: 'seha-russian-typography',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        async function walk(folder) {
          for (const entry of await readdir(folder, { withFileTypes: true })) {
            const path = join(folder, entry.name);
            if (entry.isDirectory()) await walk(path);
            else if (entry.name.endsWith('.html')) {
              const source = await readFile(path, 'utf8');
              const formatted = russianHtml(source);
              if (formatted !== source) await writeFile(path, formatted);
            }
          }
        }
        await walk(fileURLToPath(dir));
      }
    }
  };
}
