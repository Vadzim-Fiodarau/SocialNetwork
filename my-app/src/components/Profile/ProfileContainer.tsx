import React, {Component, ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {
  getUserProfile,
  ProfileResponseType,
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ownProps

type mapStateType = {
  profile: ProfileResponseType | null
  isAuth: boolean
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
    if (!this.props.isAuth) return <Redirect to={'/login'}/>
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
    isAuth: state.auth.isAuth
  }
}
let WithUrlDataContainerComponent = withRouter<RouteComponentProps<PathParamsType>, any>(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

