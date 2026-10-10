import { readPreference, savePreference } from './storage';
export class CookieBanner extends HTMLElement {
  private controller?: AbortController;
  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    this.hidden = Boolean(readPreference('seha-cookie-consent'));
    this.setAttribute('role', 'region');
    this.querySelectorAll<HTMLButtonElement>('button').forEach((button) =>
      button.addEventListener(
        'click',
        () => {
          savePreference('seha-cookie-consent', 'dismissed');
          this.hidden = true;
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
