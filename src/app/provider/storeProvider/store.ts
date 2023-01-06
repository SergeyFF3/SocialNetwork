import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {userReducer, UserSchema} from "entities/User";
import {LoginSchema} from "features/authByUsername";
import {loginReducer} from "features/authByUsername/model/slices/loginSlice";
import {profileReducer} from "pages/ProfilePage/model/slices/profileSlice";
import {RegistrationSchema} from "features/Registration";
import {registerReducer} from "features/Registration/model/slices/registerSlice";
import {ProfileSchema} from "pages/ProfilePage";
import {editProfileReducer} from "features/editableProfile/model/slices/editProfileSlice";
import {updateProfileReducer} from "features/editableProfile/model/slices/updateProfileSlice";
import {Profile} from "entities/Profile";

export interface StateSchema {
    user: UserSchema
    login: LoginSchema
    profile: ProfileSchema
    register: RegistrationSchema
    editProfile: Profile
    updateProfile: ProfileSchema
}

const RootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
    profile: profileReducer,
    register: registerReducer,
    editProfile: editProfileReducer,
    updateProfile: updateProfileReducer
})

export const store = configureStore<StateSchema>({
    reducer: RootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch