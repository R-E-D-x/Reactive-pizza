import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
}
const reducers = {
    addToCart(state, action) {
        const item = state.cart.find(item => item.pizzaId === action.payload.pizzaId)
        if (item)
            return item.quantity++
        state.cart.push(action.payload);
    },
    increaseQuantity(state, action) {
        const item = state.cart.find(item => item.pizzaId === action.payload)
        if (item.quantity > 9) return
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity
    },
    decreaseQuantity(state, action) {
        const item = state.cart.find(item => item.pizzaId === action.payload)
        if (item.quantity <= 1) return
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity
    },
    deleteItem(state, action) {
        state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    clearCart(state) {
        state.cart = []
    },

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers,
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    clearCart } = cartSlice.actions
export default cartSlice.reducer