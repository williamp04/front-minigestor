import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateMyProfile } from "../../api/Users.api";
import { updateUser } from "../../store/slices/AuthSlice";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
      });
    }
  }, [user]);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name: form.name,
        last_name: form.last_name,
        email: form.email,
      };

      if (form.password) {
        payload.password = form.password;
        payload.password_confirmation = form.password_confirmation;
      }

      const res = await updateMyProfile(payload);

      dispatch(updateUser(res.user));
      setSuccess("Perfil actualizado correctamente");
      setError("");
    } catch (err) {
      setError("Error al actualizar perfil");
      setSuccess("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <TextField label="Nombre" value={form.name} onChange={handleChange("name")} />
        <TextField label="Apellido" value={form.last_name} onChange={handleChange("last_name")} />
        <TextField label="Email" value={form.email} onChange={handleChange("email")} />

        <TextField
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange("password")}
        />

        <TextField
          label="Confirmar Password"
          type="password"
          value={form.password_confirmation}
          onChange={handleChange("password_confirmation")}
        />

        <Button type="submit" variant="contained">
          Guardar
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileForm;
