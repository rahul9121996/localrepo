import React, { useState } from 'react'

function UpdateArrayinState() {
    const[data,setData]=useState([
        'rahul','anil','peter','ravi'
    ])

    const[dataDetails,setDataDetails]=useState([
        {name:'rohan',age:26},
        {name:'preeti',age:29},
        {name:'arjun',age:24},
    ])

    const handleName=(name)=>{
        data[data.length-1]=name;
        setData([...data])

    }
 
    const handleAge=(age)=>{
        dataDetails[dataDetails.length-1].age=age;
        setDataDetails([...dataDetails])

    }
  return (
    <div>
        <input type="text"  placeholder='enter last name' onChange={(e)=>handleName(e.target.value)}/>
        {
            data.map((item,index)=>(

                <h2 key={index}>{item}</h2>
            ))
                  
        }

        <hr />

        <input type="text" placeholder='enter last age' onChange={(e)=>handleAge(e.target.value)} />
        {
            dataDetails.map((item,index)=>(
                <h3 key={index}>{item.name} : {item.age}</h3>

            ))
        }

    </div>
  )
}

export default UpdateArrayinState