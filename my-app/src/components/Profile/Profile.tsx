import React from 'react';
import MyPosts, {postsType} from './MyPosts/MyPosts'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";



const Profile = (props: any) =>
    {
        return (
            <div>
                <ProfileInfo/>
                <MyPosts posts ={props.posts}/>
            </div>
        )
    }

export default Profile