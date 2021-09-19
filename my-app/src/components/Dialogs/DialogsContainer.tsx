import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dialogsPagePropsType, statePropsType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {AppPropsType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateType = {
    dialogsPage: dialogsPagePropsType
}

const mapStateToProps = (state: AppPropsType):mapStateType => {
    return {
        dialogsPage: state.dialogsPage,
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

// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   WithAuthRedirect
// )(Dialogs)
//
// const AuthRedirectComponent = WithAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)