// Elements
var headerElem = document.querySelector('.Header');
var sidenavElem = document.querySelector('.sidenav');
var scrollspyElem = document.querySelectorAll('.scrollspy');
var animateElem = document.querySelectorAll('.animate');

function initializeMaterialComponents() {
  // Initialize SideNav
  var sidenavOptions = {
    edge: 'right'
  };

  // Initialize ScrollSpy
  var scrollspyOptions = {
    activeClass: 'is-active',
    scrollOffset: 80
  };

  M.Sidenav.init(sidenavElem, sidenavOptions);
  M.ScrollSpy.init(scrollspyElem, scrollspyOptions);
}

function isElementSeen (el) {
  var rect = el.getBoundingClientRect();
  var offset = 0;

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
  animateElem.forEach(function (elem) {
    if (isElementSeen(elem)) {
      elem.classList.add('is-visible');
    } else {
      elem.classList.remove('is-visible');
    }
  });
}

function toggleTransparentHeader() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    headerElem.classList.add('is-transparent');
  } else {
    headerElem.classList.remove('is-transparent');
  }
}

document.addEventListener('scroll', function () {
  animateElements();
  toggleTransparentHeader();
});

animateElements();
initializeMaterialComponents();
toggleTransparentHeader();
