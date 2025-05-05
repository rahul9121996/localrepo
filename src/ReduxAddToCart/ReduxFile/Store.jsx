import { createStore, combineReducers } from 'redux';
import { cartReducer } from './CartReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(rootReducer);
  
  

