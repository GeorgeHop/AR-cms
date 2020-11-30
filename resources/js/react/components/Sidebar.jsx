import React from 'react';
import {Button} from "react-bootstrap";

const Sidebar = () => {
    return (
        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            <div className='m-1 w-100 user-info'>
                User Name
            </div>
            <ul className="nav nav-pills flex-column">
                <p className='m-1'>Admin</p>
                <li className="nav-item">
                    <Button variant='primary' className="m-1 w-100 p-1">Admins</Button>
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

export default Sidebar;
