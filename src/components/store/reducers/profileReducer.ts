import { AddPostActionType, RootActionType, UpdateTextActionType } from './../../../types/actionType';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    postsData: [
        { id: 1, message: 'my first post', likesCount: 12 },
        { id: 2, message: 'how are you ?', likesCount: 11 },
        { id: 3, message: 'put likes', likesCount: 17 }
    ] as Array<PostType>,
    newPostText: '',
}
export type InitialStateType = typeof initialState
//InitialStateType перед названием переменной initialState писать не нужно так как, когда пишем: typeof initialState, то исходим
//из объекта и если объект будет ссылаться на типизацию InitialStateType которую создает оператор typeof, получается
//циклическая зависимость и непонятно что откуда. 
export const profileReducer = (state:InitialStateType = initialState, action: RootActionType): InitialStateType => {

    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        let stateCopy = {...state}
        stateCopy.postsData = [...state.postsData]
        stateCopy.postsData.unshift(newPost)
        stateCopy.newPostText = ''
        return stateCopy
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText
        return    stateCopy
    }
    return state
}

export const addPostAC = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const updateNewPostTextAC = (newText: string): UpdateTextActionType => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText
    }
}
