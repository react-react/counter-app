import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => {
      return c.id !== id;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.handleIncrement(counter)}
            onDelete={() => this.handleDelete(counter.id)}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
