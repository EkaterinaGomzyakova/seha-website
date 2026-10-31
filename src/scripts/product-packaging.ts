const selectors = new WeakMap<HTMLElement, () => void>();

/** Each instance owns its format and remembers the chosen size within each format. */
export function initProductPackaging(root: ParentNode = document): void {
  for (const selector of root.querySelectorAll<HTMLElement>('[data-packaging-selector]')) {
    const existing = selectors.get(selector);
    if (existing) {
      existing();
      continue;
    }
    const modes = [...selector.querySelectorAll<HTMLInputElement>('[data-supply-format]')];
    const sizes = [...selector.querySelectorAll<HTMLInputElement>('[data-product-packaging]')];
    const panels = [...selector.querySelectorAll<HTMLElement>('[data-packaging-panel]')];
    const remembered = new Map<string, string>();
    const update = () => {
      const format = modes.find((input) => input.checked)?.value;
      const options = sizes.filter((input) => input.dataset.supplyFormatValue === format);
      for (const panel of panels) panel.hidden = panel.dataset.packagingPanel !== format;
      for (const input of sizes) input.disabled = input.dataset.supplyFormatValue !== format;
      const chosen =
        options.find((input) => input.checked) ||
        options.find((input) => input.value === remembered.get(format || '')) ||
        options[0];
      if (chosen) {
        chosen.checked = true;
        remembered.set(format || '', chosen.value);
      }
    };
    const reflectSelection = () => {
      const selected = sizes.find((input) => input.checked);
      const mode = modes.find((input) => input.value === selected?.dataset.supplyFormatValue);
      if (mode) mode.checked = true;
      update();
    };
    selector.addEventListener('change', (event) => {
      if (
        event.target instanceof HTMLInputElement &&
        event.target.matches('[data-product-packaging]')
      ) {
        remembered.set(event.target.dataset.supplyFormatValue || '', event.target.value);
      }
      update();
    });
    selectors.set(selector, reflectSelection);
    reflectSelection();
  }
}
