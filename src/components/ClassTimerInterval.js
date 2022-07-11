import React, { Component } from "react";

class ClassTimerInterval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>ClassTimerInterval</p>
        <p>Timer-{this.state.timer}</p>
        <button
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Stop Timer
        </button>
      </div>
    );
  }
}

export default ClassTimerInterval;
