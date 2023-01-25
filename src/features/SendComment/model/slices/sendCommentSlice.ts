import {createSlice} from "@reduxjs/toolkit";
import {sendCommentThunk} from "../services/sendCommentThunk";
import {SendCommentSchema} from "../types/types";

const initialState: SendCommentSchema = {

}

export const sendCommentSlice = createSlice({
    name: 'sendComment',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sendCommentThunk.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(sendCommentThunk.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(sendCommentThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: sendCommentReducer } = sendCommentSlice
export const { actions: sendCommentActions} = sendCommentSlice
