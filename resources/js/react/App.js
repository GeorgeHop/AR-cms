import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Sidebar";
import PageContainer from "./components/main/PageContainer";
import LoginPage from "./pages/LoginPage";

function App() {
    let location = window.location.pathname;
    const [title, setTitle] = React.useState(false);

    React.useEffect(() => getTitle(), []);

    const getTitle = () => {
        const titles = [
            {
                path: '/',
                title: 'Dashboard',
            }
        ];

        titles.forEach((element) => {
            if (element.path === location) {
                return setTitle(element.title);
            }
        });
    }

    return (
        <Router>
            {location !== '/login' && <Header/>}
            <div className='main-content columns main-content-custom'>
                {location !== '/login' && <Sidebar/>}
                <Switch>
                    <PageContainer title={title || ''}>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/login'} component={LoginPage}/>
                    </PageContainer>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
