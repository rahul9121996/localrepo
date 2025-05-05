import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../ReduxToolkitAddToCart/features/cartSlice'

export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})