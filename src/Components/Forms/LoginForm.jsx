import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", form);
      const { user, token } = response.data;

      localStorage.setItem("token", token);

      login({
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      navigate("/dashboard");
    } catch (err) {
      setError("Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={handleChange}
      />

      <TextField
        label="Contraseña"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={handleChange}
      />

      {error && (
        <Box mt={1} color="error.main" fontSize={14}>
          {error}
        </Box>
      )}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default LoginForm;
