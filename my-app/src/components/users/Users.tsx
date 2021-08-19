import React from "react";
import {initialStateType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/img/users.jpg'

export type UsersType = {
  users: initialStateType[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: initialStateType[]) => void
}

class Users extends React.Component<UsersType> {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <div>
        {
          this.props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img
                             src={u.photos.small !== null ? u.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </div>
                       <div>
                           {
                             u.followed
                               ? <button onClick={() =>
                                 this.props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() =>
                                 this.props.follow(u.id)}>Follow</button>
                           }
                       </div>
                   </span>
            <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{'u.location.country'}</div>
                           <div>{'u.location.city'}</div>
                       </span>
                   </span>
          </div>)
        }
      </div>
    )
  }
}

export default Users


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