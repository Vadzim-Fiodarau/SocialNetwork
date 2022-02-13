import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {ChangeEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType, LoginForm} from "../../Login/Login";


export type postsType = {
  id: number
  message: string
  likeCounter: number
}
type MyPostsTypeProps = {
  posts: Array<postsType>
  newPostText: string
  addPost: (newPostText:string) => void
  updateNewPostText: (text: string) => void
}
export type FormDataPostType = {
  newPostText: string

}

const MyPosts = (props: MyPostsTypeProps) => {

  let elementsPosts = props.posts
    .map((p: { message: string; likeCounter: number; }) =>
      <Post message={p.message} likeCounter={p.likeCounter}/>)
  //
  // let onAddPost = () => {
  //   props.addPost()
  // }
  //
  // let onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let text = e.currentTarget.value
  //   props.updateNewPostText(text)
  // }

  const onSubmit = (formData: FormDataPostType) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>

      {/*<div>*/}
      {/*    <div>*/}
      {/*        <textarea value={props.newPostText} onChange={onChangePost}/>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*        <button onClick={onAddPost}>Add post</button>*/}
      {/*    </div>*/}
      {/*</div>*/}
      <MyPostReduxForm onSubmit={onSubmit} />
      <div className={classes.posts}>
        {elementsPosts}
      </div>

    </div>
  )
}

export default MyPosts


export const MyPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newPostText'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const MyPostReduxForm = reduxForm<FormDataPostType>({form: 'newPostText'})(MyPostForm)