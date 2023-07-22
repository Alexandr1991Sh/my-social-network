import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../redux/state';
import { RootActionType } from '../../types/actionType';

type ProfileProps = {
    profilePage: ProfilePageType
    //    addPost:(postMessage: string)=> void
    dispatch: (action: RootActionType) => void
    // updateText: (newText: string) => void
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts 
        // updateText={props.updateText} 
         dispatch={props.dispatch} newText={props.profilePage.updateText} myPosts={props.profilePage.posts} />
    </div>

};

export default Profile;