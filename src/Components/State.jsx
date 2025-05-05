import React, { useState } from "react";
import Counter from "./State1";

function Fruit(){

    const [fruit,setfruit] = useState("Apple");

    const handleFruit= ()=>{
        setfruit("Banana")
    }

    return(
        <>
        <h1>state in functional component</h1>
        <h1 className="font-bold">{fruit}</h1>
        <button onClick={handleFruit}>Change fruit name</button>
        <Counter />
        </>
    )
}  
export default Fruit;