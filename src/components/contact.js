import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        {submitted && (
          <div className="alert alert-success">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="phone"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message here..."
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33932.16917504371!2d79.49273622505922!3d26.461940372773316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399df3adae51a67b%3A0x8fdd186745eedbe5!2sAuraiya%2C%20Uttar%20Pradesh%20206122!5e1!3m2!1sen!2sin!4v1784024940334!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="myoffice you"
        ></iframe>
        
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              intern@example.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              1234567890
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Auraiya, UP
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
