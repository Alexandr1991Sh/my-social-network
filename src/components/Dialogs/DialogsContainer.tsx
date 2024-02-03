// import React from 'react';
// import s from './Dialogs.module.css'
// import { addMessageAC, updateMessageAC } from '../store/reducers/dialogsReducer';
// import Dialogs from "./Dialogs";
// import {StoreType} from "../store/reduxStore/storeRedux";
//
//
// type DialogsPropsType = {
//     store: StoreType
// }
//
// export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
//
// const state = props.store.getState().dialogsPage
//     const updateMassage = (newMassageText: string) => {
//          props.store.dispatch(addMessageAC(newMassageText))
//     }
//
//     const  addMessage = (message: string)=>{
//         props.store.dispatch(updateMessageAC(message))
//     }
//
//     return (
//         <div className={s.dialogs}>
//            <Dialogs state={state} updateMassage={updateMassage} addMessage={addMessage}/>
//         </div>
//     )
// }
//
// export default DialogsContainer;



import React from 'react';
import s from './Dialogs.module.css'
import { addMessageAC, updateMessageAC } from '../store/reducers/dialogsReducer';
import Dialogs from "./Dialogs";
import {StoreType} from "../store/reduxStore/storeRedux";


type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogsPage
    const updateMassage = (newMassageText: string) => {
        props.store.dispatch(addMessageAC(newMassageText))
    }

    const  addMessage = (message: string)=>{
        props.store.dispatch(updateMessageAC(message))
    }

    return (
        <div className={s.dialogs}>
            <Dialogs state={state} updateMassage={updateMassage} addMessage={addMessage}/>
        </div>
    )
}

export default DialogsContainer;