import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

type HeaderType = {
  isAuth: boolean
  login: null
  logout: ()=> void
}

const Header = (props:HeaderType) => {
  return (
    <header className={classes.header}>
      <img
        src='https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png'/>
      <div className={classes.loginBlock}>
        { props.isAuth
          ? <div>{props.login } - <button onClick={props.logout} >Log out</button></div>
          : <NavLink to={'/login'}> Login </NavLink> }
      </div>
    </header>
  )
}

export default Header