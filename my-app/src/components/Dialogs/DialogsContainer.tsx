import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/store";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store:ReduxStoreType
}

const DialogsContainer = (props: DialogsPropsType) => {


    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}


    />)
}

export default DialogsContainer