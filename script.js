
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const experienceButton = document.querySelector('#toggleExperience');
const experiencePanel = document.querySelector('#experiencePanel');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

experienceButton?.addEventListener('click', () => {
  const isHidden = experiencePanel.hasAttribute('hidden');

  if (isHidden) {
    experiencePanel.removeAttribute('hidden');
    experienceButton.innerHTML = 'Ocultar experiência <span>↑</span>';
    experienceButton.setAttribute('aria-expanded', 'true');
  } else {
    experiencePanel.setAttribute('hidden', '');
    experienceButton.innerHTML = 'Ver minha experiência <span>↓</span>';
    experienceButton.setAttribute('aria-expanded', 'false');
  }
});
