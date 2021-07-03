import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


export type postsType = {
    id: number
    message: string
    likeCounter: number
}



const MyPosts = (props: any) => {

    let elementsPosts = props.posts
        .map((p: { message: string; likeCounter: number; }) => <Post message={p.message} likeCounter={p.likeCounter}/>)

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {elementsPosts}
            </div>

        </div>
    )
}

export default MyPosts