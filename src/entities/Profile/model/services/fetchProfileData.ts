import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {Profile} from "../types/profile";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>> (
    'profile/fetchProfileData',
    async (_, {rejectWithValue}) => {
        try {
            const response = await $api.get<Profile>(`/profile`)

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка загрузки пользователя')
        }
    }
)