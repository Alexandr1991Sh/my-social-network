// import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
// import s from './MyPosts.module.css';
// import {PostType} from '../../store/state';
// import Post from './Post/Post';
// import {RootActionType} from '../../../types/actionType';
// import {UpdateTextAC, addPostAC} from '../../store/reducers/profileReducer';
// import MyPosts from "./MyPosts";
// import {AppRootStateType, StoreType} from "../../store/reduxStore/storeRedux";
// import {connect} from "react-redux";
// import {Dispatch} from "redux";

// type MyPostsProps = {
//     store: StoreType
// }
//
// const MyPostsContainer = (props: MyPostsProps) => {
//     const state = props.store.getState().profilePage
//     const addPost = (text: string) => {
//         props.store.dispatch(addPostAC(text))
//     }
//
//     const updateText = (text: string) => {
//         props.store.dispatch(UpdateTextAC(text))
//     }
//
//     return <div className={s.postsBlock}>
//         <MyPosts myPosts={state.posts} newText={state.updateText} addPost={addPost} updateText={updateText}/>
//     </div>
// };

// export default MyPostsContainer;




import {PostType} from '../../store/state';
import {UpdateTextAC, addPostAC} from '../../store/reducers/profileReducer';
import MyPosts from "./MyPosts" ;
import {AppRootStateType} from "../../store/reduxStore/storeRedux";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    myPosts: PostType[]
    newText: string
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    updateText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        myPosts: state.profilePage.posts,
        newText: state.profilePage.updateText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        updateText: (text: string) => {
            dispatch(UpdateTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)