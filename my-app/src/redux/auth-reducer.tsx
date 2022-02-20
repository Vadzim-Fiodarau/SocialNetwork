import {ActionsTypes, authActionType} from "./users-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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
        ...action.payload,
      }
    default:
      return state;
  }

}


const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean): authActionType =>
  ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
  authAPI.login(email, password,rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
      }
    })
}

export const logout = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}