import './styles/main.scss';

// Elements
// const animateElems = document.querySelectorAll('.animate');
const headerElem = document.querySelector('header');
const scrollspyElems = document.querySelectorAll('.scrollspy');

const contentElem = document.getElementById('content');
const menuToggleElem = document.getElementById('menu-toggle');
const overlayElem = document.getElementById('overlay');
const sidenavElem = document.getElementById('side-nav');

const KEYCODE_TAB = 9;
const KEYCODE_ESC = 27;
const focusableSideNavElements = sidenavElem?.querySelectorAll('a, button');

document.getElementById('current-year').innerHTML = new Date().getFullYear();

// function isElementSeen(el) {
//   const rect = el.getBoundingClientRect();
//   let offset = 0;

//   if (rect.height > 100) {
//     // Element is seen when half of the content is visible.
//     // Used for larger elements so it will speed up visibility
//     // rather than waiting for the whole content to be visible
//     offset = rect.height / 2;
//   } else {
//     // Element is seen when it is over the content height
//     // Used for smaller elements so it will delay visibility
//     offset = rect.height * 2 * -1;
//   }

//   return (
//     rect.bottom - offset
//     <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }

// function animateElements() {
//   animateElems.forEach((el) => {
//     el.classList.toggle('is-visible', isElementSeen(el));
//   });
// }

function closeSideMenuOnEsc(event) {
  if (event.key === 'Escape' || event.keyCode === KEYCODE_ESC) {
    if (sidenavElem?.classList.contains('is-active')) {
      toggleSideMenu(event);
      menuToggleElem?.focus();
    }
  }
}

// Toggle side menu
function toggleSideMenu(event) {
  if (!sidenavElem || !overlayElem || !contentElem) return;

  const isActive = sidenavElem.classList.toggle('is-active');
  contentElem.classList.toggle('is-disabled', isActive);
  overlayElem.classList.toggle('is-active', isActive);

  if (isActive && focusableSideNavElements?.length) {
    focusableSideNavElements[0].focus();
  }

  event.stopPropagation();
}

function toggleTransparentHeader() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  headerElem.classList.toggle('is-transparent', scrollTop === 0);
}

function trapFocus(event) {
  if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
    if (event.shiftKey) {
      if (document.activeElement === focusableSideNavElements[0]) {
        focusableSideNavElements[focusableSideNavElements.length - 1].focus();
        event.preventDefault();
      }
    } else if (
      document.activeElement
      === focusableSideNavElements[focusableSideNavElements.length - 1]
    ) {
      focusableSideNavElements[0].focus();
      event.preventDefault();
    }
  }
}

document.addEventListener('scroll', () => {
  // animateElements();
  toggleTransparentHeader();
});

menuToggleElem.addEventListener('click', (event) => toggleSideMenu(event));
overlayElem.addEventListener('click', (event) => toggleSideMenu(event));
sidenavElem.addEventListener('keydown', (event) => trapFocus(event));
document.addEventListener('keydown', closeSideMenuOnEsc);

focusableSideNavElements.forEach((elem) => {
  elem.addEventListener('click', (event) => toggleSideMenu(event));
});

scrollspyElems.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const targetId = event.target.hash?.slice(1);
    const targetElem = document.getElementById(targetId);

    if (!targetElem) return;
    event.preventDefault();

    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// animateElements();
toggleTransparentHeader();
