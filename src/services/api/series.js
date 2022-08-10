import axios from 'axios';

import url from './api';

function getRandom(config){
  return axios.get(`${url}/serie/random`, config);
}

function getById(id, config){
  return axios.get(`${url}/serie/${id}`, config);
}

const requestSerieApi = {
  getRandom,
  getById
}

export default requestSerieApi;