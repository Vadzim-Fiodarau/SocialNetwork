import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg'/>
            </div>

            <div className={s.descriptionBlock}>
                avatar +description
            </div>

        </div>
    )
}

export default ProfileInfo;