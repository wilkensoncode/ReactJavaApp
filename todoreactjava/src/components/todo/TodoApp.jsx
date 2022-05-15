import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="login" element={<LoginComponent />} />
            <Route path="welcome" element={<WelcomeComponent />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
class WelcomeComponent extends Component {
  render() {
    return <div> Welcome in your todo app </div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (this.state.username === "will" && this.state.password === "will") {
      console.log("successful login");
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      console.log("failed login");
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <ShowInvalidCredentials loginFailed={this.state.hasLoginFailed} />
        <ShowSuccessMessage successMessage={this.state.showSuccessMessage} />
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

function ShowInvalidCredentials(props) {
  if (props.loginFailed) {
    return <div>Invalid credentials</div>;
  }
  return null;
}

function ShowSuccessMessage(props) {
  if (props.successMessage) {
    return <div>Login successfull</div>;
  }
  return null;
}

export default TodoApp;
