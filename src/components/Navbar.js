import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          <span className="belt-white">Dr.</span> <span className="belt-blue">Jackie Souto</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/techniques" className="nav-link-custom">Techniques</Nav.Link>
            <Nav.Link as={Link} to="/nutrition" className="nav-link-custom">Nutrition</Nav.Link>
            <Nav.Link as={Link} to="/diet" className="nav-link-custom">Diet</Nav.Link>
            <Nav.Link as="a" href="mailto:ptcityfitness@jackiesouto.com" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
