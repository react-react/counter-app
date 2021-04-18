import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    }
    return (
      <ul>
        {this.state.tags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please add new Tags!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
