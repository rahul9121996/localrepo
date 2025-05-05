import React from 'react'

function Functionalpropschild({userfunction}) {
    const name="rahul rai"
  return (
    <div>
        <button onClick={()=>userfunction(name)}>call parent function</button>
    </div>
  )
}

export default Functionalpropschild