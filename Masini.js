import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import image from "./components/audi.jpg";
import image1 from "./components/bmw.jpg";
import image2 from "./components/merced.jpg";

const Masini = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>BMW</h3>
          <Button href="/formular" variant="warning">
            {" "}
            Inchiriaza
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
          <h3>Audi</h3>
          <Button href="/formular" variant="danger">
            {" "}
            Inchiriaza
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Mercedes</h3>
          <Button href="/formular" variant="secondary">
            {" "}
            Inchiriaza
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Masini;
