import React from 'react';
import { PostType } from '../../store/state';
import {addPostAC, updateNewPostTextAC} from '../../store/reducers/profileReducer';
import {AppRootStateType} from "../../store/reduxStore/storeRedux";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    myPosts: PostType[]
    newPostText: string
}
 type mapDispatchToPropsType ={
     addPost:() => void
     updateNewPostText: (text:string) => void
 }
const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
  return {
      myPosts: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch : Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
      

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
