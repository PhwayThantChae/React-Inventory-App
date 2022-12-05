import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const productAxios = axios.create({
  baseURL: 'http://localhost:8083'
});

const categoryAxios = axios.create({
  baseURL: 'http://localhost:8082'
});

export {
  productAxios,
  categoryAxios
};