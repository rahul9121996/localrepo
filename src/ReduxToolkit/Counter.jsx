import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Features/Counter/counterSlice';

function Counter() {
    const[amount,setAmount]=useState(0);
    const count= useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    function handleIncrementClick(){
        dispatch(increment());

    }

    function handleDecrementClick() {
        dispatch(decrement());

    }

    // function handleReset(){
    //     dispatch(reset())
    // }

    function handleIncrementByAmount(){
        dispatch(incrementByAmount(amount))
    }
  return (
    <div className='text-center'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br /><br />
        {/* we can directly dispatch action without creating isolated function */}
        <button onClick={()=>dispatch(reset())}>Reset</button> 
        <br /><br />
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount' />
        <br /><br />
        <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
        
    </div>
  )
}

export default Counter