import { Box, TextField, MenuItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const DashboardFilters = ({ status, setStatus, search, setSearch, assignee, setAssignee, users = [], onAdd }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
      }}
    >
      {user.role === "admin" && (
        <TextField
          select
          size="small"
          label="Assigner"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          sx={{ minWidth: { xs: '100%', sm: 180 } }}
        >
          <MenuItem value="">Todos</MenuItem>
          {users.map(u => (
            <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>
          ))}
        </TextField>
      )}

      <TextField
        select
        size="small"
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        sx={{ minWidth: { xs: '100%', sm: 160 } }}
      >
        <MenuItem value="">Todos</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="in_progress">In progress</MenuItem>
        <MenuItem value="done">Done</MenuItem>
      </TextField>

      <TextField
        size="small"
        placeholder="Buscar tarea..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: { xs: '100%', sm: 260 } }}
      />

      <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd} sx={{ width: { xs: '100%', sm: 'auto' } }}>
        Nueva Tarea
      </Button>
    </Box>
  );
};

export default DashboardFilters;
