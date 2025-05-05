import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }

        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
        },

    }
});

export const {addToCart, removeFromCart, decreaseQuantity} =cartSlice.actions;
export default cartSlice.reducer;
