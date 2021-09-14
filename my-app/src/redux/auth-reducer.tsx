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
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }

}


const setAuthUserData = (userId: null, email: null, login: null): authActionType =>
  ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login))
      }
    })
}