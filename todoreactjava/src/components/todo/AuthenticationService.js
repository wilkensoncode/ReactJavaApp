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
}

export default new AuthenticationService();
