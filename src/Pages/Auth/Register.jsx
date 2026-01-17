import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";
import AuthLayout from "../../components/Auth/AuthLayout";
import AuthCard from "../../components/Auth/AuthCard";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Sign up to continue"
        subtitle={
          <>
            Already have an account?{" "}
            <Link component={RouterLink} to="/login">
              Log in
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
