import React from "react";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor='bar'>bar</label>
        <input type='text' onChange={() => console.log("I'm changed.")} />
      </React.Fragment>
    );
  }
}

export default App;
