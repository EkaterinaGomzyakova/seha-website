import { initProductPackaging } from './product-packaging';
import { productInquiryCopy } from '../data/product-inquiry';

export function initProductInquiry() {
  const dialog = document.querySelector<HTMLDialogElement>('#product-inquiry');
  const form = document.querySelector<HTMLFormElement>('#product-inquiry-form');
  if (!dialog || !form) return;
  const ru = dialog.dataset.locale === 'ru';
  const copy = productInquiryCopy[ru ? 'ru' : 'en'];
  const panel = form.querySelector<HTMLElement>('[data-inquiry-packaging]')!;
  const result = form.querySelector<HTMLElement>('[data-inquiry-result]')!;
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement;
  let trigger: HTMLElement | null = null;
  let pending = false;
  let previousOverflow = '';
  const updatePackaging = () => {
    const option = panel.querySelector<HTMLInputElement>('[data-product-packaging]:checked');
    const custom = option?.value === 'industrial-custom';
    form.querySelector<HTMLElement>('[data-inquiry-custom]')!.hidden = !custom;
    field('customPackaging').disabled = !custom;
    field('customPackaging').required = false;
    const suffix =
      custom && field('customPackaging').value.trim()
        ? ` (${field('customPackaging').value.trim()})`
        : '';
    field('packaging').value = (option?.dataset.packagingLabel || '') + suffix;
  };
  panel.addEventListener('change', updatePackaging);
  document.addEventListener(
    'click',
    (event) => {
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-quote-product][data-product-id]')
          : null;
      if (!link || !link.dataset.productId) return;
      // Product inquiries use their own form; leave footer handlers and fields untouched.
      event.preventDefault();
      event.stopPropagation();
      trigger = link;
      if (!pending) {
        const productId = link.dataset.productId;
        const detailSelection = [
          ...document.querySelectorAll<HTMLInputElement>('main [data-product-packaging]:checked')
        ].find((input) => input.dataset.packagingProductId === productId);
        panel.replaceChildren();
        const template = [
          ...document.querySelectorAll<HTMLTemplateElement>('template[data-inquiry-options]')
        ].find((item) => item.dataset.inquiryOptions === productId);
        if (template) panel.append(template.content.cloneNode(true));
        if (detailSelection) {
          const selected = [
            ...panel.querySelectorAll<HTMLInputElement>('input[type="radio"]')
          ].find((input) => input.value === detailSelection.value);
          if (selected) selected.checked = true;
        }
        initProductPackaging(panel);
        field('product').value =
          panel.querySelector<HTMLInputElement>('[data-product-packaging]:checked')?.dataset
            .packagingProductName ||
          link.dataset.quoteProduct ||
          '';
        if (field('productId').value !== productId) {
          field('comment').value = '';
          field('customPackaging').value = '';
        }
        const inlineSize = [
          ...document.querySelectorAll<HTMLInputElement>('main [data-inline-custom-packaging]')
        ].find((input) => input.dataset.packagingProductId === productId);
        if (inlineSize) field('customPackaging').value = inlineSize.value;
        field('productId').value = productId;
        updatePackaging();
        result.hidden = true;
      }
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
    },
    { capture: true }
  );
  dialog.querySelector('[data-close-inquiry]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    trigger?.focus({ preventScroll: true });
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    updatePackaging();
    const endpoint = form.dataset.endpoint;
    result.hidden = false;
    if (!endpoint) {
      result.textContent = copy.unavailable;
      return;
    }
    pending = true;
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    const label = submit.textContent;
    submit.textContent = ru ? 'Отправляем…' : 'Sending…';
    result.textContent = '';
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30_000);
    try {
      const payload = Object.fromEntries(new FormData(form));
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, consent: field('consent').checked }),
        signal: controller.signal
      });
      const data = await response.json();
      if (!response.ok || data.success !== true) throw new Error('Inquiry rejected');
      result.textContent = copy.success;
      const product = field('product').value;
      const productId = field('productId').value;
      const packagingId = panel.querySelector<HTMLInputElement>(
        '[data-product-packaging]:checked'
      )?.value;
      form.reset();
      field('product').value = product;
      field('productId').value = productId;
      const option = [...panel.querySelectorAll<HTMLInputElement>('input')].find(
        (input) => input.value === packagingId
      );
      if (option) option.checked = true;
      initProductPackaging(panel);
      updatePackaging();
    } catch {
      result.textContent = copy.error;
    } finally {
      window.clearTimeout(timeout);
      pending = false;
      submit.disabled = false;
      submit.textContent = label;
      form.removeAttribute('aria-busy');
    }
  });
}
