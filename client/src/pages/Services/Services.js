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
          <h1 className="services-title">Here are our website services!</h1>
          <p className="services-text">
            Whether you want to build a new site from scratch or just looking at
            your options for Search Engine Optimization we have the skill and
            experience to ensure that your company has a strong web presence.
          </p>
          <a className="services-link" href="#testimonialsleadin">
            Next -
          </a>
          <img src={next} className="about-next" />
        </Col>
        <Col className="services-right">
          <CardDeck>
            <Card className="services-cards">
              <RotateInDownLeft>
                <Card.Img className="services-img" src={homeExpertise} />
              </RotateInDownLeft>
              <Card.Title className="services-img-title">
                Web Design and Development
              </Card.Title>
            </Card>
            <Card className="services-cards">
              <RotateInDownRight>
                <Card.Img className="services-img" src={homeHygiene} />
              </RotateInDownRight>
              <Card.Title className="services-img-title">
                Health History Forms
              </Card.Title>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="services-cards">
              <RotateInDownLeft>
                <Card.Img className="services-img" src={homeLab} />
              </RotateInDownLeft>
              <Card.Title className="services-img-title">
                Search Engine Optimization
              </Card.Title>
            </Card>
            <Card className="services-cards">
              <RotateInDownRight>
                <Card.Img className="services-img" src={homeRetention} />
              </RotateInDownRight>
              <Card.Title className="services-img-title">
                Web Hosting
              </Card.Title>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
}
