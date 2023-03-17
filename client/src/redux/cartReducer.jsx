import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    payableAmount: 0

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newitem = action.payload
            const existingItem = state.items.find(item => item._id === newitem._id);
            if (existingItem) {
                existingItem.quantity++;
                state.totalPrice += parseInt(newitem.price);
            } else {
                state.items.push({
                    ...newitem,
                    quantity: 1,
                    totalPrice: parseInt(newitem.price)
                })
            }
            state.totalPrice += parseInt(newitem.price)
            state.totalQuantity += 1
        },
        increment: (state, action) => {
            const id = action.payload
            const item = state.items.find((item) => item._id === id)
            if (item) {
                item.quantity += 1
                item.totalQuantity += 1
                item.totalPrice += parseInt(item.price);
            }
            state.totalQuantity += 1
            state.totalPrice += parseInt(item.price)

        },
        decrement: (state, action) => {
            const id = action.payload
            const existingItem = state.items.find((item) => item._id === id);
            if (existingItem) {
                existingItem.quantity--
                state.totalPrice -= parseInt(existingItem.price)
                if (existingItem.quantity === 0) {
                    state.items = state.items.filter((item) => item._id !== id);
                }
                state.totalQuantity--
            }
        },
        removeItem(state, action) {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item._id === itemId)
            state.totalQuantity -= existingItem.quantity
            state.items = state.items.filter((i) => i._id !== itemId);
            state.totalQuantity = state.items.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0);
            state.totalPrice = state.items.reduce((acc, item) => {
                return acc + item.price;
            }, 0);
        },
    }
})

export const { increment, decrement, removeItem, addToCart } = cartSlice.actions
export default cartSlice.reducer