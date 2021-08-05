import React from 'react';
import {ActionsTypes, ReduxStoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts, {postsType} from "./MyPosts";

type MyPostsContainerTypeProps = {
    // newPostText: string
    // posts: Array<postsType>
    // dispatch: (action: ActionsTypes) => void
    store:ReduxStoreType
}


const MyPostsContainer = (props: MyPostsContainerTypeProps) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangePost = (text:string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

     return (<MyPosts updateNewPostText={onChangePost}
                      addPost={addPost}
                      posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}

     />)
}

export default MyPostsContainer