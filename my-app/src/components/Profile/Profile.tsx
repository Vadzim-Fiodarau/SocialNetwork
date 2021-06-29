import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'



const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://buddy.ghostpool.com/wp-content/uploads/photodune-3382849-mountain3-s1-1003x480.jpg'/>
            </div>

            <div>
                avatar +description
            </div>

            <MyPosts/>
        </div>
    )
}

export default Profile