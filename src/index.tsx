import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  { store, AppRootStateType } from './components/store/reduxStore/storeRedux';
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: AppRootStateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
              <Provider store={store}>
                  <App
                      state={state} dispatch={store.dispatch}
                      store={store}
                  />
              </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
}

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
rerenderEntireTree(store.getState());

reportWebVitals();
