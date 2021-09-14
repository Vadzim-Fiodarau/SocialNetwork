import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


type mapStateToPropsType = {
  isAuth: boolean
  login: null
}

type HeaderContainerType = {
  getAuthUserData: () => void
  isAuth: boolean
  login: null
}
class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header isAuth={this.props.isAuth}
                   login={this.props.login}
    />
  }
}

const mapStateToProps = (state: AppPropsType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)