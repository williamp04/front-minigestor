import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
];

const TaskForm = ({ initialData = null, users = [], onSubmit, onCancel }) => {
  const isEditing = Boolean(initialData);
  const { user } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    title: "",
    description: "",
    task_status: "pending",
    user_assigned: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title ?? "",
        description: initialData.description ?? "",
        task_status: initialData.task_status ?? "pending",
        user_assigned: initialData.user_assigned
          ? Number(initialData.user_assigned)
          : user.role === "user"
          ? Number(user.id)
          : "",
      });
    } else if (user.role === "user") {
      setForm((prev) => ({ ...prev, user_assigned: Number(user.id) }));
    }
  }, [initialData, user]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const assignedId =
      user.role === "admin" ? Number(form.user_assigned) || null : Number(user.id);

      const payload = {
        title: form.title.trim(),
        description: form.description,
        task_status: form.task_status,
      };
      
      if (assignedId !== null) {
        payload.user_assigned = assignedId;
      }
      
      onSubmit(payload);
      
  };

  const filteredUsers = users.filter((u) => u.role !== "admin");
const assignedId =
  user.role === "admin" ? Number(form.user_assigned) || null : Number(user.id);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        {/* Título */}
        <TextField
          label="Título"
          value={form.title}
          onChange={handleChange("title")}
          required
          fullWidth
        />

        {/* Descripción */}
        <Box>
          <Typography variant="body2" mb={1} fontWeight={500}>
            Descripción
          </Typography>
          <ReactQuill
            theme="snow"
            value={form.description}
            modules={quillModules}
            formats={quillFormats}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, description: value }))
            }
            style={{ height: 150, marginBottom: 40 }}
          />
        </Box>

        {/* Estado */}
        <TextField
          select
          label="Estado"
          value={form.task_status}
          onChange={handleChange("task_status")}
          fullWidth
        >
          <MenuItem value="pending">Pendiente</MenuItem>
          <MenuItem value="in_progress">En progreso</MenuItem>
          {isEditing && <MenuItem value="done">Completado</MenuItem>}
        </TextField>

        {/* Asignado a */}
        {user.role === "admin" ? (
          <TextField
            select
            label="Asignado a"
            value={form.user_assigned}
            onChange={handleChange("user_assigned")}
            fullWidth
          >
            <MenuItem value="">
              <em>Sin asignar</em>
            </MenuItem>
            {filteredUsers.map((u) => (
              <MenuItem key={u.id} value={u.id}>
                {u.name} {u.last_name}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            label="Asignado a"
            value={`${user.name} ${user.last_name}`}
            disabled
            fullWidth
          />
        )}

        {/* Acciones */}
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} color="inherit">
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            {isEditing ? "Actualizar" : "Crear"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TaskForm;
