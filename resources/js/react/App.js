import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Header from "./components/main/Header";
import Sidebar from "./components/main/Sidebar";
import PageContainer from "./components/main/PageContainer";

function App() {
    const [title, setTitle] = React.useState(false);

    React.useEffect(() => getTitle(), []);

    const getTitle = () => {
        let location = window.location.pathname;

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
            <Header/>
            <div className='main-content columns main-content-custom'>
                <Sidebar/>
                <Switch>
                    <PageContainer title={title || ''}>
                        <Route path={'/'} component={HomePage}/>
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
