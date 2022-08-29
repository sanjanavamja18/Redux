import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/img1.jpeg";
import image2 from "./assets/img2.jpeg";
import image3 from "./assets/img3.jpeg";
import "./Carosel.css";
import { useState } from "react";

const Carousel = () => {
  const [current, setCurrent] = useState("0");

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
};

export default Carousel;
