import React, { useMemo, useState } from 'react'

// useMemo is used to memoized value and restrict unwanted rendering.it is used when we trying to calculate expensive calculation.
function Usememo() {
    const[count,setCount]=useState(0);
    const[data,setData]=useState(10);

    const MultiplyMemo=useMemo(()=>{ //pass callback function
        console.log("multiplymemo caled")
        return count*5
      

        
    },[count])


  return (
    <div>

        <h1>count:{count}</h1>
        <h1>data: {data}</h1>
        <h1>{MultiplyMemo}</h1>

        <button onClick={()=>setCount(count+1)}>Count</button>
        <br /><br />
        <button onClick={()=>setData(data*10)}>Data</button>
        
    </div>
  )
}

export default Usememo