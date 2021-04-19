import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  myStyles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.myStyles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>

        <button
          className="btn btn-secondary btn-sm "
          onClick={() => this.handleIncrement()}
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
