import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import AuthLayout from "../../components/Auth/AuthLayout";
import AuthCard from "../../components/Auth/AuthCard";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Log in to continue"
        subtitle={
          <>
            Don’t have an account?{" "}
            <Link component={RouterLink} to="/register">
              Sign up
            </Link>
          </>
        }
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
