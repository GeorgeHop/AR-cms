import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Loader from "../components/Loader";
import {Routes} from "../helpers/constants";
import {connect} from "react-redux";
import {logIn} from "../redux/actions/userAction";

const AuthRoute = ({component: Component, user, dispatch, ...rest}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);

    React.useEffect(() => {
        dispatch(logIn(JSON.parse(localStorage.getItem('userData'))));
        setIsAuthenticated(true);
    }, [window.performance.navigation.type === 1]);

    return (
        <Route {...rest} render={matchProps => {
            if (isAuthenticated === null && Object.keys(user.user).length === 0)
                return <Loader/>

            return isAuthenticated
                ? <Component {...matchProps}/>
                : <Redirect to={{
                    pathname: Routes.Login,
                }}/>
        }}/>
    )
}

export default connect(state => ({
    user: state.userReducer,
}))(AuthRoute);
