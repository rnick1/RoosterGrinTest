import React from "react";
import "./TestimonialsLeadin.css";
import { Container, Button } from "react-bootstrap";
import ContentTestimonialsLeadin from "../../components/Content-TestimonialsLeadin/Content-TestimonialsLeadin";

export default function TestimonialsLeadin() {
  return (
    <Container className="testimonialsleadin-background">
      <h1 className="testimonialsleadin-title">Testimonials</h1>
      <ContentTestimonialsLeadin />
      <Button className="testimonialsleadin-button" href="#testimonials">
        TESTIMONIALS
      </Button>
    </Container>
  );
}
