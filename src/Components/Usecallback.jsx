import React, { useCallback, useState } from 'react'
import UseCallbackchild from './UseCallbackchild';

// useCallback is used to memoized function that means the function will only rerender when dependencies changes.
// in below case callbackresult function will only rerender when count will changes.
function Usecallback() {
    const[add,setAdd] = useState(0);
    const[count,setCount] = useState(0);

    
    const callbackResult= useCallback(()=>{
        console.log("Current count is:", count);
        
    },[count])


  return (
    <div>
        <UseCallbackchild callbackResult={callbackResult} />

        <h1>{add}</h1><br /><br />
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <h1>{count}</h1><br /><br />
        <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
  )
}

export default Usecallback