import React, { Component } from "react";

import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        welcome {this.props.match.params.name}, you can mange your{" "}
        <Link to="/todos">todos here</Link>{" "}
      </>
    );
  }
}

export default WelcomeComponent;
