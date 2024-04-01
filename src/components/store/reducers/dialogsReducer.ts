import {
    RootActionType, SendMessageTypeActionType,
    UpdateMessageTextActionType
} from "../../../types/actionType";
import { MassagePageType } from "../state";
import {PostType} from "./profileReducer";

export type DialogsDateType = {
    id: number
    name: string
}

export type MessagesDateType = {
    id: number
    message: string
}
const initialState = {
    dialogsData: [
        { id: 1, name: 'Yulia' },
        { id: 2, name: 'semen' },
        { id: 3, name: 'Tereza' },
        { id: 4, name: 'Lola' },
        { id: 5, name: 'Evgenia' },
        { id: 6, name: 'Sonja' }
    ]  as Array<DialogsDateType>,
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-Kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ] as Array<MessagesDateType>,
    newMessageBody: ''
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state:InitialStateType = initialState, action: RootActionType): InitialStateType => {

    if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
       return  {...state, newMessageBody: action.newMessageTextBody}
    } else if (action.type === 'SEND_MESSAGE') {
        // let newMessage = {
        //     id: 9,
        //     message: state.updateMassage
        // }
        return {...state, newMessageBody: "", messagesData: [...state.messagesData, {
                id: 9,
                message: state.newMessageBody
            } ]}
    }
    return state
}
export const updateNewMessageBodyAC = (newMessageTextBody: string): UpdateMessageTextActionType => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
      newMessageTextBody
    }
}
export const sendMessageAC = (): SendMessageTypeActionType => {
    return {
        type: 'SEND_MESSAGE',
    }
}
