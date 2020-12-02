import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import AdminsList from "./pages/Admins/AdminsList";
import AdminDetails from "./pages/Admins/AdminDetails";
import Routes from "./routes/Routes";

const App = () => (
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
                        <Route exact path={Routes.AdminsList} component={AdminsList}/>
                        <Route exact path={Routes.AdminEdit()} component={AdminDetails}/>
                        <Route exact path={Routes.AdminCreate} component={AdminDetails}/>
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Router>
)

export default App;
