import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/img1.jpg";
import next from "../../images/next.png";

export default function About() {
  return (
    <Container className="about-container" fluid={true}>
      <Row>
        <Col className="about-left">
          <h1 className="about-title">ABOUT US:</h1>
          <p className="about-text">
            Rooster Grin Media is a web design company that specializes in
            crafting custom websites at an affordable rate. Our photo- and
            video-centric approach to creating websites is what sets us apart
            from other companies in the industry. Sites built by Rooster Grin
            give companies a major leg up in any competitive business landscape.
          </p>
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
