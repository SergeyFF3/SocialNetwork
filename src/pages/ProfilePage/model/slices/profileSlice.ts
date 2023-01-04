import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../services/fetchProfileData";
import {User} from "entities/User";

const initialState: ProfileSchema = {
    error: undefined,
    readonly: true,
    isLoading: false,
    data: undefined
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
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: profileReducer } = profileSlice
export const { actions: profileActions} = profileSlice
