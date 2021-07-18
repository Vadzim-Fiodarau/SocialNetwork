
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {LegacyRef, RefObject} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



export type postsType = {
    id: number
    message: string
    likeCounter: number
}
type MyPostsTypeProps = {
    posts: Array<postsType>
    newPostText: string
    dispatch: (action:any) => void
}




const MyPosts = (props: MyPostsTypeProps) => {

    let elementsPosts = props.posts
        .map((p: { message: string; likeCounter: number; }) => <Post message={p.message} likeCounter={p.likeCounter}/>)


    let newPostElement:any  = React.createRef<HTMLInputElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }


    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onChangePost}/>
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