import React from "react";
import "./FeaturesLeadin.css";
import { Container, Button } from "react-bootstrap";

export default function FeaturesLeadin() {
  return (
    <div className="featuresleadin-background">
      <Container>
        <h1 className="featuresleadin-title">LOREM IPSUM</h1>
        <Button className="featuresleadin-button" href="#features">
          FEATURES
        </Button>
      </Container>
    </div>
  );
}
