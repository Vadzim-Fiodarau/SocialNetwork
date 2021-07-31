import {ActionsTypes, AddPostActionType, UpdateNewPostTextActionType} from "./store";
import {postsType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
type stateProfilePropsType = {
    posts: Array<postsType>
    newPostText: string
}


const initialState =  {
    posts: [
        {id: 1, message: 'Hello, how are you?', likeCounter: 12},
        {id: 2, message: "It's my first post!", likeCounter: 11},
    ],
        newPostText: ''
}

export const profileReducer = (state: stateProfilePropsType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})