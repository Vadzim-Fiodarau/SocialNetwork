import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Mesages/Message";
import {dialogsPagePropsType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../Login/Login";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../units/validators";

const maxLength50 = maxLengthCreator(50)
type DialogsPropsType = {
  updateNewMessageBody: (body: string) => void
  sendMessage: (newMessageBody: string) => void
  dialogsPage: dialogsPagePropsType
  isAuth: boolean

}

type DialogsFormDataType = {
  newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs
    .map((d: { name: string; id: number; src: string }) => <DialogItem
      name={d.name} id={d.id} src={d.src}/>)


  let messagesElements = state.messages
    .map((m: { message: string; id: number; }) => <Message message={m.message}
                                                           id={m.id}/>)


  let newMessageBody = state.newMessageBody


  // let onSendMessageClick = () => {
  //   props.sendMessage()
  // }

  // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   let body = e.target.value
  //   props.updateNewMessageBody(body)
  // }

  const onSubmit = (formData: DialogsFormDataType) => {
    props.sendMessage(formData.newMessageBody)
  }

  return (

    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        {/*/!*<div>*!/*/}
        {/*/!*  <div><textarea*!/*/}
        {/*/!*    onChange={onNewMessageChange}*!/*/}
        {/*/!*    value={newMessageBody}*!/*/}
        {/*/!*    placeholder={'enter your name'}>*!/*/}
        {/*/!*            </textarea></div>*!/*/}
        {/*/!*  <div>*!/*/}
        {/*/!*    <button onClick={onSendMessageClick}>Send</button>*!/*/}
        {/*/!*  </div>*!/*/}
        {/*</div>*/}

        <DialogsReduxForm onSubmit={onSubmit}/>
      </div>
    </div>

  )
}

export default Dialogs


export const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'enter your name'} component={Textarea}
               name={'newMessageBody'}
               validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const DialogsReduxForm = reduxForm<DialogsFormDataType>({form: 'message'})(DialogsForm)