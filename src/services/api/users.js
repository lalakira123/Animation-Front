import axios from 'axios';

import url from './api';

function signUp(userSignUp){
  return axios.post(`${url}/signup`, userSignUp);
}

function signIn(userSignIn){
  return axios.post(`${url}/signin`, userSignIn);
}

const requestUserApi = {
  signUp,
  signIn
}

export default requestUserApi;

