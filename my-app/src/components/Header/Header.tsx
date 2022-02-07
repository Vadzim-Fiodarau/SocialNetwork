import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

type HeaderType = {
  isAuth: boolean
  login: null
}

const Header = (props:HeaderType) => {
  return (
    <header className={classes.header}>
      <img
        src='https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png'/>
      <div className={classes.loginBlock}>
        { props.isAuth ? props.login :
          <NavLink to={'/login'}> Login </NavLink> }
      </div>
    </header>
  )
}

export default Header