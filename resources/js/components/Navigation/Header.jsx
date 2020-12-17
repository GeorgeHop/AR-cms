import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import SidebarToggle from "./SidebarToggle";
import {NavLink, useHistory} from "react-router-dom";
import {Routes} from "../../helpers/constants";

const Header = ({name}) => {
    const history = useHistory();

    const LogOut = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <Navbar bg="light" expand="lg" className='main-header'>
            <SidebarToggle/><Navbar.Brand><NavLink to={Routes.Dashboard}>{name}</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Button variant="danger" className='m-1' size="sm">
                    Issues
                    <Badge variant="light" className='m-1'>9</Badge>
                </Button>
                <Button variant="success" className='m-1' size="sm">
                    Messages
                    <Badge variant="light" className='m-1'>5</Badge>
                </Button>
            </Navbar.Collapse>
            <Nav className='justify-content-end'>
                <Button className='btn btn-dark btn-sm' onClick={() => LogOut()}>
                    Log out
                </Button>
            </Nav>
        </Navbar>
    );
}

export default Header;
