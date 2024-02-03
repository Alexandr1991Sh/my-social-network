import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "../reducers/profileReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppRootStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

export const store = createStore(reducers)

//@ts-ignore
window.store = store