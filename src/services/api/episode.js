import axios from 'axios';

import url from './api';

function getEpisodeById(id, config){
  return axios.get(`${url}/episode/${id}`, config);
}

function getPreviousAndNextEpisode(id, config){
  return axios.get(`${url}/episode/next-previous/${id}`, config);
}

const requestEpisodeApi = {
  getEpisodeById,
  getPreviousAndNextEpisode
}

export default requestEpisodeApi;