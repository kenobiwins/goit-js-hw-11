import { refs } from './refs';

function renderCardsByQuery(obj) {
  const { hits } = obj.data;

  return hits.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      acc += `<div class="photo-card gallery__card">
      <a class="gallery__link" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
  <div class="info">
    <p class="info-item">
      <b>Likes:${likes}</b>
    </p>
    <p class="info-item">
      <b>Views:${views}</b>
    </p>
    <p class="info-item">
      <b>Comments:${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:${downloads}</b>
    </p>
  </div>
</div>`;
      return acc;
    },
    ''
  );
}
function attachedCards(markup) {
  return refs.gallery.insertAdjacentHTML('beforeend', markup);
}
function insertHTMLBySearch(markup) {
  return (refs.gallery.innerHTML = markup);
}
function hiddenBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
  refs.loadMoreBtn.setAttribute('disabled', '');
}
function showBtn() {
  refs.loadMoreBtn.removeAttribute('disabled');
  refs.loadMoreBtn.classList.remove('visually-hidden');
}

export {
  renderCardsByQuery,
  attachedCards,
  insertHTMLBySearch,
  hiddenBtn,
  showBtn,
};
