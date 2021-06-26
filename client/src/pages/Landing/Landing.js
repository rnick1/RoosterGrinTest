import React from "react";
import "./Landing.css";
import logoWhite from "../../images/logoWhite.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import FadeIn from "react-fade-in";

// Hero has the fade-in effect as requested by client. The duration is currently set for 3 seconds. Using the grid system provided by react-bootstrap.
export default function Landing() {
  return (
    <FadeIn transitionDuration={3000}>
      <Container className="landing-background">
        <Row>
          <Col>
            <img className="landing-logo" src={logoWhite} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="first-line-landing-text">WELCOME TO</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="second-line-landing-text">Rooster Grin</h1>
          </Col>
        </Row>
        <Row>
          <Col className="landing-button-position">
            <Button className="landing-button" href="#about">
              About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </FadeIn>
  );
}
