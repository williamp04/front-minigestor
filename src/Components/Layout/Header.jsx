<<<<<<< Updated upstream
<<<<<<< Updated upstream
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    TextField,
  } from "@mui/material";
  import NotificationsIcon from "@mui/icons-material/Notifications";
  import { useAuthContext } from "../../context/AuthContext";
  
  const Header = () => {
    const { user } = useAuthContext();
  
    return (
      <Box
        sx={{
          height: 64,
          borderBottom: "1px solid #e0e0e0",
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Search */}
        <TextField
          size="small"
          placeholder="Buscar..."
          sx={{ width: 300 }}
        />
  
        {/* Right actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
  
=======
import { useState } from "react";
import { Box, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        height: 64,
        borderBottom: "1px solid #e0e0e0",
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton onClick={handleClick}>
>>>>>>> Stashed changes
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {user?.name?.[0]}
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/settings/profile");
            }}
          >
            Configuracion
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
              navigate("/login");
            }}
          >
            Cerrar sesión
          </MenuItem>
        </Menu>
      </Box>
<<<<<<< Updated upstream
    );
  };
  
  export default Header;
  
=======
<<<<<<< Updated upstream
=======
import { useState } from "react";
import { Box, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        height: 64,
        borderBottom: "1px solid #e0e0e0",
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton onClick={handleClick}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {user?.name?.[0]}
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              navigate("/settings/profile");
            }}
          >
            Configuracion
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
              navigate("/login");
            }}
          >
            Cerrar sesión
          </MenuItem>
        </Menu>
      </Box>
=======
>>>>>>> Stashed changes
    </Box>
  );
};

export default Header;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
