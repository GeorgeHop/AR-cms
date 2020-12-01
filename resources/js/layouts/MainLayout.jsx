import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import * as classnames from "classnames";
import {connect} from "react-redux";
import {RouteTitles, SiteName} from "../helpers/constants";

const MainLayout = ({isOpen, children}) => (
    <>
        <div className={'d-flex'}>
            <Sidebar/>
            <div id={'content'} className={classnames('bg-light', {open: isOpen})}>
                <Header name={SiteName}/>
                <div className="p-3 content-inner-shadow">
                    <h4 className='m-1'>{RouteTitles[window.location.pathname] || ''}</h4>
                    {children}
                </div>
            </div>
        </div>
    </>
);

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(MainLayout);
