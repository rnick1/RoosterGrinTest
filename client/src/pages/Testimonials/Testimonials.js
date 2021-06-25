import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/Footer/Footer";
import starIcon from "../../images/starIcon.png";

export default function Testimonials() {
  return (
    <Container className="testimonials-background">
      <Row>
        <Col>
          <h1 className="testimonials-title">LOREM IPSUM DOLOR SIT AMET</h1>
          <img className="testimonials-stars" src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </Col>
        <Col>
          <Carousel className="carousel">
            <Carousel.Item>
              <h3 className="carousel-name">John Doe 08/08/20</h3>
              <p className="carousel-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h3 className="carousel-name">Flynn Rider 09/13/19</h3>
              <p className="carousel-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h3 className="carousel-name">Jose Panera 04/05/21</h3>
              <p className="carousel-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
