import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function EditApiData() {
    const {id} = useParams();

    const navigate=useNavigate();

    const[name,setName] = useState('') 
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const url="http://localhost:3000/users/"+id;


    useEffect(()=>{
        getUserDetails()
        
    },[])
    
    

    const getUserDetails=async ()=>{
        const url="http://localhost:3000/users/"+id;
        let response =await fetch(url);
        response= await response.json();

        setName(response.name)
        setAge(response.age)
        setEmail(response.email)



        console.log(id);
        
    }
    
    const updateUserData=async()=>{
        console.log(name,age,email);
        let response= await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,age,email})
        });
       
        response = await response.json();
        console.log(response);

        if(response){
            alert("user data updated")
            navigate("/")
        }
        
        
    }
    
  return (
    <div className='text-center'>
       <h1>Edit User Details</h1>
       <br />
       <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' />
       <br />
       <br />
       <input type="text" value={age} onChange={(event)=>setAge(event.target.value)}  placeholder='Enter Age'/>
       <br /><br />
       <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email'/>
       <br /><br />
       <button onClick={updateUserData}>Update User</button>
    </div>
  )
}

export default EditApiData