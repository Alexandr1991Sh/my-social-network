import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from "../store/reduxStore/storeRedux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfileProps = {
    store: StoreType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer  />
    </div>

};

export default Profile;
