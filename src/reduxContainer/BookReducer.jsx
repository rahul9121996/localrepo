import { buyBook } from "./BookTypes";

const initialState={
    NumberOfBooks:20
}

const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buyBook:return{
            NumberOfBooks: state.NumberOfBooks - 1 //decrese the no. of books by 1.
        }
        default:return state
    }
}
export default BookReducer ;