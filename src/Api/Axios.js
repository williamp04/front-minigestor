import axios from "axios";
import { store } from "../store";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL_BACK,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  let token = store.getState().auth.token;

  if (!token) {
    token = localStorage.getItem("token");
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
