import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC, initialStateType,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateType = {
    users: initialStateType[]
}
type mapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStateType[]) => void
}

const mapStateToProps = (state: AppPropsType):mapStateType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: initialStateType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)