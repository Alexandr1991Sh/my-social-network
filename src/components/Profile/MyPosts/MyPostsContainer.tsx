import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import s from './MyPosts.module.css';
import {PostType} from '../../store/state';
import Post from './Post/Post';
import {RootActionType} from '../../../types/actionType';
import {UpdateTextAC, addPostAC} from '../../store/reducers/profileReducer';
import MyPosts from "./MyPosts";
import {StoreType} from "../../store/reduxStore/storeRedux";
import {connect} from "react-redux";

type MyPostsProps = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsProps) => {
    const state = props.store.getState().profilePage
    const addPost = (text: string) => {
        props.store.dispatch(addPostAC(text))
    }

    const updateText = (text: string) => {
        props.store.dispatch(UpdateTextAC(text))
    }

    return <div className={s.postsBlock}>
        <MyPosts myPosts={state.posts} newText={state.updateText} addPost={addPost} updateText={updateText}/>
    </div>

};

export default MyPostsContainer;

const  MyPostsContainer = connect