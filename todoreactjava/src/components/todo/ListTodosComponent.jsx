import React, { Component } from "react";

import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService";

// retrieve user logged in / username
const USER = AuthenticationService.getUserLoggedIn();

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      deleteTodoMes: null,
    };

    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
  }

  componentDidMount() {
    //@param check that user is logged in and set the state on load
    this.refreshTodos();
  }

  // retrieveing all the todos and set the state
  refreshTodos() {
    //prettier-ignore
    TodoDataService.retrieveAllTodos(USER)
    .then((res) =>
    this.setState({ todos: res.data })
    );
  }

  //update a todo
  updateTodo(id) {
    //prettier-ignore
    console.log(id);
    this.props.history.push(`/todos/${id}`);
  }

  //detet a todo
  deleteTodo(id) {
    //prettier-ignore
    TodoDataService.deleteTodo(USER, id)
    .then(() =>  this.setState({deleteTodoMes:`Successfully Delete todo ${id}`}))
    this.refreshTodos();
  }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        {/* delte successful message to user */}
        {this.state.deleteTodoMes && (
          <div className=" alert alert-success">{this.state.deleteTodoMes}</div>
        )}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>target date</th>
                <th>is completed</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.updateTodo(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
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
