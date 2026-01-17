<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
<<<<<<< Updated upstream

const PrivateRoute = () => {
  const { user } = useAuthContext();
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
=======
>>>>>>> Stashed changes
import { CircularProgress, Box } from "@mui/material";

const PrivateRoute = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
