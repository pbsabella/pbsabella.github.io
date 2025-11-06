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

let lastScrollY = window.scrollY;
let ticking = false;
let themeToggleAnimated = false;

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

// --- Header transparency & visibility ---
function toggleHeader() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Transparent at top
  headerElem.classList.toggle('header--transparent', scrollTop === 0);

  // Only hide when scrolling down significantly
  if (scrollTop > lastScrollY && scrollTop > 100) {
    // Scrolling down
    headerElem.classList.add('header--hidden');
  } else if (scrollTop < lastScrollY) {
    // Scrolling up
    headerElem.classList.remove('header--hidden');
  }

  lastScrollY = scrollTop;
  ticking = false;
}

// --- Theme Functions ---
function activateThemeToggleAnimation() {
  if (!themeToggleAnimated) {
    toggleButton?.querySelectorAll('.toggle-icon').forEach((icon) => {
      icon.classList.add('toggle-icon--animate');
    });
    toggleButtonMobile?.querySelectorAll('.toggle-icon').forEach((icon) => {
      icon.classList.add('toggle-icon--animate');
    });
    themeToggleAnimated = true;
  }
}

function setTheme(theme) {
  activateThemeToggleAnimation();

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

// Header styles on scroll
document.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(toggleHeader);
    ticking = true;
  }
});

// Theme toggles
toggleButton?.addEventListener('click', () => setTheme());
toggleButtonMobile?.addEventListener('click', () => setTheme());
