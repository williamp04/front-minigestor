import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  if (!user) return null;

  const icons = { Board: <DashboardIcon />, Users: <GroupIcon />, Config: <SettingsIcon /> };

  const menuItems =
    user.role === "admin"
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
        width: { xs: 60, sm: 240 },
        borderRight: "1px solid #e0e0e0",
        p: { xs: 1, sm: 2 },
      }}
    >
      {/* Logo */}
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Mini Gestor
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": { backgroundColor: "action.selected" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: { xs: 0, sm: 40 },
                justifyContent: "center",
              }}
            >
              {icons[item.label]}
            </ListItemIcon>
            <ListItemText
              primary={item.label === "Config" ? "Configuración" : item.label}
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />
    </Box>
  );
};

export default Sidebar;
