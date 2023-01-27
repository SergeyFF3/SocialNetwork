import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment, CommentSchema} from "../types/comment";
import {fetchComments} from "../services/fetchComments";


const initialState: CommentSchema = {}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, state => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: commentReducer } = commentSlice
export const { actions: commentActions} = commentSlice
