import React from "react";
import "./Services.css";
import { Col, CardDeck, Card, Row } from "react-bootstrap";
import homeExpertise from "../../images/homeExpertise.svg";
import homeHygiene from "../../images/homeHygiene.svg";
import homeLab from "../../images/homeLab.svg";
import homeRetention from "../../images/homeRetention.svg";
import styled, { keyframes } from "styled-components";
import { rotateInDownLeft, rotateInDownRight } from "react-animations";
import next from "../../images/next.png";

const RotateInDownLeft = styled.div`
  animation: 3s ${keyframes`${rotateInDownLeft}`} infinite;
`;

const RotateInDownRight = styled.div`
  animation: 3s ${keyframes`${rotateInDownRight}`} infinite;
`;

export default function Services() {
  return (
    <div>
      <Row>
        <Col className="services-left">
          <h1 className="services-title">LOREM IPSUM DOLOR SIT AMET</h1>
          <p className="services-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <a className="services-link" href="#testimonialsleadin">
            Lorem Ipsum -
          </a>
          <img src={next} className="about-next" />
        </Col>
        <Col className="services-right">
          <CardDeck>
            <Card className="services-cards">
              <RotateInDownLeft>
                <Card.Img className="services-img" src={homeExpertise} />
              </RotateInDownLeft>
              <Card.Title className="services-img-title">LOREM</Card.Title>
            </Card>
            <Card className="services-cards">
              <RotateInDownRight>
                <Card.Img className="services-img" src={homeHygiene} />
              </RotateInDownRight>
              <Card.Title className="services-img-title">
                LOREM IPSUM
              </Card.Title>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="services-cards">
              <RotateInDownLeft>
                <Card.Img className="services-img" src={homeLab} />
              </RotateInDownLeft>
              <Card.Title className="services-img-title">LOREM</Card.Title>
            </Card>
            <Card className="services-cards">
              <RotateInDownRight>
                <Card.Img className="services-img" src={homeRetention} />
              </RotateInDownRight>
              <Card.Title className="services-img-title">
                LOREM IPSUM
              </Card.Title>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
}
