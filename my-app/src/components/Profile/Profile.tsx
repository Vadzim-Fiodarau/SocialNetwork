import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType, updateStatus} from "../../redux/profile-reducer";



const Profile = (props: any) => {
        return (
            <div>
                <ProfileInfo
                  profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        )
    }

export default Profile

