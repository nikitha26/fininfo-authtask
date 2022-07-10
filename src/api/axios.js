import axios from "axios";

const api = axios.create({
  baseURL: "https://ring-ring-food.herokuapp.com",
});
export default api;