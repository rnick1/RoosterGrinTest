import React from "react";
import "./TestimonialsLeadin.css";
import { Container, Button } from "react-bootstrap";

export default function TestimonialsLeadin() {
  return (
    <div className="testimonialsleadin-background">
      <Container>
        <h1 className="testimonialsleadin-title">LOREM IPSUM</h1>
        <p className="testimonialsleadin-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <Button className="testimonialsleadin-button" href="#testimonials">
          BUTTON BUTTON
        </Button>
      </Container>
    </div>
  );
}
