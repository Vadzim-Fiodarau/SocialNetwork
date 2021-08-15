import React from "react";
import {initialStateType, setUsersAC} from "../../redux/users-reducer";
import styles from './users.module.css'


type UsersType = {
    users: initialStateType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

const Users = (props: UsersType) => {

    if(props.users.length === 0){
        props.setUsers([
            {
            id: 1,
            photoUrl: 'https://sun9-75.userapi.com/impf/c630924/v630924802/1446a/s33tSPeU4Ik.jpg?size=720x1080&quality=96&sign=b00fd02c1e71a239a074008d458dcc40&type=album',
            followed: true,
            fullName: 'Vadim Fedorov',
            status: 'i am a boss',
            location: {city: 'LA', country: 'USA'}},
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwV3sJSSt0Xf8C43cLbEv2sJR_qWmMpAKnEhdmZbl2b8Cnu8LKZ_CDDvidqsKm4-00k&usqp=CAU',
                followed: true,
                fullName: 'Kate Fedorova',
                status: 'i am a wife of boss',
                location: {city: 'LA', country: 'USA'}},
            {
                id: 3,
                photoUrl: 'https://orbita96.ru/upload/medialibrary/fcb/fcbfc077af4ece60c115ae6bb0f90e74.jpg',
                followed: false,
                fullName: 'Maxim Fedorov',
                status: 'i am a son by Vadim and Kate',
                location: {city: 'LA', country: 'USA'}}]
        )
    }



    return(
        <div>
            {
               props.users.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photoUrl} className={styles.userPhoto}/>
                       </div>
                       <div>
                           {
                               u.followed
                               ? <button onClick={()=> props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={()=> props.follow(u.id)}>Follow</button>
                           }
                       </div>
                   </span>
                   <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                   </span>
               </div> )
            }
        </div>
    )
}

export default Users