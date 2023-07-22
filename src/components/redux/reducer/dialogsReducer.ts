import { RootActionType } from "../../../types/actionType";
import { MassagePageType } from "../state";

export const dialogReducer = (state: MassagePageType, action: RootActionType) => {


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