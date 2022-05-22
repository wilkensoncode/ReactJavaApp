import axios from "axios";
class ApiService {
  executeApiService() {
    console.log("api service execute");
    return axios.get("http://localhost:8080/hello-bean");
  }
}

export default new ApiService();
