import React from "react";
import "./TestimonialsLeadin.css";
import { Container, Button } from "react-bootstrap";

export default function TestimonialsLeadin() {
  return (
    <div className="testimonialsleadin-background">
      <Container>
        <h1 className="testimonialsleadin-title">Testimonials</h1>
        <p className="testimonialsleadin-text">
          We work hard for our customers. Running a business is never easy, so
          we strive to ensure our products meet expectations and become an
          effective force-multiplier for each company we are priviledged to work
          with.
        </p>
        <Button className="testimonialsleadin-button" href="#testimonials">
          TESTIMONIALS
        </Button>
      </Container>
    </div>
  );
}
