import {postsType} from "../components/Profile/MyPosts/MyPosts";
import {
  ActionsTypes,
  AddPostActionType, setUserProfileType, StatusActionType,
  UpdateNewPostTextActionType
} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";


const ADD_POST = 'ADD POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_TYPE = 'SET-USER-TYPE';
const SET_STATUS = 'SET-STATUS';

export type stateProfilePropsType = {
  posts: Array<postsType>
  newPostText: string
  profile: ProfileResponseType | null
  status: string
}

export type ProfileResponseType = {
  aboutMe: string
  contacts: {
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
  }
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: {
    large: string
    small: string
  }
  userId: string | number
}

const initialState = {
  posts: [
    {id: 1, message: 'Hello, how are you?', likeCounter: 12},
    {id: 2, message: "It's my first post!", likeCounter: 11},
  ],
  newPostText: '',
  profile: null,
  status: ''

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
    SET_STATUS:
      return {
        ...state,
        status: action.status
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
  : UpdateNewPostTextActionType =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

const setUserProfile = (profile: ProfileResponseType | null)
  : setUserProfileType =>
  ({type: SET_USER_TYPE, profile})

const setStatus = (status: string)
  : StatusActionType =>
  ({type: SET_STATUS, status})

export const getUserProfile = (userId:number) => (dispatch: Dispatch)=> {
  userAPI.getProfile(userId).then(response => {
   dispatch(setUserProfile(response.data))
  })
}

export const getUserStatus = (userId:number) => (dispatch: Dispatch)=> {
  profileAPI.getStatus(userId)
    .then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status:string) => (dispatch: Dispatch)=> {
  profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0){
        console.log(response.data.data,'response.data')
        // dispatch(setStatus(response.data)) //{}
       dispatch(setStatus(status))
      }
    })
}

