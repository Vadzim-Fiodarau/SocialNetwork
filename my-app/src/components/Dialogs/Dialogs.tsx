import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogsTypes} from "./DialogItem/DialogItem";
import Message, {messagesTypes} from "./Mesages/Message";



const Dialogs = (props: any) => {

    let dialogsElements = props.dialogs
        .map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)


    let messagesElements = props.messages
        .map((m: { message: string; id: number; }) => <Message message={m.message} id={m.id}/>)


    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs