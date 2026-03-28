import axios from 'axios';
const API_KEY = '54995713-153429984e93bcc4ba835073b';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query ="dog", page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
