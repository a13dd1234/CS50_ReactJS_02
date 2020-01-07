import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button>Delete</button>
    <span> {props.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Todo text Please!");
    this.setState({
      todos: [...this.state.todos, { text: text }]
    });
  }

  render() {
    return (
      <div>
        <button>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
