import { registerRequest } from "../api/auth.api";
import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { login } = useAuthContext();

  const register = async (formData) => {
    const response = await registerRequest(formData);

    const { user, token } = response.data;

    localStorage.setItem("token", token);

    login({
      uuid: user.uuid,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  return { register };
};
