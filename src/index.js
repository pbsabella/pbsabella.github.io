import './styles/main.css';

const body = document.body;
const headerElem = document.querySelector('header');
const scrollspyElems = document.querySelectorAll('.scrollspy');

const contentElem = document.getElementById('content');
const menuToggleElem = document.getElementById('menu-toggle');
const overlayElem = document.getElementById('overlay');
const sidenavElem = document.getElementById('side-nav');

const toggleButton = document.getElementById('theme-toggle');
const toggleButtonMobile = document.getElementById('theme-toggle-mobile');

const KEYCODE_TAB = 9;
const KEYCODE_ESC = 27;

// focusable elements inside side nav
const focusableSideNavElements = sidenavElem ? sidenavElem.querySelectorAll('a, button') : [];

// Set current year
const currentYearElem = document.getElementById('current-year');
if (currentYearElem) currentYearElem.textContent = new Date().getFullYear();

// --- Side Menu Functions ---
function toggleSideMenu(event) {
  if (!sidenavElem || !overlayElem || !contentElem) return;

  const isActive = sidenavElem.classList.toggle('is-active');
  contentElem.classList.toggle('is-disabled', isActive);
  overlayElem.classList.toggle('is-active', isActive);

  if (isActive && focusableSideNavElements.length) {
    focusableSideNavElements[0].focus();
  }

  event?.stopPropagation();
}

function closeSideMenuOnEsc(event) {
  if ((event.key === 'Escape' || event.keyCode === KEYCODE_ESC) && sidenavElem?.classList.contains('is-active')) {
    toggleSideMenu(event);
    menuToggleElem?.focus();
  }
}

function trapFocus(event) {
  if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
    if (event.shiftKey) {
      if (document.activeElement === focusableSideNavElements[0]) {
        focusableSideNavElements[focusableSideNavElements.length - 1].focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === focusableSideNavElements[focusableSideNavElements.length - 1]) {
        focusableSideNavElements[0].focus();
        event.preventDefault();
      }
    }
  }
}

// --- Header transparency ---
function toggleTransparentHeader() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  headerElem?.classList.toggle('header--transparent', scrollTop === 0);
}

// --- Theme Functions ---
function setTheme(theme) {
  const newTheme = theme || (body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// --- Initialize Theme on First Load ---
const savedTheme = localStorage.getItem('theme');
// Set it later
// window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const prefersDark = false;

if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
} else {
  body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

// --- Event Listeners ---
// Side menu
menuToggleElem?.addEventListener('click', toggleSideMenu);
overlayElem?.addEventListener('click', toggleSideMenu);
sidenavElem?.addEventListener('keydown', trapFocus);
document.addEventListener('keydown', closeSideMenuOnEsc);
focusableSideNavElements.forEach((elem) => elem.addEventListener('click', toggleSideMenu));

// Smooth scroll for scrollspy
scrollspyElems.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const targetId = event.target.hash?.slice(1);
    const targetElem = document.getElementById(targetId);
    if (!targetElem) return;
    event.preventDefault();
    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Header transparency on scroll
document.addEventListener('scroll', toggleTransparentHeader);
toggleTransparentHeader();

// Theme toggles
toggleButton?.addEventListener('click', () => setTheme());
toggleButtonMobile?.addEventListener('click', () => setTheme());
