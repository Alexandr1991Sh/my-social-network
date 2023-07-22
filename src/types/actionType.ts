
const ADD_POST = "ADD-POST"
const UPDATE_TEXT = "UPDATE-TEXT"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"
const  ADD_MESSAGE = " ADD-MESSAGE"

export type RootActionType = AddPostActionType | UpdateTextActionType | UpdateMassageTextActionType | AddMassageActionType

export type AddPostActionType ={
    type: typeof ADD_POST
    newMassage: string
}

export type UpdateTextActionType ={
    type: typeof UPDATE_TEXT
    newText: string
}

export type  UpdateMassageTextActionType ={
    type: typeof UPDATE_MESSAGE
    newMassageText: string
}

export type AddMassageActionType ={
    type: typeof ADD_MESSAGE
    message: string
}