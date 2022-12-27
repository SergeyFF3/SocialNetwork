import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GenderProps, RegistrationSchema} from "../types/registration";
import {registerUser} from "../services/registerUser";

const initialState: RegistrationSchema = {
    email: '',
    password: '',
    secondPassword: '',
    name: '',
    surname: '',
    error: undefined,
    isLoading: false,
    gender: undefined
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setSecondPassword: (state, action: PayloadAction<string>) => {
            state.secondPassword = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload
        },
        setGender: (state, action: PayloadAction<GenderProps>) => {
            state.gender = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }

})

export const { reducer: registerReducer } = registerSlice
export const { actions: registerActions} = registerSlice
