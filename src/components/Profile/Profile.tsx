import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../redux/state';

type ProfileProps = {
    stateProfile: ProfilePageType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.stateProfile.posts} />
    </div>

};

export default Profile;