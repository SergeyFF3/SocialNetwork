import {StateSchema} from "app/provider/storeProvider/store";

export const getLoginUsername = (state: StateSchema) => state?.login?.username || ''

export const getLoginPassword = (state: StateSchema) => state?.login?.password || ''

export const getLoginIsLoading = (state: StateSchema) => state?.login?.isLoading

export const getLoginError = (state: StateSchema) => state?.login?.error || ''