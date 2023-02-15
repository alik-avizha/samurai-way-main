import React from 'react';
import classes from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog+' '+classes.active}>
                    Aleksandr
                </div>
                <div className={classes.dialog}>
                    Nikita
                </div>
                <div className={classes.dialog}>
                    Denis
                </div>
                <div className={classes.dialog}>
                    Kolya
                </div>
                <div className={classes.dialog}>
                    Dima
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Where are you from?</div>
            </div>
        </div>
    )
}

export default Dialogs;

