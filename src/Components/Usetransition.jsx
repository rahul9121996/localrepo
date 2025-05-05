import React, { useTransition } from 'react'

function Usetransition() {
const[pending,startTransition]=useTransition();

const handleClick=()=>{
    startTransition(async ()=>{
    await new Promise(res=>setTimeout(res,2000))
    console.log("submit"); 
    

})

}

  return (
    <div> 
        <h1>useTransition hook in react js</h1>
        {pending?
        <img className='w-[100px]' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:
        null
        }
        <button onClick={handleClick} disabled={pending}>click</button>
       
    </div>
  )
}

export default Usetransition