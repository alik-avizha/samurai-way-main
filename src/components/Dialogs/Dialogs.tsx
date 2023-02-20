import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {

    let state = props.dialogsPage;

    //Метод map для преобразования одного массива в другой
    let dialogsElements = state.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages
        .map((m: {id: number; message: string; }) => <Message message={m.message} key={m.id}/>)

    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }
    let opMessageChange = (e: { target: any; }) => {
      let text = e.target.value;
      props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                         <textarea
                            placeholder='Enter your message'
                            onChange={opMessageChange}
                            value={newMessageText}
                         />
                    </div>
                    <div>
                         <button onClick={addMessage}>add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

