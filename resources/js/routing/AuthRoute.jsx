import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Loader from "../components/Loader";
import {Routes} from "../helpers/constants";

const AuthRoute = ({component: Component, ...rest}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);

    React.useEffect(() => {
        let userData = JSON.parse(localStorage.getItem('userData'));
        setIsAuthenticated(!!userData);
    }, []);

    return (
        <Route {...rest} render={matchProps => {
            if (isAuthenticated === null)
                return <Loader isLoading={true}/>

            return isAuthenticated
                ? <Component {...matchProps}/>
                : <Redirect to={{
                    pathname: Routes.Login,
                }}/>
        }}/>
    )
}

export default AuthRoute;
