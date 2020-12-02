import React from 'react';
import Button from "react-bootstrap/Button";
import * as classnames from "classnames";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../helpers/constants";

const Sidebar = ({isOpen}) => {
    const history = useHistory();

    return (
        <nav id='sidebar'
             className={classnames({open: isOpen}, "col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar")}>
            <div className='m-1 w-100 user-info'>
                User Name
            </div>
            <ul className="nav nav-pills flex-column">
                <p className='m-1'>Admin</p>
                <li className="nav-item">
                    <Button variant='primary' onClick={() => history.push(Routes.AdminsList)}
                            className="m-1 w-100 p-1">Admins</Button>
                </li>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Users</Button>
                </li>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Subscribed users</Button>
                </li>
            </ul>
            <ul className="nav nav-pills flex-column">
                <p className='m-1'>Scenarist</p>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Scenario constructor</Button>
                </li>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">List of scenarios</Button>
                </li>
            </ul>
            <ul className="nav nav-pills flex-column">
                <p className='m-1'>Support</p>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Issues</Button>
                </li>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Messages</Button>
                </li>
            </ul>
        </nav>
    )
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
};

Sidebar.defaultProps = {
    isOpen: true,
};

export default connect(state => ({
    isOpen: state.sidebarReducer,
}))(Sidebar);
