import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { RootActionType } from './types/actionType';
import {AppRootStateType, StoreType} from './components/store/reduxStore/storeRedux';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    state: AppRootStateType,
    dispatch: (action: RootActionType) => void
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    {/*<Route path={'/dialogs'} element={<DialogsContainer*/}
                    {/*    store={props.store}*/}
                    {/*/>} />*/}
                    <Route path={'/profile'} element={<Profile
                        store={props.store}
                    />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
