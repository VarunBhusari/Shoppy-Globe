import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // {product, quantity}
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload
            const exists = state.items.find(item => item.product.id === product.id)
            if (exists) {
                exists.quantity++
            } else {
                state.items.push({ product, quantity: 1 })
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            state.items = state.items.filter(item => item.product.id !== id)
        },
        increaseQuantity(state, action) {
            const item = state.items.find(i => i.product.id === action.payload)
            if (item) item.quantity++
        },
        decreaseQuantity(state, action) {
            const item = state.items.find(i => i.product.id === action.payload)
            if (item && item.quantity > 1) item.quantity--
        },
        clearCart(state) {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
    cartSlice.actions

export default cartSlice.reducer
