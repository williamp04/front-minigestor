import { useState, useEffect } from "react";
import api from "../api/Axios";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("❌ No hay token en localStorage");
          setUsers([]);
          return;
        }

        const response = await api.get("/users");

        console.log("✅ Usuarios recibidos:", response.data);

        setUsers(response.data);
      } catch (err) {
        console.error(
          "❌ Error al traer usuarios:",
          err.response?.status,
          err.response?.data
        );

        setError(err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
