const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  const phone = quoteForm.elements.phone;
  const phoneError = document.getElementById('phone-error');
  const result = document.getElementById('quote-result');
  const copyButton = document.getElementById('copy-quote');
  let preparedQuote = '';
  quoteForm.noValidate = true;
  function validatePhone(showError = false) {
    const count = phone.value.replace(/\D/g, '').length;
    const valid = count >= 7 && count <= 15;
    phone.setCustomValidity(valid ? '' : 'Укажите телефон: от 7 до 15 цифр.');
    if (showError || valid) phoneError.hidden = valid;
    return valid;
  }
  phone.addEventListener('input', () => validatePhone(false));
  quoteForm.addEventListener('input', () => { if (result) result.hidden = true; });
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    validatePhone(true);
    ['company', 'contact'].forEach(name => {
      const input = quoteForm.elements[name];
      input.setCustomValidity(input.value.trim() ? '' : 'Заполните это поле.');
    });
    if (!quoteForm.reportValidity()) return;
    const fields = new FormData(quoteForm);
    const value = name => String(fields.get(name) || '').trim();
    preparedQuote = [
      'Здравствуйте! Прошу подготовить коммерческое предложение.', '',
      `Компания: ${value('company')}`, `Контактное лицо: ${value('contact')}`,
      `Телефон: ${value('phone')}`, `Email: ${value('email') || 'Не указан'}`, '',
      `Тип бизнеса: ${value('business') || 'Не указан'}`,
      `Комментарий: ${value('comment') || 'Нет'}`, '',
      'Согласен на обработку указанных данных для подготовки предложения и обратной связи.'
    ].join('\n');
    if (copyButton) copyButton.textContent = 'Скопировать заявку';
    const fallback = document.getElementById('quote-copy-fallback');
    if (fallback) fallback.hidden = true;
    if (result) result.hidden = false;
    window.location.href = `mailto:seha.info@inbox.ru?subject=${encodeURIComponent('Расчет поставки — ' + value('company'))}&body=${encodeURIComponent(preparedQuote)}`;
    result?.focus({ preventScroll: true });
  });
  ['company', 'contact'].forEach(name => quoteForm.elements[name].addEventListener('input', () => quoteForm.elements[name].setCustomValidity('')));
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(preparedQuote);
      copyButton.textContent = 'Заявка скопирована';
    } catch {
      const fallback = document.getElementById('quote-copy-fallback');
      fallback.value = preparedQuote;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      copyButton.textContent = 'Выделите и скопируйте текст ниже';
    }
  });
}

const industryTrack = document.querySelector('.industry-track');
const industryPrev = document.querySelector('[data-industry-prev]');
const industryNext = document.querySelector('[data-industry-next]');
if (industryTrack && industryPrev && industryNext) {
  function updateIndustryArrows() {
    const maxScroll = industryTrack.scrollWidth - industryTrack.clientWidth - 2;
    industryPrev.disabled = industryTrack.scrollLeft <= 2;
    industryNext.disabled = industryTrack.scrollLeft >= maxScroll;
  }
  function scrollIndustries(direction) {
    const card = industryTrack.querySelector('.industry-card');
    const gap = parseFloat(getComputedStyle(industryTrack).columnGap) || 16;
    const step = card ? card.getBoundingClientRect().width + gap : industryTrack.clientWidth * .8;
    industryTrack.scrollBy({ left: direction * step, behavior: 'smooth' });
  }
  industryPrev.addEventListener('click', () => scrollIndustries(-1));
  industryNext.addEventListener('click', () => scrollIndustries(1));
  industryTrack.addEventListener('scroll', updateIndustryArrows, { passive: true });
  window.addEventListener('resize', updateIndustryArrows);
  updateIndustryArrows();
}

// Shared navigation.
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu(){ if(!menuToggle) return; menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Открыть меню'); mobileNav.hidden=true; }
menuToggle?.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));menuToggle.setAttribute('aria-label',open?'Открыть меню':'Закрыть меню');mobileNav.hidden=open;});
mobileNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && mobileNav && !mobileNav.hidden){closeMenu();menuToggle.focus();}});
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
 const items=document.querySelectorAll('.reveal');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
 items.forEach(item=>observer.observe(item));
 document.documentElement.classList.add('motion-ready');
}
