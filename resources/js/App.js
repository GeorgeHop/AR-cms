import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import {Provider} from "react-redux";
import store from "./redux/store";

const RouteTitles = {
    '/': 'Dashboard',
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {/*Routes for main Layout*/}
                    <Route>
                        <MainLayout appName={'AR-cms'} title={'' /*todo get title inside main layout*/}>
                            <Switch>
                                <Route exact path={} component={HomePage}/>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
