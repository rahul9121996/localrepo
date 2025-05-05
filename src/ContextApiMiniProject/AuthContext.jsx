import { useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "./CreateContextApi";



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username) => {
    setUser({ name: username });
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


