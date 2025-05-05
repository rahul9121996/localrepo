import React from 'react'
// function Userchild({props}) {
// function Userchild({name,age,email}) {
    function Userchild({user}) {
  return (
    <div>
        <hr />
        {/* first way to get props */}
        {/* <h1>props example</h1>
        <h2>name: {props.name}</h2> */}

        {/* 2nd way-we can pass the props name in the function instead of props */}
        {/* <h2>name: {name}</h2>
        <h2>age: {age}</h2>
        <h2>email: {email}</h2> */}

        {/* we can recieve object data in the form of props */}
        <h1>name: {user.name}</h1>
        <h1>age: {user.age}</h1>
        <h1>email: {user.email}</h1>
    </div>
  )
}

export default Userchild;