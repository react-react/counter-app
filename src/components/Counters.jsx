import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset}>Reset</button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.props.onIncrement(counter)}
            onDelete={() => this.props.onDelete(counter.id)}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
