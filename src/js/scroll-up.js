import { refs } from './refs';

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  scrollY > 400 ? removeListenerAndSmooth() : addListenerAndSmooth();
});

function smoothScrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function addListenerAndSmooth() {
  refs.buttonUp.classList.add('visually-hidden');
  refs.buttonUp.removeEventListener('click', smoothScrollUp);
}
function removeListenerAndSmooth() {
  refs.buttonUp.classList.remove('visually-hidden');
  refs.buttonUp.addEventListener('click', smoothScrollUp);
}
