import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/main/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
