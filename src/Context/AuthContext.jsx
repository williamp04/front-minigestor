<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { uuid, name, email }
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }

    setLoading(false);
  }, []);
<<<<<<< Updated upstream
  
>>>>>>> Stashed changes
=======
import { createContext, useContext, useEffect, useState } from "react";
>>>>>>> Stashed changes

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }

    setLoading(false);
  }, []);
>>>>>>> Stashed changes

=======

>>>>>>> Stashed changes
  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <AuthContext.Provider value={{ user, login, logout }}>
=======
<<<<<<< Updated upstream
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
