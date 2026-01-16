import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuthContext();

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
