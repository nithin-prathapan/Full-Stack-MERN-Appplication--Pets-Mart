import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowPets: false,
    isShowUsers: false,
    isShowAddPet: false,
    isShowOrders: false
}
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        showList: (state) => {
            state.isShowPets = !state.isShowPets
            state.isShowUsers = false
            state.isShowOrders = false
            state.isShowAddPet = false
        },
        showUsers: (state) => {
            state.isShowUsers = !state.isShowUsers
            state.isShowPets = false
            state.isShowOrders = false
            state.isShowAddPet = false
        },
        showAddPet: (state) => {
            state.isShowOrders = false
            state.isShowPets = false
            state.isShowUsers = false
            state.isShowAddPet = true
        },
        showOrders: (state) => {
            state.isShowPets = false
            state.isShowAddPet = false
            state.isShowUsers = false
            state.isShowOrders = true
        }

    }
})

export default adminSlice.reducer
export const { showList, showUsers, showAddPet, showOrders } = adminSlice.actions