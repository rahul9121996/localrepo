import React, { useEffect, useRef, useState } from "react";

export default function NameLoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [data,setData]=useState([])

  const handleLogin = (e) => {
    e.preventDefault();
     setIsLoggedIn(true);
 
  };

//start api logic

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    try{
      const response=await fetch("https://jsonplaceholder.typicode.com/posts");
      const result=await response.json();
      setData(result)

    }catch(error){
        console.log("fetched error: ",error);    
    }
    
  }

// end api logic


// useRef logic
const firstNameRef=useRef();
const lastNameRef=useRef();

const handleSave = () => {
  if (firstNameRef.current && lastNameRef.current) {
    firstNameRef.current.focus();
    setTimeout(() => {
      lastNameRef.current.focus();
    }, 100);
  }
};

  



  return (
    <>
    {/* form data */}
    <div className="flex items-center justify-center ">
      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <input
            type="text"
            ref={firstNameRef}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="text"
            ref={lastNameRef}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <button onClick={handleSave}  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Save</button>
          
        </form>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800">Welcome! {firstName} {lastName}</h2>
        </div>
      )}
    </div>

    {/* fetching api */}

    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Fetched Posts</h2>
        <ul className="list-disc pl-5 space-y-1">
          {data.slice(0, 7).map((post) => (
            <li key={post.id} className="text-gray-700">{post.title}</li>
          ))}
        </ul>
      
    </div>

    
    </>
    
  );
}
