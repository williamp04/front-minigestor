import {
  Box,
  Typography,
  Avatar,
  Stack,
  Divider,
  Select,
  MenuItem,
  Paper,
  Modal,
  Backdrop,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import KanbanColumn from "../Dashboard/KanbanColumn";
import TaskPreview from "../Task/TaskPreview";
import TaskForm from "../Forms/TaskForm";
import { updateUserProfile } from "../../Api/Users.api";

const UserDetailModalContent = ({ user }) => {
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const authUser = useSelector((state) => state.auth.user);

  const isAdmin = authUser?.role === "admin";

  const [role, setRole] = useState(user.role);

  const handleRoleChange = async (newRole) => {
    setRole(newRole);
    try {
      await updateUserProfile(user.uuid, { role: newRole });
    } catch (error) {
      console.error("Error actualizando rol:", error);
      setRole(user.role);
    }
  };

  const userTasks = tasks.filter((task) => task.assigned?.id === user.id);

  const columns = [
    { key: "pending_assigned", title: "Pending" },
    { key: "in_progress", title: "In Progress" },
    { key: "done", title: "Done" },
  ];

  const getColumnTasks = (colKey) =>
    userTasks.filter((task) => {
      switch (colKey) {
        case "pending_assigned":
          return task.task_status === "pending";
        case "in_progress":
          return task.task_status === "in_progress";
        case "done":
          return task.task_status === "done";
        default:
          return false;
      }
    });

  const [selectedTask, setSelectedTask] = useState(null);
  const [anchorRect, setAnchorRect] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskClick = (task, element) => {
  if (!element) return;

  const rect = element.getBoundingClientRect();
  setSelectedTask(task);
  setAnchorRect(rect);
};


  const handleTaskDoubleClick = (task) => {
    setEditingTask(task);
    setSelectedTask(null);
  };

  const handleClosePreview = () => {
    setSelectedTask(null);
    setAnchorRect(null);
  };

  const handleCloseEdit = () => {
    setEditingTask(null);
  };

  const handleSubmitEdit = (updatedData) => {
    console.log("Datos editados:", updatedData);
    handleCloseEdit();
    handleClosePreview();
  };

  return (
    <Box
      sx={{
        width: { xs: "90vw", md: 1100 },
        minHeight: 550,
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: 3,
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Avatar sx={{ width: 80, height: 80 }}>{user.name[0]}</Avatar>

          <Typography fontWeight="bold">
            {user.name} {user.last_name}
          </Typography>

          {/* 🔹 Rol editable solo si soy admin */}
          {isAdmin ? (
            <Select
              size="small"
              fullWidth
              value={role}
              onChange={(e) => handleRoleChange(e.target.value)}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Role: {role}
            </Typography>
          )}

          <Divider flexItem />

          {/* ================= CONTADORES ================= */}
          <Stack spacing={1} width="100%">
            <Typography variant="body2">
              Pending:{" "}
              <b>
                {userTasks.filter((t) => t.task_status === "pending").length}
              </b>
            </Typography>
            <Typography variant="body2">
              In Progress:{" "}
              <b>
                {userTasks.filter((t) => t.task_status === "in_progress").length}
              </b>
            </Typography>
            <Typography variant="body2">
              Done:{" "}
              <b>{userTasks.filter((t) => t.task_status === "done").length}</b>
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      {/* ================= KANBAN ================= */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Tasks de {user.name}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {columns.map((col) => (
            <KanbanColumn
              key={col.key}
              title={col.title}
              statusKey={col.key}
              tasks={getColumnTasks(col.key)}
              user={authUser} // 🔹 usuario logueado para filtrar permisos
              onTaskClick={handleTaskClick}
              onTaskDoubleClick={handleTaskDoubleClick}
            />
          ))}
        </Box>
      </Box>

      {/* ================= PREVIEW ================= */}
      {selectedTask && anchorRect && (
        <TaskPreview
          task={selectedTask}
          anchorRect={anchorRect}
          onClose={handleClosePreview}
          onEdit={handleTaskDoubleClick}
        />
      )}

      {/* ================= EDIT TASK MODAL ================= */}
      <Modal open={!!editingTask} onClose={handleCloseEdit}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            minWidth: 400,
          }}
        >
          {editingTask && (
            <TaskForm
              initialData={editingTask}
              users={useSelector((state) => state.users.list || [])}
              onSubmit={handleSubmitEdit}
              onCancel={handleCloseEdit}
            />
          )}
        </Box>
      </Modal>

      {/* ================= BACKDROP ================= */}
      <Backdrop open={!!selectedTask} onClick={handleClosePreview} sx={{ zIndex: 1200 }} />
    </Box>
  );
};

export default UserDetailModalContent;
