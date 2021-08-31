import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts, {postsType} from "./MyPosts";
import {connect} from "react-redux";
import {statePropsType} from "../../../redux/store";
import {Dispatch} from "redux";

//
// type MyPostsContainerTypeProps = {
//     // newPostText: string
//     // posts: Array<postsType>
//     // dispatch: (action: ActionsTypes) => void
//     store:ReduxStoreType
// }


// const MyPostsContainer = () => {
//     let state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     let onChangePost = (text:string) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action)
//     }
//
//      return (<MyPosts updateNewPostText={onChangePost}
//                       addPost={addPost}
//                       posts={state.profilePage.posts}
//                       newPostText={state.profilePage.newPostText}
//
//      />)
// }
//
// export default MyPostsContainer



const mapStateToProps = (state: statePropsType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text:string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

