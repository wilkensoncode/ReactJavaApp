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
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    // console.log("user", USER);
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
  // add a new todo
  addTodo() {
    //-1 to indicate this is a new todo
    this.props.history.push(`/todos/-1`);
  }

  //update a todo
  updateTodo(id) {
    this.props.history.push(`/todos/${id}`);
  }

  //detete a todo
  deleteTodo(id) {
    //prettier-ignore
    TodoDataService.deleteTodo(USER, id)
    .then(() =>  this.setState({deleteTodoMes:`Successfully Delete todo ${id}`}))
    this.refreshTodos();
  }

  render() {
    return (
      <div>
        <h1>Personal Task</h1>
        {/* delte successful message to user */}
        {this.state.deleteTodoMes && (
          <div className=" alert alert-success">{this.state.deleteTodoMes}</div>
        )}

        <div className="container">
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Is completed</th>
                <th scope="col">Target date</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
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
                      className="btn btn-warning btn-sm"
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
          <div className="bg-dark">
            <button className="btn btn-success btn-sm" onClick={this.addTodo}>
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
