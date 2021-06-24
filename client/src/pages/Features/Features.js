import React from "react";
import "./Features.css";
import { Container, Button, Col, CardGroup, Card, Row } from "react-bootstrap";
import homeExpertise from "../../images/homeExpertise.svg";
import homeHygiene from "../../images/homeHygiene.svg";
import homeLab from "../../images/homeLab.svg";
import homeRetention from "../../images/homeRetention.svg";

export default function Features() {
  return (
    <div>
      <Row>
        <Col className="features-left">
          <h1 className="features-title">LOREM IPSUM DOLOR SIT AMET</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <a className="features-link" href="#featuresleadin">
            `{">"}` Lorem Ipsum
          </a>
        </Col>
        <Col className="features-right">
          <CardGroup>
            <Card>
              <Card.Img src={homeExpertise} />
            </Card>
            <Card>
              <Card.Img src={homeHygiene} />
            </Card>
            <Card>
              <Card.Img src={homeLab} />
            </Card>
            <Card>
              <Card.Img src={homeRetention} />
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
}
