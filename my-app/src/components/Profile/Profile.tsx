import React from 'react';
import MyPosts, {postsType} from './MyPosts/MyPosts'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

type ProfileTypeProps = {
   posts: Array<postsType>
    newPostText: string
    dispatch: (action:any) => void

}

const Profile = (props:ProfileTypeProps) => {

        return (
            <div>
                <ProfileInfo/>
                <MyPosts posts ={props.posts}
                         dispatch={props.dispatch}
                         newPostText={props.newPostText}

                />
            </div>
        )
    }

export default Profile