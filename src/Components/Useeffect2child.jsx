import React, { useEffect } from 'react'

function Useeffect2child({count,data}) {

    // mounting phase
    useEffect(()=>{
        Counter();

    },[])

    //updating phase
    useEffect(()=>{
        Datacounter();
  
    },[data])

    // unmounting phase
    useEffect(()=>{
        return()=>{
            console.log("unmount phase only");
            
        }
     },[])

   const Counter=()=>{
    console.log("count  updated...")
   }
//Counter();

   const Datacounter=()=>{
    console.log("data count updated...")
   }
//    Datacounter();
  return (
    <div>
        <h1>counter:{count}</h1>
        <h1>Datacounter:{data}</h1>
    </div>
  )
}

export default Useeffect2child