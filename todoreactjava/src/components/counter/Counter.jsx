import "./Counter.css";

import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton counter={1} increment={this.increment} />
        <CounterButton counter={2} increment={this.increment} />
        <CounterButton counter={5} increment={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment(counter) {
    this.setState({
      counter: this.state.counter + counter,
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+{this.props.counter}</button>
        {/* <span counter={this.increment} className="count">
          {this.state.counter}
        </span> */}
        {/* <button onClick={this.decrement}>-1</button> */}
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.counter,
    });
    this.props.increment(this.props.counter);
  }

  // decrement() {
  //   {
  //     if (this.state.counter === 0) return;
  //     this.setState({
  //       counter: this.state.counter - 5,
  //     });
  //   }
  // }
}

CounterButton.defaultProps = {
  counter: 1,
};

CounterButton.propTypes = {
  counter: PropTypes.number,
};

export default Counter;
