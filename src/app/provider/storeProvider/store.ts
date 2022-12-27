import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {userReducer, UserSchema} from "entities/User";
import {LoginSchema} from "features/authByUsername";
import { loginReducer } from "features/authByUsername/model/slices/loginSlice";
import {ProfileSchema} from "entities/Profile";
import { profileReducer } from "entities/Profile/model/slices/profileSlice";
import {RegistrationSchema} from "features/Registration";
import {registerReducer} from "features/Registration/model/slices/registerSlice";

const RootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
})

export const store = configureStore<StateSchema>({
    reducer: RootReducer
})

export interface StateSchema {
    user: UserSchema
    login: LoginSchema
    profile: ProfileSchema
    register: RegistrationSchema
}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch