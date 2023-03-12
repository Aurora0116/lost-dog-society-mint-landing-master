import { useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "../svgIcons";

export default function MediaSlider() {
  const images = [
    "/image/media_slider.jpg",
    "/image/home-banner.jpg",
    "/image/car-chase.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const leftImage = () => {
    setCurrentImage((currentImage + 2) % 3);
  };

  const rightImage = () => {
    setCurrentImage((currentImage + 1) % 3);
  };

  useEffect(() => {
    let slides = document.getElementsByClassName(
      "slide"
    ) as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentImage].style.display = "block";
    dots[currentImage].className += " active";
  }, [currentImage]);

  const select = (num: any) => {
    setCurrentImage(num - 1);
  };

  return (
    <>
      <div className="media-panel">
        {/* eslint-disable-next-line */}
        <img src={images[(currentImage + 2) % 3]} className="left" />
        <div className="slides">
          <div className="slidesContainer">
            {/* eslint-disable-next-line */}
            <img src={images[0]} className="slide fade" />
            {/* eslint-disable-next-line */}
            <img src={images[1]} className="slide fade" />
            {/* eslint-disable-next-line */}
            <img src={images[2]} className="slide fade" />
          </div>
        </div>
        {/* eslint-disable-next-line */}
        <img src={images[(currentImage + 1) % 3]} className="right" />
        <div className="button-panel">
          <button className="prev-btn" onClick={leftImage}>
            <LeftArrow />
          </button>
          <button className="next-btn" onClick={rightImage}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="span-panel">
        <span className="dot" onClick={() => select(1)}></span>
        <span className="dot" onClick={() => select(2)}></span>
        <span className="dot" onClick={() => select(3)}></span>
      </div>
    </>
  );
}
