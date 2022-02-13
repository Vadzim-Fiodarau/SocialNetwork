import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css'
import s from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
          </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
          <div className={classes.item}>
            <NavLink to='/login' activeClassName={s.activeLink}>Login</NavLink>
          </div>
        </nav>
    )
}

export default Navbar