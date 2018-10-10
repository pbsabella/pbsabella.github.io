import './styles/main.scss';

// Elements
const animateElem = document.querySelectorAll('.animate');
const headerElem = document.querySelector('header');
const scrollspyElem = document.querySelectorAll('.scrollspy');

const contentElem = document.getElementById('content');
const menuToggleElem = document.getElementById('menu-toggle');
const overlayElem = document.getElementById('overlay');
const sidenavElem = document.getElementById('side-nav');

const KEYCODE_TAB = 9;
const focusableSideNavElements = sidenavElem.querySelectorAll('a');

function isElementSeen(el) {
  const rect = el.getBoundingClientRect();
  let offset = 0;

  if (rect.height > 100) {
    // Element is seen when half of the content is visible.
    // Used for larger elements so it will speed up visibility
    // rather than waiting for the whole content to be visible
    offset = rect.height / 2;
  } else {
    // Element is seen when it is over the content height
    // Used for smaller elements so it will delay visibility
    offset = (rect.height * 2) * -1;
  }

  return (
    (rect.bottom - offset) <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function animateElements() {
  animateElem.forEach((elem) => {
    if (isElementSeen(elem)) {
      elem.classList.add('is-visible');
    } else {
      elem.classList.remove('is-visible');
    }
  });
}

function scrollToSmoothly(pos) {
  const currentPos = window.scrollY || window.screenTop || 0;
  const speed = 20;

  if (currentPos < pos) {
    let t = speed;

    for (let i = currentPos; i <= pos; i += speed) {
      t += speed;

      setTimeout(() => {
        window.scrollTo(0, i);
      }, t / 2);
    }
  } else {
    const time = 2;
    let i = currentPos;

    const handler = setInterval(() => {
      window.scrollTo(0, i);
      i -= speed;

      if (i <= pos) {
        clearInterval(handler);
      }
    }, time);
  }
}

function toggleSideMenu(event) {
  sidenavElem.classList.toggle('is-active');
  contentElem.classList.toggle('is-disabled');
  overlayElem.classList.toggle('is-active');
  event.stopPropagation();
}

function toggleTransparentHeader() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    headerElem.classList.add('is-transparent');
  } else {
    headerElem.classList.remove('is-transparent');
  }
}

function trapFocus(event) {
  if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {
    if (event.shiftKey) {
      if (document.activeElement === focusableSideNavElements[0]) {
        focusableSideNavElements[focusableSideNavElements.length - 1].focus();
        event.preventDefault();
      }
    } else if (document.activeElement
      === focusableSideNavElements[focusableSideNavElements.length - 1]) {
      focusableSideNavElements[0].focus();
      event.preventDefault();
    }
  }
}

document.addEventListener('scroll', () => {
  animateElements();
  toggleTransparentHeader();
});

menuToggleElem.addEventListener('click', event => toggleSideMenu(event));
overlayElem.addEventListener('click', event => toggleSideMenu(event));
sidenavElem.addEventListener('keydown', event => trapFocus(event));

focusableSideNavElements.forEach((elem) => {
  elem.addEventListener('click', event => toggleSideMenu(event));
});

scrollspyElem.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const scrollToId = event.target.hash.split('#')[1];
    const scrollToElem = document.getElementById(scrollToId);
    const offset = 80;

    if (scrollToElem) {
      scrollToSmoothly(scrollToElem.offsetTop - offset);
    }
  });
});

animateElements();
toggleTransparentHeader();
