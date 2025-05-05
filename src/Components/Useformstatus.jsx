import React from 'react'
import {useFormStatus} from 'react-dom'

function Useformstatus() {

    const handleSubmit=async()=>{
       await new Promise(res=>setTimeout(res,5000));
        console.log("submit");
        
    }
    function CustomerForm(){
        const{pending}=useFormStatus()
        console.log(pending);
        
        return(
            <div>
            <input className='border-1' type="text" placeholder='Enter name'/>
            <br /><br />
            <input className='border-1' type="password" placeholder='Enter password' />
            <br /><br />

            <button disabled={pending}>{pending?'submitting...':'submit'}</button>
            </div>


        )
    }
  return (
    <div>
        <form action={handleSubmit}>
            <CustomerForm/>
            
        </form>
    </div>
  )
}

export default Useformstatus