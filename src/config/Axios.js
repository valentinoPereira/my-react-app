import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 1000,
  headers: {
    token: "1"
  }
});

export default axiosInstance;