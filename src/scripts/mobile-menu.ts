/** Light-DOM enhancement of server-rendered navigation. */
export class MobileMenu extends HTMLElement {
  private controller?: AbortController;
  private panel?: HTMLElement;
  private trigger?: HTMLButtonElement;
  private background = new Map<HTMLElement, boolean>();

  connectedCallback() {
    this.controller?.abort();
    this.controller = new AbortController();
    const signal = this.controller.signal;
    this.panel = this.querySelector<HTMLElement>('[role="dialog"]') ?? undefined;
    this.trigger =
      (document.getElementById(this.getAttribute('trigger') || '') as HTMLButtonElement | null) ??
      undefined;
    if (!this.panel || !this.trigger) return;
    this.trigger.addEventListener('click', () => this.setOpen(Boolean(this.panel!.hidden)), {
      signal
    });
    this.querySelector('.mobile-nav-close')?.addEventListener('click', () => this.setOpen(false), {
      signal
    });
    this.panel
      .querySelectorAll('a')
      .forEach((link) =>
        link.addEventListener('click', () => this.setOpen(false, false), { signal })
      );
    document.addEventListener(
      'keydown',
      (event) => {
        if (this.panel?.hidden) return;
        if (event.key === 'Escape') {
          event.preventDefault();
          this.setOpen(false);
        }
        if (event.key === 'Tab') {
          const items = this.focusable();
          const first = items[0];
          const last = items.at(-1);
          if (!first || !last) return;
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      },
      { signal }
    );
    document.addEventListener(
      'focusin',
      (event) => {
        if (
          !this.panel?.hidden &&
          event.target instanceof Node &&
          !this.panel?.contains(event.target)
        )
          this.focusable()[0]?.focus();
      },
      { signal }
    );
    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth > 1024) this.setOpen(false, false);
      },
      { signal }
    );
  }

  disconnectedCallback() {
    this.setOpen(false, false);
    this.controller?.abort();
  }

  private focusable() {
    return Array.from(
      this.panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex="0"]'
      ) ?? []
    ).filter((item) => item.getClientRects().length > 0);
  }

  private setOpen(open: boolean, restoreFocus = true) {
    if (!this.panel || !this.trigger) return;
    const wasOpen = !this.panel.hidden;
    this.panel.hidden = !open;
    this.trigger.setAttribute('aria-expanded', String(open));
    this.trigger.setAttribute(
      'aria-label',
      (open ? this.trigger.dataset.closeLabel : this.trigger.dataset.openLabel) || ''
    );
    const icon = this.trigger.querySelector<HTMLImageElement>('[data-menu-icon]');
    if (icon) icon.src = (open ? icon.dataset.openSrc : icon.dataset.closedSrc) || icon.src;
    document.documentElement.classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open', open);
    if (open && !wasOpen) {
      let branch: HTMLElement = this.panel;
      while (branch.parentElement) {
        const parent: HTMLElement = branch.parentElement;
        for (const sibling of Array.from(parent.children)) {
          if (
            sibling instanceof HTMLElement &&
            sibling !== branch &&
            !['SCRIPT', 'STYLE'].includes(sibling.tagName)
          ) {
            this.background.set(sibling, sibling.inert);
            sibling.inert = true;
          }
        }
        if (parent === document.body) break;
        branch = parent;
      }
      this.focusable()[0]?.focus();
    } else if (!open) {
      for (const [element, inert] of this.background) element.inert = inert;
      this.background.clear();
      if (wasOpen && restoreFocus) this.trigger.focus();
    }
  }
}
if (!customElements.get('seha-mobile-menu')) customElements.define('seha-mobile-menu', MobileMenu);
