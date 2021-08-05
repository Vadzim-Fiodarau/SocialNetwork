import React from 'react';
import MyPosts, {postsType} from './MyPosts/MyPosts'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import {ActionsTypes, ReduxStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileTypeProps = {
   // posts: Array<postsType>
   //  newPostText: string
   //  dispatch: (action:ActionsTypes) => void
    store:ReduxStoreType

}

const Profile = (props:ProfileTypeProps) => {

        return (
            <div>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}

                />
            </div>
        )
    }

export default Profile


// posts ={props.posts}
// dispatch={props.dispatch}
// newPostText={props.newPostText}