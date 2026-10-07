/* Native Web Components for the shared SEHA design system. */
(function(){
  const assetBase = new URL('.', document.currentScript?.src || document.baseURI);
  const assetPath = file => new URL(file, assetBase).href;
  const define = (name, Base = HTMLElement, setup = () => {}) => {
    if(customElements.get(name)) return;
    class SehaComponent extends Base {
      connectedCallback(){
        if(this.dataset.componentReady === 'true') return;
        this.dataset.componentReady = 'true';
        setup.call(this);
      }
    }
    customElements.define(name, SehaComponent);
  };

  ['seha-button','seha-link','seha-input','seha-checkbox','seha-tag','seha-language-switcher']
    .forEach(name => define(name, HTMLElement));

  define('seha-header', HTMLElement, function(){
    this.setAttribute('role','banner');
  });

  define('seha-footer', HTMLElement, function(){
    this.setAttribute('role','contentinfo');
  });

  define('seha-cookie-banner', HTMLElement, function(){
    this.classList.add('cookie-banner');
    this.setAttribute('role','dialog');
    this.setAttribute('aria-label','Cookie notice');
    this.innerHTML = `<div class="cookie-header"><span class="cookie-badge" aria-hidden="true"></span><button class="cookie-close" type="button" aria-label="Закрыть"><img src="${assetPath('cookie-xmark.svg')}" alt=""></button></div><div class="cookie-content"><p data-cookie-message></p><button class="cookie-action" data-cookie-action type="button"></button></div>`;
  });

  define('seha-mobile-menu', HTMLElement, function(){
    const mobileNav = this.querySelector('#mobile-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = menuToggle?.querySelector('[data-menu-icon]');
    if(!mobileNav || !menuToggle) return;

    const links = Array.from(mobileNav.querySelectorAll(':scope > a')).filter(link => {
      const href = link.getAttribute('href') || '';
      return href !== '/' && !href.endsWith('/#contacts') && href !== '#contacts';
    });
    const close = document.createElement('button');
    close.className = 'mobile-nav-close';
    close.type = 'button';
    close.setAttribute('aria-label','Закрыть меню');
    close.innerHTML = `<img src="${assetPath('tablet-menu-xmark.svg')}" alt="">`;

    const linkGroup = document.createElement('div');
    linkGroup.className = 'mobile-nav-links';
    links.forEach(link => linkGroup.append(link));

    const contacts = document.createElement('div');
    contacts.className = 'mobile-nav-contacts';
    const isEnglish = document.documentElement.lang === 'en';
    contacts.innerHTML = `<div class="mobile-nav-contact"><span data-mobile-contact-label="phone">${isEnglish ? 'PHONE' : 'ТЕЛЕФОН'}</span><a href="tel:+79660612828">+7 966 061-28-28</a></div><div class="mobile-nav-contact"><span data-mobile-contact-label="email">${isEnglish ? 'EMAIL' : 'ПОЧТА'}</span><a href="mailto:seha.info@inbox.ru">seha.info@inbox.ru</a></div>`;
    mobileNav.replaceChildren(close, linkGroup, contacts);

    const setIcon = open => {
      if(menuIcon) menuIcon.src = assetPath(open ? 'mobile-menu-xmark.svg' : 'menu-icon-figma.svg');
    };
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label','Открыть меню');
      setIcon(false);
      mobileNav.hidden = true;
      document.documentElement.classList.remove('menu-open');
      document.body.classList.remove('menu-open');
    };

    close.addEventListener('click', closeMenu);
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      if(open){ closeMenu(); return; }
      menuToggle.setAttribute('aria-expanded','true');
      menuToggle.setAttribute('aria-label','Закрыть меню');
      setIcon(true);
      mobileNav.hidden = false;
      document.documentElement.classList.add('menu-open');
      document.body.classList.add('menu-open');
    });
    document.addEventListener('keydown', event => {
      if(event.key === 'Escape' && !mobileNav.hidden){
        closeMenu();
        menuToggle.focus();
      }
    });
    window.addEventListener('resize', () => {
      if(window.innerWidth > 1024 && !mobileNav.hidden) closeMenu();
    });
    setIcon(false);
  });

  const wrap = (node, name) => {
    if(!node || node.parentElement?.localName === name) return;
    const wrapper = document.createElement(name);
    wrapper.dataset.component = name.replace('seha-','');
    const parent = node.parentNode;
    const next = node.nextSibling;
    wrapper.append(node);
    parent.insertBefore(wrapper, next);
  };

  function mountComponents(){
    document.querySelectorAll('header.site-header').forEach(node => wrap(node,'seha-header'));
    document.querySelectorAll('footer.quote-footer').forEach(node => wrap(node,'seha-footer'));
    document.querySelectorAll('.mobile-nav').forEach(node => wrap(node,'seha-mobile-menu'));
    document.querySelectorAll('.site-nav a, .quote-bottom a, .consent__text a').forEach(node => wrap(node,'seha-link'));
    document.querySelectorAll('.button').forEach(node => wrap(node,'seha-button'));
    document.querySelectorAll('.form-field input, .form-field textarea').forEach(node => wrap(node,'seha-input'));
    document.querySelectorAll('.consent').forEach(node => wrap(node,'seha-checkbox'));
    document.querySelectorAll('.business-choices label').forEach(node => wrap(node,'seha-tag'));
    document.querySelectorAll('.language-switch').forEach(node => wrap(node,'seha-language-switcher'));
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountComponents, {once:true});
  else mountComponents();
})();
