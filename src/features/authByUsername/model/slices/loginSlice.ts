import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/LoginSchema";
import {loginByUsername} from "../services/loginByUsername";

const initialState: LoginSchema = {
    isLoading: false,
    email: '',
    password: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: loginReducer } = loginSlice
export const { actions: loginActions} = loginSlice
