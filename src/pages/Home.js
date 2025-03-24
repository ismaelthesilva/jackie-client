import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Custom CSS

function Home() {
  const { translations, language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center text-center"
        style={{
          backgroundImage: `url('/jackie-images/${language === 'en' ? 'dr-jackie-hero.jpeg' : 'dr-jackie-hero.jpeg'}')`,
          backgroundSize: 'cover', // Default behavior for larger screens
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh', // Ensures full viewport height on all devices
          minHeight: '100vh',
          backgroundAttachment: 'fixed', // Optional: Keeps the image fixed on scroll
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
                {translations.hero.title}
              </h1>
              <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
                {translations.hero.subtitle}
              </p>
              <Button
                variant="warning"
                size="lg"
                className="mt-3 animate__animated animate__pulse animate__infinite"
                href="mailto:ptcityfitness@jackiesouto.com"
              >
                {translations.hero.cta}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <section className="py-5" style={{ backgroundColor: '#F5F6F5' }}>
        <Container>
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#008080' }}>
            {translations.services.title}
          </h2>
          <Row>
            {language === 'en' ? (
              <>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.personalTraining.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.personalTraining.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.sportsPerformance.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.sportsPerformance.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.strengthConditioning.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.strengthConditioning.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ) : (
              <>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.bloodAnalysis.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.bloodAnalysis.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.healthConsultation.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.healthConsultation.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body>
                      <Card.Title className="fw-bold" style={{ color: '#008080' }}>
                        {translations.services.dietMentorship.title}
                      </Card.Title>
                      <Card.Text>
                        {translations.services.dietMentorship.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 text-center" style={{ backgroundColor: '#008080' }}>
        <Container>
          <h3 className="text-white mb-4">{translations.cta.title}</h3>
          <Button variant="warning" size="lg" href="mailto:ptcityfitness@jackiesouto.com">
            {translations.cta.button}
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3" style={{ backgroundColor: '#333333' }}>
        <Container>
          <p className="mb-0">© 2025 Dr. Jackie Fitness. {language === 'en' ? 'Transform with us!' : 'Transforme conosco!'}</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;
