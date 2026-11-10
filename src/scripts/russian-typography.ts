import { bindRussianShortWords } from '../lib/russian-typography.mjs';

if (document.documentElement.lang === 'ru') {
  const excluded =
    'script, style, pre, code, textarea, svg, math, [contenteditable], [lang="en"], [data-no-typography]';
  const format = (root: Node) => {
    if (root instanceof Element && root.closest(excluded)) return;
    const apply = (node: Node) => {
      if (node.parentElement?.closest(excluded)) return;
      const before = node.nodeValue || '';
      const after = bindRussianShortWords(before);
      if (before !== after) node.nodeValue = after;
    };
    if (root.nodeType === Node.TEXT_NODE) apply(root);
    else {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) apply(walker.currentNode);
    }
  };
  format(document.body);
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === 'characterData') format(record.target);
      else record.addedNodes.forEach(format);
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
}
