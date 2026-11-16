import { analyticsChoice, chooseAnalytics } from './analytics-consent';
export class CookieBanner extends HTMLElement {
  private controller?: AbortController;
  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    this.hidden = Boolean(analyticsChoice());
    this.setAttribute('role', 'region');
    const options = { signal: this.controller.signal };
    document.querySelectorAll('[data-analytics-settings]').forEach((button) =>
      button.addEventListener(
        'click',
        () => {
          this.hidden = false;
          this.querySelector<HTMLButtonElement>('[data-cookie-action]')?.focus();
        },
        options
      )
    );
    window.addEventListener(
      'seha:analytics-choice',
      () => {
        this.hidden = Boolean(analyticsChoice());
      },
      options
    );
    this.querySelectorAll<HTMLButtonElement>(
      '[data-cookie-action], [data-cookie-reject], .cookie-close'
    ).forEach((button) =>
      button.addEventListener(
        'click',
        async () => {
          const accepted = button.hasAttribute('data-cookie-action');
          const controls = this.querySelectorAll<HTMLButtonElement>('button');
          controls.forEach((control) => {
            control.disabled = true;
          });
          const error = this.querySelector<HTMLElement>('[data-cookie-error]');
          if (error) error.hidden = true;
          try {
            await chooseAnalytics(accepted ? 'accepted' : 'rejected');
            if (accepted) this.hidden = true;
          } catch {
            if (accepted && error) error.hidden = false;
          } finally {
            controls.forEach((control) => {
              control.disabled = false;
            });
          }
        },
        { signal: this.controller!.signal }
      )
    );
  }
  disconnectedCallback() {
    this.controller?.abort();
  }
}
if (!customElements.get('seha-cookie-banner'))
  customElements.define('seha-cookie-banner', CookieBanner);
