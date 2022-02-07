import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {
  getUserProfile, getUserStatus,
  ProfileResponseType, updateStatus,
} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";

import {compose} from "redux";

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ownProps

type mapStateType = {
  profile: ProfileResponseType | null
  status: string

}

type mdtpType = {
  getUserProfile: typeof getUserProfile
  getUserStatus: typeof getUserStatus
  updateStatus: typeof updateStatus
}

type ownProps = mapStateType & mdtpType


class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = '2'
    }
    this.props.getUserProfile(+userId)
    this.props.getUserStatus(+userId)
  }


  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          status ={this.props.status}
          updateStatus = {this.props.updateStatus}
        />
      </div>
    )
  }
}





const mapStateToProps = (state: AppPropsType): mapStateType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,

  }
}
// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter<RouteComponentProps<PathParamsType>, any>(AuthRedirectComponent)

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer)

