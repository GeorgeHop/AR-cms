import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";

const Header = ({name}) => {
    return (
        <Navbar bg="light" expand="lg" className='main-header'>
            <Navbar.Brand href="#home">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                <Button size='sm' variant='light'>
                    Log out
                </Button>
            </Nav>
        </Navbar>
    );
}

export default Header;
