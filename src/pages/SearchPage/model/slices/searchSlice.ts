import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SearchSchema} from "../types/search";
import {Profile} from "entities/Profile";
import {fetchUsers} from "../services/fetchUsers";

const initialState: SearchSchema = {

}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Profile[]>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: searchReducer } = searchSlice
export const { actions: searchActions} = searchSlice
