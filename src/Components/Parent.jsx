// lifting state up
import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    const[user,setUser] = useState("")
  return (
    <div>
        <Child1 setUser={setUser}/>
        <Child2  user={user}/>

    </div>
  )
}

export default Parent

