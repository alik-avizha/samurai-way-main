import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
    <header className={classes.header}>
        <img
            src='https://papik.pro/uploads/posts/2022-01/1643617381_1-papik-pro-p-logotip-treugolnik-1.jpg'/>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
    );
}

export default Header;