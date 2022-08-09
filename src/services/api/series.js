import axios from 'axios';

import url from './api';

function getRandom(config){
  return axios.get(`${url}/serie/random`, config);
}

const requestSerieApi = {
  getRandom
}

export default requestSerieApi;