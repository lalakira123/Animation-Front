import axios from 'axios';

import url from './api';

function getEpisodeById(id, config){
  return axios.get(`${url}/episode/${id}`, config);
}

const requestEpisodeApi = {
  getEpisodeById
}

export default requestEpisodeApi;