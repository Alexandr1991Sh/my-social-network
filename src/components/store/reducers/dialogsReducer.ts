import { AddMassageActionType, RootActionType, UpdateMessageTextActionType } from "../../../types/actionType";
import { MassagePageType } from "../state";



const initialState:MassagePageType  = {
    dialogsData: [
        { id: 1, name: 'Yulia' },
        { id: 2, name: 'semen' },
        { id: 3, name: 'Tereza' },
        { id: 4, name: 'Lola' },
        { id: 5, name: 'Evgenia' },
        { id: 6, name: 'Sonja' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-Kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
    ],
    updateMassage: ''
}

export const dialogsReducer = (state: MassagePageType = initialState, action: RootActionType): MassagePageType => {

    if (action.type === "UPDATE-MESSAGE") {
        state.updateMassage = action.newMassageText

    } else if (action.type === " ADD-MESSAGE") {
        let newMessage = {
            id: 9,
            message: action.message
        }
        state.messagesData.push(newMessage)
        state.updateMassage = ''
    }

    return state
}

export const updateMessageAC = (newMassageText: string): UpdateMessageTextActionType => {
    return {
        type: "UPDATE-MESSAGE",
        newMassageText
    }
}

export const addMessageAC = (message: string): AddMassageActionType => {
    return {
        type: " ADD-MESSAGE",
        message
    }
}

