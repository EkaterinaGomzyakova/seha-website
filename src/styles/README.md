# CSS ownership

`index.css` is the only entry point. Its cascade order is:

`reset → tokens → base → layout → components → pages → utilities`

- `reset.css`: browser normalization only.
- `tokens.css`: canonical `--color-*`, Inter font, grid and responsive type tokens. No parallel brand token system.
- `base.css`: element defaults, selection and shared keyboard focus.
- `layout.css`: site container geometry.
- `components/`: reusable UI, including editorial sections and heroes shared across routes. Forms own input, checkbox, tag and validation rules; footer owns footer composition. Responsive and contrast rules stay with their owner.
- `pages/`: route-specific styling. Home, about, production, quality, products, product detail, privacy and not-found each have a file.
- `typography.css` and `utilities.css`: explicit type classes, visibility helpers and shared motion. Type classes intentionally override page/component type sizes without specificity escalation.

Keep responsive rules with their owner and preserve meaningful authored order. Avoid late correction files and duplicate declarations in the same selector/media context. Only reduced-motion animation/transition suppression uses `!important`, so it can suppress any component or page animation.

The mobile menu uses the existing `.mobile-nav` selectors, is bounded by `100dvh` (`100vh` fallback), and scrolls internally. Script owns `hidden`, `inert`, focus management and the `menu-open` state. CSS works with static Astro markup.
