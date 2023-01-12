import {StateSchema} from "app/provider/storeProvider/store";

export const getProfileData = (state: StateSchema) => state?.profile?.data

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading

export const getProfileFormData = (state: StateSchema) => state?.profile?.formData

export const getProfileError = (state: StateSchema) => state?.profile?.error

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateErrors