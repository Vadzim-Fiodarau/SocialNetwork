import {
    ActionsTypes,
    FollowActionType, SetUserType,
    UnfollowActionType,
} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type locationType = {
    city:string
    country: string
}
type initialStateType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location:locationType

}
type statePropsType = {
    users: initialStateType[]
}


const initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Vadim Fedorov', status: 'i am a boss', location: {city: 'LA', country: 'USA'}},
        {id: 1, followed: true, fullName: 'Kate Fedorova', status: 'i am a wife of boss', location: {city: 'LA', country: 'USA'}},
        {id: 1, followed: false, fullName: 'Maxim Fedorov', status: 'i am a son by Vadim and Kate', location: {city: 'LA', country: 'USA'}},

    ]
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
                ...state, users: action.userId
            }
        default:
            return state

    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (userId: number): SetUserType => ({type: SET_USERS, userId})

export default usersReducer