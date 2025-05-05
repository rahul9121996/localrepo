import { useContext } from "react";
// import { useAuth } from "./AuthContext";
import { AuthContext } from "./CreateContextApi";

const useAuth1 = ()=>useContext(AuthContext)
const Profile = () => {
  const { user } = useAuth1();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-2 text-gray-700">Username: {user?.name}</p>
    </div>
  );
  
};

export default Profile;
