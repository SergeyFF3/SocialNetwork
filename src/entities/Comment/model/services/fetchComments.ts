import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "shared/api/api";
import {ThunkConfig} from "shared/config/interfaces/thunkConfig";
import {Comment} from "entities/Comment";

export const fetchComments = createAsyncThunk<Comment[], void, ThunkConfig<string>> (
    'comment/fetchComments',
    async (_, {rejectWithValue}) => {
        try {
            const res = await $api.get<Comment[]>(`/comments`)

            return res.data
        } catch (e) {
            return rejectWithValue('Ошибка')
        }
    }
)