<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL_BACK,
  headers: {
    "Content-Type": "application/json",
  },
});

<<<<<<< Updated upstream
export default api;
=======
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
