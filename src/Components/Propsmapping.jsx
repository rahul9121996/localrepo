import React from 'react'
import Propsmappingchild from './Propsmappingchild';

function Propsmapping() {
    const users=[
        {name:"rahul",age:27,email:"rahul19@test.com"},
        {name:"ravi",age:26,email:"ravil19@test.com"},
        {name:"priya",age:25,email:"priyal19@test.com"}
    ];

    // const colleges=["IIT","NIT","IIIT","MIT"];
  return (
    <div>
     <h1>Propsmapping</h1>
     {users.map((user, index) => (
        <Propsmappingchild key={index} user={user} />
      ))}

      {/* {colleges.map((name,index)=>(
        <Propsmappingchild key={index}  name={name}/>

     ) )}
     */}


    </div>
  )
}

export default Propsmapping;