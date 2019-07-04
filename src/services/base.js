import axios from 'axios';
import _ from 'lodash';

const customAxios = axios.create({
  baseURL : 'http://api.football-data.org/v2/'
});

customAxios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "X-Auth-Token":'53e86bd5340b427f88a2d197014a72a3'
  };
  return config;
});

export default customAxios;