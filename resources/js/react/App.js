import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PageContainer from "./components/main/PageContainer";
import LoginPage from "./pages/LoginPage";

const RouteTitles = {
    '/': 'Dashboard',
};

function App() {
    const location = window.location.pathname;

    return (
        <Router>
            <Switch>
                <Route exact path={'/login'} component={LoginPage}/>
                <PageContainer title={RouteTitles[location] || ''}>
                    <Route exact path={'/'} component={HomePage}/>
                </PageContainer>
            </Switch>
        </Router>
    );
}

export default App;
