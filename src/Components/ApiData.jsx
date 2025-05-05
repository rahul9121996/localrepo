import React, { useEffect, useState } from 'react'

function ApiData() {
    const [userData,setUserData]=useState([])
    useEffect(()=>{
        getUserData();
    },[])
    async function getUserData(){
        const url="https://dummyjson.com/users";
        let response=await fetch(url)
        response=await response.json()
        
        setUserData(response.users) //remove extra part of api only fetch user part

    }
    // console.log(userData);

  return (
    <div>
        <h1>Fetch data from API</h1>
        {
          userData && userData.map((user)=>(
            <h1>{user.firstName}</h1>


          ))
        }

    </div>
  )
}

export default ApiData