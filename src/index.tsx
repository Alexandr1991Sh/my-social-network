import React from 'react';
import reportWebVitals from './reportWebVitals';
// import state from './components/redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  { store, StateType} from './components/redux/state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App updateMassageText={store.updateMassageText.bind(store)} addMassage={store.addMassage.bind(store)} state={store.getState()} updateText={store.updateText.bind(store)} addPost={store.addPost.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

store.subsribe(rerenderEntireTree)
rerenderEntireTree(store.getState());

reportWebVitals();
