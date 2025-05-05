import React from 'react'
import { Link, useParams } from 'react-router'

function UserDetails() {
    const paramsData=useParams();
    console.log(paramsData.id);
    
  return (
    <div>
        <h1>User Detail Page</h1>
        <h2>User id is:{paramsData.id}</h2>
        <h1><Link to="/users">Back</Link></h1>
        
    </div>
  )
}

export default UserDetails