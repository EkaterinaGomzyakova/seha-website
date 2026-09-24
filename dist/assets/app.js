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

// Shared RU/EN switch for the site shell and the privacy policy.
const languageDictionary = {
  ru: {
    navProducts:'Продукты', navProduction:'Производство', navQuality:'Качество', navAbout:'О компании', navHome:'Главная', offer:'Получить предложение',
    quoteTitle:'Получите<br>расчёт<br>поставки', company:'Название компании', contact:'Имя контактного лица', email:'Контактный email', phone:'Номер телефона', message:'Сообщение',
    companyPlaceholder:'ООО Агрокомплекс', contactPlaceholder:'Иван', messagePlaceholder:'Расскажите, какой продукт вам нужен, о ваших требованиях, количестве и сроках', business:'Тип компании',
    distributor:'Дистрибьютор', retailer:'Ритейлер', manufacturer:'Производитель', hydro:'Гидропонная ферма', garden:'Садоводческая компания', foodBrand:'Бренд продуктов питания', other:'Другое', consent:'Я ознакомлен(а) с', privacy:'Политикой конфиденциальности', consentEnd:'и даю согласие на обработку персональных данных', submit:'Получить расчёт', contacts:'КОНТАКТЫ', legal:'Юридический адрес', phoneLabel:'ТЕЛЕФОН', emailLabel:'ПОЧТА', footerBrand:'НАТУРАЛЬНЫЕ ПРОДУКТЫ<br>ИЗ КОКОСА'
  },
  en: {
    navProducts:'Products', navProduction:'Production', navQuality:'Quality', navAbout:'About us', navHome:'Home', offer:'Get a quote',
    quoteTitle:'Get a<br>supply<br>quote', company:'Company name', contact:'Contact person', email:'Contact email', phone:'Phone number', message:'Message',
    companyPlaceholder:'Agrocompany LLC', contactPlaceholder:'John', messagePlaceholder:'Tell us which product you need, your requirements, quantity and timeframe', business:'Company type',
    distributor:'Distributor', retailer:'Retailer', manufacturer:'Manufacturer', hydro:'Hydroponic farm', garden:'Horticultural company', foodBrand:'Food brand', other:'Other', consent:'I have read the', privacy:'Privacy Policy', consentEnd:'and consent to the processing of my personal data', submit:'Get a quote', contacts:'CONTACTS', legal:'LEGAL ADDRESS', phoneLabel:'PHONE', emailLabel:'EMAIL', footerBrand:'NATURAL COCONUT<br>PRODUCTS'
  },
  privacy: {
    title:'Privacy Policy', intro:'This Privacy Policy defines how personal data of users of the seha-group.ru website (the “website”) is processed and protected.', active:'Effective', since:'since 2026', dataTitle:'What data we collect', dataLead:'When using the website, we may process the following data:', data1:'• company name;', data2:'• contact person’s name;', data3:'• email address;', data4:'• phone number;', data5:'• message or request content;', data6:'• information about activity on the website;', data7:'• IP address and browser data;', data8:'• cookies and other technical data.', goalTitle:'Purposes of processing personal data', goalText:'We use the information to respond to requests, prepare commercial offers, operate the website and improve the quality of our service.', legalTitle:'Legal grounds', legalText:'Data is processed with the user’s consent, when it is necessary to respond to a request, and to comply with the laws of the Russian Federation.', storageTitle:'Storage and protection', storageText:'We take the necessary organisational and technical measures to protect data from unauthorised access, alteration, disclosure or destruction.', rightsTitle:'User rights', rightsText:'The user may request information about the processing of their data, correct it, withdraw consent or contact us at <a href="mailto:seha.info@inbox.ru">seha.info@inbox.ru</a>.', cookiesTitle:'Cookies', cookiesText:'The website may use technical cookies required for the correct operation of pages and anonymised visitor analytics. Cookie settings can be changed in the browser.'
  }
};

