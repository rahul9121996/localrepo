import React, { useState } from 'react'


function Handlingevents() {
    const[name,setName] = useState("ravi")

    const handleName=()=> {
        setName("rahul")
    }

    // const [count,setCount] = useState(0)
    const [form,setForm] =useState({email: "",phone: ""})

    const handleChange =(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
        console.log(form)
    } 


  return (
    <div>
        <h1>{name}</h1>
        <h1>Email: {form.email}</h1>
        <h1>Phone: {form.phone}</h1>
        <button className='bg-blue-900' onClick={handleName}> change value</button>
        <input type='text' name='email' value={form.email} onChange={handleChange}  className='border p-2 block my-2'/>
        <input type='text' name='phone' value={form.phone} onChange={handleChange}  className='border p-2 block my-2'/>


        
    </div>
  )
}

export default Handlingevents;