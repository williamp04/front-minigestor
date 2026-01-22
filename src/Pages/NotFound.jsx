import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isUnauthorized = location.state?.unauthorized;

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h1" fontSize={80} fontWeight="bold">
        {isUnauthorized ? "401" : "404"}
      </Typography>

      <Typography variant="h4" mb={2}>
        {isUnauthorized ? "No autorizado" : "Página no encontrada"}
      </Typography>

      <Typography variant="body1" mb={4}>
        {isUnauthorized
          ? "No tienes permisos para acceder a esta página."
          : "La ruta que intentas visitar no existe."}
      </Typography>

      <Button variant="contained" onClick={() => navigate("/login")}>
        Ir al login
      </Button>
    </Box>
  );
};

export default NotFound;
