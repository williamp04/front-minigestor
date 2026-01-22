import { Box, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import UserAvatar from "../common/UserAvatar";

const UserCard = ({ user, onDoubleClick }) => {
  const tasks = useSelector((state) => state.tasks.tasks || []);

  const userTasks = tasks.filter((task) => task.assigned?.id === user.id);

  const totalTasks = userTasks.filter(
    (t) => t.task_status === "pending" || t.task_status === "in_progress"
  ).length;
const doneTask = userTasks.filter(
  (t) => t.task_status === "done"
).length;

  return (
    <Box
      onDoubleClick={() => onDoubleClick?.(user)}
      sx={{
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Stack spacing={1} alignItems="center">
        <UserAvatar user={user} size="lg" />

        <Typography fontWeight="bold">
          {user.name} {user.last_name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {totalTasks} Tasks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doneTask} Done Task
        </Typography>

        <Typography
          variant="caption"
          sx={{
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: user.role === "admin" ? "error.light" : "primary.light",
            color: "white",
          }}
        >
          {user.role}
        </Typography>
      </Stack>
    </Box>
  );
};

export default UserCard;
