import { Box, Paper } from "@mui/material";
import ProfileForm from "../../components/settings/ProfileForm";

const Settings = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Paper
        sx={{
          p: 4,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <ProfileForm />
      </Paper>
    </Box>
  );
};

export default Settings;
 