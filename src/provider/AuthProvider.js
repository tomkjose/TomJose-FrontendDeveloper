import React, { createContext, useContext, useEffect, useState } from "react";
import { apiLogin, apiSignUp } from "../api";
import { setLocalStorge } from "../utils/helpper";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user.email);
      }
    }
    getUser();
  }, []);

  const login = async (email, password) => {
    const response = await apiLogin(email, password);
    if (response) {
      setLocalStorge(response);
      setUser(response.email);
      return user;
    }
  };

  const signup = async (name, email, password) => {
    const response = await apiSignUp(email, password);
    if (response) {
      setUser(response.email);
      return user;
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
