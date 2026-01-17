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
  
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {user?.name?.[0]}
          </Avatar>
        </Box>
      </Box>
    );
  };
  
  export default Header;
  