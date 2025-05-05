import React, { useState } from 'react'

function Derivedstate() {
    const[users,setUsers]=useState([]);
    const[user,setUser]=useState('');

    
    const handleAddUsers=()=>{
        setUsers([...users,user])
    }

    // below is derived state which is derived from other state values.
    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length
  return (
    <div>
        <h2>Total User:{total}</h2>
        <h2>Last user:{last}</h2>
        <h2>Unique Total user:{unique}</h2>
        <input className='border-1' type="text" onChange={(event)=>setUser(event.target.value)} placeholder='add new user' />
        <button onClick={handleAddUsers}>Add user</button>
        {
            users.map((item,index)=>(
                <h4 key={index}>{item}</h4>
            ))
        }
    </div>
  )
}

export default Derivedstate