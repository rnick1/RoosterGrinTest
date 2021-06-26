import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import next from "../../images/next.png";
import ContentAbout from "../../components/Content-About/Content-About";

export default function About() {
  return (
    <Container className="about-container" fluid={true}>
      <Row>
        <Col className="about-left">
          <h1 className="about-title">ABOUT US:</h1>
          <ContentAbout />
          <a className="about-link" href="#servicesleadin">
            Next
          </a>
          <img src={next} className="about-next" />
        </Col>
        <Col className="about-right">
          <img className="about-img" src={img1} />
        </Col>
      </Row>
    </Container>
  );
}
