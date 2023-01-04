import {createSlice} from "@reduxjs/toolkit";
import { Profile } from "pages/ProfilePage";

const initialState: Profile = {

}

export const EditProfileCardSlice = createSlice({
    name: 'EditProfileCard',
    initialState,
    reducers: {

    }
})

export const { reducer: EditProfileCardReducer } = EditProfileCardSlice
export const { actions: EditProfileCardActions} = EditProfileCardSlice
