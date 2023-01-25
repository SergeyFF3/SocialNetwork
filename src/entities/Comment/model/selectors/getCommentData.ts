import {StateSchema} from "app/provider/storeProvider/store";

export const getCommentData = (state: StateSchema) => state?.comment?.data

export const getCommentIsLoading = (state: StateSchema) => state?.comment?.isLoading

export const getCommentError = (state: StateSchema) => state?.comment?.error