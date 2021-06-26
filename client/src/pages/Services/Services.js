import React from "react";
import "./Services.css";
import { Col, CardDeck, Card, Row, Container } from "react-bootstrap";
import homeExpertise from "../../images/homeExpertise.svg";
import homeHygiene from "../../images/homeHygiene.svg";
import homeLab from "../../images/homeLab.svg";
import homeRetention from "../../images/homeRetention.svg";
import styled, { keyframes } from "styled-components";
import { bounce, headShake, rubberBand } from "react-animations";
import next from "../../images/next.png";
import ContentServices from "../../components/Content-Services/Content-Services";

// Here I played with a bunch of different animation options and settled with react-animations because of it's ease of use and the huge number of options. I also took the liberty of adding an open source stock image to the background which I felt matched the tone of the webpage.

const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} 1;
`;

const RubberBand = styled.div`
  animation: 3s ${keyframes`${rubberBand}`} 1;
`;

const HeadShake = styled.div`
  animation: 3s ${keyframes`${headShake}`} 1;
`;

export default function Services() {
  return (
    <Container fluid={true}>
      <Row>
        <Col className="services-left">
          <div className="services-left-content">
            <h1 className="services-title">Our website services:</h1>
            <ContentServices />
            <a className="services-link" href="#testimonialsleadin">
              Next
            </a>
            <img src={next} className="about-next" />
          </div>
        </Col>
        <Col className="services-right">
          <CardDeck>
            <Card className="services-cards">
              <Bounce>
                <Card.Img className="services-img" src={homeExpertise} />
              </Bounce>
              <Card.Title className="services-img-title">
                Web Design and Development
              </Card.Title>
            </Card>
            <Card className="services-cards">
              <RubberBand>
                <Card.Img className="services-img" src={homeHygiene} />
              </RubberBand>
              <Card.Title className="services-img-title">
                Health History Forms
              </Card.Title>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="services-cards">
              <RubberBand>
                <Card.Img className="services-img" src={homeLab} />
              </RubberBand>
              <Card.Title className="services-img-title">
                Search Engine Optimization
              </Card.Title>
            </Card>
            <Card className="services-cards">
              <HeadShake>
                <Card.Img className="services-img" src={homeRetention} />
              </HeadShake>
              <Card.Title className="services-img-title">
                Web Hosting
              </Card.Title>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}
