import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
//login function
const authToken = localStorage.getItem('token')
const localUser = JSON.parse(localStorage.getItem('user'))
export const authSignin = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
    // const { email, password } = userData
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await axios.post(
            'http://localhost:4000/auth/login',
            userData,
            config
        )
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data))

    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})
//register function
export const authSignup = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
    // const { email, name, password } = userData
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.post(
            'http://localhost:4000/auth/signup',
            userData,
            config
        )
        localStorage.setItem('profile', JSON.stringify(data))
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})
const initialState = {
    user: localUser ? localUser : null,
    error: "",
    loading: false,
    success: false,
    token: authToken,
    isAuthenticated: false,
    isAdmin: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.error = ""
            state.loading = false
            state.success = false
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        },
        setAdmin: (state) => {
            state.isAdmin = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authSignin.pending, (state, action) => {
            state.loading = true
            state.success = false
        })
        builder.addCase(authSignin.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(authSignin.rejected, (state, action) => {
            state.loading = false
            state.success = false
        })
        builder.addCase(authSignup.pending, (state, action) => {
            state.loading = true
            state.success = false
        })
        builder.addCase(authSignup.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
        })
        builder.addCase(authSignup.rejected, (state, action) => {
            state.loading = false
            state.success = false
        })
    }
})
export const { reset, logoutUser, setUser, setAdmin } = authSlice.actions
export default authSlice.reducer