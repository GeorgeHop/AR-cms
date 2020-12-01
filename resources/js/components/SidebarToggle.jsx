import React from 'react';
import * as classnames from "classnames";
import {connect} from "react-redux";
import {toggleSidebar} from "../redux/actions/sidebarAction";

const SidebarToggle = ({isOpen, dispatch}) => {
    return (
        <button
            id={'sidebarToggle'}
            className={classnames('btn btn-dark btn-sm', {open: isOpen})}
            onClick={() => dispatch(toggleSidebar())}
        >
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
        </button>
    )
}

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(SidebarToggle);
