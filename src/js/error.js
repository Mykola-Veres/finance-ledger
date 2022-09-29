const form = document.querySelector('.callback__form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    input.previousElementSibling.classList.remove('callback__error-show');

    if (input.checkValidity()) {
      input.previousElementSibling.classList.add('callback__error-show');
    } else {
      input.previousElementSibling.classList.remove('callback__error-show');
    }
  });
});
