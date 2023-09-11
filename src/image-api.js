
import axios from 'axios';

const API_KEY = '39379639-4968c534b08be18bb1e5fcd97';

export function searchImages(value, page) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: page,
    },
  });
}