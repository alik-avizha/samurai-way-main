import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props: any) => {

    //Метод map для преобразования одного массива в другой
    let dialogsElements = props.state.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages
        .map((m: { message: string; }) => <Message message={m.message}/>)

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

