import axios from 'axios';

import url from './api';

function createComment(comment, config){
  return axios.post(`${url}/comment`, comment, config);
}

const requestCommentApi = {
  createComment
}

export default requestCommentApi;