function setLabelText(element, text){
  if(!element) return;
  const node = Array.from(element.childNodes).find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim());
  if(node) node.textContent = `${text}`;
}
function translatePrivacy(lang){
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n?.replace('privacy.','');
    if(key && languageDictionary.privacy[key]) element.innerHTML = languageDictionary.privacy[key];
  });
  const privacyBreadcrumb = document.querySelector('.breadcrumbs [aria-current="page"]');
  if(privacyBreadcrumb) privacyBreadcrumb.textContent = lang === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности';
}
function translateShell(lang){
  const t = languageDictionary[lang];
  const nav = { '/products':t.navProducts, '/production':t.navProduction, '/quality':t.navQuality, '/about':t.navAbout };
  document.querySelectorAll('.site-nav a').forEach(link => { if(nav[link.getAttribute('href')]) link.textContent = nav[link.getAttribute('href')]; });
  const mobileLabels = { '/':t.navHome, '/products':t.navProducts, '/production':t.navProduction, '/quality':t.navQuality, '/about':t.navAbout };
  document.querySelectorAll('.mobile-nav a').forEach(link => { const key=link.getAttribute('href').replace(/#.*$/,''); if(mobileLabels[key]) setLabelText(link,mobileLabels[key]); else setLabelText(link,t.offer); });
  document.querySelectorAll('.header-contact').forEach(link => { const arrow=link.querySelector('span'); link.firstChild.textContent=`${t.offer} `; if(arrow) link.append(arrow); });
  document.querySelectorAll('[data-language-code]').forEach(code => code.textContent=lang.toUpperCase());
  document.querySelectorAll('.quote-main h2').forEach(element => element.innerHTML=t.quoteTitle);
  document.querySelectorAll('.quote-main .form-field').forEach(label => {
    if(label.classList.contains('comment-field')) setLabelText(label,t.message);
    else if(label.querySelector('[name="company"]')) setLabelText(label,t.company);
    else if(label.querySelector('[name="contact"]')) setLabelText(label,t.contact);
    else if(label.querySelector('[name="email"]')) setLabelText(label,t.email);
    else if(label.querySelector('[name="phone"]')) setLabelText(label,t.phone);
  });
  const placeholder={company:t.companyPlaceholder,contact:t.contactPlaceholder,message:t.messagePlaceholder};
  Object.entries(placeholder).forEach(([name,value])=>{document.querySelectorAll(`[name="${name}"]`).forEach(input=>input.placeholder=value)});
  document.querySelectorAll('.quote-footer legend').forEach(el=>el.textContent=t.business);
  const business={ 'Дистрибьютор':t.distributor,'Ритейлер':t.retailer,'Производитель':t.manufacturer,'Гидропонная ферма':t.hydro,'Садоводческая компания':t.garden,'Бренд продуктов питания':t.foodBrand,'Другое':t.other };
  document.querySelectorAll('.business-choices label span').forEach(el=>{const key=el.textContent.trim(); if(business[key]) el.textContent=business[key];});
  document.querySelectorAll('.consent').forEach(label=>{const link=label.querySelector('a'); const textNodes=Array.from(label.childNodes).filter(node=>node.nodeType===Node.TEXT_NODE); if(textNodes[0]) textNodes[0].textContent=`${t.consent} `; if(link) link.textContent=t.privacy; if(textNodes[1]) textNodes[1].textContent=` ${t.consentEnd}`;});
  document.querySelectorAll('.quote-submit').forEach(el=>el.textContent=t.submit);
  document.querySelectorAll('.quote-kicker').forEach(el=>el.textContent=t.contacts);
  document.querySelectorAll('.contact-item.address strong').forEach(el=>el.textContent=t.legal);
  document.querySelectorAll('.contact-item:not(.address)>span').forEach(el=>{el.textContent=el.textContent.trim()==='ПОЧТА'?t.emailLabel:t.phoneLabel});
  document.querySelectorAll('.quote-bottom>div>span').forEach(el=>el.innerHTML=t.footerBrand);
  document.querySelectorAll('.quote-bottom>a').forEach(el=>el.textContent=t.privacy.toUpperCase());
  if(document.body.classList.contains('privacy-page')) translatePrivacy(lang);
  document.documentElement.lang=lang;
  localStorage.setItem('seha-language',lang);
}
const languageToggle = document.querySelector('[data-language-toggle]');
const savedLanguage = localStorage.getItem('seha-language') === 'en' ? 'en' : 'ru';
translateShell(savedLanguage);
languageToggle?.addEventListener('click',()=>translateShell(document.documentElement.lang === 'en' ? 'ru' : 'en'));
