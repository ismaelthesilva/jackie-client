import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom CSS

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center text-center"
        style={{
          backgroundImage: "url('/jackie-images/bjjmentoria.png')",
          backgroundSize: 'cover',   // Ensures the image covers the container
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',            // Ensures full viewport height on all devices
          minHeight: '100vh',
          backgroundAttachment: 'fixed',  // Optional: Keeps the image fixed on scroll
        }}
      >

        <Container>
          <Row>
            <Col>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
                Transform Your Body with Dr. Jackie
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Expert Personal Training to Achieve Your Fitness Goals
              </p>
              <Button
                variant="warning"
                size="lg"
                className="mt-3 animate__animated animate__pulse animate__infinite"
                href="mailto:ptcityfitness@jackiesouto.com"
              >
                Start Your Journey
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <section className="py-5" style={{ backgroundColor: '#F5F6F5' }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#008080' }}>
            What Dr. Jackie Offers
          </h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                    Personal Training Plans
                  </Card.Title>
                  <Card.Text>
                    Customized training plans designed to help you reach your fitness goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                    Sports Performance
                  </Card.Title>
                  <Card.Text>
                    Tailored training to enhance your sports performance and endurance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                    Strength & Conditioning
                  </Card.Title>
                  <Card.Text>
                    Focused workouts to improve strength, conditioning, and overall fitness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 text-center" style={{ backgroundColor: '#008080' }}>
        <Container>
          <h3 className="text-white mb-4">Ready to Get Fit with a Pro?</h3>
          <Button variant="warning" size="lg" href="mailto:ptcityfitness@jackiesouto.com">
            Join Now
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3" style={{ backgroundColor: '#333333' }}>
        <Container>
          <p className="mb-0">© 2025 Dr. Jackie Fitness. Transform with us!</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;
