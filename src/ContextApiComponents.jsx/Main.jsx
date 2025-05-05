import React, { useState } from 'react'
import CollegeData from './CollegeData'
import { SubjectContext } from './ContextData'

function Main() {
    const[subject,setSubject] = useState("")
  return (
    <div className="bg-yellow-300 p-6">
    <SubjectContext.Provider value={subject}> 
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
        </select>   
        <button onClick={()=>setSubject('')}>clear</button>
      <h1>Context Api</h1>
       <CollegeData />
       
    </SubjectContext.Provider>
    </div>
  )
}

export default Main