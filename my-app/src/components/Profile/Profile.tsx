import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType, updateStatus} from "../../redux/profile-reducer";

type ProfileType = {
  profile: ProfileResponseType
  status: string
  updateStatus: typeof updateStatus
}

const Profile = (props: ProfileType) => {
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

