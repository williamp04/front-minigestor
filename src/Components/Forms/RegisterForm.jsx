import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/slices/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await api.post("/register", form);

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
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField label="Nombre" name="name" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Apellido" name="last_name" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Contraseña" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Confirmar contraseña" name="password_confirmation" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Registrarse
      </Button>
    </Box>
  );
};

export default RegisterForm;
