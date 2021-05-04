import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID mwl4IWxtZntt3UV-9-qT2gRnKpTzijCt-WUPm9V8w2A`,
  },
});
