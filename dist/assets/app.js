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
const menuIcon = menuToggle?.querySelector('[data-menu-icon]');
function setMenuIcon(open){
  if(!menuIcon) return;
  const src=menuIcon.getAttribute('src') || '';
  menuIcon.setAttribute('src',src.replace(/(?:menu|xmark)-icon\.svg$/i,open ? 'xmark-icon.svg' : 'menu-icon.svg'));
}
function closeMenu(){ if(!menuToggle) return; menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Открыть меню'); setMenuIcon(false); mobileNav.hidden=true; }
setMenuIcon(false);
menuToggle?.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));menuToggle.setAttribute('aria-label',open?'Открыть меню':'Закрыть меню');setMenuIcon(!open);mobileNav.hidden=open;});
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
    navProducts:'Продукты', navProduction:'Производство', navQuality:'Качество', navAbout:'Из кокосового волокна', navHome:'Главная', offer:'Получить предложение',
    quoteTitle:'Получите<br>расчёт<br>поставки', company:'Название компании', contact:'Имя контактного лица', email:'Контактный email', phone:'Номер телефона', message:'Сообщение',
    companyPlaceholder:'ООО Агрокомплекс', contactPlaceholder:'Иван', messagePlaceholder:'Расскажите, какой продукт вам нужен, о ваших требованиях, количестве и сроках', business:'Тип компании',
    distributor:'Дистрибьютор', retailer:'Ритейлер', manufacturer:'Производитель', hydro:'Гидропонная ферма', garden:'Садоводческая компания', foodBrand:'Бренд продуктов питания', other:'Другое', consent:'Я ознакомлен(а) с', privacy:'Политикой конфиденциальности', consentEnd:'и даю согласие на обработку персональных данных', submit:'Получить расчёт', contacts:'КОНТАКТЫ', legal:'Юридический адрес', phoneLabel:'ТЕЛЕФОН', emailLabel:'ПОЧТА', footerBrand:'НАТУРАЛЬНЫЕ ПРОДУКТЫ<br>ИЗ КОКОСА', cookieText:'Мы используем куки для улучшения работы сайта. Подробнее — в', cookieLink:'Политике конфиденциальности.', cookieAction:'ПОНЯТНО'
  },
  en: {
    navProducts:'Products', navProduction:'Manufacturing', navQuality:'Quality & Certifications', navAbout:'About us', navHome:'Home', offer:'Request a quote',
    quoteTitle:'Request<br>a Price List', company:'Company name', contact:'Contact person name', email:'Business email', phone:'Phone number', message:'Message',
    companyPlaceholder:'Your company name', contactPlaceholder:'Contact person name', messagePlaceholder:'Tell us about your requirements, products of interest, quantities, and delivery timelines', business:'Business type',
    distributor:'Distributor', retailer:'Retailer', manufacturer:'Manufacturer', hydro:'Hydroponic Farm', garden:'Horticulture Company', foodBrand:'Food Brand', other:'Other', consent:'I have read the', privacy:'Privacy Policy', consentEnd:'and consent to the processing of my personal data', submit:'Request a price list', contacts:'CONTACTS', legal:'Registered Address', phoneLabel:'PHONE', emailLabel:'EMAIL', footerBrand:'NATURAL COCONUT<br>PRODUCTS', cookieText:'We use cookies to improve your experience on our website. Learn more in our', cookieLink:'Privacy Policy.', cookieAction:'ACCEPT'
  },
  privacy: {
    title:'Privacy Policy', intro:'This Privacy Policy explains how personal data is collected, processed, stored, and protected when using the seha-group.ru website (the “Website”).', active:'Effective', since:'from 2026', generalTitle:'General Provisions', controller:'Data Controller:<br>SEHA LLC<br>1 Bratyev Vesninykh Boulevard, Office 151K<br>Moscow, 115432, Russian Federation<br>E-mail: info@seha-group.ru<br>Phone: +7 922 459-00-63', generalText:'By using the Website and submitting information through its forms, the User agrees to this Privacy Policy.', dataTitle:'Personal Data We Collect', dataLead:'We may collect and process the following information:', data1:'• company name;', data2:'• contact person name;', data3:'• email address;', data4:'• phone number;', data5:'• business type;', data6:'• inquiry details and messages;', data7:'• website activity data;', data8:'• IP address;', data9:'• browser and device information;', data10:'• cookies and technical identifiers.', goalTitle:'Purposes of Processing', goalLead:'Personal data is processed for the following purposes:', goal1:'• responding to inquiries;', goal2:'• providing quotations and price lists;', goal3:'• handling wholesale supply requests;', goal4:'• business communications;', goal5:'• contract preparation and performance;', goal6:'• improving website functionality;', goal7:'• website analytics and statistics.', legalTitle:'Legal Basis', legalLead:'Personal data is processed on the basis of:', legal1:'• the User’s consent;', legal2:'• contractual necessity;', legal3:'• compliance with applicable laws.', cookiesTitle:'Cookies and Yandex.Metrica', cookiesLead:'The Website uses cookies and Yandex.Metrica web analytics services.', cookiesText:'Cookies are small files stored on the User’s device and used to improve website performance and user experience.', cookiesData:'Yandex.Metrica may collect:', cookie1:'• IP address;', cookie2:'• browser and device information;', cookie3:'• user activity on the Website;', cookie4:'• date and time of visits;', cookie5:'• cookie identifiers and technical information.', cookiesOptout:'Users may disable cookies through their browser settings. Certain Website functions may become unavailable as a result.', shareTitle:'Sharing of Data', shareLead:'Personal data is not sold or disclosed to third parties except:', share1:'• where required by law;', share2:'• where necessary to fulfil contractual obligations;', share3:'• where required for operation of analytics and website infrastructure services.', storageTitle:'Data Retention', storageText:'Personal data is retained only for as long as necessary to achieve the purposes described in this Policy or as required by applicable law.', rightsTitle:'User Rights', rightsLead:'Users have the right to:<br>• access their personal data;<br>• request correction, deletion, or restriction of processing;', rightsText:'• withdraw consent;<br>• file complaints with competent authorities.', withdrawTitle:'Withdrawal of Consent', withdrawText:'Users may withdraw consent by sending a request to info@seha-group.ru', contactTitle:'Contact Information', contactText:'For questions about personal data processing, please contact us at:<br>info@seha-group.ru<br>SEHA LLC<br>1 Bratyev Vesninykh Boulevard, Office 151K<br>Moscow, 115432, Russian Federation<br>Phone: +7 922 459-00-63'
  }
};

