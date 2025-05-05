import React from 'react'

function Card(props) {
  return (
      <>
      
      <div className='  border border-gray-400 p-4 rounded w-[12vw] h-[20vh] mt-20 mx-auto'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
     
      


      

      </>
  )
}

export default Card