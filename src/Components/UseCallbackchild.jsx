import React, { memo } from 'react'

function UseCallbackchild({callbackResult}) {
    console.log("child element called")
  return (
    <div>
        <h1>{callbackResult()}</h1>
       
        
    </div>
  )
}

export default memo(UseCallbackchild)