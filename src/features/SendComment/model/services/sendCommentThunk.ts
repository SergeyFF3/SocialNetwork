import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";
import {Comment} from "entities/Comment";

export const sendCommentThunk = createAsyncThunk<Comment, string, ThunkConfig<string>> (
    'sendComment/sendCommentThunk',
    async (userId, {rejectWithValue}) => {
        try {
            const res = await $api.post<Comment>(`/comments`, userId)

            return res.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)