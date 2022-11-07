import { fetchImages, PER_PAGE } from './API';
import Notiflix from 'notiflix';
import { lightbox } from './lightbox';
import { smoothScroll } from './smooth-scroll';
import { refs } from './refs';
import {
  renderCardsByQuery,
  attachedCards,
  insertHTMLBySearch,
  hiddenBtn,
  showBtn,
} from './utils';

let currentPage = 1;

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.form.searchQuery.addEventListener('input', () => {
  currentPage = 1;
});

async function onSearch(e) {
  e.preventDefault();
  hiddenBtn();

  refs.gallery.innerHTML = '';
  const { searchQuery = '' } = e.currentTarget;

  const response = await fetchImages(searchQuery.value, currentPage);
  const { hits, totalHits } = response.data;

  if (hits.length == 0) {
    Notiflix.Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

    insertHTMLBySearch(renderCardsByQuery(response));
    lightbox.refresh();
    smoothScroll();
    if (hits.length == PER_PAGE) showBtn();
  }
}

async function loadMore(e) {
  currentPage += 1;
  const response = await fetchImages(refs.form.searchQuery.value, currentPage);

  await attachedCards(renderCardsByQuery(response));
  lightbox.refresh();
  smoothScroll();
  if (refs.gallery.children.length === response.data.totalHits) {
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    hiddenBtn();
  }
}
