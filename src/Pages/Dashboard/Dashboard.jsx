import { Box, Typography } from "@mui/material";
import KanbanBoard from "../../components/dashboard/KanbanBoard";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Mi espacio Kanban
      </Typography>

      <KanbanBoard />
    </Box>
  );
};

export default Dashboard;
