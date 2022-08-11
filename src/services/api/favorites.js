import axios from 'axios';

import url from './api';

function checkSerieFavorite(id, config){
  return axios.get(`${url}/favorite/serie/${id}`, config);
}

function favoriteSerie(id, config){
  return axios.post(`${url}/favorite/serie/${id}`, {}, config);
}

function listFavorites(config){
  return axios.get(`${url}/favorite`, config);
}

const requestFavoriteApi = {
  checkSerieFavorite,
  favoriteSerie,
  listFavorites
}

export default requestFavoriteApi;