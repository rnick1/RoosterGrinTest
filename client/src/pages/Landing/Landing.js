import React from "react";
import "./Landing.css";
import logoWhite from "../../images/logoWhite.svg";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="landing-background">
      <Container>
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
              BUTTON BUTTON
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
