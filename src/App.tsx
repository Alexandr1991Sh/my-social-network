import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import { StateType } from './components/redux/state';


type AppProps = {
    state: StateType,
    addPost:any
}


function App(props:AppProps) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs />}/>
                    <Route path={'/profile'} element={<Profile stateProfile = {props.state.profilePage}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
