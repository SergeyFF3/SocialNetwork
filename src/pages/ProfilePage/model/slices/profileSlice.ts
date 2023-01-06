import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProfileData} from "../services/fetchProfileData";
import {Profile} from "entities/Profile";
import { ProfileSchema } from '../types/types'

const initialState: ProfileSchema = {
    error: undefined,
    isLoading: false,
    data: undefined,
    formData: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
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
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions} = profileSlice
