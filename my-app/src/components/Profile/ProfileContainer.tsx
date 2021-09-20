import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {
  getUserProfile,
  ProfileResponseType,
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ownProps

type mapStateType = {
  profile: ProfileResponseType | null
}

type mdtpType = {
  getUserProfile: typeof getUserProfile
}

type ownProps = mapStateType & mdtpType


class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = '2'
    }
    this.props.getUserProfile(+userId)
  }


  render() {
    return (
      <div>
        <Profile profile={this.props.profile}/>
      </div>
    )
  }
}





const mapStateToProps = (state: AppPropsType): mapStateType => {
  return {
    profile: state.profilePage.profile,
  }
}
// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter<RouteComponentProps<PathParamsType>, any>(AuthRedirectComponent)

export default compose<React.ComponentType>(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  // WithAuthRedirect
)(ProfileContainer)

