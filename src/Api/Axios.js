import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL_BACK,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
