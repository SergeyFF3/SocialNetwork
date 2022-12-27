import {createAsyncThunk} from "@reduxjs/toolkit";
import { Profile } from "../types/profile";
import {$api} from "shared/api/api";

export const fetchProfileData = createAsyncThunk<Profile, string, {rejectValue: string}> (
    'profile/fetchProfileData',
    async (profileId, {rejectWithValue}) => {
        try {
            const response = await $api.get<Profile>(`/profile/${profileId}`)

            return response.data
        } catch (e) {
            return rejectWithValue('Ошибка загрузки пользователя')
        }
    }
)