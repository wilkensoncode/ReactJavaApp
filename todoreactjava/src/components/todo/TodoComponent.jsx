import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";

import AuthenticationService from "./AuthenticationService";
import TodoDataService from "../../api/todo/TodoDataService";

//retrieve logged in user
const USER = AuthenticationService.getUserLoggedIn();

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };

    this.submitForm = this.submitForm.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    //prettier-ignore
    // if its a new todo no need to call retrieve todo
    if (this.state.id==-1) {
      return
    }
    TodoDataService.retrieveTodo(USER, this.state.id).then((res) =>
      this.setState({
        description: res.data.description,
        targetDate: moment(res.data.targetDate).format("YYYY-MM-DD"),
      })
    );
  }
  // validate form values
  validate(values) {
    let error = {};

    //remove spaces from value
    let formatedValues = values.description.split(" ").join("");

    if (!values.description) {
      error.description = "Enter a Description ";
    } else if (formatedValues.length < 5) {
      error.description = "Enter at least 5 characters in Description ";
    }
    if (!moment(values.targetDate).isValid()) {
      error.targetDate = "Enter a valid target date";
    }

    return error;
  }

  submitForm(values) {
    // prettier-ignore
    const todo ={
      id:this.state.id,
      description:values.description,
      targetDate:values.targetDate
    }

    if (this.state.is === -1) {
      TodoDataService.createTodo(USER, todo).then(() =>
        this.props.history.push(`/todos`)
      );
    } else {
      TodoDataService.updateTodo(USER, this.state.id, todo).then(() =>
        this.props.history.push(`/todos`)
      );
    }
  }

  render() {
    const { description, targetDate } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate }}
            onSubmit={this.submitForm}
            validateOnchange={false}
            validateOnblur={false}
            validate={this.validate}
            // populate form field when update is clicked
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <button className="btn btn-success btn-sm" type="submit">
                  save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
