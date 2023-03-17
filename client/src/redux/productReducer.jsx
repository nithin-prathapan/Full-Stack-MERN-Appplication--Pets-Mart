import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        petDetail: null,
        orders: null,
        isCategory: null,
        isPrice: null

    },
    reducers: {
        displayPetDetail: (state, action) => {
            state.petDetail = action.payload
        },
        bookOrder: (state, action) => {
            state.orders = action.payload
        },
        addReview: (state, action) => {

        },
        searchByCategory: (state, action) => {
            if (state.isCategory != null) {
                state.isCategory = null
                state.isCategory = action.payload
            } else {
                state.isCategory = action.payload
            }
        },
        searchByPrice: (state, action) => {
            if (state.isPrice != null) {
                state.isPrice = null
                state.isPrice = action.payload
            } else {
                state.isPrice = action.payload
            }
        }

    }

})
export const { displayPetDetail, bookOrder, searchByCategory, searchByPrice } = productSlice.actions
export default productSlice.reducer