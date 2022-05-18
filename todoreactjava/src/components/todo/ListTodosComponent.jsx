import React, { Component } from "react";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        //prettier-ignore
        { id: 1, description: "Learn react",done: false, targetDate: new Date() },
        { id: 2, description: "Learn JS", done: false, targetDate: new Date() },
        {
          id: 3,
          description: "Learn Java",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
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
