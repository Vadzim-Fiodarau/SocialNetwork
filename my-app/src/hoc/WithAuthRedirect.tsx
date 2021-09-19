import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppPropsType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsForRedirectType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppPropsType): MapStateToPropsForRedirectType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function WithAuthRedirect <T>(Component: ComponentType<T>) {
  class RedirectComponent extends React.Component<MapStateToPropsForRedirectType> {
    render() {
      const {isAuth, ...restProps} = this.props
      if (!isAuth) return <Redirect to={'/login'}/>

      return <Component{...restProps as T}/>
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}