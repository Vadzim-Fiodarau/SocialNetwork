import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../../common/Preloader/Preloader";
import {ProfileResponseType} from "../../../../redux/profile-reducer";


type ProfileInfoPropsType = {
  profile: ProfileResponseType
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
  if(!props.profile) {
    return <Preloader/>
  }

    return (
        <div>
            <div>
                <img
                    src='https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large}/>
              <div>{props.profile.aboutMe}</div>
              <div>{props.profile.contacts.facebook}</div>
              <div>{props.profile.contacts.website}</div>
              <div>{props.profile.contacts.vk}</div>
              <div>{props.profile.contacts.twitter}</div>
              <div>{props.profile.contacts.instagram}</div>
              <div>{props.profile.contacts.youtube}</div>
              <div>{props.profile.lookingForAJob === true
                ? <img src={'https://img5.okidoki.st/c/6/9/3/593086/7358148/15766165_6.jpg'}/>
                : null}</div>
              <div>{props.profile.lookingForAJobDescription}</div>
              <div>{props.profile.fullName}</div>
                avatar +description
            </div>

        </div>
    )
}

export default ProfileInfo;