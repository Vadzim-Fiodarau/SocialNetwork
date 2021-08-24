import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC, initialStateType, setCurrentPageAC, setTotalUsersAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateType = {
    users: initialStateType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStateType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppPropsType):mapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)