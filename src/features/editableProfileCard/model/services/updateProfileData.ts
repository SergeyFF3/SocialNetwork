import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "../../model/types/profile";
import {$api} from "shared/api/api";
import {getFormData} from "../../model/selectors/getFormProfileData";
import { ThunkConfig } from "shared/config/interfaces/thunkConfig";

export const updateProfileData = createAsyncThunk<Profile,void, ThunkConfig<string>> (
    'profile/updateProfileData',
    async (_, {rejectWithValue, getState}) => {

        const formData = getFormData(getState())

        try {
            const res = await $api.put<Profile>('/profile', formData)

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)