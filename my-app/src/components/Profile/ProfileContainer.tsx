import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {
  getUserProfile,
  ProfileResponseType,
} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


type mapStateType = {
  profile: ProfileResponseType | null
  isAuth: boolean
}

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2
    }
    this.props.getUserProfile(userId)
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
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

