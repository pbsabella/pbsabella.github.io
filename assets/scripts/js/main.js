// Elements
var headerElem = document.querySelector('.Header');
var sidenavElem = document.querySelector('.sidenav');
var scrollspyElem = document.querySelectorAll('.scrollspy');
var animateBackgroundElem = document.querySelector('.animate-background');

function initializeMaterialComponents() {
  // Initialize SideNav
  var sidenavOptions = {
    edge: 'right'
  };

  // Initialize ScrollSpy
  var scrollspyOptions = {
    activeClass: 'is-active',
    scrollOffset: 10
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

  if (isElementSeen(animateBackgroundElem)) {
    animateBackgroundElem.classList.add('is-visible');
  } else {
    animateBackgroundElem.classList.remove('is-visible');
  }
});

initializeMaterialComponents();
toggleTransparentHeader();
