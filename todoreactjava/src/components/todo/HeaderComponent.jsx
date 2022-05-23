import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-green">
          <div>
            <Link to="/" className="navbar-brand text-dark">
              PersonalTask
            </Link>
          </div>
          <ul className="navbar-nav">
            <li>
              {isUserLoggedIn && (
                <Link to="/welcome/will" className="nav-link text-dark">
                  Home
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link to="/todos" className="nav-link text-dark">
                  Todos
                </Link>
              )}
            </li>
          </ul>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              {!isUserLoggedIn && (
                <Link to="/login" className="nav-link text-dark">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isUserLoggedIn && (
                <Link
                  to="/logout"
                  className="nav-link text-dark"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
