import { Container, Box, Typography } from "@mui/material";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" mb={2} textAlign="center">
          Crear cuenta
        </Typography>

        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
