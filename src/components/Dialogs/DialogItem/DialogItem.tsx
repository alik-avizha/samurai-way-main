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
            <img src='https://thumb.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg' />
        </div>
    )
}

export default DialogItem;

