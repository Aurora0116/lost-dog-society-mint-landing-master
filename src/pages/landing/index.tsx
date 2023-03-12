import {
  ArrowDownIcon,
  DiscordIcon,
  LeftArrow,
  MagicEdenIcon,
  PointIcon,
  RightArrow,
  TwitterIcon,
} from "../../components/svgIcons";
import { Header } from "../../components/landing/Header";
import WakeUp from "../../components/landing/WakeUp";
import Smoke from "../../components/landing/Smoke";
import Welcome from "../../components/landing/Welcome";
import ArtComponent from "../../components/landing/ArtComponent";
import RaodMap from "../../components/landing/RoadMap";
import Team from "../../components/landing/Team";
import FAQ from "../../components/landing/FAQ";
import WhiteList from "../../components/landing/WhiteList";
import { useEffect, useState } from "react";

export default function LandingPage() {
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
    <div className="main-page">
      {/* eslint-disable-next-line */}
      <img src="/image/mask.png" alt="car" className="mask" />
      {/* eslint-disable-next-line */}
      {/* <img src="/image/ellipse.png" alt="car" className="ellipse" /> */}
      <Header />
      {/* <Banner /> */}
      <div className="banner">
        {/* eslint-disable-next-line */}
        <img src="/image/banner.jpg" alt="banner" className="banner-img" />
        <div className="banner-content">
          <div className="banner-title">Welcome in the dog house</div>
          <p>THIS IS WHAT&#39;S UP</p>
          <button>
            {/* <div className="btn-title"> */}
            <span className="text">discover</span>
            <span className="icon">
              <ArrowDownIcon />
            </span>
            {/* </div> */}
          </button>
        </div>
      </div>
      <WakeUp />
      <Smoke />
      <div className="car-chase container">
        {/* eslint-disable-next-line */}
        <img src="/image/car-chase.jpg" alt="car" className="car-img" />
      </div>
      <Welcome />
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
      <ArtComponent />
      <RaodMap />
      <div className="line-text">
        <ul>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
          <li>
            <div className="text">
              <PointIcon />
              <span>lorem ipsum</span>
            </div>
          </li>
        </ul>
      </div>
      <Team />
      <FAQ />
      <WhiteList />
      <div className="join">
        <div className="title">join the club</div>
        <div className="icon-group">
          <div className="icon">
            <DiscordIcon />
          </div>
          <div className="icon">
            <TwitterIcon />
          </div>
          <div className="icon">
            <MagicEdenIcon />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>© All rights reserved, Lost Dog Society</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  );
}
