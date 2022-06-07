import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    return (
      <div>
        <div>Class Counter</div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
