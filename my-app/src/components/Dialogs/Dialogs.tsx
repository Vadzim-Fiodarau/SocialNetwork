import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogsTypes} from "./DialogItem/DialogItem";
import Message, {messagesTypes} from "./Mesages/Message";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";


type DialogsPropsType = {
    messages: Array<messagesTypes>
    dialogs: Array<dialogsTypes>
    newMessageBody:string
    store:StoreType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs
        .map((d: { name: string; id: number; src: string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>)


    let messagesElements = props.messages
        .map((m: { message: string; id: number; }) => <Message message={m.message} id={m.id}/>)


    let newMessageBody = props.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder={'enter your name'}>
                    </textarea></div>
                    <div><button onClick={onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs