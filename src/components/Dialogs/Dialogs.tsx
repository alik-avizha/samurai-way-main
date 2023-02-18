import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props: any) => {

    //Метод map для преобразования одного массива в другой
    let dialogsElements = props.dialogsPage.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages
        .map((m: { message: string; }) => <Message message={m.message}/>)

    let newMessageElement = useRef<HTMLTextAreaElement>(null)

    const addMessage = () => {
        if (newMessageElement.current !== null) {
            /*props.addMessage();*/
            props.dispatch({type: 'ADD-MESSAGE'})
        }
    }
    let opMessageChange = () => {
        if (newMessageElement.current !== null) {
            /*props.updateNewMessageText(newMessageElement.current.value)*/
            props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newMessageElement.current.value})
        }
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                  <textarea ref={newMessageElement}
                            onChange={opMessageChange}
                            value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

