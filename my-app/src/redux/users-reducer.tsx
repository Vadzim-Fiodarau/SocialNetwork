import {
    ActionsTypes,
    FollowActionType, SetUserType,
    UnfollowActionType,
} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type locationType = {
    city:string
    country: string
}
export type initialStateType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location:locationType

}
export type statePropsType = {
    users: initialStateType[]
}


const initialState = {
    users: []
}

const usersReducer = (state: statePropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
          return {
              ...state,
              users: state.users.map(u => {
                  if(u.id === action.userId){
                      return {...u, followed: true}
                  }
                  return u
              })
          }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any): SetUserType => ({type: SET_USERS, users})

export default usersReducer