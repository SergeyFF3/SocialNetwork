import {StateSchema} from "app/provider/storeProvider/store";

export const getSendCommentText = (state: StateSchema) => state?.sendComment?.text || ''

export const getSendCommentIsLoading = (state: StateSchema) => state?.sendComment?.isLoading

export const getSendCommentError = (state: StateSchema) => state?.sendComment?.error