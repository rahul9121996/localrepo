import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function AddApiData1() {
  const[name,setName] = useState()
  const[age,setAge] = useState()
  const[email,setEmail] = useState()

  const navigate=useNavigate();

// use of post api method
  const createUser=async ()=>{
    console.log(name,age,email);
    const url="http://localhost:3000/users";
    let response =await fetch(url,{
      method:"post",
      body:JSON.stringify({name,age,email})//convert js object into a json object

    });
    response=await response.json() //convert json object into js object
    

   if(response){
    alert("new data added")
    navigate("/")
   }
   
    
  } 
  
  
  return (
    <div className='text-center'>
     <h1> Add New User</h1>
     <br />
     <input type="text" onChange={(event)=>setName(event.target.value)}  placeholder='Enter Name'/>
     <br />
     <br />
     <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder='Enter Age' />
     <br />
     <br />
     <input type="text" onChange={(event)=>setEmail(event.target.value)}  placeholder='Enter Email' />
     <br /><br />
     <button onClick={createUser}>Add User</button>
     
     </div>
  )
}

export default AddApiData1