import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../store/state';
import { RootActionType } from '../../types/actionType';
import {StoreType} from "../store/reduxStore/storeRedux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileProps = {
    // profilePage: ProfilePageType
    // //    addPost:(postMessage: string)=> void
    // // dispatch: (action: RootActionType) => void
    // // updateText: (newText: string) => void
    store: StoreType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer
        // updateText={props.updateText} 
        //  dispatch={props.dispatch} newText={props.profilePage.updateText} myPosts={props.profilePage.posts}
         store={props.store}
        />
    </div>

};

export default Profile;