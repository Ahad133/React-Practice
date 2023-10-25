import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import './index.css'


export default function Clients() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <h2><b>WHAT ARE CLIENTS SAY ABOUT US</b></h2>
      <Slider {...settings}>
        <div className="cards">
            <div className="img">
          <img src={img1} alt="Client 1" />
            </div>
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="cards-text">
            <p>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown”
            </p>
            <p><b>KENT</b></p>
          </div>
        </div>
        <div className="cards">
          <img src={img2} alt="Client 2" />
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="cards-text">
            <p>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown”
            </p>
            <p><b>KENT</b></p>
          </div>
        </div>
        <div className="cards">
          <img src={img3} alt="Client 3" />
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="cards-text">
            <p>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown”
            </p>
            <p><b>KENT</b></p>
          </div>
        </div>
        <div className="cards">
          <img src={img1} alt="Client 4" />
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="cards-text">
            <p>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown”
            </p>
            <p><b>KENT</b></p>
          </div>
        </div>
        <div className="cards">
          <img src={img2} alt="Client 5" />
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="cards-text">
            <p>
            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown”
            </p>
            <p><b>KENT</b></p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
