import React from 'react'

function Propsmappingchild({user}) {
  return (
    <div>
      <hr />
      <h1>Name: {user.name}</h1>
      <h1>age: {user.age}</h1>
      <h1>email: {user.email}</h1>
      {/* <h1>collagesName: {name}</h1> */}
    </div>
  )
}

export default Propsmappingchild