import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import SidebarToggle from "./SidebarToggle";
import {NavLink} from "react-router-dom";
import {Routes} from "../../helpers/constants";

const Header = ({name}) => {
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
                <NavLink className='btn btn-dark btn-sm' to={Routes.Login}>
                    Log out
                </NavLink>
            </Nav>
        </Navbar>
    );
}

export default Header;
