import axios from "axios";

class TododataService {
  retrieveAllTodos(user) {
    return axios.get(`http://localhost:8080/users/${user}/todos`);
  }
}

export default new TododataService();
