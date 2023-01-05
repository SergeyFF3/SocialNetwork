import {StateSchema} from "app/provider/storeProvider/store";

export interface ThunkConfig<T> {
    rejectValue: T
    state: StateSchema
}