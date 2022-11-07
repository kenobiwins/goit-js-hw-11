import { refs } from './refs';

function smoothScroll() {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();

  return window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export { smoothScroll };
