import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {Profile} from "entities/Profile";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";

export const fetchUsers = createAsyncThunk<Profile[], void, ThunkConfig<string>> (
    'search/fetchUsers',
    async (_, {rejectWithValue}) => {
        try {
            const response = await $api.get<Profile[]>('/profile')

            return response.data

        } catch (e) {

            return rejectWithValue('Ошибка загрузки пользователей')
        }
    }
)