import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Optional custom CSS (can reuse Home.css if preferred)

const Diet = () => {
  return (
    <>
      {/* Reusing the Navbar from Home.js (optional, if this is a standalone page) */}
      {/* If Techniques is routed separately, you might include it via a layout component */}
      
      {/* Main Content */}
      <div className="techniques-section text-white d-flex align-items-center min-vh-100">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
                Diet
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Fuel your body with the right foods to perform your best!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer (optional, matching Home.js) */}
      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p className="mb-0">© 2025 BJJ Champ. Roll with us soon!</p>
        </Container>
      </footer>
    </>
  );
};

export default Diet;