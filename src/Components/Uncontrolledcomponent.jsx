import React, { useRef } from 'react'

function Uncontrolledcomponent() {

    const userRef=useRef();
    const passwordRef=useRef();

    const handleForm = (event)=>{
        event.preventDefault();
    const user=document.querySelector("#user").value 
    const password=document.querySelector("#password").value
    console.log(user,password )   

    }
    const handleFormRef=(event)=>{
        event.preventDefault()
       const user=userRef.current.value;
       const password=passwordRef.current.value;

        console.log("handleFormRef:",user,password);
        
    }

  return (
    <div >
        <h1>uncontrolled component by query selector</h1>
        <form className='mb-4'  action=""  method='post' onSubmit={handleForm} >
            <input className='border-1' type='text' id='user' placeholder='Enter user name' />
            <br/><br/>
            <input className='border-1' type='password' id="password" placeholder='Enter password' />
            <br/><br/>
            <button>submit</button>

        </form>
        <hr/>
        
        <h1>uncontrolled component by useRef</h1>
        <form className='mb-4'  action=""  method='post' onSubmit={handleFormRef} >
            <input className='border-1' ref={userRef} type='text'  placeholder='Enter user name' />
            <br/><br/>
            <input className='border-1' ref={passwordRef} type='password'  placeholder='Enter password' />
            <br/><br/>
            <button>submit</button>

        </form>


    </div>
  )
}

export default Uncontrolledcomponent