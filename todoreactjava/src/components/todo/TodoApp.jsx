import React, { Component } from "react";
import AuthenticatedRoute from "./AuthenticatedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";

//prettier-ignore
class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
              <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />
              <AuthenticatedRoute component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
