import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "reactstrap";
import luggageImg from "../../../../assets/img/luggage.png";
import "./index.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1023, min: 768 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 767, min: 425 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 424, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const LuggageCarousel = props => {
  const [selectedLuggageType, setLuggageType] = useState(
    props.defaultType ? props.defaultType : ""
  );
  const onSelectLuggageType = value => {
    setLuggageType(value);
    props.onChooseLuggageType(value);
  };
  return (
    <React.Fragment>
      <Carousel
        draggable={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "01" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("01");
            }}
          >
            01
          </Button>
        </div>
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "02" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("02");
            }}
          >
            02
          </Button>
        </div>
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "03" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("03");
            }}
          >
            03
          </Button>
        </div>
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "04" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("04");
            }}
          >
            04
          </Button>
        </div>
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "05" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("05");
            }}
          >
            05
          </Button>
        </div>
        <div className="position-relative">
          <img src={luggageImg} alt="luggageimg"></img>
          <Button
            color="success"
            className={
              "text-white campton-bold ml-3 d-block " +
              `${selectedLuggageType === "06" ? "bg-red-light" : ""}`
            }
            onClick={() => {
              onSelectLuggageType("06");
            }}
          >
            06
          </Button>
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default LuggageCarousel;
