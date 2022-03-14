const $ = (selector, baseElement = document) => baseElement.querySelector(selector);
const $$ = (selector, baseElement = document) => baseElement.querySelectorAll(selector);

const showSnackBar = message => {
  const $snackBar = $('#snack-bar');
  $snackBar.classList.add('show');
  $snackBar.textContent = message;

  setTimeout(() => {
    $snackBar.classList.remove('show');
  }, 2000);
};

export { $, $$, showSnackBar };
