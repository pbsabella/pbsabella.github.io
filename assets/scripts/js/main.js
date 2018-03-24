// Initialize SideNav
var sidenavOptions = {
  preventScrolling: true
};
var sidenavElem = document.querySelector('.sidenav');
var sidenavInstance = M.Sidenav.init(sidenavElem, sidenavOptions);

// Initialize ScrollSpy
var scrollspyOptions = {
  activeClass: 'is-active',
  scrollOffset: 10
};
var scrollspyElem = document.querySelectorAll('.scrollspy');
var scrollspyInstance = M.ScrollSpy.init(scrollspyElem, scrollspyOptions);
