import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={classes.content}>
                My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <Post message='Hello, how are you?' likeCounter={15}/>
                <Post message="It's my first post!" likeCounter={20}/>

            </div>

        </div>
    )
}

export default MyPosts