import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {

    let dialogs = [
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
    let messages = [
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

    //Метод map для преобразования одного массива в другой
    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages
        .map((m) => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;