function setLabelText(element, text){
  if(!element) return;
  const node = Array.from(element.childNodes).find(item => item.nodeType === Node.TEXT_NODE && item.textContent.trim());
  if(node) node.textContent = `${text}`;
}
let cookieBanner;
function translateCookieBanner(lang){
  if(!cookieBanner) return;
  const t=languageDictionary[lang];
  const link=document.querySelector('a[href*="privacy"]')?.getAttribute('href') || '/privacy/';
  cookieBanner.querySelector('[data-cookie-message]').innerHTML=`${t.cookieText} <a href="${link}">${t.cookieLink}</a>`;
  cookieBanner.querySelector('[data-cookie-action]').textContent=t.cookieAction;
}
function translatePrivacy(lang){
  if(lang !== 'en') return;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n?.replace('privacy.','');
    if(key && languageDictionary.privacy[key]) element.innerHTML = languageDictionary.privacy[key];
  });
  const privacyBreadcrumb = document.querySelector('.breadcrumbs [aria-current="page"]');
  if(privacyBreadcrumb) privacyBreadcrumb.textContent = lang === 'en' ? 'Privacy Policy' : 'Политика конфиденциальности';
}
const substratePageContent = {
  ru: {
    breadcrumb:'Кокосовые субстраты', section:'01 / КОКОСОВЫЕ СУБСТРАТЫ', title:'Субстраты для выращивания', intro:'Профессиональные субстраты на основе кокоса для теплиц, питомников, гидропоники и рассады. Подберем фракцию, формат, объем и упаковку под вашу технологию выращивания.', listLabel:'для растениеводства', listTitle:'Категории<br>продуктов', names:['Кокосовый торф','Кокосовый торф в брикетах','Кубический субстрат (M)','Кубический субстрат (L)','Кокосовые диски','Кокосовые чипсы','Таблетки из кокосового торфа','Компост из кокосового торфа','Субстрат для лотков рассады','Субстрат для проращивания'], descriptions:['Натуральный субстрат из очищенного кокосового волокна. Подходит для улучшения влагоемкости, аэрации и структуры почвосмесей.','Спрессованные брикеты кокосового субстрата для тепличных хозяйств и объемных поставок. Удобны для хранения и транспортировки.','Кокосовые блоки среднего формата для рассады, горшечных культур и гидропоники. Удерживают влагу и поддерживают аэрацию корней.','Крупноформатные блоки кокосового субстрата для выращивания растений в закрытых грунтах и системах интенсивного полива.','Спрессованные диски из кокосового волокна. При увлажнении увеличиваются, образуют натуральный биоразлагаемый субстрат.','Крупные частицы кокосовой скорлупы для улучшения аэрации и дренажа. Подходят для орхидей, гидропоники и специализированных культур.','Прессованные таблетки для проращивания семян и рассады. После увлажнения увеличиваются в объеме и формируют удобное посадочное место.','Органический натуральный субстрат для выращивания растений и улучшения почвы. Удерживает влагу и поддерживает здоровье корней.','Готовая смесь для лотков и кассет с рассадой. Обеспечивает равномерное прорастание, аэрацию и развитие здоровой корневой системы.','Мелкофракционный субстрат для проращивания семян. Поддерживает влажность и доступ воздуха для роста молодых растений.'], cta:'Заказать'
  },
  en: {
    breadcrumb:'Coconut Substrates', section:'01 / COCONUT SUBSTRATES', title:'Growing Substrates', intro:'Professional coconut-based substrates for greenhouses, nurseries, hydroponics, and seedlings. We will match the fraction, format, volume, and packaging to your growing technology.', listLabel:'for horticulture', listTitle:'Product<br>categories', names:['Coconut Peat','Coconut Peat Bricks','Grow Cube Slice (M)','Grow Cube Olive (L)','Coco Disc','Coco Husk Chips','Coco Peat Tablets','Coco Peat Compost','Seeding Tray Media','Coco Peat Seed Starter'], descriptions:['Natural substrate made from cleaned coconut fibre. Suitable for improving moisture retention, aeration, and soil mix structure.','Compressed coconut substrate bricks for greenhouse operations and bulk supply. Convenient to store and transport.','Medium-format coconut blocks for seedlings, potted crops, and hydroponics. Retain moisture and support root aeration.','Large-format coconut substrate blocks for growing plants in protected cultivation and intensive irrigation systems.','Compressed coconut fibre discs. They expand when moistened and form a natural biodegradable substrate.','Large coconut shell particles for improved aeration and drainage. Suitable for orchids, hydroponics, and specialist crops.','Pressed tablets for seed germination and seedlings. They expand when moistened and form a convenient planting medium.','Organic natural substrate for growing plants and improving soil. Retains moisture and supports root health.','Ready-made mix for seedling trays and plug trays. Ensures even germination, aeration, and healthy root development.','Fine-fraction substrate for seed germination. Supports moisture retention and air access for young plant growth.'], cta:'Request a quote'
  }
};
function translateSubstratePage(lang){
  if(!document.body.classList.contains('product-detail')) return;
  const content=substratePageContent[lang];
  if(!content) return;
  const breadcrumb=document.querySelector('.breadcrumbs [aria-current="page"]');
  const section=document.querySelector('.product-hero .section-label');
  const title=document.querySelector('.product-hero h1');
  const intro=document.querySelector('.product-hero>p');
  const listLabel=document.querySelector('.product-list-heading>span');
  const listTitle=document.querySelector('.product-list-heading h2');
  if(breadcrumb) breadcrumb.textContent=content.breadcrumb;
  if(section) section.textContent=content.section;
  if(title) title.textContent=content.title;
  if(intro) intro.textContent=content.intro;
  if(listLabel) listLabel.textContent=content.listLabel;
  if(listTitle) listTitle.innerHTML=content.listTitle;
  document.querySelectorAll('.product-item').forEach((item,index)=>{
    const name=item.querySelector('h3');
    const description=item.querySelector('p');
    const action=item.querySelector('a');
    if(name) name.textContent=content.names[index];
    if(description) description.textContent=content.descriptions[index];
    if(action) action.textContent=content.cta;
  });
  document.title=lang === 'en' ? 'Growing Substrates — Seha' : 'Субстраты для выращивания — Сеха';
}
function setSiteLogoState(logo,state='default'){
  const base=document.documentElement.lang === 'en' ? 'logo-international' : 'logo-russian';
  logo.dataset.logoState=state;
  logo.src=`/assets/${base}${state === 'hover' ? '-hover' : ''}.svg`;
  logo.alt=document.documentElement.lang === 'en' ? 'SEHA — international' : 'Сеха';
}
function translateShell(lang){
  const t = languageDictionary[lang];
  const nav = { '/products':t.navProducts, '/production':t.navProduction, '/quality':t.navQuality, '/about':t.navAbout };
  document.querySelectorAll('.site-nav a').forEach(link => { if(nav[link.getAttribute('href')]) link.textContent = nav[link.getAttribute('href')]; });
  const mobileLabels = { '/':t.navHome, '/products':t.navProducts, '/production':t.navProduction, '/quality':t.navQuality, '/about':t.navAbout };
  document.querySelectorAll('.mobile-nav a').forEach(link => { const key=link.getAttribute('href').replace(/#.*$/,''); if(mobileLabels[key]) setLabelText(link,mobileLabels[key]); else setLabelText(link,t.offer); });
  document.querySelectorAll('.button--compact').forEach(link => { const arrow=link.querySelector('span'); link.firstChild.textContent=`${t.offer} `; if(arrow) link.append(arrow); });
  document.querySelectorAll('[data-language-code]').forEach(code => code.textContent=lang.toUpperCase());
  document.querySelectorAll('[data-language-flag]').forEach(flag => { flag.src=flag.src.replace(/(?:figma-language-ru|figma-language-en|flag_of_russia|flag_of_the_UK)\.svg$/i,lang === 'en' ? 'figma-language-en.svg' : 'figma-language-ru.svg'); flag.alt=lang === 'en' ? 'English' : 'Русский'; });
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
  const business={ 'Дистрибьютор':t.distributor,'Distributor':t.distributor,'Ритейлер':t.retailer,'Retailer':t.retailer,'Производитель':t.manufacturer,'Manufacturer':t.manufacturer,'Гидропонная ферма':t.hydro,'Hydroponic Farm':t.hydro,'Садоводческая компания':t.garden,'Horticulture Company':t.garden,'Бренд продуктов питания':t.foodBrand,'Food Brand':t.foodBrand,'Другое':t.other,'Other':t.other };
  document.querySelectorAll('.business-choices label span').forEach(el=>{const key=el.textContent.trim(); if(business[key]) el.textContent=business[key];});
  document.querySelectorAll('.consent').forEach(label=>{const text=label.querySelector('.consent__text'); const link=text?.querySelector('a'); if(text) { const before=Array.from(text.childNodes).find(node=>node.nodeType===Node.TEXT_NODE); const after=Array.from(text.childNodes).filter(node=>node.nodeType===Node.TEXT_NODE).at(-1); if(before) before.textContent=`${t.consent} `; if(link) link.textContent=t.privacy; if(after && after!==before) after.textContent=` ${t.consentEnd}`; }});
  document.querySelectorAll('.button--secondary.button--full').forEach(el=>el.textContent=t.submit);
  document.querySelectorAll('.quote-kicker').forEach(el=>el.textContent=t.contacts);
  document.querySelectorAll('.contact-item.address strong').forEach(el=>el.textContent=t.legal);
  document.querySelectorAll('.contact-item:not(.address)>span').forEach(el=>{el.textContent=el.textContent.trim()==='ПОЧТА'?t.emailLabel:t.phoneLabel});
  document.querySelectorAll('.quote-bottom>div>span').forEach(el=>el.innerHTML=t.footerBrand);
  document.querySelectorAll('.quote-bottom>a').forEach(el=>el.textContent=t.privacy.toUpperCase());
  if(document.body.classList.contains('privacy-page')) translatePrivacy(lang);
  translateSubstratePage(lang);
  translateCookieBanner(lang);
  document.documentElement.lang=lang;
  document.querySelectorAll('.site-header .logo-image').forEach(logo=>setSiteLogoState(logo,logo.dataset.logoState || 'default'));
  localStorage.setItem('seha-language',lang);
}
const languageToggle = document.querySelector('[data-language-toggle]');
document.querySelectorAll('.site-header .logo-image').forEach(logo=>{
  logo.dataset.logoState='default';
  logo.addEventListener('mouseenter',()=>setSiteLogoState(logo,'hover'));
  logo.addEventListener('mouseleave',()=>setSiteLogoState(logo,'default'));
  logo.addEventListener('focus',()=>setSiteLogoState(logo,'hover'));
  logo.addEventListener('blur',()=>setSiteLogoState(logo,'default'));
});
const savedLanguage = localStorage.getItem('seha-language') === 'en' ? 'en' : 'ru';
if(!localStorage.getItem('seha-cookie-consent')){
  cookieBanner=document.createElement('aside');
  cookieBanner.className='cookie-banner';
  cookieBanner.setAttribute('role','dialog');
  cookieBanner.setAttribute('aria-label','Cookie notice');
  cookieBanner.innerHTML='<span class="cookie-badge" aria-hidden="true"></span><button class="cookie-close" type="button" aria-label="Закрыть">×</button><p data-cookie-message></p><button class="cookie-action" data-cookie-action type="button"></button>';
  document.body.append(cookieBanner);
  const closeCookie=()=>{localStorage.setItem('seha-cookie-consent','accepted');cookieBanner.remove()};
  cookieBanner.querySelector('.cookie-close').addEventListener('click',closeCookie);
  cookieBanner.querySelector('.cookie-action').addEventListener('click',closeCookie);
}
let languageMenu;
if(languageToggle){
  const languageControl=document.createElement('div');
  languageControl.className='language-control';
  languageToggle.parentNode.insertBefore(languageControl,languageToggle);
  languageControl.append(languageToggle);
  languageMenu=document.createElement('div');
  languageMenu.className='language-menu';
  languageMenu.hidden=true;
  languageControl.append(languageMenu);
}
function updateLanguageMenu(lang){
  if(!languageMenu || !languageToggle) return;
  const next=lang === 'en' ? 'ru' : 'en';
  const label=next === 'en' ? 'EN' : 'RU';
  const flag=next === 'en' ? 'figma-language-en-option.svg' : 'figma-language-ru.svg';
  const currentSrc=languageToggle.querySelector('[data-language-flag]')?.getAttribute('src') || '';
  const nextSrc=currentSrc.replace(/(?:figma-language-ru|figma-language-en|flag_of_russia|flag_of_the_UK)\.svg$/i,flag);
  languageMenu.innerHTML=`<button class="type-button" type="button" data-set-language="${next}"><img class="language-flag" src="${nextSrc}" alt=""><span>${label}</span></button>`;
  languageToggle.setAttribute('aria-expanded',String(!languageMenu.hidden));
  setLanguageArrow(!languageMenu.hidden);
}
function setLanguageArrow(open){
  const arrow=languageToggle?.querySelector('[data-language-arrow]');
  if(!arrow) return;
  const src=arrow.getAttribute('src') || '';
  arrow.setAttribute('src',src.replace(/language-arrow-(?:down|up)\.svg$/i,open ? 'language-arrow-up.svg' : 'language-arrow-down.svg'));
}
translateShell(savedLanguage);
updateLanguageMenu(savedLanguage);
languageToggle?.addEventListener('click',()=>{
  languageMenu.hidden=!languageMenu.hidden;
  languageToggle.setAttribute('aria-expanded',String(!languageMenu.hidden));
  setLanguageArrow(!languageMenu.hidden);
});
languageMenu?.addEventListener('click',event=>{
  const option=event.target.closest('[data-set-language]');
  if(!option) return;
  const next=option.dataset.setLanguage;
  languageMenu.hidden=true;
  setLanguageArrow(false);
  if(next === 'ru'){ localStorage.setItem('seha-language','ru'); window.location.reload(); return; }
  translateShell(next);
  updateLanguageMenu(next);
});
document.addEventListener('click',event=>{
  if(languageMenu && !event.target.closest('.language-control')){ languageMenu.hidden=true; languageToggle?.setAttribute('aria-expanded','false'); setLanguageArrow(false); }
});
