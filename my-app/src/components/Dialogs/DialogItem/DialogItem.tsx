import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemProps = {
    id: number
    name: string
    src:string
}
export type dialogsTypes = {
    id: number
    name: string
    src:string
}


const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id

    return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}> <img className={s.img} src={props.src}/>  {props.name} </NavLink>

            </div>
    )
}
export default DialogItem

