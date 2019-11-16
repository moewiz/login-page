class Auth {
  static setAccessToken = (token) => {
    localStorage.setItem("access_token", token)
  };

  static getAccessToken = () => {
    return localStorage.getItem("access_token");
  };

  static isLoggedIn = () => {
    const token = this.getAccessToken();
    return !!token;
  };

  static logout = () => {
    this.setAccessToken("");
  };
}

export default Auth;