import React from "react";
import "./ServicesLeadin.css";
import { Container, Button } from "react-bootstrap";

export default function ServicesLeadin() {
  return (
    <Container className="servicesleadin-background">
      <h1 className="servicesleadin-title">Here's what we do!</h1>
      <Button className="servicesleadin-button" href="#services">
        SERVICES
      </Button>
    </Container>
  );
}
