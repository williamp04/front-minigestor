import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL_BACK,
  headers: {
    "Content-Type": "application/json",
  },
});

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
// Agregar token en cada petición si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

>>>>>>> Stashed changes
>>>>>>> Stashed changes
export default api;
=======
=======
// Agregar token en cada petición si existe
>>>>>>> Stashed changes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
