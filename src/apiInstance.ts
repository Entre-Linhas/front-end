import axios from "axios";
//const baseURL = "http://localhost:5000/api"
const baseURL = "https://dgc6qt23wamgi.cloudfront.net/api"
const api = axios.create({
  baseURL
});

export default api;