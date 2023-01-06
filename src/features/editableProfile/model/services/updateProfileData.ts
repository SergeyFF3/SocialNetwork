import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "entities/Profile/model/types/profile";
import {$api} from "shared/api/api";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";
import {getProfileFormData} from "pages/ProfilePage";

export const updateProfileData = createAsyncThunk<Profile,void, ThunkConfig<string>> (
    'profile/updateProfileData',
    async (_, {rejectWithValue, getState}) => {

        const formData = getProfileFormData(getState())

        try {
            const res = await $api.put<Profile>('/profile', formData)

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)