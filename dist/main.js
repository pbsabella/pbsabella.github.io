!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=document.querySelectorAll(".animate"),r=document.querySelector("header"),i=document.querySelectorAll(".scrollspy"),c=document.getElementById("content"),l=document.getElementById("menu-toggle"),u=document.getElementById("overlay"),s=document.getElementById("side-nav"),a=s.querySelectorAll("a");function d(){o.forEach((function(e){var t,n;t=e.getBoundingClientRect(),n=0,n=t.height>100?t.height/2:2*t.height*-1,t.bottom-n<=(window.innerHeight||document.documentElement.clientHeight)?e.classList.add("is-visible"):e.classList.remove("is-visible")}))}function f(e){s.classList.toggle("is-active"),c.classList.toggle("is-disabled"),u.classList.toggle("is-active"),e.stopPropagation()}function m(){0===(window.pageYOffset||document.documentElement.scrollTop)?r.classList.add("is-transparent"):r.classList.remove("is-transparent")}document.addEventListener("scroll",(function(){d(),m()})),l.addEventListener("click",(function(e){return f(e)})),u.addEventListener("click",(function(e){return f(e)})),s.addEventListener("keydown",(function(e){return function(e){"Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?document.activeElement===a[0]&&(a[a.length-1].focus(),e.preventDefault()):document.activeElement===a[a.length-1]&&(a[0].focus(),e.preventDefault()))}(e)})),a.forEach((function(e){e.addEventListener("click",(function(e){return f(e)}))})),i.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.hash.split("#")[1],n=document.getElementById(t);n&&function(e){var t=window.scrollY||window.screenTop||0;if(t<e)for(var n=20,o=function(e){setTimeout((function(){window.scrollTo(0,e)}),(n+=20)/2)},r=t;r<=e;r+=20)o(r);else var i=t,c=setInterval((function(){window.scrollTo(0,i),(i-=20)<=e&&clearInterval(c)}),2)}(n.offsetTop-60)}))})),d(),m()},function(e,t,n){}]);