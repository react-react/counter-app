import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  myStyles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.myStyles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <ul>
          {this.state.tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
        <button className="btn btn-secondary btn-sm ">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
