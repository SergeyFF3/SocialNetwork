import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {User} from "entities/User";

interface RegisterUserProps {
    name: string
    surname: string
    city: string
    age: number
    email: string
    password: string
    secondPassword: string
}

export const registerUser = createAsyncThunk<RegisterUserProps, User, {rejectValue: string}> (
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