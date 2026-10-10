import { getInterfaceCopy } from '../data/interface-copy';
import { siteContact } from '../data/site';

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('#quote-form');
  if (!form) return;
  const copy = getInterfaceCopy(form.dataset.locale === 'en' ? 'en' : 'ru');
  const field = (name: string) =>
    form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
  const phone = field('phone');
  const phoneError = form.querySelector<HTMLElement>('#phone-error')!;
  const result = form.querySelector<HTMLElement>('#quote-result')!;
  const title = result.querySelector<HTMLElement>('[data-result-title]')!;
  const message = result.querySelector<HTMLElement>('[data-result-message]')!;
  const actions = result.querySelector<HTMLElement>('[data-result-actions]')!;
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const copyButton = form.querySelector<HTMLButtonElement>('#copy-quote')!;
  const fallback = form.querySelector<HTMLTextAreaElement>('#quote-copy-fallback')!;
  const emailLink = form.querySelector<HTMLAnchorElement>('[data-email-quote]')!;
  let preparedQuote = '';
  let pending = false;
  form.noValidate = true;

  const validatePhone = () => {
    const digits = phone.value.replace(/\D/g, '').length;
    const valid = digits >= 7 && digits <= 15;
    phone.setCustomValidity(valid ? '' : copy.phoneError);
    phone.setAttribute('aria-invalid', String(!valid));
    phoneError.hidden = valid;
  };
  const show = (state: string, heading: string, text: string, showActions = false) => {
    result.dataset.state = state;
    title.textContent = heading;
    message.textContent = text;
    actions.hidden = !showActions;
    fallback.hidden = true;
    copyButton.textContent = copy.copy;
    result.hidden = false;
    result.focus({ preventScroll: true });
  };
  form.addEventListener('input', (event) => {
    if (event.target instanceof HTMLInputElement) {
      event.target.setCustomValidity('');
      event.target.removeAttribute('aria-invalid');
    }
    if (!pending) result.hidden = true;
  });
  phone.addEventListener('blur', validatePhone);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending) return;
    validatePhone();
    for (const name of ['company', 'contact'])
      field(name).setCustomValidity(field(name).value.trim() ? '' : copy.requiredError);
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const value = (name: string) => String(fields.get(name) || '').trim();
    const businessLabel = form
      .querySelector<HTMLInputElement>('[name="business"]:checked')
      ?.closest('label')
      ?.textContent?.trim();
    preparedQuote = [
      copy.mailIntro,
      '',
      `${copy.company}: ${value('company')}`,
      `${copy.contact}: ${value('contact')}`,
      `${copy.phone}: ${value('phone')}`,
      `${copy.email}: ${value('email') || copy.unspecified}`,
      `${copy.product}: ${value('product') || copy.unspecified}`,
      `${copy.business}: ${businessLabel || copy.unspecified}`,
      `${copy.message}: ${value('comment') || copy.none}`,
      '',
      copy.mailConsent
    ].join('\n');
    const mailto = `mailto:${siteContact.email}?subject=${encodeURIComponent(`${copy.mailSubject} — ${value('company')}`)}&body=${encodeURIComponent(preparedQuote)}`;
    emailLink.href = mailto;
    const endpoint = form.dataset.formEndpoint;
    if (!endpoint) {
      show('draft', copy.draftTitle, `${copy.draftText} ${siteContact.email}.`, true);
      return;
    }
    pending = true;
    submit.disabled = true;
    submit.textContent = copy.sending;
    form.setAttribute('aria-busy', 'true');
    result.hidden = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fields,
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json();
        if (data.success === false || data.error)
          throw new Error('Form endpoint rejected the inquiry');
      }
      show('success', copy.successTitle, copy.successText);
      form.reset();
    } catch {
      show('error', copy.errorTitle, copy.errorText, true);
    } finally {
      window.clearTimeout(timeout);
      pending = false;
      submit.disabled = false;
      submit.textContent = copy.submit;
      form.removeAttribute('aria-busy');
    }
  });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preparedQuote);
      copyButton.textContent = copy.copied;
    } catch {
      fallback.value = preparedQuote;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      copyButton.textContent = copy.copyFallback;
    }
  });
  document.querySelectorAll<HTMLAnchorElement>('[data-quote-product]').forEach((link) =>
    link.addEventListener('click', () => {
      field('product').value = link.dataset.quoteProduct || '';
      field('productId').value = link.dataset.productId || '';
      const comment = field('comment');
      const line = `${copy.product}: ${field('product').value}`;
      const existing = comment.value
        .split('\n')
        .filter((text) => !text.startsWith(`${copy.product}: `));
      comment.value = [line, ...existing].filter(Boolean).join('\n');
      result.hidden = true;
    })
  );
}
