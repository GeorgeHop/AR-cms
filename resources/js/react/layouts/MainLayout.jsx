import React from 'react';
import Sidebar from "../components/Navigation/Sidebar";
import Header from "../components/Navigation/Header";
import * as classnames from "classnames";
import {connect} from "react-redux";
import Container from "react-bootstrap/cjs/Container";

const MainLayout = ({isOpen, children, appName}) => (
    <div className={'d-flex'}>
        <Sidebar/>
        <div id={'content'} className={classnames('bg-light', {open: isOpen})}>
            <Header name={appName}/>
            <div className="p-3 content-inner-shadow">
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    </div>
);

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(MainLayout);
