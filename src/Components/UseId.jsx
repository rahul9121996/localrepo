import React, { useId } from 'react'

function UseId() {
  return (
    <div>
        <UserForm />
        <UserForm />
        
        
    </div>
  )
}

function UserForm(){
    // used for each input field

    // const name=useId();
    // const password=useId();
    // const skills=useId();
    // const terms=useId();


    // common userId for all
    const user=useId();

    return(
        <form action="">
            <label htmlFor={user+"name"}>Enter USer Name</label>
            <input id={user+"name"} type="text" placeholder='Enter name'/>
            <br />
            <br />

            <label htmlFor={user+"password"}>Enter user password</label>
            <input id={user+'password'} type="text" placeholder='enter password' />
            <br /><br />

            <label htmlFor={user+"skills"}>Enter Skills</label>
            <input id={user+"skills"} type="text" placeholder='enter skills' />
            <br /><br />

            <label htmlFor={user+"terms"}>terms and condition</label>
            <input id={user+"terms"} type="checkbox"  />


        </form>
    )
}

export default UseId