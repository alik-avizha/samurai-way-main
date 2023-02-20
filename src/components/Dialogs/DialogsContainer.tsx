import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {

    return (<StoreContext.Consumer>
             {
            (store) => {

                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let opMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
               return <Dialogs updateNewMessageText={opMessageChange}
                         addMessage={addMessage}
                         dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;

