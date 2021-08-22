import React from "react";

import { Carousel } from "react-bootstrap";
import slider_foto1 from "../../src/images/v-8.jpg";
import slider_foto2 from "../../src/images/v-9.jpg";
import slider_foto3 from "../../src/images/v-3.jpg";

export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src={slider_foto1}
            alt="First slider"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "white",
                backgroundColor: "black",
                opacity: "0.6",
                backgroundPosition: "center",
              }}
            >
              V-STUDIO
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src={slider_foto2}
            alt="First slider"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "white",
                backgroundColor: "black",
                opacity: "0.6",
                backgroundPosition: "center",
              }}
            >
              V-STUDIO
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src={slider_foto3}
            alt="First slider"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "white",
                backgroundColor: "black",
                opacity: "0.6",
                backgroundPosition: "center",
              }}
            >
              V-STUDIO
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
