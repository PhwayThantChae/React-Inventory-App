import axios from "axios";

const inventoryAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  },
  baseURL: 'http://localhost:8081'
})

export {
  inventoryAxios
};