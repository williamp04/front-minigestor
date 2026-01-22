import { Box } from "@mui/material";
import KanbanColumn from "./KanbanColumn";
import { useSelector } from "react-redux";

const KanbanBoard = ({ tasks, onTaskClick, onTaskDoubleClick }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) return null;

  const allColumns = [
    { key: "pending_unassigned", title: "Pending unassigned", adminOnly: true },
    { key: "pending_assigned", title: "Pending assigned" },
    { key: "in_progress", title: "In progress" },
    { key: "done", title: "Done" },
  ];

  const visibleColumns = allColumns.filter(col => !col.adminOnly || user.role === "admin");

  const getColumnTasks = (colKey) =>
    tasks.filter(task => {
      switch (colKey) {
        case "pending_unassigned":
          return task.task_status === "pending" && !task.assigned;
        case "pending_assigned":
          return task.task_status === "pending" && task.assigned;
        case "in_progress":
          return task.task_status === "in_progress";
        case "done":
          return task.task_status === "done";
        default:
          return false;
      }
    });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: `repeat(${visibleColumns.length}, 1fr)`,
        },
        gap: 2,
        mt: 3,
      }}
    >
      {visibleColumns.map(col => (
        <KanbanColumn
          key={col.key}
          title={col.title}
          statusKey={col.key}
          tasks={getColumnTasks(col.key)}
          user={user}
          onTaskClick={onTaskClick}
          onTaskDoubleClick={onTaskDoubleClick}
        />
      ))}
    </Box>
  );
};

export default KanbanBoard;
