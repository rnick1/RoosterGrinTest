import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../components/Footer/Footer";
import Testimonial1 from "../../components/Content-Testimonials/Testimonial1/Testimonial1";
import Testimonial2 from "../../components/Content-Testimonials/Testimonial2/Testimonial2";
import Testimonial3 from "../../components/Content-Testimonials/Testimonial3/Testimonial3";
import Stars from "../../components/Stars/Stars";

export default function Testimonials() {
  return (
    <Container className="testimonials-background">
      <Row>
        <Col className="testimonials-left">
          <h1 className="testimonials-title">
            What our customers are saying...
          </h1>
          <Stars />
        </Col>
        <Col className="testimonials-right">
          <Carousel className="carousel">
            <Carousel.Item>
              <Testimonial1 />
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial2 />
            </Carousel.Item>
            <Carousel.Item>
              <Testimonial3 />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
