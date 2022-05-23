class AuthenticationService {
  registerSuccesfullLogin(username, password) {
    sessionStorage.setItem("AuthenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return false;
    return true;
  }

  userIsLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user === null) return "";
    return user;
  }
}

export default new AuthenticationService();
