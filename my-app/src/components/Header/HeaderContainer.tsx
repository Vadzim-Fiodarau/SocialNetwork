import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppPropsType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


type mapStateToPropsType = {
  isAuth: boolean
  login: null
  logout: () => void
}

type HeaderContainerType = {
  getAuthUserData: () => void
  isAuth: boolean
  login: null
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <Header isAuth={this.props.isAuth}
                   login={this.props.login}
                   logout={this.props.logout}
    />
  }
}

const mapStateToProps = (state: AppPropsType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  logout: state.auth.logout
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)