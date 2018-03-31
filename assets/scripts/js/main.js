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
    scrollOffset: 40
  };

  M.Sidenav.init(sidenavElem, sidenavOptions);
  M.ScrollSpy.init(scrollspyElem, scrollspyOptions);
}

function isElementSeen (el) {
  var rect = el.getBoundingClientRect();
  var offset = rect.height / 2;

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
  toggleTransparentHeader();
  animateElements();
});

initializeMaterialComponents();
toggleTransparentHeader();
animateElements();
