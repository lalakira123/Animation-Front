import axios from 'axios';

import url from './api';

function signUp(userSignUp){
  return axios.post(`${url}/signup`, userSignUp);
}

const requestUserApi = {
  signUp
}

export default requestUserApi;

