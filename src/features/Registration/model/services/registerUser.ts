import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {GenderProps, RegistrationSchema, ValidateRegisterError} from "../types/registration";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";
import {validateRegisterData} from "./validateRegisterData";

interface RegisterUserProps {
    name: string
    surname: string
    email: string
    password: string
    secondPassword: string
    gender: GenderProps
}

export const registerUser = createAsyncThunk<RegisterUserProps, RegistrationSchema, ThunkConfig<ValidateRegisterError[]>> (
    'register/registerUser',
    async (regData, {rejectWithValue}) => {

        const errors = validateRegisterData(regData)

        if (errors.length) {
            return rejectWithValue(errors)
        }
        try {
            const res = await $api.post<RegisterUserProps>('/register', regData)

            return res.data
        } catch (e) {
            return rejectWithValue([ValidateRegisterError.SERVER_ERROR])
        }
    }
)