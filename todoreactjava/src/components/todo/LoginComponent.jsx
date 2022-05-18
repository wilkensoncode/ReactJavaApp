import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (this.state.username === "will" && this.state.password === "will") {
      AuthenticationService.registerSuccesfullLogin(
        this.state.username,
        this.state.password
      );
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });

      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="text-danger">Invalid credentials login failed</div>
          )}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={this.state.username}
            onChange={this.handleChange}
          />{" "}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-sm btn-success"
            onClick={this.loginClicked}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
