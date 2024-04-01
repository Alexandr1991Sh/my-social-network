import {AppRootStateType} from "../store/reduxStore/storeRedux";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsDateType, MessagesDateType} from "../store/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../store/reducers/dialogsReducer";


type mapStateToPropsType = {
    dialogsData: DialogsDateType[]
    messagesData: MessagesDateType[]
    newMessageBody: string
}
type mapDispatchToPropsType = {
    updateNewMessageBody: (newMessageTextBody: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps =(dispatch: Dispatch): mapDispatchToPropsType  => {
    return {
        updateNewMessageBody: (newMessageTextBody: string) => {
            dispatch(updateNewMessageBodyAC(newMessageTextBody))
        },
        sendMessage: () => {
        dispatch(sendMessageAC())
    }
    }
}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
