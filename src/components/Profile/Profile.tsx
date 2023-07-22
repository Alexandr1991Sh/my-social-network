import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../redux/state';
import { RootActionType } from '../../types/actionType';

type ProfileProps = {
    profilePage: ProfilePageType
    dispatch: (action: RootActionType) => void
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts 
         dispatch={props.dispatch} newText={props.profilePage.updateText} myPosts={props.profilePage.posts} />
    </div>
};
export default Profile;