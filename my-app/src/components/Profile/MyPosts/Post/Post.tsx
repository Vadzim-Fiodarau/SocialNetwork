import React from 'react';
import classes from './Post.module.css'

type PostType = {
    message: string
    likeCounter: number
}

const Post = (props: PostType) => {
    return (

            <div className={classes.item}>
                <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'/>
                {props.message}
                <div>
                <span>Like </span>
                    <span>{props.likeCounter}</span>
                </div>
            </div>
    )
}

export default Post