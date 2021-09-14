import React from "react";
import {connect} from "react-redux";
import {
  follow,
  followSuccess,
  getUsers,
  initialStateType,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress, unFollow,
  unfollowSuccess
} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";


type mapStateType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: []
}
type mapDispatchType = {
  followSuccess: (userId: number) => void
  unfollowSuccess: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void

}
export type UsersAPIType = {
  users: initialStateType[]
  followSuccess: (userId: number) => void
  unfollowSuccess: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  followingInProgress: []
  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userID: number) => void
  unFollow: (userID: number) => void
}

class UsersContainer extends React.Component<UsersAPIType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followSuccess={this.props.followSuccess}
             unfollowSuccess={this.props.unfollowSuccess}
             toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
             followingInProgress={this.props.followingInProgress}
             follow={this.props.follow}
             unFollow={this.props.unFollow}
      />
    </>
  }
}

const mapStateToProps = (state: AppPropsType): mapStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  followSuccess,
  unfollowSuccess,
  setUsers, // при удаление ложиться UserContainer в App
  setCurrentPage,
  setTotalUsersCount, // при удаление ложиться UserContainer в App
  toggleIsFetching, // при удаление ложиться UserContainer в App
  toggleIsFollowingProgress,
  getUsers,
  follow,
  unFollow
} as mapDispatchType)
(UsersContainer)

