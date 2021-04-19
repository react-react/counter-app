import React, { Component } from "react";

class Counter extends Component {
  myStyles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.myStyles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>

        <button
          className="btn btn-secondary btn-sm "
          onClick={this.props.onIncrement}
        >
          Increment
        </button>

        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
