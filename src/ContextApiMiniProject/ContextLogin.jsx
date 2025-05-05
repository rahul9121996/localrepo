import { useContext, useState } from "react";
import { AuthContext } from "./CreateContextApi";
// import { useAuth } from "./AuthContext";


  const useAuth = () => useContext(AuthContext);

const ContextLogin = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return ( 
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button 

          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ContextLogin;
