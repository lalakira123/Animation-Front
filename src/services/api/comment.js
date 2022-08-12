import axios from 'axios';

import url from './api';

function createComment(comment, config){
  return axios.post(`${url}/comment`, comment, config);
}

function getComments(id, config){
  return axios.get(`${url}/comment/episode/${id}`, config);
}

function deleteComment(id, config){
  return axios.delete(`${url}/comment/${id}`, config);
}

const requestCommentApi = {
  createComment,
  getComments,
  deleteComment
}

export default requestCommentApi;