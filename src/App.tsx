import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import { StateType } from './components/redux/state';
import { RootActionType } from './types/actionType';


type AppPropsType = {
    state: StateType,
    dispatch: (action: RootActionType) => void
}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs
                        dispatch={props.dispatch}
                        messagesPage={props.state.messagesPage} />} />
                    <Route path={'/profile'} element={<Profile
                        dispatch={props.dispatch}
                        profilePage={props.state.profilePage}
                    />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
