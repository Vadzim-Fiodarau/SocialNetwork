import {
  ActionsTypes,
  FollowActionType, SetCurrentPageType, SetTotalCountType, SetUserType,
  UnfollowActionType,
} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

export type locationType = {
  city: string
  country: string
}

export type initialStateType = {
  id: number
  photos: {small: string, large: string}
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
}

const initialState: statePropsType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 3
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
    default:
      return state

  }
}

export const followAC = (userId: number): FollowActionType =>
  ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType =>
  ({type: UNFOLLOW, userId})
export const setUsersAC = (users: initialStateType[]): SetUserType =>
  ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageType =>
  ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersAC = (totalCount: number): SetTotalCountType =>
  ({type: SET_TOTAL_COUNT, totalCount})

export default usersReducer