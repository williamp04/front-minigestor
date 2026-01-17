import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Dashboard from "../Pages/Dashboard/Dashboard"; // usar la que tenga la ruta correcta
=======
<<<<<<< Updated upstream
import Dashboard from "../pages/dashboard/Dashboard";
=======
import Dashboard from "../Pages/Dashboard/Dashboard";
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
import Dashboard from "../Pages/Dashboard/Dashboard";
>>>>>>> Stashed changes
import Profile from "../pages/settings/Profile";
import MainLayout from "../components/layout/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
