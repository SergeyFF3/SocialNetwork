import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {RegistrationSchema} from "../types/registration";

interface RegisterUserProps {
    name: string
    surname: string
    email: string
    password: string
    secondPassword: string
}

export const registerUser = createAsyncThunk<RegisterUserProps, RegistrationSchema, {rejectValue: string}> (
    'register/registerUser',
    async (regData, thunkAPI) => {
        try {
            const res = await $api.post<RegisterUserProps>('/register', regData)

            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Некорректные данные')
        }
    }
)