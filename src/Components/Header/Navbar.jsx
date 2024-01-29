import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  return (
  <div>
   <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='shadow p-3 rounded' fluid>
      <Container >
        <Navbar.Brand href="/" style={{fontWeight:"bold", fontStyle:"italic"}}>Kevin D'sa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={
            <Tooltip id={`tooltip-top`}>
              This Page may require you to solve reCAPTCHA, for security reasons
            </Tooltip>
          }
        >
         <Nav.Link href="/resume">Resume</Nav.Link>
        </OverlayTrigger>
            
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/music">Music</NavDropdown.Item>
              <NavDropdown.Item href="/photography">Photography</NavDropdown.Item>
              <NavDropdown.Item href="/bookshelf">Bookshelf</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact-me">
              Get in touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>
  );
};

export default Header;