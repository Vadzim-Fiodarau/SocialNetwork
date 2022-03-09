import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {ChangeEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../units/validators";
import { Textarea } from '../../../common/FormsControls/FormsControls';

export type postsType = {
  id: number
  message: string
  likeCounter: number
}
export type MyPostsTypeProps = {
  posts: Array<postsType>
  newPostText: string
  addPost: (newPostText:string) => void
  updateNewPostText: (text: string) => void
}
export type FormDataPostType = {
  newPostText: string

}

const maxLength = maxLengthCreator(10)

const MyPosts = (props: MyPostsTypeProps) => {

  let elementsPosts = props.posts
    .map((p: { message: string; likeCounter: number; }) =>
      <Post message={p.message} likeCounter={p.likeCounter}/>)

  const onSubmit = (formData: FormDataPostType) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
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
        <Field component={Textarea} name={'newPostText'} validate={[required, maxLength]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export const MyPostReduxForm = reduxForm<FormDataPostType>({form: 'newPostText'})(MyPostForm)