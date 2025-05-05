import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./CreateContextApi";

const useAuth3=()=>useContext(AuthContext)


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth3();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;