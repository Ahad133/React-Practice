import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from './products.js';
import ProductCard from './product-card.js';
import './index.css'

const ProductSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

const sliderRef = React.useRef(null);

const goToPrevious = () => {
  sliderRef.current.slickPrev();
};

const goToNext = () => {
  sliderRef.current.slickNext();
};

  return (
    <div className="product-slider-container">
      <div className="slider-navigation">
        <button className="btn btn-arrow btn-previous" onClick={goToPrevious}>
          <i className="fa fa-arrow-left"></i>
        </button>
        <button className="btn btn-arrow btn-next" onClick={goToNext}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
