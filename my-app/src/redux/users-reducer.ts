
import {Dispatch} from "redux";
import {userAPI} from "../api/api";
import {ProfileResponseType} from "./profile-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


export type SetUserType = {
  type: 'SET-USERS'
  users: initialStateType[]
}
export type UnfollowActionType = {
  type: 'UNFOLLOW'
  userId: number
}
export type FollowActionType = {
  type: 'FOLLOW'
  userId: number
}
export type AddPostActionType = {
  type: 'ADD POST'

}
export type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}
export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY'
  body: string
}
export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
  newMessageBody: string
}
export type SetCurrentPageType = {
  type: 'SET-CURRENT-PAGE'
  currentPage: number
}
export type SetTotalCountType = {
  type: 'SET-TOTAL-COUNT'
  totalCount: number
}
export type ToggleIsFetchingType = {
  type: 'TOGGLE-IS-FETCHING'
  isFetching: boolean
}
export type ToggleIsFollowingProgressType = {
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
  isFetching: boolean,
  userId: number,

}
export type setUserProfileType = {
  type: 'SET-USER-TYPE'
  profile: ProfileResponseType | null
}
export type authActionType = {
  type: 'SET_USER_DATA'
  data: {
    userId: null,
    email: null,
    login: null
  }
}
export type ActionsTypes =
  | AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageBodyActionType
  | SendMessageActionType
  | FollowActionType
  | UnfollowActionType
  | SetUserType
  | SetCurrentPageType
  | SetTotalCountType
  | ToggleIsFetchingType
  | setUserProfileType
  | authActionType
  | ToggleIsFollowingProgressType


export type locationType = {
  city: string
  country: string
}

export type initialStateType = {
  id: number
  photos: { small: string, large: string }
  followed: boolean
  name: string
  status: string
  location: locationType

}
export type statePropsType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: []
}

const initialState: statePropsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state: statePropsType = initialState,
                      action: ActionsTypes): statePropsType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT: {
      return {
        ...state, totalUsersCount: action.totalCount
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return <statePropsType>{
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state

  }
}

export const followSuccess = (userId: number): FollowActionType =>
  ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnfollowActionType =>
  ({type: UNFOLLOW, userId})
export const setUsers = (users: initialStateType[]): SetUserType =>
  ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType =>
  ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number): SetTotalCountType =>
  ({type: SET_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType =>
  ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressType =>
  ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFetching(true))

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const follow = (userID:number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userID))
    userAPI.followed(userID).then(data => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userID))
      }
      dispatch(toggleIsFollowingProgress(false, userID))
    })
  }
}

export const unFollow = (userID:number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsFollowingProgress(true, userID))
    userAPI.unFollowed(userID).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userID))
      }
      dispatch(toggleIsFollowingProgress(false, userID))
    })
  }
}

export default usersReducer