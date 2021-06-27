import React from 'react';
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src='https://buddy.ghostpool.com/wp-content/themes/buddy/lib/images/logo.png'/>
        </header>
    )
}

export default Header