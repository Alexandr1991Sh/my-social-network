import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../store/state';
import Post from './Post/Post';
import { RootActionType } from '../../../types/actionType';
import { UpdateTextAC, addPostAC } from '../../store/reducers/profileReducer';


type MyPostsProps = {
    myPosts: PostType[]
    dispatch: (action: RootActionType) => void
    newText: string
}

const MyPosts = (props: MyPostsProps) => {


    let newTextElement = useRef<HTMLTextAreaElement>(null)


    let postsElements = props.myPosts.map(((el) => <Post key={el.id} title={el.message} likesCount={el.likesCount} />))

    const addPost = () => {
        if (newTextElement.current) props.dispatch(addPostAC(newTextElement.current.value))
    }

    const updateTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateTextAC(e.currentTarget.value))
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && newTextElement.current?.value) addPost()
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onKeyDown={onKeyDownHandler} value={props.newText} ref={newTextElement} onChange={updateTextHandler} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;