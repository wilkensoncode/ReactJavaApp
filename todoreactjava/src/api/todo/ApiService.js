import axios from "axios";

class ApiService {
  executeApiService() {
    return axios.get("http://localhost:8080/hello");
  }

  executeApiBeanService() {
    return axios.get("http://localhost:8080/hello-bean");
  }

  executeApiPathVeriableService(name) {
    return axios.get(`http://localhost:8080/hello/path-variable/${name}`);
  }
}

export default new ApiService();
