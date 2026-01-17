<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Box, Typography } from "@mui/material";
=======
import { Box, TextField, Typography } from "@mui/material";
>>>>>>> Stashed changes
=======
import { Box, TextField, Typography } from "@mui/material";
>>>>>>> Stashed changes
import KanbanBoard from "../../components/dashboard/KanbanBoard";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Mi espacio Kanban
      </Typography>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
      {/* Search */}
      <TextField
          size="small"
          placeholder="Buscar..."
          sx={{ width: 500 }}
        />

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <KanbanBoard />
    </Box>
  );
};

export default Dashboard;
