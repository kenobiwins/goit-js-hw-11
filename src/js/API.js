const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31108822-76837894c66e615f3880fb969';
const PER_PAGE = 40;

async function fetchImages(searchQuery, currentPage) {
  try {
    const promise = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: PER_PAGE,
      },
    });
    return promise;
  } catch (error) {
    console.log(error);
  }
}

export { fetchImages, PER_PAGE };
