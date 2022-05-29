import axios from "axios";

class AuthenticationService {
  registerSuccesfullLogin(username, password) {
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

    sessionStorage.setItem("AuthenticatedUser", username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return false;
    return true;
  }

  getUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return "";
    return user;
  }
  // add authorization header to every request
  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
