import React, { Component } from "react";

import { Link } from "react-router-dom";
import ApiService from "../../api/todo/ApiService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.retrieveMessage = this.retrieveMessage.bind(this);
    this.handleSuccessfulRes = this.handleSuccessfulRes.bind(this);
  }
  render() {
    return (
      <>
        <h1>Welcome</h1>
        welcome {this.props.match.params.name}, you can mange your{" "}
        <Link to="/todos">todos here</Link>{" "}
        <button
          className="btn btn-success btn-sm text-dark"
          onClick={this.retrieveMessage}
        >
          message fom backend
        </button>
        <div className="container">{this.state.message}</div>
      </>
    );
  }

  retrieveMessage() {
    ApiService.executeApiService().then((res) => {
      this.handleSuccessfulRes(res);
    });
    // .catch();
  }

  handleSuccessfulRes(res) {
    this.setState({ message: res.data.message });
    console.log("handle success ");
  }
}

export default WelcomeComponent;
