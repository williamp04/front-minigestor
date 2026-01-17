import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@mui/material";
  import DashboardIcon from "@mui/icons-material/dashboard";
  import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
  import SettingsIcon from "@mui/icons-material/Settings";
  import { NavLink } from "react-router-dom";
  
  const Sidebar = () => {
    return (
      <Box
        sx={{
          width: 240,
          borderRight: "1px solid #e0e0e0",
          p: 2,
        }}
      >
        {/* Logo / App name */}
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Mini Jira
        </Typography>
  
        <List>
          <ListItemButton component={NavLink} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
  
          <ListItemButton component={NavLink} to="/board">
            <ListItemIcon>
              <ViewKanbanIcon />
            </ListItemIcon>
            <ListItemText primary="Kanban" />
          </ListItemButton>
        </List>
  
        <Divider sx={{ my: 2 }} />
  
        <List>
          <ListItemButton component={NavLink} to="/settings/profile">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>
        </List>
      </Box>
    );
  };
  
  export default Sidebar;
  