import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem, {dialogsTypes} from "./DialogItem/DialogItem";
import Message, {messagesTypes} from "./Mesages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType, StoreType} from "../../redux/store";



type DialogsPropsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage: ()=> void
    dialogsPage: any

}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map((d: { name: string; id: number; src: string }) => <DialogItem name={d.name} id={d.id} src={d.src}/>)


    let messagesElements = state.messages
        .map((m: { message: string; id: number; }) => <Message message={m.message} id={m.id}/>)


    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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