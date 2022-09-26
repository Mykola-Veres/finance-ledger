const screenWidth = window.innerWidth;
console.log('scroll', screenWidth);

const headerEl = document.querySelector('.header');
console.log('headerEl', headerEl.style.opacity);

document.addEventListener('scroll', function (event) {
  const scrollPosition = window.scrollY;
  console.log('scroll', scrollPosition);

  const headerDimensions = screenWidth < 768 ? 120 : 70;
  console.log('headerDimensions', headerDimensions);

  if (scrollPosition >= headerDimensions) {
    headerEl.classList.add('header-scroll');
    // headerEl.style.opacity = 0.8;
  } else {
    headerEl.classList.remove('header-scroll');
  }
});
