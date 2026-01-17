import { Box } from "@mui/material";
import KanbanColumn from "./KanbanColumn";

const tasks = [
  { title: "Tarea 1" },
  { title: "Tarea 2" },
  { title: "Tarea 3" },
];

const KanbanBoard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        p: 1,
      }}
    >
      {tasks.map((task, index) => (
        <KanbanColumn key={index} title={task.title} />
      ))}
    </Box>
  );
};

export default KanbanBoard;
