import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile} from "entities/Profile";
import {updateProfileData} from "../services/updateProfileData";
import {ProfileSchema} from "pages/ProfilePage";

const initialState: ProfileSchema = {
    formData: undefined,
    error: undefined,
    isLoading: false,
    data: undefined
}

export const updateProfileSlice = createSlice({
    name: 'updateProfile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.formData = state.data
        }
    },
    extraReducers: builder => {
        builder
            .addCase(updateProfileData.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: updateProfileReducer } = updateProfileSlice
export const { actions: updateProfileActions} = updateProfileSlice
