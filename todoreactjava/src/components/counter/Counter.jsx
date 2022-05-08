import "./Counter.css";

import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
        <button onClick={this.decrement}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 10,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 5,
    });
  }
}

export default Counter;
