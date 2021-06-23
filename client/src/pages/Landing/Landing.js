import React from "react";
import "./Landing.css";
// import hero from "../images/hero.jpg";
import logoWhite from "../../images/logoWhite.svg";
// import logoColor from "../images/logo-color.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function Landing() {
  return (
    <div className="landing-background">
      <Container>
        <Row>
          <Col>
            <img src={logoWhite} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>WELCOME TO</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Rooster Grin</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <button>Button Button</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
