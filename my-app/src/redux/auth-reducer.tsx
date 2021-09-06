import {ActionsTypes, authActionType} from "./users-reducer";


const SET_USER_DATA = 'SET_USER_DATA'

export type AuthPropsType = {
  userId: null
  email: null
  login: null
  isAuth: boolean
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }

}


export const setAuthUserData = (userId: null, email: null, login: null): authActionType =>
  ({type: SET_USER_DATA, data: {userId, email, login}})