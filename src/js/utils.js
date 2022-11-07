import { refs } from './refs';

function renderCardsByQuery(obj) {
  const { hits } = obj.data;

  return hits.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) => {
      acc += `
<div class="photo-card gallery__card" 
  data-sal="zoom-in"
  data-sal-easing="ease-out-back"
  data-sal-delay="300"">
      <a class="gallery__link" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
  <ul class="info">
    <li class="info-item">
    <svg class="icon">
  // <use href="./images/sprite.svg#icon-like"></use>
  <path d="M10.664 3.2v-2.136h-4.264v2.136h2.136z"></path>
<path d="M25.6 3.2v-2.136h-4.264v2.136h2.128z"></path>
<path d="M4.264 3.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M10.664 3.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M19.2 3.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M25.6 3.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M2.136 5.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M12.8 5.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M17.064 5.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 5.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M14.936 7.464h2.136v2.136h-2.136v-2.136z"></path>
<path d="M29.864 7.464v8.536h2.136v-8.536z"></path>
<path d="M2.136 11.736v-4.272h-2.136v8.536h2.136v-2.136z"></path>
<path d="M2.136 16h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 16h2.136v2.136h-2.136v-2.136z"></path>
<path d="M4.264 18.136h2.136v2.136h-2.136v-2.136z"></path>
<path d="M25.6 18.136h2.136v2.136h-2.136v-2.136z"></path>
<path d="M6.4 20.264h2.136v2.136h-2.136v-2.136z"></path>
<path d="M23.464 20.264h2.136v2.136h-2.136v-2.136z"></path>
<path d="M8.536 22.4h2.136v2.136h-2.136v-2.136z"></path>
<path d="M21.336 22.4h2.136v2.136h-2.136v-2.136z"></path>
<path d="M10.664 24.536h2.136v2.136h-2.136v-2.136z"></path>
<path d="M19.2 24.536h2.136v2.136h-2.136v-2.136z"></path>
<path d="M12.8 26.664h2.136v2.136h-2.136v-2.136z"></path>
<path d="M17.064 26.664h2.136v2.136h-2.136v-2.136z"></path>
<path d="M14.936 28.8h2.136v2.136h-2.136v-2.136z"></path>
</svg>
    <p class='info-text'>${likes}</p>
    </li>
    <li class="info-item">
<svg class="icon">
  // <use href="./images/sprite.svg#icon-search"></use>
  <path d="M12.8 2.136h4.264v-2.136h-8.528v2.136h2.128z"></path>
<path d="M8.536 4.264v-2.128h-4.272v2.128h2.136z"></path>
<path d="M19.2 4.264h2.136v-2.128h-4.272v2.128z"></path>
<path d="M4.264 6.4v-2.136h-2.128v4.272h2.128z"></path>
<path d="M21.336 8.536h2.128v-4.272h-2.128v2.136z"></path>
<path d="M6.4 8.536h2.136v2.136h-2.136v-2.136z"></path>
<path d="M8.536 6.4h2.136v2.136h-2.136v-2.136z"></path>
<path d="M23.464 12.8v4.264h2.136v-8.528h-2.136v2.128z"></path>
<path d="M2.136 12.8v-4.264h-2.136v8.528h2.136v-2.128z"></path>
<path d="M4.264 17.064h-2.128v4.272h2.128v-2.136z"></path>
<path d="M23.464 19.2v-2.136h-2.128v4.272h2.128z"></path>
<path d="M6.4 21.336h-2.136v2.128h4.272v-2.128z"></path>
<path d="M17.064 21.336v2.128h4.272v-2.128h-2.136z"></path>
<path d="M12.8 23.464h-4.264v2.136h8.528v-2.136h-2.128z"></path>
<path d="M23.464 23.464h2.136v2.136h-2.136v-2.136z"></path>
<path d="M25.6 25.6h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 27.736h2.136v2.136h-2.136v-2.136z"></path>
<path d="M29.864 29.864h2.136v2.136h-2.136v-2.136z"></path>
</svg>
    <p class='info-text'>${views}</p>
    </li>
    <li class="info-item">
<svg class="icon">
  // <use href="./images/sprite.svg#icon-comments"></use>

<path d="M8.536 4.264h19.2v-2.128h-23.472v2.128h2.136z"></path>
<path d="M2.136 4.264h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 4.264h2.136v2.136h-2.136v-2.136z"></path>
<path d="M29.864 6.4v14.936h2.136v-14.936z"></path>
<path d="M8.536 12.8h2.136v2.136h-2.136v-2.136z"></path>
<path d="M14.936 12.8h2.136v2.136h-2.136v-2.136z"></path>
<path d="M21.336 12.8h2.136v2.136h-2.136v-2.136z"></path>
<path d="M2.136 17.064v-10.664h-2.136v14.936h2.136v-2.136z"></path>
<path d="M2.136 21.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 21.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M10.664 23.464h-6.4v2.136h8.536v-2.136z"></path>
<path d="M23.464 23.464h-4.264v2.136h8.536v-2.136h-2.136z"></path>
<path d="M12.8 25.6h2.136v2.136h-2.136v-2.136z"></path>
<path d="M17.064 25.6h2.136v2.136h-2.136v-2.136z"></path>
<path d="M14.936 27.736h2.136v2.136h-2.136v-2.136z"></path>
</svg>
    <p class='info-text'>${comments}</p>
    </li>
    <li class="info-item">
<svg class="icon">
  // <use href="./images/sprite.svg#icon-download"></use>
  <path d="M6.4 14.936h2.136v2.136h-2.136v-2.136z"></path>
<path d="M23.464 14.936h2.136v2.136h-2.136v-2.136z"></path>
<path d="M8.536 17.064h2.136v2.136h-2.136v-2.136z"></path>
<path d="M21.336 17.064h2.136v2.136h-2.136v-2.136z"></path>
<path d="M10.664 19.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M17.064 19.2v-19.2h-2.128v21.336h2.128z"></path>
<path d="M19.2 19.2h2.136v2.136h-2.136v-2.136z"></path>
<path d="M29.864 19.2v8.536h2.136v-8.536z"></path>
<path d="M12.8 21.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M17.064 21.336h2.136v2.136h-2.136v-2.136z"></path>
<path d="M2.136 23.464v-4.264h-2.136v8.536h2.136v-2.136z"></path>
<path d="M14.936 23.464h2.136v2.136h-2.136v-2.136z"></path>
<path d="M2.136 27.736h2.136v2.136h-2.136v-2.136z"></path>
<path d="M27.736 27.736h2.136v2.136h-2.136v-2.136z"></path>
<path d="M23.464 29.864h-19.2v2.136h23.472v-2.136h-2.136z"></path>
</svg>
    <p class='info-text'>${downloads}</p>
    </li>
  </ul>
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
