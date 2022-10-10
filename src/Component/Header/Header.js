import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-decoration-none text-primary fw-bold'>Quiz Contest</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="my-4 my-lg-3 mx-3"


                        >

                            <Nav.Link><NavLink to='/home' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            }
                            >Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/statistics' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >Statistics</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/blog' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >Blog</NavLink></Nav.Link>
                            <Nav.Link><NavLink to='/about' className={({ isActive }) =>
                                isActive ? 'active' : 'text-warning text-decoration-none fw-bold'
                            } >About</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;