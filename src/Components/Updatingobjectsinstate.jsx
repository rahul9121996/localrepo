// updating object in state:-
import React, { useState } from 'react'

function Updatingobjectsinstate() {
    const[data,setData]=useState({
        name:"rahul",
        address:{
            city:'delhi',
            country:'india'
        }
    })
    const handleName=(val)=>{
        data.name=val;
        setData({...data}) //return new object 
        
        
    }
    const handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}})
        
    }
    
  return (
    <div>
        <h1>updating object in state</h1>
        <h1>name:{data.name}</h1>
        <h1>city:{data.address.city}</h1>
        <h1>country:{data.address.country}</h1>
        <br />
        <input className='border-2' type="text" placeholder='update name' onChange={(event)=>handleName(event.target.value)} />
        <input className='border-2' type="text" placeholder='update city' onChange={(event)=>handleCity(event.target.value)} />

    </div>
  )
}

export default Updatingobjectsinstate