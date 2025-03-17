import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          <span className="belt-white">BJJ</span> <span className="belt-blue">Champ</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/techniques" className="nav-link-custom">Techniques</Nav.Link>
            <Nav.Link as={Link} to="/performance" className="nav-link-custom">Performance</Nav.Link>
            <Nav.Link as={Link} to="/diet" className="nav-link-custom">Diet</Nav.Link>
            <Nav.Link as={Link} to="/rankings" className="nav-link-custom">Rankings</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
