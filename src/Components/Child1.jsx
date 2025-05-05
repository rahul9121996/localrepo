// lifting state up
import React from 'react'

function Child1({setUser}) {
  return (
    <div>
        <input className='border-1' type="text" onChange={(event)=>setUser(event.target.value)} placeholder='enter name here' />
    </div>
  )
}

export default Child1