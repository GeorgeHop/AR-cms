import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const RouteTitles = {
    '/': 'Dashboard',
};

function App() {
    const location = window.location.pathname;

    return (
        <Router>
            <Switch>

                {/*Routes for main Layout*/}
                <Route>
                    <MainLayout appName={'AR-cms'} title={RouteTitles[location] || ''}>
                        <Switch>
                            <Route exact path={'/'} component={HomePage}/>
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
