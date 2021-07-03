import s from './Message.module.css'
import React from "react";

export type MessagePropsType = {
    message: string
    id: number
}
export type messagesTypes = {
    id: number
    message: string
}


const Message = (props: MessagePropsType) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
export default Message
