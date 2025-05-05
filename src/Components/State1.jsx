import React, { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    const[rCounter,rsetCounter] = useState(10);

    const counter=()=>
        setCount(count+1)
    return(
        <>
        <h1>{count}</h1>
        <h1>{rCounter}</h1>

        <button onClick={counter}>increase count</button><br/>
        <button onClick={()=>rsetCounter(rCounter-1)}>decrease count</button>
        
        </>
    )
}
export default Counter;