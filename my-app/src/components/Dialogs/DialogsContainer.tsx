import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dialogsPagePropsType, statePropsType} from "../../redux/store";
import {Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";

type mapStateType = {
    dialogsPage: dialogsPagePropsType
    isAuth: boolean
}

const mapStateToProps = (state: AppPropsType):mapStateType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer