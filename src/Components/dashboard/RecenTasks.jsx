import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
  } from "@mui/material";
  
  const tasks = [
    { title: "Diseñar login", status: "Completada" },
    { title: "Crear API de tareas", status: "En progreso" },
    { title: "Conectar dashboard", status: "Pendiente" },
  ];
  
  const RecentTasks = () => {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" mb={2}>
          Actividad reciente
        </Typography>
  
        <List>
          {tasks.map((task, index) => (
            <div key={task.title}>
              <ListItem disablePadding>
                <ListItemText
                  primary={task.title}
                  secondary={task.status}
                />
              </ListItem>
              {index < tasks.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  };
  
  export default RecentTasks;
  