import { loadMore, currentPage } from './gallery';
import throttle from 'lodash.throttle';
import { debounce } from 'debounce';
import { hideTitle } from './utils';

window.addEventListener('scroll', debounce(checkScrollPosition, 500));
window.addEventListener('resize', throttle(checkScrollPosition, 500));

async function checkScrollPosition(e) {
  const heightBody = document.body.offsetHeight;
  const viewPortHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const trigger = heightBody - viewPortHeight / 4;
  const position = scrolled + viewPortHeight;
  if (position >= trigger) {
    loadMore();
    hideTitle();
  }
}
