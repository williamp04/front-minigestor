<<<<<<< Updated upstream
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useAuthContext();
=======
<<<<<<< Updated upstream
=======
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
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
>>>>>>> Stashed changes

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
