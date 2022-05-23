import React, { Component } from "react";

import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    //@param user
    TodoDataService.retrieveAllTodos(AuthenticationService.userIsLoggedIn).then(
      (res) => this.setState({ todos: res.data })
    );
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>target date</th>
                <th>is completed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
