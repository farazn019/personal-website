import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export function NavigationBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Nav className="me-auto" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Nav.Link href="#about-me-section">About Me</Nav.Link>
                    <Nav.Link href="#work-experience">Work Experience</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    {/*<Nav.Link href="#side-projects">Side Projects</Nav.Link>*/}
                    {/*<Nav.Link href="#contact-me">Contact Me</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>

    );
}