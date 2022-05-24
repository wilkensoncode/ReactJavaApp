import axios from "axios";

const URL = "http://localhost:8080/users";

class TododataService {
  retrieveAllTodos(user) {
    return axios.get(`${URL}/${user}/todos`);
  }

  retrieveTodo(user, id) {
    return axios.get(`${URL}/${user}/todos/${id}`);
  }

  deleteTodo(user, id) {
    return axios.delete(`${URL}/${user}/todos/${id}`);
  }

  updateTodo(user, id, todo) {
    return axios.put(`${URL}/${user}/todos/${id}`, todo);
  }
  createTodo(user, todo) {
    return axios.post(`${URL}/${user}/todos`, todo);
  }
}

export default new TododataService();
