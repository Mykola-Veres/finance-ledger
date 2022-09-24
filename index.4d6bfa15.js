!function(){var o=window.innerWidth;console.log("scroll",o);var e=document.querySelector(".header");console.log("headerEl",e.style.opacity),document.addEventListener("scroll",(function(l){var n=window.scrollY;console.log("scroll",n);var r=o<768?120:70;console.log("headerDimensions",r),n>=r&&e.classList.toggle("header-scroll")}))}();
//# sourceMappingURL=index.4d6bfa15.js.map
