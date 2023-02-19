import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props: any) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let opMessageChange = (text: string) => {
       props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<Dialogs updateNewMessageText={opMessageChange}
                     addMessage={addMessage}
                     dialogsPage={state}
    /> )
}
export default DialogsContainer;

