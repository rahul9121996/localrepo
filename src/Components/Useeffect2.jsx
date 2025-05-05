// handle props by using useeefect:-
import React, { useState } from 'react'
import Useeffect2child from './Useeffect2child'

function Useeffect2() {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(0)
    const[display,setDisplay]=useState(true)
  return (
    <div>
        { display?<Useeffect2child count={count}  data={data}/>:null }

        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setData(data+1)}>Data</button>
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
                                         
    </div>
  )
}

export default Useeffect2