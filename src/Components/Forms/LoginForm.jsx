import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/slices/authSlice";
import api from "../../api/axios";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
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
      const { data } = await api.post("/login", form);

      dispatch(
        loginSuccess({
          user: {
            uuid: data.user.uuid,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
          },
          token: data.token,
        })
      );

      navigate("/dashboard");
    } catch {
      setError("Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
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

      {error && <Box color="error.main">{error}</Box>}

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }} disabled={loading}>
        Iniciar sesión
      </Button>
    </Box>
  );
};

export default LoginForm;
