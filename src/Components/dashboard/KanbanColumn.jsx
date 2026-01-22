import { Box, Typography, Stack, Skeleton } from "@mui/material";
import TaskCard from "../Task/TaskCard";
import EmptyState from "./EmptyState";

const KanbanColumn = ({ title, tasks, onTaskClick, onTaskDoubleClick }) => {
  if (!tasks) return <Skeleton variant="rectangular" height={200} />;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        p: { xs: 1, sm: 2 },
        minHeight: { xs: 'auto', sm: '60vh', md: '70vh' },
        boxShadow: 4,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        mb={2}
        textAlign="center"
      >
        {title}
      </Typography>

      <Stack spacing={2}>
        {tasks.length === 0 ? (
          <EmptyState text="No hay tareas" />
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={onTaskClick}
              onDoubleClick={onTaskDoubleClick}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};

export default KanbanColumn;
