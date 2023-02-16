import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/Messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {
            id: 1,
            name: 'Aleksandr'
        },
        {
            id: 2,
            name: 'Nikita'
        },
        {
            id: 3,
            name: 'Denis'
        },
        {
            id: 4,
            name: 'Kolya'
        },
        {
            id: 5,
            name: 'Dima'
        }
    ]
    let messagesData = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'Where are you from?'
        },
        {
            id: 4,
            message: 'Why?'
        },
        {
            id: 5,
            message: 'When do you meet?'
        }
    ]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name="Nikita" id={2}/>
                <DialogItem name="Denis" id={3}/>
                <DialogItem name="Kolya" id={4}/>
                <DialogItem name="Dima" id={5}/>*/}
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                {/*<Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>*/}
            </div>
        </div>
    )
}

export default Dialogs;

