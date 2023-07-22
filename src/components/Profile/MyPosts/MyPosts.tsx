import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../redux/state';
import Post from './Post/Post';

type MyPostsProps = {
    myPosts: PostType[]
    addPost:(postMessage: string)=> void
    updateText:(newText: string) => void
    newText: string
}

const MyPosts = (props:MyPostsProps) => {


    let newTextElement = useRef<HTMLTextAreaElement>(null)


    let postsElements = props.myPosts.map(((el) => <Post key={el.id} title={el.message} likesCount={el.likesCount}/>))
    
    const addPost = () => {
        if(newTextElement.current) props.addPost(newTextElement.current.value)
    }

    const updateText = () => {
        if(newTextElement.current)  props.updateText(newTextElement.current.value)
        
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.newText} ref={newTextElement} onChange={updateText} ></textarea>
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