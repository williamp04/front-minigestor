import { useState } from "react";
import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import UserAvatar from "../common/UserAvatar";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  if (!user) return null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box
      sx={{
        height: 64,
        borderBottom: "1px solid #e0e0e0",
        px: { xs: 2, sm: 3 },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton size="small">
          <NotificationsIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} size="small">
          <UserAvatar user={user} size="sm" />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              navigate("/settings/profile");
            }}
          >
            Configuración
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              handleLogout();
            }}
          >
            Cerrar sesión
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
