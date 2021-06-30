import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemProps = {
    id:string
    name:string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType ={
    message:string
}

const Message = (props: MessagePropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name='Vadim' id='1'/>
                <DialogItem name='Kate' id='2'/>
                <DialogItem name='Andrey' id='3'/>
                <DialogItem name='Alex' id='4'/>
                <DialogItem name='Dimych' id='5'/>
                <DialogItem name='Sveta' id='6'/>

            </div>

            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your going?'/>
                <Message message='Yo'/>
            </div>


        </div>


    )

}

export default Dialogs