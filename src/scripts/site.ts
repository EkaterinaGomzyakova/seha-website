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
  const update = () => {
    previous.disabled = industryTrack.scrollLeft <= 2;
    next.disabled =
      industryTrack.scrollLeft >= industryTrack.scrollWidth - industryTrack.clientWidth - 2;
  };
  const scroll = (direction: number) => {
    const card = industryTrack.querySelector<HTMLElement>('.industry-card');
    const gap = parseFloat(getComputedStyle(industryTrack).columnGap) || 16;
    industryTrack.scrollBy({
      left: direction * ((card?.getBoundingClientRect().width ?? industryTrack.clientWidth) + gap),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  };
  previous.addEventListener('click', () => scroll(-1));
  next.addEventListener('click', () => scroll(1));
  industryTrack.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(industryTrack);
  update();
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
