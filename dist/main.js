(()=>{"use strict";var e=document.querySelectorAll(".animate"),t=document.querySelector("header"),n=document.querySelectorAll(".scrollspy"),o=document.getElementById("content"),c=document.getElementById("menu-toggle"),i=document.getElementById("overlay"),l=document.getElementById("side-nav"),r=l.querySelectorAll("a");function s(){e.forEach((function(e){var t,n;t=e.getBoundingClientRect(),n=0,n=t.height>100?t.height/2:2*t.height*-1,t.bottom-n<=(window.innerHeight||document.documentElement.clientHeight)?e.classList.add("is-visible"):e.classList.remove("is-visible")}))}function a(e){l.classList.toggle("is-active"),o.classList.toggle("is-disabled"),i.classList.toggle("is-active"),e.stopPropagation()}function d(){0===(window.pageYOffset||document.documentElement.scrollTop)?t.classList.add("is-transparent"):t.classList.remove("is-transparent")}document.getElementById("current-year").innerHTML=(new Date).getFullYear(),document.addEventListener("scroll",(function(){s(),d()})),c.addEventListener("click",(function(e){return a(e)})),i.addEventListener("click",(function(e){return a(e)})),l.addEventListener("keydown",(function(e){return function(e){"Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?document.activeElement===r[0]&&(r[r.length-1].focus(),e.preventDefault()):document.activeElement===r[r.length-1]&&(r[0].focus(),e.preventDefault()))}(e)})),r.forEach((function(e){e.addEventListener("click",(function(e){return a(e)}))})),n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.hash.split("#")[1];e.preventDefault();var n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}))})),s(),d(),console.log("%cYeet","color: red; font-size: x-large")})();