import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to="/login"/>;
        return <Component {...props} />
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
};

// class RedirectComponent extends React.Component {
//     render () {
//         if (!this.props.isAuth) return <Redirect to="/login"/>;
//         return <Component {...this.props} />
//     }
// };
// return RedirectComponent