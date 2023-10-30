import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import s from './MyPosts.module.css';
import {PostType} from '../../store/state';
import Post from './Post/Post';
import {RootActionType} from '../../../types/actionType';
import {UpdateTextAC, addPostAC} from '../../store/reducers/profileReducer';
import MyPosts from "./MyPosts";
import {StoreType} from "../../store/reduxStore/storeRedux";

type MyPostsProps = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsProps) => {
    const addPost = (text: string) => {
        props.store.dispatch(addPostAC(text))
    }

    const updateTextHandler = (text: string) => {
        props.store.dispatch(UpdateTextAC(text))
    }

    return <div className={s.postsBlock}>
        <MyPosts myPosts={addPost}   newText={updateTextHandler}/>
    </div>

};

export default MyPostsContainer;