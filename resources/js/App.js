import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Routes} from "./helpers/constants";
import Login from "./pages/Login";
import AdminsList from "./pages/Admins/AdminsList";
import AdminDetails from "./pages/Admins/AdminDetails";
import UsersList from "./pages/Users/UsersList";
import Registration from "./pages/Registration";
import AuthRoute from "./routing/AuthRoute";
import ScenarioConstructor from "./pages/Scenarist/ScenarionConstructor";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path={'/registration'} component={Registration}/>
                <Route exact path={'/login'} component={Login}/>
                {/*Routes for main Layout*/}
                <Route>
                    <MainLayout appName={'AR-cms'}>
                        <Switch>
                            {/* Dashboard */}
                            <AuthRoute exact path={Routes.Dashboard} component={HomePage}/>
                            {/* Admin pages */}
                            <AuthRoute exact path={Routes.Admins} component={AdminsList}/>
                            <AuthRoute exact path={Routes.AdminsEdit()} component={AdminDetails}/>
                            <AuthRoute exact path={Routes.AdminsCreate} component={AdminDetails}/>
                            {/* Users pages */}
                            <AuthRoute exact path={Routes.UsersList} component={UsersList}/>

                            <AuthRoute exact path={Routes.ScenarioConstructor} component={ScenarioConstructor}/>
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;
