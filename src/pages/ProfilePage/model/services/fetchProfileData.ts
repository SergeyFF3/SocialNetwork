import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {User} from "entities/User";

export const fetchProfileData = createAsyncThunk<User, void, {rejectValue: string}> (
    'profile/fetchProfileData',
    async (_, {rejectWithValue}) => {
        try {
            const response = await $api.get<User>('/users')

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка загрузки пользователя')
        }
    }
)