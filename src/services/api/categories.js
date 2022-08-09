import axios from 'axios';

import url from './api';

function getCategoriesSeries(config){
  return axios.get(`${url}/categories/series`, config);
}

const requestCategoryApi = {
  getCategoriesSeries
}

export default requestCategoryApi;