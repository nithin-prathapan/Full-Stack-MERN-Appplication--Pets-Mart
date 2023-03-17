import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const createPayment = createAsyncThunk('payment/create',
    async ({ subtotal, token, user, items },
        { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:4000/payment/create', { subtotal, token, user, items });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }

    })
const initialState = {
    amount: null,
    token: null,
    currency: 'INR',
    shippingAddress: null,
    isPaid: false,
    isLoading: false,
    error: null
};
const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPayment.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isPaid = true;
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default paymentSlice.reducer