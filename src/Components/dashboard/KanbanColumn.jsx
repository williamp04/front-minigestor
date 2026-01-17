import {
    Paper,
    Typography,
    Button,
    Box,
  } from "@mui/material";
  import AddIcon from "@mui/icons-material/Add";
  
  const KanbanColumn = ({ title }) => {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 2,
          minWidth: 250,   // ancho fijo
          height: 100,     // altura más pequeña para ser rectángulo
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          backgroundColor: "#fafafa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      
      >
        <Typography variant="subtitle1" fontWeight="bold" mb={6}>
          {title}
        </Typography>
  
        {/* Placeholder para tareas */}
        <Box sx={{ mb: 2, color: "text.secondary" }}>
          Sin tareas
        </Box>
  
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="text"
          sx={{ justifyContent: "flex-start" }}
        >
          Crear
        </Button>
      </Paper>
    );
  };
  
  export default KanbanColumn;
  