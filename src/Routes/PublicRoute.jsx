<<<<<<< Updated upstream
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuthContext();

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
=======
<<<<<<< Updated upstream
=======
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const PublicRoute = () => {
  const { user, loading, logout } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    // 🔥 si entra a login/register → cerrar sesión
    if (location.pathname === "/login" || location.pathname === "/register") {
      logout();
    }
  }, [location.pathname]);

  if (loading) return null;

  return <Outlet />;
};

export default PublicRoute;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
