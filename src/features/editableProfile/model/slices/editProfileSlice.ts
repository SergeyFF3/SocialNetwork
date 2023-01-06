import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile} from "entities/Profile";


const initialState: Profile = {

}

export const editProfileSlice = createSlice({
    name: 'editProfile',
    initialState,
    reducers: {

    }
})

export const { reducer: editProfileReducer } = editProfileSlice
export const { actions: editProfileActions} = editProfileSlice
