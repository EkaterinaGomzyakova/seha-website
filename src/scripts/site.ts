import './analytics';
import './mobile-menu';
import './cookie-banner';
import './russian-typography';
import { initLanguageSwitcher } from './language-switcher';
import { initContactForm } from './contact-form';

initLanguageSwitcher();
initContactForm();

const industryTrack = document.querySelector<HTMLElement>('.industry-track');
const industryRail = industryTrack?.querySelector<HTMLElement>('.industry-rail');
const previous = document.querySelector<HTMLButtonElement>('[data-industry-prev]');
const next = document.querySelector<HTMLButtonElement>('[data-industry-next]');
if (industryTrack && industryRail && previous && next) {
  const cards = [...industryTrack.querySelectorAll<HTMLElement>('.industry-card')];
  let first = 0;
  let visible = 1;
  let stride = 0;
  let width = -1;
  let drag: { pointer: number; x: number; y: number; offset: number } | undefined;

  const last = () => Math.max(0, cards.length - visible);
  const move = (offset: number) => {
    industryTrack.style.setProperty('--industry-offset', `${offset}px`);
  };
  const show = (index: number, animate = true) => {
    industryTrack.toggleAttribute('data-industry-slide', animate);
    first = Math.max(0, Math.min(index, last()));
    move(-first * stride);
    cards.forEach((card, position) => {
      card.inert = position < first || position >= first + visible;
    });
    previous.disabled = first === 0;
    next.disabled = first === last();
  };
  const resize = () => {
    const trackWidth = industryTrack.getBoundingClientRect().width;
    if (trackWidth === width) return;
    width = trackWidth;
    const gap = parseFloat(getComputedStyle(industryRail).columnGap);
    visible = Math.max(1, Math.min(3, Math.floor((width + gap) / (250 + gap))));
    stride = (width + gap) / visible;
    industryTrack.style.setProperty('--industry-columns', String(visible));
    industryTrack.dataset.carouselReady = '';
    drag = undefined;
    industryTrack.removeAttribute('data-industry-dragging');
    show(first, false);
  };
  previous.addEventListener('click', () => show(first - 1));
  next.addEventListener('click', () => show(first + 1));
  industryTrack.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(first + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  industryTrack.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0 || last() === 0) return;
    if (event.pointerType === 'mouse') event.preventDefault();
    const offset = new DOMMatrixReadOnly(getComputedStyle(industryRail).transform).m41;
    drag = { pointer: event.pointerId, x: event.clientX, y: event.clientY, offset };
    industryTrack.setPointerCapture(event.pointerId);
  });
  industryTrack.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.pointer) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!industryTrack.hasAttribute('data-industry-dragging')) {
      if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;
      industryTrack.setAttribute('data-industry-dragging', '');
      industryTrack.removeAttribute('data-industry-slide');
    }
    move(Math.max(-last() * stride, Math.min(0, drag.offset + dx)));
  });
  const endDrag = (event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.pointer) return;
    const dx = event.clientX - drag.x;
    drag = undefined;
    const moved = industryTrack.hasAttribute('data-industry-dragging');
    industryTrack.removeAttribute('data-industry-dragging');
    if (!moved) return;
    const advance = event.type === 'pointerup' && Math.abs(dx) >= Math.min(65, stride * 0.2);
    show(first + (advance ? -Math.sign(dx) : 0));
  };
  industryTrack.addEventListener('pointerup', endDrag);
  industryTrack.addEventListener('pointercancel', endDrag);
  industryTrack.addEventListener('lostpointercapture', endDrag);
  new ResizeObserver(resize).observe(industryTrack);
  resize();
}
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  document.documentElement.classList.add('motion-ready');
}
