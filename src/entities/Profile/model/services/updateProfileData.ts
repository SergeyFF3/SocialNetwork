import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile, ValidateProfileError} from "../types/profile";
import {$api} from "shared/api/api";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";
import {getProfileFormData} from "../selectors/getProfileData";
import {validateProfileData} from "./validateProfileData";

export const updateProfileData = createAsyncThunk<Profile,string, ThunkConfig<ValidateProfileError[]>> (
    'profile/updateProfileData',
    async (_, {rejectWithValue, getState}) => {

        const formData = getProfileFormData(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const res = await $api.put<Profile>(`/profile/${formData?.id}`, formData)

            return res.data
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)