import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./CreateContextApi";

const useAuth2=()=>useContext(AuthContext)

const ContextNavbar = () => {
  const { user, logout } = useAuth2();

  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 font-bold">
          Home
        </Link>
        {user && (
          <>
            <Link to="/dashboard" className="text-blue-600">
              Dashboard
            </Link>
            <Link to="/profile" className="text-blue-600">
              Profile
            </Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-100 text-black px-4 py-2 rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default ContextNavbar;
