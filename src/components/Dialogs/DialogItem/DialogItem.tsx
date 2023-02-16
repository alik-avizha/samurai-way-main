import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/Messages/' + props.id}>{props.name}</NavLink>
            <img src='https://www.pngall.com/wp-content/uploads/12/Male-Face-PNG.png' />
        </div>
    )
}

export default DialogItem;

