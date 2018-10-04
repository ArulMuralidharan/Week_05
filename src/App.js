import React, { Component } from "react";
import update from 'react-addons-update'; // ES6
var update = require('react-addons-update'); // ES5 with npm

class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ]
  };

  handleDelete = event => {
    var newTodoList = [...this.state.todos];
    var index = newTodoList.indexOf(event.target.value);
    newTodoList.splice(index, 1);
    this.setState({todos: newTodoList});
  };

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  handleEdit = event => {
    var newTodoList = [...this.state.todos];
    var index = newTodoList.indexOf(event.target.value);
    this.setState({
      todos: update(this.state.items, {index: {name: {$set: event.target.value}}})
    });
  }

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <div>
            <li key={todo}>
              {todo + " "}
              <button  value={todo} onClick={this.handleDelete}>X</button>

              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.newTodo}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}> + </button>
              </form>

            </li>
          </div>
        ))}

        <form onSubmit={this.handleEdit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}> + </button>
        </form>
      </div>
    );
  }
}

export default App;
