import axios from 'axios';

const APIkey = '14480530-c98fbdaaa9be573dc41a56407';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default {
  async getData(search = 'nature', page = 1) {
    try {
      const data = axios.get(
        `?q=${search}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
