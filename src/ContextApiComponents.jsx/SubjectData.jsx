import React, { useContext } from 'react'
import { SubjectContext } from './ContextData'

function SubjectData() {
    const subject=useContext(SubjectContext)
  return (
    <div className='bg-red-500 p-6'>
        <h1>subject is: {subject}</h1>
    
    </div>
  )
}

export default SubjectData