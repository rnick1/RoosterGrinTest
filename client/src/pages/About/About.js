import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../images/img1.jpg";

export default function About() {
  return (
    <div>
      <Row>
        <Col className="about-left">
          <h1 className="about-title">LOREM IPSUM</h1>
          <p className="about-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <a className="about-link">`{">"}` Lorem Ipsum</a>
        </Col>
        <Col className="about-right">
          <img className="about-img" src={img1} />
        </Col>
      </Row>
    </div>
  );
}
