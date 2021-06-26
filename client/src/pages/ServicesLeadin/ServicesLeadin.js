import React from "react";
import "./ServicesLeadin.css";
import { Container, Button } from "react-bootstrap";

export default function ServicesLeadin() {
  return (
    <div className="servicesleadin-background">
      <Container>
        <h1 className="servicesleadin-title">LOREM IPSUM</h1>
        <Button className="servicesleadin-button" href="#services">
          SERVICES
        </Button>
      </Container>
    </div>
  );
}
