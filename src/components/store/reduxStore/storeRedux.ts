import {combineReducers, legacy_createStore as  createStore } from "redux";
import { profileReducer } from "../reducers/profileReducer";
import { dialogsReducer } from "../reducers/dialogsReducer";

 
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers) 

