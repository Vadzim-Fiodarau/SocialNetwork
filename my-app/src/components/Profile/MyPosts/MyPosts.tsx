import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {ChangeEvent} from 'react';




export type postsType = {
    id: number
    message: string
    likeCounter: number
}
type MyPostsTypeProps = {
    posts: Array<postsType>
    newPostText: string
    addPost: ()=> void
    updateNewPostText:(text:string) => void
}




const MyPosts = (props: MyPostsTypeProps) => {

    let elementsPosts = props.posts
        .map((p: { message: string; likeCounter: number; }) =>
          <Post message={p.message} likeCounter={p.likeCounter}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onChangePost = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangePost}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={classes.posts}>
                {elementsPosts}
            </div>

        </div>
    )
}

export default MyPosts