import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/img1.jpeg";
import image2 from "./assets/img2.jpeg";
import image3 from "./assets/img3.jpeg";
import "./Carosel.css";
import React from "react";
import { useEffect } from "react";

const images = [image1, image2, image3];
const delay = 2500;

function Carousel() {
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
  });

  return (
    <div style={{ margin: "30px" }}>
      <h1>Basic Slick</h1>
      <Slider>
        <div>
          <img
            src={image1}
            alt="Mountain"
            style={{ width: "100%", height: "85vh", objectFit: "fill" }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Mountain"
            style={{ width: "100%", height: "85vh", objectFit: "fill" }}
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Mountain"
            style={{ width: "100%", height: "85vh", objectFit: "fill" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
