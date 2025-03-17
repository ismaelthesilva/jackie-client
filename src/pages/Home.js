import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom CSS
import Users from '../components/Users'; // Assuming this displays user testimonials or stats

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center min-vh-75 text-center"
        style={{
          backgroundImage: "url('/jackie-images/dr-jackie-hero.jpeg')", // Replace with an image of Dr. Jackie training or a fitness scene
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
                Transform Your Body with Dr. Jackie
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Expert Training & Nutrition from a Doctor Who Gets Results
              </p>
              <Button
                variant="warning" // Orange accent
                size="lg"
                className="mt-3 animate__animated animate__pulse animate__infinite"
                href="#signup"
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
                    Weight Loss Plans
                  </Card.Title>
                  <Card.Text>
                    Medically-backed strategies to shed pounds safely and sustainably.
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
                    Training to compete at your peak, tailored to your goals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                    Custom Diets
                  </Card.Title>
                  <Card.Text>
                    Nutrition plans designed by a doctor for your lifestyle.
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
          <h3 className="text-white mb-4">
            Ready to Get Fit with a Pro?
          </h3>
          <Button variant="warning" size="lg" href="#signup">
            Join Now
          </Button>
        </Container>
      </section>

      {/* Users Component (Testimonials or Stats) */}
      <section className="py-5" style={{ backgroundColor: '#F5F6F5' }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#008080' }}>
            Success Stories
          </h2>
          <Users /> {/* Assuming this renders user-related content */}
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