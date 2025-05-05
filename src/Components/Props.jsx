 import React, { useState } from 'react'
import Userchild from './Propschild';
import Propsarray from './Propsarray';
import Propsonclick from './Propsonclick';

function User() {
    // we can send the variable data
    // let Username = "rahul rai"
    // let age=29;
    // let email="rahul14@test.com"

    // we can send object data
    let UserObject={
        name:"ravi",
        age:27,
        email:"ravi12@test.com"


    }
    let UserObject2={
        name:"nikhil",
        age:20,
        email:"nikhil12@test.com"


    }
   // array data   
    const collageNames= ["IET", "IIT", "KIET","NIET"]

    // change data onclick event

    const[student,setStudent]=useState("")




  return (
    <div>
        {/* <Userchild name="rahul rai" age={28} email="rahul12@test.com"/> */}

        {/* another way to send data through props in child component */}
        {/* <Userchild  name={Username} age={age}  email={email}/> */}

        {/* we can pass object data as a props to child component */}

        <Userchild user={UserObject}/>
        <Userchild user={UserObject2} />
        
        {/* we can pass the array data in the child compnent */}
        {/* <Propsarray names={collageNames} /> */}

        {/* we can also pass the array data by index value*/}
        <Propsarray name={collageNames[0]} />
        <Propsarray name={collageNames[1]} />
        <Propsarray name={collageNames[2]} />


       
        {student && <Propsonclick  name={student}/>}
        <button onClick={()=>setStudent("rahul")}>ChangeStudentName</button>

    </div>

  )
}

export default User;

