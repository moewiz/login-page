import axios from "axios";
const baseURL = "https://radiant-dusk-57430.herokuapp.com/api/";

const AuthService = {
  login({email, password}) {
    return axios.post('/auth/login', { email, password }, { baseURL });
  },
};

export default AuthService;
