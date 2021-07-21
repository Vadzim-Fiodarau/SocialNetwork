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

    // let newMessageElement: any = React.createRef<HTMLInputElement>();
    //
    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //      alert(text)
    // }
        return (
            <div>
                <div>
                    <div className={s.message}>{props.message}</div>
                </div>
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <textarea ref={newMessageElement}></textarea>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={addMessage}>Add message</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }

    export default Message
