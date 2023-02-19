import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props: any) => {

    let state = props.store.getState().dialogsPage;

    //Метод map для преобразования одного массива в другой
    let dialogsElements = state.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages
        .map((m: { message: string; }) => <Message message={m.message}/>)

    let newMessageText = state.newMessageText;

    /*let newMessageElement = useRef<HTMLTextAreaElement>(null)*/

/*    const addMessage = () => {
        if (newMessageElement.current !== null) {
            /!*props.addMessage();*!/
            props.dispatch(addMessageActionCreator())
        }
    }
    let opMessageChange = () => {
        if (newMessageElement.current !== null) {
            let text = newMessageElement.current.value
            /!*props.updateNewMessageText(newMessageElement.current.value)*!/
            let action = updateNewMessageTextActionCreator(text)
            props.dispatch(action)
        }
    }*/
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let opMessageChange = (e: { target: any; }) => {
      let text = e.target.value;
      props.store.dispatch(updateNewMessageTextActionCreator(text))
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
                            /*ref={newMessageElement}*/
                            placeholder='Enter your message'
                            onChange={opMessageChange}
                            /*value={props.dialogsPage.newMessageText}*/
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

