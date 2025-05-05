import React, { useEffect, useState } from "react";

function UseEffectHook(){
    const [counter,setCounter]=useState(0);
    const [data,setData] = useState(0)

    useEffect(()=>{
        Callonce();
       
    },[counter]) 

    useEffect(()=>{
        counterfunction();
    },[data])

     function Callonce(){
        console.log("call once") 
     }
     

    function counterfunction(){
        // console.log("counterfunction",counter)
        console.log("counterfunction")
    }
    // counterfunction()


    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>count {counter}</button>
            <button onClick={()=>setData(data+1)}>data {data}</button>

        </div>

    )
}
export default UseEffectHook;