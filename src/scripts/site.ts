import './mobile-menu';
import './cookie-banner';
import { initLanguageSwitcher } from './language-switcher';
import { initContactForm } from './contact-form';

initLanguageSwitcher();
initContactForm();

const industryTrack = document.querySelector<HTMLElement>('.industry-track');
const previous = document.querySelector<HTMLButtonElement>('[data-industry-prev]');
const next = document.querySelector<HTMLButtonElement>('[data-industry-next]');
if (industryTrack && previous && next) {
  const cards = [...industryTrack.querySelectorAll<HTMLElement>('.industry-card')];
  let first = 0;
  let visible = 1;
  let swipe: { x: number; y: number } | undefined;

  const show = (index: number) => {
    const last = Math.max(0, cards.length - visible);
    first = Math.max(0, Math.min(index, last));
    cards.forEach((card, position) => {
      card.hidden = position < first || position >= first + visible;
    });
    previous.disabled = first === 0;
    next.disabled = first === last;
  };
  const resize = () => {
    const gap = parseFloat(getComputedStyle(industryTrack).columnGap);
    visible = Math.max(1, Math.min(3, Math.floor((industryTrack.clientWidth + gap) / (250 + gap))));
    industryTrack.style.setProperty('--industry-columns', String(visible));
    industryTrack.dataset.carouselReady = '';
    show(first);
  };
  previous.addEventListener('click', () => show(first - 1));
  next.addEventListener('click', () => show(first + 1));
  industryTrack.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    show(first + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  industryTrack.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch' && event.isPrimary)
      swipe = { x: event.clientX, y: event.clientY };
  });
  industryTrack.addEventListener('pointercancel', () => {
    swipe = undefined;
  });
  industryTrack.addEventListener('pointerup', (event) => {
    if (!swipe || event.pointerType !== 'touch' || !event.isPrimary) return;
    const dx = event.clientX - swipe.x;
    const dy = event.clientY - swipe.y;
    swipe = undefined;
    if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) show(first + (dx < 0 ? 1 : -1));
  });
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
