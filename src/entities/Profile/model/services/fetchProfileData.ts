import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {Profile} from "../types/profile";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>> (
    'profile/fetchProfileData',
    async (profileId, {rejectWithValue}) => {
        try {
            const response = await $api.get<Profile>(`/profile/${profileId}`)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка загрузки данных пользователя')
        }
    }
)