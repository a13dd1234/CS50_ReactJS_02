import React from "react";

import { render } from "react-dom";

// import "./styles.css";
import Hello from "./Hello";

let id = 0;

const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onChange={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }

  addTodo() {
    const text = prompt("Todo Text Please!");
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id++,
          text: text,
          checked: false
        }
      ]
    });
  }
}

// export default function App() {
//   return (
//     <div className="App">
//       <h1>App.js</h1>
//       <hr />
//       <Hello />
//     </div>
//   );
// }
