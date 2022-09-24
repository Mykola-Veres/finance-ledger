const o=window.innerWidth;console.log("scroll",o);const e=document.querySelector(".header");console.log("headerEl",e.style.opacity),document.addEventListener("scroll",(function(l){const n=window.scrollY;console.log("scroll",n);const s=o<768?120:70;console.log("headerDimensions",s),n>=s&&e.classList.toggle("header-scroll")}));
//# sourceMappingURL=index.f2dc9749.js.map
