import React from "react";
import {connect} from "react-redux";
import {
  follow, initialStateType, setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching, toggleIsFollowingProgress,
  unfollow
} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type mapStateType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: []
}
type mapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}
export type UsersAPIType = {
  users: initialStateType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  pageSize: number
  totalUsersCount: number
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  isFetching: boolean
  toggleIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  followingInProgress:[]
}

class UsersContainer extends React.Component<UsersAPIType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)

    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount)
    })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);

    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
             followingInProgress={this.props.followingInProgress}
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress
} as mapDispatchType)
(UsersContainer)

