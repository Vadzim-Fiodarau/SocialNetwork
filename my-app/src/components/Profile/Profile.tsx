import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


// type ProfileTypeProps = {
//    // posts: Array<postsType>
//    //  newPostText: string
//    //  dispatch: (action:ActionsTypes) => void
//     store:ReduxStoreType
//
// }


type ProfilePropsType = {
  profile: any
}
const Profile = (props: ProfilePropsType) => {

        return (
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        )
    }

export default Profile


// posts ={props.posts}
// dispatch={props.dispatch}
// newPostText={props.newPostText}