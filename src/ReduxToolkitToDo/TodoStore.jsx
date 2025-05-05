import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../ReduxToolkitToDo/features/todos/todosSlice';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
