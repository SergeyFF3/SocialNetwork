import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../services/fetchProfileData";
import {updateProfileData} from "../services/updateProfileData";

const initialState: ProfileSchema = {
    formData: undefined,
    error: undefined,
    isLoading: false,
    data: undefined,
    validateErrors: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
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
            state.validateErrors = undefined
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, state => {
                state.isLoading = true
                state.validateErrors = undefined
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
                state.validateErrors = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions} = profileSlice
