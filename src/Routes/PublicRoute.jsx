<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuthContext();

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
=======
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const PublicRoute = () => {
  const { user, loading, logout } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      
    }
  }, [location.pathname, logout]);

  if (loading) return null;

  if (user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
>>>>>>> Stashed changes
};

export default PublicRoute;
=======
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const PublicRoute = () => {
  const { user, loading, logout } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      
    }
  }, [location.pathname, logout]);

  if (loading) return null;

  if (user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default PublicRoute;
