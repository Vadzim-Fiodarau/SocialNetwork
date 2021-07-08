import React from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogsTypes} from "./DialogItem/DialogItem";
import Message, {messagesTypes} from "./Mesages/Message";

type DialogsPropsType = {
    messages: Array<messagesTypes>
    dialogs:Array<dialogsTypes>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs
        .map((d: { name: string; id: number; src:string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>)


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