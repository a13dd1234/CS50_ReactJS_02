import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

let id = 0;
let Unchecked = 0;
const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}>Delete</button>
    <span> {props.todo.text}</span>
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
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id != id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        if (todo.checked) Unchecked--;
        else Unchecked++;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  uncheckedTodo(id) {}
  render() {
    return (
      <div>
        <div>Todo Count: {this.state.todos.length}</div>
        <div>Unchecked Todo Count: {Unchecked} </div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
