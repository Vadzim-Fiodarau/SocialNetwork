import {ActionsTypes, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";
import {messagesTypes} from "../components/Dialogs/Mesages/Message";
import {dialogsTypes} from "../components/Dialogs/DialogItem/DialogItem";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
type StateDialogsPropsType = {
    messages: Array<messagesTypes>
    dialogs: Array<dialogsTypes>
    newMessageBody: string
}

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Vadim',
            src: 'https://sun9-75.userapi.com/impf/c630924/v630924802/1446a/s33tSPeU4Ik.jpg?size=720x1080&quality=96&sign=b00fd02c1e71a239a074008d458dcc40&type=album'
        },
        {
            id: 2,
            name: 'Kate',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirwV3sJSSt0Xf8C43cLbEv2sJR_qWmMpAKnEhdmZbl2b8Cnu8LKZ_CDDvidqsKm4-00k&usqp=CAU'
        },
        {
            id: 3,
            name: 'Alex',
            src: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg'
        },
        {
            id: 4,
            name: 'Sveta',
            src: 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg'
        },
        {
            id: 5,
            name: 'Dimych',
            src: 'https://st4.styapokupayu.ru/images/blog_posts/covers/000/136/369_large.jpg?1576853877'
        },


    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your going?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: StateDialogsPropsType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }

}


export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE}) as SendMessageActionType

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})