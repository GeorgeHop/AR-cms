import React from 'react';
import Sidebar from "../components/Navigation/Sidebar";
import Header from "../components/Navigation/Header";
import * as classnames from "classnames";
import {connect} from "react-redux";
import {SiteName} from "../helpers/constants";

const MainLayout = ({isOpen, children}) => (
    <>
        <div className={'d-flex'}>
            <Sidebar/>
            <div id={'content'} className={classnames('bg-light', {open: isOpen})}>
                <Header name={SiteName}/>
                <div className="p-3 content-inner-shadow">
                    {children}
                </div>
            </div>
        </div>
    </>
);

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(MainLayout);
