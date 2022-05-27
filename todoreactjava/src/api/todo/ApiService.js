import axios from "axios";

class ApiService {
  executeApiService() {
    return axios.get("http://localhost:8080/hello");
  }

  executeApiBeanService() {
    return axios.get("http://localhost:8080/hello-bean");
  }

  executeApiPathVeriableService(name) {
    let username = "user";
    let password = "password";

    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

    return axios.get(`http://localhost:8080/hello/path-variable/${name}`, {
      headers: {
        authorization: basicAuthHeader,
      },
    });
  }
}

export default new ApiService();
