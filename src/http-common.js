import axios from "axios";

const inventoryAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
    "username": "admin",
    "password": "admin"
  },
  baseURL: 'http://localhost:8081'
})

export {
  inventoryAxios
};