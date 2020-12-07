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
import ScenarioConstructor from "./pages/ScenarionConstructor";

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                {/*Routes for main Layout*/}
                <Route>
                    <MainLayout appName={'AR-cms'}>
                        <Switch>
                            {/* Dashboard */}
                            <Route exact path={Routes.Dashboard} component={HomePage}/>
                            {/* Admin pages */}
                            <Route exact path={Routes.Admins} component={AdminsList}/>
                            <Route exact path={Routes.AdminsEdit()} component={AdminDetails}/>
                            <Route exact path={Routes.AdminsCreate} component={AdminDetails}/>

                            <Route exact path={Routes.ScenarioConstructor} component={ScenarioConstructor}/>
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;
