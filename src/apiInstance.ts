
import axios from "axios";

// const baseURL = "http://localhost:5000/api"
const baseURL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL
});

export default api;