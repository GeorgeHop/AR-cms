import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import * as classnames from "classnames";
import {connect} from "react-redux";

const MainLayout = ({isOpen, children, title, appName}) => {
    return (
        <>
            <div className={'d-flex'}>
                <Sidebar/>
                <div id={'content'} className={classnames('bg-light', {open: isOpen})}>
                    <Header name={appName}/>
                    <div className="p-3 content-inner-shadow">
                        <h4 className='m-1'>{title}</h4>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(MainLayout);
