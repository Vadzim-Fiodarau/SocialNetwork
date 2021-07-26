
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {ChangeEvent, LegacyRef, RefObject} from 'react';
import {ActionsTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



export type postsType = {
    id: number
    message: string
    likeCounter: number
}
type MyPostsTypeProps = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}




const MyPosts = (props: MyPostsTypeProps) => {

    let elementsPosts = props.posts
        .map((p: { message: string; likeCounter: number; }) => <Post message={p.message} likeCounter={p.likeCounter}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangePost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {elementsPosts}
            </div>

        </div>
    )
}

export default MyPosts