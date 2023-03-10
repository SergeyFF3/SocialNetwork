import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {userReducer, UserSchema} from "entities/User";
import {LoginSchema} from "features/authByUsername";
import {loginReducer} from "features/authByUsername/model/slices/loginSlice";
import {RegistrationSchema} from "features/Registration";
import {registerReducer} from "features/Registration/model/slices/registerSlice";
import {ProfileSchema} from "entities/Profile";
import {profileReducer} from "entities/Profile/model/slices/profileSlice";
import { searchReducer } from "pages/SearchPage/model/slices/searchSlice";
import {SearchSchema} from "pages/SearchPage";
import {SendCommentSchema} from "features/SendComment";
import {sendCommentReducer} from "features/SendComment/model/slices/sendCommentSlice";
import { commentReducer } from "entities/Comment/model/slices/commentSlice";
import {CommentSchema} from "entities/Comment";

export interface StateSchema {
    user: UserSchema
    login: LoginSchema
    register: RegistrationSchema
    profile: ProfileSchema
    search: SearchSchema
    comment: CommentSchema
    sendComment: SendCommentSchema
}

const RootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    search: searchReducer,
    comment: commentReducer,
    sendComment: sendCommentReducer
})

export const store = configureStore<StateSchema>({
    reducer: RootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch