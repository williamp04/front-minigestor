import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  if (!user) return null;

  const icons = {
    Board: <DashboardIcon />,
    Users: <GroupIcon />,
    Config: <SettingsIcon />,
  };

  const menuItems = user.role === "admin"
    ? [
        { label: "Board", path: "/dashboard" },
        { label: "Users", path: "/listUser" },
        { label: "Config", path: "/settings/profile" },
      ]
    : [
        { label: "Board", path: "/dashboard" },
        { label: "Config", path: "/settings/profile" },
      ];

  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #e0e0e0",
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={3}>
        Mini Gestor
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
          >
            <ListItemIcon>{icons[item.label]}</ListItemIcon>
            <ListItemText primary={item.label === "Config" ? "Configuración" : item.label} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
};

export default Sidebar;
