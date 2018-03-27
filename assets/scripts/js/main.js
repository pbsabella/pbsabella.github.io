// Elements
var headerElem = document.querySelector('.Header');
var sidenavElem = document.querySelector('.sidenav');
var scrollspyElem = document.querySelectorAll('.scrollspy');

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

function toggleTransparentHeader() {
  var scrollTop = document.documentElement.scrollTop;

  if (scrollTop === 0) {
    headerElem.classList.add('is-transparent');
  } else {
    headerElem.classList.remove('is-transparent');
  }
}

document.addEventListener('scroll', function () {
  toggleTransparentHeader();
});

document.addEventListener('touchstart', function () {
  toggleTransparentHeader();
});

initializeMaterialComponents();
toggleTransparentHeader();
