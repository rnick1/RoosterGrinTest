import React from "react";
import "./FeaturesLeadin.css";
import banner1 from "../../images/banner1.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function FeaturesLeadin() {
  return (
    <div className="featuresleadin-background">
      <Container>
        <img src={banner1} />
        <h1 className="featuresleadin-title">LOREM IPSUM</h1>
        <Button className="featuresleadin-button" href="#features">
          BUTTON BUTTON
        </Button>
      </Container>
    </div>
  );
}
