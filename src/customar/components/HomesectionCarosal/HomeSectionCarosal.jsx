import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Menskurta } from "../../Data/MensKurta";

const HomeSectionCarosal = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "skyblue",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    color: "white",
    borderRadius: "50%",
    transition: "background-color 0.3s, transform 0.3s",
  };

  const hoverStyle = {
    backgroundColor: "blue",
    transform: "translateY(-50%) scale(1.1)",
  };

  const handleSlideChanged = (event) => {
    setCurrentIndex(event.item);
  };

  const itemsInViewport = () => {
    if (window.innerWidth < 720) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 4;
    } else {
      return 5.5;
    }
  };

  return (
    <div className="relative px-4 lg:px-8">
    <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          infinite={false}
          responsive={responsive}
          onSlideChanged={handleSlideChanged}
        />
        {currentIndex > 0 && (
          <button
            onClick={() => carouselRef.current.slidePrev()}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            style={{
              ...buttonStyle,
              left: "-20px",
              ...(hoverLeft ? hoverStyle : {}),
            }}
          >
            <ArrowBackIosIcon />
          </button>
        )}
        {currentIndex + itemsInViewport() < items.length && (
          <button
            onClick={() => carouselRef.current.slideNext()}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            style={{
              ...buttonStyle,
              right: "-20px",
              ...(hoverRight ? hoverStyle : {}),
            }}
          >
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
