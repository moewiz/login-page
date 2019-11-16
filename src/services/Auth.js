import axios from "axios";

import Auth from "../utils/auth";

const baseURL = "https://radiant-dusk-57430.herokuapp.com/api/";

const AuthService = {
  login({email, password}) {
    return axios.post('/auth/login', {email, password}, {baseURL});
  },
  register(data) {
    return axios.post('/auth/register', data, {baseURL});
  },
  getInfo() {
    return axios.get('/auth/me', {
      baseURL, headers: {
        "x-access-token": Auth.getAccessToken()
      }
    })
  }
};

export default AuthService;
