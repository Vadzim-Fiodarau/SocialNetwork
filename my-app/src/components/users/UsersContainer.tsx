import React from "react";
import {connect} from "react-redux";
import {
  follow, initialStateType, setCurrentPage, setTotalUsersCount,
  setUsers, toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import {AppPropsType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";

type mapStateType = {
  users: initialStateType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type mapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
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
}

class UsersContainer extends React.Component<UsersAPIType> {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader />: null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}

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
    isFetching: state.usersPage.isFetching
  }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
//   return {
//     follow: (userId: number) => {
//       dispatch(follow(userId))
//     },
//     unfollow: (userId: number) => {
//       dispatch(unfollow(userId))
//     },
//     setUsers: (users: initialStateType[]) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsers(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetching(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps, {follow, unfollow, setUsers,
  setCurrentPage, setTotalUsersCount, toggleIsFetching}as mapDispatchType)
(UsersContainer)

// ----------------------------------------------------------------------------------------------
// const Users = (props: UsersType) => {
//
//     if(props.users.length === 0){
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//     }
//
//         /* props.setUsers([
//             {
//             id: 1,
//             photoUrl: 'https://sun9-75.userapi.com/impf/c630924/v630924802/' +
//               '1446a/s33tSPeU4Ik.jpg?size=720x1080&quality=96&sign=b00fd02c1e7' +
//               '1a239a074008d458dcc40&type=album',
//             followed: true,
//             name: 'Vadim Fedorov',
//             status: 'i am a boss',
//             location: {city: 'LA', country: 'USA'}},
//             {
//                 id: 2,
//                 photos: 'https://encrypted-tbn0.gstatic.com/' +
//                   'images?q=tbn:ANd9GcTirwV3sJSSt0Xf8C43cLbEv2sJR_qW' +
//                   'mMpAKnEhdmZbl2b8Cnu8LKZ_CDDvidqsKm4-00k&usqp=CAU',
//                 followed: true,
//                 name: 'Kate Fedorova',
//                 status: 'i am a wife of boss',
//                 location: {city: 'LA', country: 'USA'}},
//             {
//                 id: 3,
//                 photos: 'https://orbita96.ru/upload/medialibrary/fcb' +
//                   '/fcbfc077af4ece60c115ae6bb0f90e74.jpg',
//                 followed: false,
//                 name: 'Maxim Fedorov',
//                 status: 'i am a son by Vadim and Kate',
//                 location: {city: 'LA', country: 'USA'}}])*/
//
//
//     return(
//         <div>
//             {
//                props.users.map(u => <div key={u.id}>
//                    <span>
//                        <div>
//                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
//                                 className={styles.userPhoto}/>
//                        </div>
//                        <div>
//                            {
//                                u.followed
//                                ? <button onClick={()=>
//                                    props.unfollow(u.id)}>Unfollow</button>
//                                : <button onClick={()=>
//                                    props.follow(u.id)}>Follow</button>
//                            }
//                        </div>
//                    </span>
//                    <span>
//                        <span>
//                            <div>{u.name}</div>
//                            <div>{u.status}</div>
//                        </span>
//                        <span>
//                            <div>{'u.location.country'}</div>
//                            <div>{'u.location.city'}</div>
//                        </span>
//                    </span>
//                </div> )
//             }
//         </div>
//     )
// }
//
// export default Users