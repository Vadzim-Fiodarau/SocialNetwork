
import {postsType} from "../components/Profile/MyPosts/MyPosts";
import {
    ActionsTypes,
    AddPostActionType, setUserProfileType,
    UpdateNewPostTextActionType
} from "./users-reducer";
import {profilePagePropsType} from "./store";

const ADD_POST = 'ADD POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_TYPE = 'SET-USER-TYPE';

export type stateProfilePropsType = {
    posts: Array<postsType>
    newPostText: string
    profile: null
}

const initialState = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likeCounter: 12},
        {id: 2, message: "It's my first post!", likeCounter: 11},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: stateProfilePropsType = initialState,
                               action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case
        UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case
        SET_USER_TYPE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state

    }
}

export const addPostActionCreator = ()
  : AddPostActionType => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string)
  :UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile: null)
  :setUserProfileType =>
  ({type: SET_USER_TYPE, profile})