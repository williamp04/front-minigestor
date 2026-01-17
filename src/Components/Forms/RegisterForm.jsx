import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuthContext } from "../../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const [form, setForm] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await api.post("/register", form);

      const { user, token } = response.data;

      localStorage.setItem("token", token);

      login({
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      navigate("/dashboard");
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        name="name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name?.[0]}
      />

      <TextField
        label="Apellido"
        name="last_name"
        fullWidth
        margin="normal"
        value={form.last_name}
        onChange={handleChange}
        error={!!errors.last_name}
        helperText={errors.last_name?.[0]}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email?.[0]}
      />

      <TextField
        label="Contraseña"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={handleChange}
        error={!!errors.password}
        helperText={errors.password?.[0]}
      />

      <TextField
        label="Confirmar contraseña"
        name="password_confirmation"
        type="password"
        fullWidth
        margin="normal"
        value={form.password_confirmation}
        onChange={handleChange}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={loading}
      >
        Registrarse
      </Button>
    </Box>
  );
};

export default RegisterForm;
