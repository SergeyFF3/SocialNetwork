import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {$api} from "shared/api/api";

interface LoginByUsernameProps {
    email: string
    password: string
}

// Функция createAsyncThunk принимает в себя несколько дженериков,
// Перый это то что мы возвращаем, а второй что принимаем.

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps,{rejectValue: string}> (
    'login/loginByUsername',
    async (authData, {rejectWithValue, dispatch}) => {
        try {
            const response = await $api.post<User>('/login', authData)

            if (!response.data) {
                throw new Error()
            }
            // В localStorage хранится авторизован или нет.
            // Поскольку в localstorage хранятся только строки используем JSON.stringify
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data

        } catch (e) {

            return rejectWithValue('Вы ввели неверный логин или пароль')
        }
    }
)