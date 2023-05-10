import React, { Component } from "react";

export default class CreateRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <h2>React.createRef()</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
