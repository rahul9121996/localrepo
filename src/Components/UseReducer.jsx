import React, { useReducer } from 'react'


// The useReducer hook in React is used for managing complex state logic in functional components. 
// It is an alternative to useState, especially useful when:
// .You have multiple related state variables. 

const emptyData={
    name:'',
    password:'',
    email:'',
    city:'',
    address:''
}
// reducer is a function that recieves the current state and an action and returns a new state.
const reducer=(data,action)=>{
    return{...data,[action.type]:action.val}
    
}
 
function UseReducer() {
    const[state,dispatch]=useReducer(reducer,emptyData)
    console.log(state);

  return (
    <div>
        <h1>use Reducer</h1>
        {/* dispatch is used to send actions to the reducer */}
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder='enter name' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder='enter password' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder='enter email' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder='enter city' />
        <br /><br />
        <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder='enter address' />
        <br /><br />
        <ul>
            <li>Name:{state.name}</li>
            <li>Password:{state.password}</li>
            <li>Email:{state.email}</li>
            <li>City:{state.city}</li>
            <li>Address:{state.address}</li>
        </ul>

        <button>add details</button>
    </div>
  )
}

export default UseReducer