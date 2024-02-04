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


import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../store/reduxStore/storeRedux";
import {Dispatch} from "redux";
import {addMessageAC, updateMessageAC} from "../store/reducers/dialogsReducer";
import {DialogsDateType} from "../store/state";


type MapStateToPropsType = {
    dialogsData: DialogsDateType[]
    updateMassage: string
}
type MapDispatchToPropsType = {
    updateMassage: (newMassageText: string) => void
    addMessage: (message: string) => void
}
const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        updateMassage: state.dialogsPage.updateMassage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateMassage: (newMassageText: string) => {
            dispatch(addMessageAC(newMassageText))
        },
        addMessage: (message: string) => {
            dispatch(updateMessageAC(message))
        }
    }
}

export  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)











