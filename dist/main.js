/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n // Elements\n\nvar animateElem = document.querySelectorAll('.animate');\nvar headerElem = document.querySelector('header');\nvar scrollspyElem = document.querySelectorAll('.scrollspy');\nvar contentElem = document.getElementById('content');\nvar menuToggleElem = document.getElementById('menu-toggle');\nvar overlayElem = document.getElementById('overlay');\nvar sidenavElem = document.getElementById('side-nav');\nvar KEYCODE_TAB = 9;\nvar focusableSideNavElements = sidenavElem.querySelectorAll('a');\n\nfunction isElementSeen(el) {\n  var rect = el.getBoundingClientRect();\n  var offset = 0;\n\n  if (rect.height > 100) {\n    // Element is seen when half of the content is visible.\n    // Used for larger elements so it will speed up visibility\n    // rather than waiting for the whole content to be visible\n    offset = rect.height / 2;\n  } else {\n    // Element is seen when it is over the content height\n    // Used for smaller elements so it will delay visibility\n    offset = rect.height * 2 * -1;\n  }\n\n  return rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight);\n}\n\nfunction animateElements() {\n  animateElem.forEach(function (elem) {\n    if (isElementSeen(elem)) {\n      elem.classList.add('is-visible');\n    } else {\n      elem.classList.remove('is-visible');\n    }\n  });\n}\n\nfunction scrollToSmoothly(pos) {\n  var currentPos = window.scrollY || window.screenTop || 0;\n  var speed = 20;\n\n  if (currentPos < pos) {\n    var t = speed;\n\n    var _loop = function _loop(i) {\n      t += speed;\n      setTimeout(function () {\n        window.scrollTo(0, i);\n      }, t / 2);\n    };\n\n    for (var i = currentPos; i <= pos; i += speed) {\n      _loop(i);\n    }\n  } else {\n    var time = 2;\n    var i = currentPos;\n    var handler = setInterval(function () {\n      window.scrollTo(0, i);\n      i -= speed;\n\n      if (i <= pos) {\n        clearInterval(handler);\n      }\n    }, time);\n  }\n}\n\nfunction toggleSideMenu(event) {\n  sidenavElem.classList.toggle('is-active');\n  contentElem.classList.toggle('is-disabled');\n  overlayElem.classList.toggle('is-active');\n  event.stopPropagation();\n}\n\nfunction toggleTransparentHeader() {\n  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n\n  if (scrollTop === 0) {\n    headerElem.classList.add('is-transparent');\n  } else {\n    headerElem.classList.remove('is-transparent');\n  }\n}\n\nfunction trapFocus(event) {\n  if (event.key === 'Tab' || event.keyCode === KEYCODE_TAB) {\n    if (event.shiftKey) {\n      if (document.activeElement === focusableSideNavElements[0]) {\n        focusableSideNavElements[focusableSideNavElements.length - 1].focus();\n        event.preventDefault();\n      }\n    } else if (document.activeElement === focusableSideNavElements[focusableSideNavElements.length - 1]) {\n      focusableSideNavElements[0].focus();\n      event.preventDefault();\n    }\n  }\n}\n\ndocument.addEventListener('scroll', function () {\n  animateElements();\n  toggleTransparentHeader();\n});\nmenuToggleElem.addEventListener('click', function (event) {\n  return toggleSideMenu(event);\n});\noverlayElem.addEventListener('click', function (event) {\n  return toggleSideMenu(event);\n});\nsidenavElem.addEventListener('keydown', function (event) {\n  return trapFocus(event);\n});\nfocusableSideNavElements.forEach(function (elem) {\n  elem.addEventListener('click', function (event) {\n    return toggleSideMenu(event);\n  });\n});\nscrollspyElem.forEach(function (elem) {\n  elem.addEventListener('click', function (event) {\n    var scrollToId = event.target.hash.split('#')[1];\n    var scrollToElem = document.getElementById(scrollToId);\n    var offset = 60;\n\n    if (scrollToElem) {\n      scrollToSmoothly(scrollToElem.offsetTop - offset);\n    }\n  });\n});\nanimateElements();\ntoggleTransparentHeader();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });