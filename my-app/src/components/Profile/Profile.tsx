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

const Profile = () => {

        return (
            <div>
                <ProfileInfo/>
                <MyPostsContainer/>
            </div>
        )
    }

export default Profile


// posts ={props.posts}
// dispatch={props.dispatch}
// newPostText={props.newPostText}