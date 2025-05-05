import React, { useState } from 'react'


function Controlledcomponent() {
    const[name,setName] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
  return (
    <div>
        {/* <form action="" method='get'> */}
            <input className='border-1' type='text' value={name} onChange={(e)=>setName(e.target.value)}  placeholder='enter name' />
            <br /><br/>
            <input className='border-1'  type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='enter password' />
            <br /><br/>
            <input className='border-1' type='text' value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
            <br /><br/>
            <button>submit</button>
            <br /><br/>
            <button onClick={()=>{setName("");setEmail("")}}>clear</button>

            <h1>{name}</h1>
            <h1>{password}</h1>
            <h1>{email}</h1>



        {/* </form> */}

    </div>
  )
}

export default Controlledcomponent;