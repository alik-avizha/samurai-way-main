import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/Profile" activeClassName={classes.activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/Messages" activeClassName={classes.activeLink}>
                    Messages
                </NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/Users" activeClassName={classes.activeLink}>
                    Users
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.activeLink}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.activeLink}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Settings" activeClassName={classes.activeLink}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;