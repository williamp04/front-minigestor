import { Paper, Typography, Box } from "@mui/material";

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 420,
        p: 4,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        mb={1}
      >
        MINI GESTOR
      </Typography>

      <Typography
        variant="body1"
        fontWeight={600}
        mb={3}
      >
        {title}
      </Typography>

      {children}

      {subtitle && (
        <Box mt={3}>
          <Typography variant="body2">
            {subtitle}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default AuthCard;
