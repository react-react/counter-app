import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

import Navbar from "./components/Navbar";

class App extends Component {
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
      <React.Fragment>
        <Navbar counters={this.state.counters} />
        <Counters
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
