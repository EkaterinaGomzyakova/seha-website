export function initLanguageSwitcher() {
  const control = document.querySelector<HTMLElement>('.language-control');
  const trigger = control?.querySelector<HTMLButtonElement>('[data-language-toggle]');
  const options = control?.querySelector<HTMLDivElement>('.language-menu');
  if (!control || !trigger || !options) return;
  const setOpen = (open: boolean) => {
    options.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  };
  trigger.addEventListener('click', () => setOpen(Boolean(options.hidden)));
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !control.contains(event.target)) setOpen(false);
  });
  control.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !options.hidden) {
      setOpen(false);
      trigger.focus();
    }
    if (event.key === 'ArrowDown' && event.target === trigger) {
      event.preventDefault();
      setOpen(true);
      options.querySelector<HTMLElement>('a')?.focus();
    }
  });
  control.addEventListener('focusout', (event) => {
    if (
      event instanceof FocusEvent &&
      (!(event.relatedTarget instanceof Node) || !control.contains(event.relatedTarget))
    )
      setOpen(false);
  });
}
