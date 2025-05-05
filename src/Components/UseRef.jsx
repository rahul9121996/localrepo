import React, { useRef } from 'react'

function UseRef() {
    const inputRef=useRef(null);
    const h1Ref=useRef(null);

    const inputHandler=()=>{
        inputRef.current.focus()
        inputRef.current.style.color="red"
        inputRef.current.placeholder="enter password"
        inputRef.current.value="123"
    }

    const toggleHandler=()=>{
        if(inputRef.current.style.display != "none"){
            inputRef.current.style.display="none"
        }else{
            
            inputRef.current.style.display="inline"
        }
    }

    const elementHandler=()=>{
        h1Ref.current.style.color="yellow"
    }




  return (
    <div className='flex flex-col gap-4'>

        <input className='border-1' ref={inputRef} type='text'  placeholder='enter name'/>
        <button onClick={inputHandler}>change focus</button>
        <button onClick={toggleHandler}>Toggle</button>

        <h1 ref={h1Ref}>rahul rai</h1>
        <button onClick={elementHandler}>change color</button>

    </div>
  )
}

export default UseRef