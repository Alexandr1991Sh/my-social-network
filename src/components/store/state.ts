// import { rerenderEntireTree } from '../../render';

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MassagePageType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    updateText: string
}

export type MassagePageType = {
    dialogsData: DialogsDateType[]
    messagesData: MessagesDateType[]
    updateMassage: string
}


export type DialogsDateType = {
    id: number
    name: string
}

export type MessagesDateType = {
    id: number
    message: string
}


// export const store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'my first post', likesCount: 12 },
//                 { id: 2, message: 'how are you ?', likesCount: 11 },
//                 { id: 3, message: 'put likes', likesCount: 17 }
//             ],
//             updateText: '',
//         },
//         messagesPage: {
//             dialogsData: [
//                 { id: 1, name: 'Yulia' },
//                 { id: 2, name: 'semen' },
//                 { id: 3, name: 'Tereza' },
//                 { id: 4, name: 'Lola' },
//                 { id: 5, name: 'Evgenia' },
//                 { id: 6, name: 'Sonja' }
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How is your it-Kamasutra?' },
//                 { id: 3, message: 'Yo' },
//                 { id: 4, message: 'Yo' },
//                 { id: 5, message: 'Yo' },
//                 { id: 6, message: 'Yo' },
//             ],
//             updateMassage: ''
//         },
//     } as StateType,
//     _callSubscriber(state: StateType) {
//         // export let rerenderEntireTree = (state: StateType) => {
//         //     root.render(
//         //         <BrowserRouter>
//         //             <React.StrictMode>
//         //                 <App state={store.getState()} dispatch={store.dispatch.bind(store)}
//         //                 />
//         //             </React.StrictMode>
//         //         </BrowserRouter>
//         //     );
//         // }
//     },
//     subsribe(obsrver: (state: StateType) => void) {
//         this._callSubscriber = obsrver
//     },
//     getState() {
//         return this._state
//     },

//     dispatch(action: RootActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._callSubscriber(this._state)
//     }
// }
