import {StateSchema} from "app/provider/storeProvider/store";

export const getSearchData = (state: StateSchema) => state?.search?.data

export const getSearchIsLoading = (state: StateSchema) => state?.search?.isLoading

export const getSearchError = (state: StateSchema) => state?.search?.error
