import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RegistrationSchema} from "../types/registration";
import {registerUser} from "../services/registerUser";
// import { GenderProps } from "features/Registration";

const initialState: RegistrationSchema = {
    registerData: {
        email: '',
        password: '',
        secondPassword: '',
        name: '',
        surname: '',
        age: undefined,
        city: ''
        // gender: {
        //     female: '',
        //     male: '',
        //     notSelected: ''
        // }
    },
    error: undefined,
    isLoading: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.registerData.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.registerData.password = action.payload
        },
        setSecondPassword: (state, action: PayloadAction<string>) => {
            state.registerData.secondPassword = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.registerData.name = action.payload
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.registerData.surname = action.payload
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.registerData.age = action.payload
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.registerData.city = action.payload
        },
        // setGender: (state, action: PayloadAction<string>) => {
        //     state.gender = action.payload
        // },
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
