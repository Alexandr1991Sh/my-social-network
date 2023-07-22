import { AddPostActionType, RootActionType } from "../../../types/actionType";
import { ProfilePageType } from "../state";

export const profileReducer = (state: ProfilePageType, action: RootActionType) => {

    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: action.newMassage,
            likesCount: 0
        };
        state.posts.unshift(newPost)
        state.updateText = ''

    } else if (action.type === "UPDATE-TEXT") {
        state.updateText = action.newText
    }
    return state
}


export const AddPostAc = (newMassage: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newMassage
    }
}