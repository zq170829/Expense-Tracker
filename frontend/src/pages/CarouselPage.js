import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import Slide1 from "../images/image1.jpeg";
import Slide2 from "../images/image2.jpeg";
import Slide3 from "../images/image3.jpeg";

export default class CarouselPage extends Component {
  render() {
    return (
      <div id="home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img "
              src={Slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img "
              src={Slide2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img "
              src={Slide3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
