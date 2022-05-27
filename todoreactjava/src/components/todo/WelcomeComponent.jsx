import React, { Component } from "react";

import { Link } from "react-router-dom";
import ApiService from "../../api/todo/ApiService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      error: "",
    };
    this.retrieveMessage = this.retrieveMessage.bind(this);
    this.handleSuccessfulRes = this.handleSuccessfulRes.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    return (
      <>
        <div className="text-danger">{this.state.error}</div>
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
    ApiService.executeApiPathVeriableService(this.props.match.params.name)
      .then((res) => this.handleSuccessfulRes(res))
      .catch((error) => this.handleError(error));
  }

  handleSuccessfulRes(res) {
    this.setState({ message: res.data.message });
    console.log("handle success ");
  }

  handleError(error) {
    let errMes = " ";
    //if there is an error append to errMes
    if (error.message) {
      errMes += error.message;
    }
    // if there is a response and response has data append to errMess
    if (error.response && error.response.data) {
      errMes += error.message;
    }
    //setting the state show client errMess
    this.setState({
      error: errMes,
    });
  }
}

export default WelcomeComponent;
