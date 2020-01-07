import React from "react";

import { render } from "react-dom";
import "./styles.css";
import Hello from "./Hello";

export default function App1() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <hr />
      <Hello />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>xxx</ul>
      </div>
    );
  }
}
