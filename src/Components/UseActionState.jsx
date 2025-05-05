import React, { useActionState } from 'react'

const handleSubmit=async(previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');

    await new Promise(res=>setTimeout(res,2000))
    //  console.log("handlesubmit called",name,password);
     if(name && password){
        return{message:'Data Submitted',name,password}
     }else{
        return {error:'failed to submit.Enter proper data',name,password};
        }
     }
    

// by using useActionState hook we can do many action with form like getting form data,disabled submit button or getting current stattus
// of data and can perform validation of form.

function UseActionState() {
    const[data,action,pending] = useActionState(handleSubmit,undefined);
    console.log(data);
    
  return (
    <div>
        <form action={action}>
            <input  type="text" placeholder='enetr name' name='name' />
            <br /><br />
            <input  type="password" placeholder='enter Password' name='password' />
            <br /><br />
            <button disabled={pending}>{pending?'Submmiting Data':'Submit Data'}</button>
        </form>
        {
            data?.error && <span className='text-red-500'>{data?.error}</span>
        }
        {
            data?.message && <span className='text-blue-600'>{data?.message}</span>
        }

        <h1>Name: {data?.name}</h1>
        <h1>Password:{data?.password}</h1>
    </div>
  )
}

export default UseActionState