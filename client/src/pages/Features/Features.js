import React from "react";
import "./Features.css";
import { Col, CardDeck, Card, Row } from "react-bootstrap";
import homeExpertise from "../../images/homeExpertise.svg";
import homeHygiene from "../../images/homeHygiene.svg";
import homeLab from "../../images/homeLab.svg";
import homeRetention from "../../images/homeRetention.svg";
import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";

const Tada = styled.div`
  animation: 3s ${keyframes`${tada}`} infinite;
`;

export default function Features() {
  return (
    <div>
      <Row>
        <Col className="features-left">
          <h1 className="features-title">LOREM IPSUM DOLOR SIT AMET</h1>
          <p className="features-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <a className="features-link" href="#testimonialsleadin">
            `{">"}` Lorem Ipsum
          </a>
        </Col>
        <Col className="features-right">
          <CardDeck>
            <Card className="features-cards">
              <Tada>
                <Card.Img className="features-img" src={homeExpertise} />
              </Tada>
              <Card.Title className="features-img-title">LOREM</Card.Title>
            </Card>
            <Card className="features-cards">
              <Tada>
                <Card.Img className="features-img" src={homeHygiene} />
              </Tada>
              <Card.Title className="features-img-title">
                LOREM IPSUM
              </Card.Title>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="features-cards">
              <Tada>
                <Card.Img className="features-img" src={homeLab} />
              </Tada>
              <Card.Title className="features-img-title">LOREM</Card.Title>
            </Card>
            <Card className="features-cards">
              <Tada>
                <Card.Img className="features-img" src={homeRetention} />
              </Tada>
              <Card.Title className="features-img-title">
                LOREM IPSUM
              </Card.Title>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
}
