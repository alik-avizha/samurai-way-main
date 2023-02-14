import React from 'react';
import classes from './Navbar.module.css';

/*let classes = {
    'nav': 'Navbar_nav__bIR\\+Y',
    'item': 'Navbar_item__rdg03',
    'active: 'fsdsdgs'
}*/

/*let cl1 = 'item';
let cl2 = 'active';*/
//item active
/*let sum = cl1+' '+cl2;
let sumNew = `${classes.item} ${classes.active}`;*/

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a>
                    Profile
                </a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a>
                    Messages
                </a>
            </div>
            <div className={classes.item}>
                <a>
                    News
                </a>
            </div>
            <div className={classes.item}>
                <a>
                    Music
                </a>
            </div>
            <div className={classes.item}>
                <a>
                    Settings
                </a>
            </div>
        </nav>
    )
}

export default Navbar;