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
        <Col className="testimonials-left">
          <h1 className="testimonials-title">
            What our customers are saying...
          </h1>
          <img className="testimonials-stars" src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </Col>
        <Col className="testimonials-right">
          <Carousel className="carousel">
            <Carousel.Item>
              <h3 className="carousel-name">John 08/08/20</h3>
              <p className="carousel-text">
                I am so pleased with the work of Rooster Grin. After having them
                revamp the website for my used-book business I have experienced
                a 50% increase in traffic on my site.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h3 className="carousel-name">Josephine 09/13/19</h3>
              <p className="carousel-text">
                I never thought that having a website would make such a big
                difference on the success of a baby sitting service, but after
                Rooster Grin Media created my site, I can't imagine life without
                it!
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h3 className="carousel-name">Jose 04/05/21</h3>
              <p className="carousel-text">Rooster Grin is gold. Period.</p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
