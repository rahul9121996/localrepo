import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction'

function BookContainer() {
    //useSelector is a hook to select (read) data from the Redux store's state.
    const noOfBooks=useSelector(state=>state.NumberOfBooks)

    //useDispatch() is used  to send actions to the Redux store.
    const dispatch=useDispatch()
  return (
    <div>
        <h1>BookContainer Page</h1>
        <h2>No. Of Books:{noOfBooks}</h2>
        <button onClick={()=>dispatch(purchase_book())}>Buy Book</button>
    </div>
  )
}

export default BookContainer