const nav = document.querySelector('#siteNav');
const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');

const syncNav = () => {
  nav?.classList.toggle('site-nav--solid', window.scrollY > 40 || mobileMenu?.classList.contains('mobile-nav--open'));
};

window.addEventListener('scroll', syncNav, { passive: true });
menuButton?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('mobile-nav--open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  syncNav();
});

document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('mobile-nav--open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    syncNav();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu?.classList.remove('mobile-nav--open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    syncNav();
  }
});

syncNav();
