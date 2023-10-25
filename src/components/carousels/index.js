import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image/img1.jpg';
import image2 from './image/img2.jpeg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="overlay"></div>
        <img src={image1} alt="First Slide" style={{ maxWidth: '100%', maxHeight: '40%' }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="overlay"></div>
      <img src={image2} alt="Second Slide" style={{ maxWidth: '100%', maxHeight: '40%' }}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;