import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavbarComponent = () => {
  const { language, toggleLanguage } = useLanguage();

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
            <div className="language-switcher-container ms-3">
              <span className={`flag ${language === 'en' ? 'active' : 'inactive'}`}>🇳🇿</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={language === 'pt'}
                  onChange={toggleLanguage}
                />
                <span className={`slider round ${language === 'pt' ? 'brazil' : 'nz'}`}></span>
              </label>
              <span className={`flag ${language === 'pt' ? 'active' : 'inactive'}`}>🇧🇷</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
