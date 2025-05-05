import React, { useRef } from 'react'
import UserInput from './Forwardrefchild'

// forwardref is used to pass ref in to the child component.
function Forwardref() {
    const inputRef=useRef(null)

    const updateInput=()=>{  
        inputRef.current.value=1000;
        inputRef.current.focus(); 
    }


  return (
    <div>
        <h1>forward Ref</h1>
        <UserInput  ref={inputRef}/>
        <button onClick={updateInput}>Update input field</button>
    </div>
  )
}

export default Forwardref;