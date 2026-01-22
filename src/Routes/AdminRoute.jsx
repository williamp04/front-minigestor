import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Usuario logueado pero NO admin → 401
  if (user?.role !== "admin") {
    return <Navigate to="/notfound" replace state={{ unauthorized: true }} />;
  }

  return <Outlet />;
};

export default AdminRoute;
