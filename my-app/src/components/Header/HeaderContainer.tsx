import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthPropsType, setAuthUserData} from "../../redux/auth-reducer";
import {AppPropsType} from "../../redux/redux-store";

type mapStateToPropsType = {
  isAuth: boolean
  login: null
}

type HeaderContainerType = {
  setAuthUserData: (userId: null, email: null, login: null) => void
  isAuth: boolean
  login: null
}
class HeaderContainer extends React.Component<HeaderContainerType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if(response.data.resultCode === 0) {
          let {id, login, email} = response.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)